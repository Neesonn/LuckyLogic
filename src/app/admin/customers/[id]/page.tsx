'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { ThemeHeading } from '@/components/ui/ThemeComponents';
import { useAuth } from '@/context/AuthContext';
import {
  ArrowLeft,
  Home,
  Building2,
  Phone,
  MapPin,
  Calendar,
  History,
} from 'lucide-react';

interface Customer {
  id: number;
  firstName: string;
  surname: string;
  email: string;
  phone: string;
  customerType: 'residential' | 'commercial';
  streetAddress: string;
  streetAddress2?: string;
  suburb: string;
  state: string;
  postcode: string;
  createdAt: string;
  updatedAt: string;
}

export default function CustomerAccountPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const { isAdmin } = useAuth();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      router.push('/admin/login');
      return;
    }

    // Load customer data from localStorage
    const customers = JSON.parse(localStorage.getItem('customers') || '[]');
    const foundCustomer = customers.find(
      (c: Customer) => c.id === parseInt(params.id),
    );

    if (foundCustomer) {
      setCustomer(foundCustomer);
    } else {
      router.push('/admin/customers');
    }

    setLoading(false);
  }, [isAdmin, router, params.id]);

  if (loading) {
    return (
      <div className="min-h-screen theme-gradient-bg flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!customer) {
    return null;
  }

  return (
    <div className="min-h-screen theme-gradient-bg">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => router.push('/admin/customers')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <ThemeHeading>
            {customer.firstName} {customer.surname}&apos;s Account
          </ThemeHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Details Card */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Customer Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <span className="text-emerald-500 font-medium text-lg">
                      {customer.firstName.charAt(0).toUpperCase()}
                      {customer.surname.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      {customer.firstName} {customer.surname}
                    </p>
                    <p className="text-gray-400 text-sm">{customer.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5" />
                  <span>{customer.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  {customer.customerType === 'residential' ? (
                    <Home className="w-5 h-5" />
                  ) : (
                    <Building2 className="w-5 h-5" />
                  )}
                  <span className="capitalize">
                    {customer.customerType} Customer
                  </span>
                </div>

                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5" />
                  <span>
                    Member since{' '}
                    {new Date(customer.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </Card>

          {/* Address Card */}
          <Card>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">Address</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>{customer.streetAddress}</p>
                    {customer.streetAddress2 && (
                      <p>{customer.streetAddress2}</p>
                    )}
                    <p>
                      {customer.suburb}, {customer.state} {customer.postcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Activity Card */}
          <Card className="md:col-span-2">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Recent Activity
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <History className="w-5 h-5" />
                  <span>
                    Last updated:{' '}
                    {new Date(customer.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                {/* Add more activity items here */}
              </div>
            </div>
          </Card>

          {/* Jobs History Card */}
          <Card className="md:col-span-2">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white mb-6">
                Jobs History
              </h2>
              <div className="space-y-4">
                <div className="text-gray-300">
                  No jobs found for this customer.
                </div>
                {/* Add jobs list here */}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

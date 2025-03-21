'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { HomeButton } from '@/components/ui/HomeButton';
import { ThemeHeading } from '@/components/ui/ThemeComponents';
import { useAuth } from '@/context/AuthContext';
import {
  ArrowLeft,
  Search,
  Plus,
  Edit,
  UserPlus,
  ChevronLeft,
  ChevronRight,
  Home,
  Building2,
  Trash2,
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface Customer {
  id: number;
  firstName: string;
  surname: string;
  name: string;
  email: string;
  type: string;
  suburb: string;
  phoneType?: string;
  phoneNumber?: string;
}

const SYDNEY_LOCATIONS = [
  'Sydney CBD',
  'North Sydney',
  'Parramatta',
  'Chatswood',
  'Bondi',
  'Manly',
  'Surry Hills',
  'Double Bay',
];

const MOCK_NAMES = [
  'James Wilson',
  'Emma Thompson',
  'Oliver Brown',
  'Sophia Anderson',
  'William Taylor',
  'Isabella Martin',
  'Lucas White',
  'Ava Johnson',
  'Henry Davis',
  'Charlotte Lee',
];

// Get customers from localStorage or return empty array
const getStoredCustomers = (): Customer[] => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('customers');
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export default function CustomersPage() {
  const { isAdmin } = useAuth();
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const customersPerPage = 20;
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [filteredCustomers, setFilteredCustomers] = useState<Customer[]>([]);
  const [uniqueSuburbs, setUniqueSuburbs] = useState<string[]>([]);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [customerToDelete, setCustomerToDelete] = useState<number | null>(null);

  useEffect(() => {
    if (!isAdmin) {
      router.push('/login');
    }
  }, [isAdmin, router]);

  // Load customers from localStorage on mount and update unique suburbs
  useEffect(() => {
    const storedCustomers = getStoredCustomers();
    setCustomers(storedCustomers);
    setFilteredCustomers(storedCustomers);

    // Get unique suburbs from customer data
    const suburbs = Array.from(
      new Set(
        storedCustomers
          .map((customer) => customer.suburb)
          .filter((suburb) => suburb) // Remove undefined/null values
          .sort(), // Sort alphabetically
      ),
    );
    setUniqueSuburbs(suburbs);
  }, []);

  const filterCustomers = (query: string, location: string, type: string) => {
    let filtered = [...customers];

    // Apply search query filter
    if (query.trim() !== '') {
      filtered = filtered.filter((customer) => {
        const first = customer.firstName?.toLowerCase() || '';
        const last = customer.surname?.toLowerCase() || '';
        const email = customer.email?.toLowerCase() || '';
        const fullName = `${first} ${last}`.trim();

        return (
          first.includes(query) ||
          last.includes(query) ||
          fullName.includes(query) ||
          email.includes(query)
        );
      });
    }

    // Apply location filter
    if (location !== '') {
      filtered = filtered.filter(
        (customer) =>
          (customer.suburb?.toLowerCase() || '') === location.toLowerCase(),
      );
    }

    // Apply type filter
    if (type !== '') {
      filtered = filtered.filter((customer) => customer.type === type);
    }

    setFilteredCustomers(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterCustomers(query, locationFilter, typeFilter);
  };

  const handleLocationFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const location = e.target.value;
    setLocationFilter(location);
    filterCustomers(searchQuery, location, typeFilter);
  };

  const handleTypeFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const type = e.target.value;
    setTypeFilter(type);
    filterCustomers(searchQuery, locationFilter, type);
  };

  const generateMockCustomer = () => {
    const randomName =
      MOCK_NAMES[Math.floor(Math.random() * MOCK_NAMES.length)];
    const randomLocation =
      SYDNEY_LOCATIONS[Math.floor(Math.random() * SYDNEY_LOCATIONS.length)];
    const email = randomName.toLowerCase().replace(' ', '.') + '@example.com';
    const randomType = Math.random() > 0.5 ? 'Residential' : 'Business';

    const newCustomer: Customer = {
      id: customers.length + 1,
      firstName: randomName.split(' ')[0],
      surname: randomName.split(' ')[1],
      name: randomName,
      email: email,
      type: randomType,
      suburb: randomLocation,
    };

    const updatedCustomers = [...customers, newCustomer];
    setCustomers(updatedCustomers);
    setFilteredCustomers(updatedCustomers);
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
  };

  const handleDeleteCustomer = (customerId: number) => {
    setCustomerToDelete(customerId);
    setDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (customerToDelete === null) return;

    const updatedCustomers = customers.filter((c) => c.id !== customerToDelete);
    setCustomers(updatedCustomers);
    setFilteredCustomers((prev) =>
      prev.filter((c) => c.id !== customerToDelete),
    );
    localStorage.setItem('customers', JSON.stringify(updatedCustomers));
    setDeleteModalOpen(false);
    setCustomerToDelete(null);
  };

  // Calculate pagination values
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);
  const startIndex = (currentPage - 1) * customersPerPage;
  const endIndex = startIndex + customersPerPage;
  const currentCustomers = filteredCustomers.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen theme-gradient-bg">
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <HomeButton />
          <button
            onClick={() => router.push('/admin-dashboard')}
            className="flex items-center gap-2 px-4 py-2 text-white/80 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 pt-20">
        <div className="flex flex-col space-y-8">
          {/* Header Section */}
          <div className="flex justify-between items-center pl-12">
            <div>
              <ThemeHeading>Customers</ThemeHeading>
              <p className="text-white/60 mt-2">
                Manage your customer database
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Customers', value: customers.length.toString() },
              { label: 'Active Customers', value: customers.length.toString() },
              { label: 'New This Month', value: '2' },
              { label: 'Recent Services', value: '5' },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="p-6 flex flex-col items-center justify-center">
                  <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                  <p className="text-emerald-500 text-4xl font-semibold">
                    {stat.value}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Main Content Card */}
          <Card className="bg-gray-900/50 backdrop-blur-sm p-6 min-h-[400px] w-full max-w-[1200px] mx-auto">
            {/* Search and Filters */}
            <div className="flex flex-col space-y-4 mb-8">
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => router.push('/admin/customers/new')}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                  Add Customer
                </button>
                <button
                  onClick={generateMockCustomer}
                  title="Generate Mock Customer"
                  className="p-2 rounded bg-gray-800 text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                </button>
                <div className="relative flex-1 max-w-[400px]">
                  <input
                    type="text"
                    placeholder="Search customers..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
                <select
                  className="px-4 py-2 rounded-lg bg-gray-800/50 text-white outline-none min-w-[160px]"
                  value={typeFilter}
                  onChange={handleTypeFilter}
                >
                  <option value="">Filter by Type</option>
                  <option value="Residential">Residential</option>
                  <option value="Business">Business</option>
                </select>
                <select
                  className="px-4 py-2 rounded-lg bg-gray-800/50 text-white outline-none min-w-[160px]"
                  value={locationFilter}
                  onChange={handleLocationFilter}
                >
                  <option value="">Filter by Location</option>
                  {uniqueSuburbs.map((suburb) => (
                    <option key={suburb} value={suburb}>
                      {suburb}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-400 text-sm font-medium">
                      Customer
                    </th>
                    <th className="text-left py-4 px-6 text-gray-400 text-sm font-medium">
                      Type
                    </th>
                    <th className="text-left py-4 px-6 text-gray-400 text-sm font-medium">
                      Contact
                    </th>
                    <th className="text-left py-4 px-6 text-gray-400 text-sm font-medium">
                      Location
                    </th>
                    <th className="text-left py-4 px-6 text-gray-400 text-sm font-medium">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentCustomers.map((customer) => (
                    <tr key={customer.id} className="group">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <span className="text-emerald-500 font-medium text-lg">
                              {(
                                customer.firstName?.charAt(0) || ''
                              ).toUpperCase()}
                              {(
                                customer.surname?.charAt(0) || ''
                              ).toUpperCase()}
                            </span>
                          </div>
                          <div>
                            <button
                              onClick={() =>
                                router.push(`/admin/customers/${customer.id}`)
                              }
                              className="text-white font-medium text-base hover:text-emerald-500 transition-colors text-left"
                            >
                              {customer.firstName} {customer.surname}
                            </button>
                            <button
                              onClick={() =>
                                router.push(`/admin/customers/${customer.id}`)
                              }
                              className="text-gray-400 text-sm hover:text-emerald-500 transition-colors text-left"
                            >
                              {customer.email}
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {customer.type === 'Residential' ? (
                            <>
                              <Home className="w-4 h-4 text-emerald-500" />
                              <span className="text-gray-300">Residential</span>
                            </>
                          ) : (
                            <>
                              <Building2 className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-300">Business</span>
                            </>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <button className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            📞
                          </button>
                          <button className="text-emerald-500 hover:text-emerald-400 transition-colors">
                            📧
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-300">📍</span>
                          <span className="text-gray-300">
                            {customer.suburb}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              router.push(
                                `/admin/customers/${customer.id}/edit`,
                              )
                            }
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 text-emerald-500 hover:text-emerald-400 transition-colors"
                          >
                            <Edit className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-800/50 text-red-500 hover:text-red-400 transition-colors"
                            title="Delete Customer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="mt-6 flex items-center justify-between px-6">
                <div className="text-sm text-gray-400">
                  {filteredCustomers.length === 0
                    ? 'No customers found'
                    : `Showing ${startIndex + 1}-${Math.min(endIndex, filteredCustomers.length)} of ${filteredCustomers.length} customers`}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded ${
                      currentPage === 1
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-emerald-500 hover:text-emerald-400'
                    } transition-colors`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-gray-400">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded ${
                      currentPage === totalPages
                        ? 'text-gray-600 cursor-not-allowed'
                        : 'text-emerald-500 hover:text-emerald-400'
                    } transition-colors`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Add Modals */}
      <Modal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Customer"
        message="Are you sure you want to delete this customer? This action cannot be undone."
        confirmText="Delete"
        isDestructive={true}
      />
    </div>
  );
}

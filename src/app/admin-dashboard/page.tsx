'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/Card';
import { HomeButton } from '@/components/ui/HomeButton';
import { ThemeHeading, ThemeSubheading } from '@/components/ui/ThemeComponents';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';

export default function AdminDashboard() {
  const { isAdmin, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAdmin) {
      router.push('/login');
    }
  }, [isAdmin, router]);

  if (!isAdmin) {
    return null; // Prevent flash of content while redirecting
  }

  return (
    <div className="min-h-screen theme-gradient-bg">
      <div className="fixed top-4 right-4 z-50">
        <HomeButton />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md p-6">
          <ThemeHeading className="text-center mb-4">
            Admin Dashboard
          </ThemeHeading>
          <ThemeSubheading className="text-center mb-6">
            Welcome, Admin!
          </ThemeSubheading>

          <div className="space-y-4">
            {/* Add your admin dashboard content here */}
            <Button onClick={logout} className="w-full">
              Logout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

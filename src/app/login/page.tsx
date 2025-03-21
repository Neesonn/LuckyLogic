'use client';

import { useState } from 'react';
import { User, Key } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { HomeButton } from '@/components/ui/HomeButton';
import { ThemeHeading } from '@/components/ui/ThemeComponents';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!login(username, password)) {
      setError('Invalid credentials. Try admin/admin.');
    }
  };

  return (
    <div className="min-h-screen theme-gradient-bg">
      <div className="fixed top-4 right-4 z-50">
        <HomeButton />
      </div>

      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md p-6">
          <ThemeHeading className="text-center mb-6">Login</ThemeHeading>

          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              label="Username"
              icon={<User className="h-5 w-5 text-gray-400" />}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Input
              label="Password"
              icon={<Key className="h-5 w-5 text-gray-400" />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={error}
              required
            />

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

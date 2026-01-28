'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div>
      <h1 className="text-xl font-semibold">My Account</h1>
    </div>
  );
}

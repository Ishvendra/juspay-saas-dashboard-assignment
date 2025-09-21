'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/analytics');
  }, [router]);

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      Redirecting to Analytics...
    </div>
  );
}

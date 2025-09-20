import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      <h1 className='text-6xl font-bold text-primary mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Page Not Found</h2>
      <p className='max-w-md text-muted-foreground mb-6'>
        This page does not exist.
      </p>
      <Link href='/'>
        <Button>Go Back to Dashboard</Button>
      </Link>
    </div>
  );
}

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function UnderDevelopmentPage() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen text-center p-4'>
      {/* <h1 className='text-4xl font-bold mb-4'>🚧 Under Development 🚧</h1> */}
      <p className='max-w-md text-muted-foreground mb-2'>
        🚧 This route isn&apos;t part of the MVP (assignment scope). 🚧
      </p>
      <p className='max-w-md mb-6'>The real action is happening here:</p>
      <div className='flex gap-4'>
        <Button asChild variant='outline'>
          <Link href='/analytics'>Analytics</Link>
        </Button>
        <Button asChild variant='outline'>
          <Link href='/orders'>Orders List</Link>
        </Button>
      </div>
    </div>
  );
}

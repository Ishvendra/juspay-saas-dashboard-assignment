'use client';

import Image from 'next/image';
import { locationData } from '@/lib/mock-data';
import { ProgressBar } from './ProgressBar';
import mapImage from '@/assets/images/map.png';

export function RevenueByLocation() {
  return (
    <div className='flex flex-col h-full'>
      <div className='flex-1 flex items-center justify-center'>
        <Image src={mapImage} alt='Revenue by Location Map' />
      </div>

      <div className='flex flex-col gap-4 py-4'>
        {locationData.map((data) => (
          <div key={data.location}>
            <div className='flex justify-between text-xs font-normal'>
              <span>{data.location}</span>
              <span>${(data.revenue / 1000).toFixed(0)}K</span>
            </div>
            <ProgressBar value={data.revenue} total={data.total} />
          </div>
        ))}
      </div>
    </div>
  );
}

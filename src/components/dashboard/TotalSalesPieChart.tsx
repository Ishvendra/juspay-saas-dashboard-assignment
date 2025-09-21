'use client';

import React from 'react';
import { Pie, PieChart, Cell } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { pieChartData } from '@/lib/mock-data';

const chartConfig = {
  sales: { label: 'Sales' },
  ...Object.fromEntries(
    pieChartData.map((d) => [
      d.name.toLowerCase(),
      { label: d.name, color: d.fill },
    ])
  ),
} satisfies ChartConfig;

export function TotalSalesPieChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className='w-full h-full flex flex-col items-center justify-center relative'
    >
      <div>
        <div className='relative flex items-center justify-center'>
          <PieChart width={120} height={120}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={pieChartData}
              dataKey='value'
              nameKey='name'
              innerRadius={30}
              outerRadius={45}
              paddingAngle={5}
              cornerRadius={10}
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </div>

        <div className='mt-4 w-full'>
          <ChartLegend content={<ChartLegendContent nameKey='name' />} />
        </div>
        <div className='w-full px-4 flex justify-center'>
          <div className='grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-xs'>
            {pieChartData.map((entry) => (
              <React.Fragment key={entry.name}>
                <div className='flex items-center gap-2'>
                  <span
                    className='h-2 w-2 rounded-full'
                    style={{ backgroundColor: entry.fill }}
                  />
                  <span>{entry.name}</span>
                </div>

                <div className='text-left font-medium'>
                  <span>${entry.value.toLocaleString()}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </ChartContainer>
  );
}

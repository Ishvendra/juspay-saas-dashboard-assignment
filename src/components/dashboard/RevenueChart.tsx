'use client';

import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { lineChartData } from '@/lib/mock-data';

const chartConfig = {
  product_A: {
    label: 'Product A',
  },
  product_B: {
    label: 'Product B',
  },
} satisfies ChartConfig;

export function RevenueChart() {
  return (
    <ChartContainer config={chartConfig} className='w-full h-full'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart
          accessibilityLayer
          data={lineChartData}
          margin={{ top: 10, left: -18, bottom: 0 }}
        >
          <defs>
            <linearGradient id='glowproduct_B' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor='var(--secondary-blue-a)'
                stopOpacity={0.4}
              />
              <stop
                offset='95%'
                stopColor='var(--secondary-blue-a)'
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey='month'
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={14}
            tickFormatter={(value) => value.slice(0, 3)}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            fontSize={14}
            tickFormatter={(value) => `${value}M`}
            tickCount={4}
            domain={[0, 'dataMax + 1']}
          />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <Area
            dataKey='product_B'
            type='monotone'
            fill='url(#glowproduct_B)'
            stroke='var(--secondary-blue-a)'
            strokeWidth={2}
            dot={false}
          />

          <Area
            dataKey='product_A_actual'
            type='monotone'
            stroke='var(--color-primary-brand)'
            strokeWidth={2}
            dot={false}
            fill='none'
          />
          <Area
            dataKey='product_A_projected'
            type='monotone'
            stroke='var(--color-primary-brand)'
            strokeWidth={2}
            strokeDasharray='3 3'
            dot={false}
            fill='none'
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

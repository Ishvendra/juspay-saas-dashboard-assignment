'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { barChartData } from '@/lib/mock-data';

const chartConfig = {
  actual: {
    label: 'Actuals',
  },
  overage: {
    label: 'Overage',
  },
} satisfies ChartConfig;

export function ProjectionsChart() {
  return (
    <ChartContainer config={chartConfig} className='w-full h-full'>
      <BarChart
        accessibilityLayer
        data={barChartData}
        margin={{
          top: 10,
          left: -18,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey='month'
          tickLine={false}
          fontSize={14}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={14}
          tickMargin={8}
          tickFormatter={(value) => `${value}M`}
          tickCount={4}
          domain={[0, 'dataMax + 1']}
        />

        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator='dot' />}
        />

        <Bar
          dataKey='actual'
          fill='var(--secondary-blue-a)'
          stackId='a'
          maxBarSize={20}
        />
        <Bar
          dataKey='overage'
          fill='var(--secondary-blue-a-50)'
          stackId='a'
          radius={[4, 4, 0, 0]}
          maxBarSize={20}
        />
      </BarChart>
    </ChartContainer>
  );
}

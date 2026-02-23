"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import TimeFilterDropdown from "../TimeFilterDropdown/TimeFilterDropdown";

const chartConfig = {
  count: {
    label: "Orders",
    color: "#0099331F",
  },
} satisfies ChartConfig;

const AreaChartContent = ({
  data,
  orderType,
  handleOrderTypeChange,
}: {
  data: { period: string; count: number }[] | [];
  orderType: string;
  handleOrderTypeChange: (type: string) => void;
}) => {
  return (
    <div className="max-w-[484px] w-full border border-gray-200 rounded-md">
      <Card className="shadow-none border-0">
        <CardHeader className="flex item-center justify-between">
          <CardTitle>Order overview</CardTitle>
          <TimeFilterDropdown
            value={orderType}
            onChange={handleOrderTypeChange}
            timePeriods={[
              { label: "Outgoing orders", value: "outgoing" },
              { label: "Incoming orders", value: "incoming" },
            ]}
          />
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 11)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="count"
                type="natural"
                fill="#0099331F"
                fillOpacity={0.4}
                stroke="#0099331F"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AreaChartContent;

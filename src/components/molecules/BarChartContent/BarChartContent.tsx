"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartConfig = {
  desktop: {
    label: "Sent Quotes",
    color: "#009933",
  },
  mobile: {
    label: "Incoming Quotes",
    color: "#EDEDED",
  },
} satisfies ChartConfig;

const BarChartContent = ({
  data,
  isSeller,
}: {
  data: { period: string; incoming: number; outgoing: number }[] | [];
  isSeller: boolean;
}) => {
  return (
    <div className="max-w-[600px] w-full border border-gray-200 rounded-md">
      <Card className="shadow-none border-0">
        <CardHeader className="flex item-center justify-between">
          <CardTitle>Quotes</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={data}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="period"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 11)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dashed" />}
              />
              <Bar dataKey="outgoing" fill="#009933" radius={4} />
              {isSeller && <Bar dataKey="incoming" fill="#EDEDED" radius={2} />}
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default BarChartContent;

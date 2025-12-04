"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { date: "Jan 1", value: 245000 },
  { date: "Jan 8", value: 248000 },
  { date: "Jan 15", value: 242000 },
  { date: "Jan 22", value: 255000 },
  { date: "Jan 29", value: 262000 },
  { date: "Feb 5", value: 268500 },
]

export default function ChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
        <XAxis dataKey="date" stroke="var(--color-muted-foreground)" style={{ fontSize: "12px" }} />
        <YAxis
          stroke="var(--color-muted-foreground)"
          style={{ fontSize: "12px" }}
          tickFormatter={(value) => `₹${value / 1000}K`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--color-card)",
            border: `1px solid var(--color-border)`,
            borderRadius: "8px",
          }}
          formatter={(value) => `₹${value.toLocaleString()}`}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke="var(--color-primary)"
          strokeWidth={2}
          dot={{ fill: "var(--color-primary)", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

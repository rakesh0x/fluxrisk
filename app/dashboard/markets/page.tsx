"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

export default function MarketsPage() {
  const stocks = [
    { symbol: "TATA", name: "Tata Consultancy Services", price: 3842.5, change: 2.35, high: 3865, low: 3720, pe: 21.3 },
    { symbol: "RELIANCE", name: "Reliance Industries", price: 1287.6, change: -1.24, high: 1310, low: 1245, pe: 18.9 },
    { symbol: "HDFC", name: "HDFC Bank", price: 1654.75, change: 3.18, high: 1680, low: 1600, pe: 19.4 },
    { symbol: "INFY", name: "Infosys", price: 1892.3, change: 1.87, high: 1920, low: 1840, pe: 22.1 },
    { symbol: "WIPRO", name: "Wipro", price: 542.1, change: -0.92, high: 560, low: 520, pe: 15.2 },
    { symbol: "BAJAJ", name: "Bajaj Auto", price: 8234.5, change: 4.56, high: 8400, low: 7950, pe: 24.8 },
  ]

  const chartData = [
    { time: "09:15", price: 3800 },
    { time: "10:30", price: 3820 },
    { time: "11:45", price: 3815 },
    { time: "13:00", price: 3835 },
    { time: "14:15", price: 3850 },
    { time: "15:30", price: 3842.5 },
  ]

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Markets</h1>
        <p className="text-muted-foreground">Browse all available Indian stocks with real-time data</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Market Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium">Open</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Top Gainer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-semibold">
              BAJAJ <span className="text-accent">+4.56%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Top Loser</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-semibold">
              WIPRO <span className="text-destructive">-0.92%</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Most Traded</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-semibold">
              HDFC <span className="text-primary">3.2M</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>TATA Stock Chart</CardTitle>
              <CardDescription>Intraday performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                  <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
                  <YAxis stroke="var(--color-muted-foreground)" domain={[3790, 3860]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="var(--color-primary)"
                    strokeWidth={2}
                    dot={{ fill: "var(--color-primary)", r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">TATA Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="text-xs text-muted-foreground mb-1">Current Price</div>
              <div className="text-2xl font-bold">₹3,842.50</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Day Range</div>
              <div className="text-sm">₹3,720 - ₹3,865</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">P/E Ratio</div>
              <div className="text-sm">21.3</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-1">Change Today</div>
              <div className="text-sm text-accent flex items-center gap-1">
                <TrendingUp className="w-4 h-4" /> +2.35%
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Stocks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Symbol</th>
                  <th className="text-left py-3 px-4 font-semibold">Name</th>
                  <th className="text-right py-3 px-4 font-semibold">Price</th>
                  <th className="text-right py-3 px-4 font-semibold">Change</th>
                  <th className="text-right py-3 px-4 font-semibold">High</th>
                  <th className="text-right py-3 px-4 font-semibold">Low</th>
                  <th className="text-right py-3 px-4 font-semibold">P/E</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr key={stock.symbol} className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="py-3 px-4 font-semibold">{stock.symbol}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{stock.name}</td>
                    <td className="py-3 px-4 text-right font-medium">₹{stock.price.toFixed(2)}</td>
                    <td
                      className={`py-3 px-4 text-right flex items-center justify-end gap-1 ${stock.change > 0 ? "text-accent" : "text-destructive"}`}
                    >
                      {stock.change > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                      {stock.change > 0 ? "+" : ""}
                      {stock.change}%
                    </td>
                    <td className="py-3 px-4 text-right">₹{stock.high.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">₹{stock.low.toFixed(2)}</td>
                    <td className="py-3 px-4 text-right">{stock.pe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

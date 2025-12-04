"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import StockCard from "@/components/stock-card"
import ChartComponent from "@/components/chart-component"
import { TrendingUp } from "lucide-react"

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true)
  const [portfolioData, setPortfolioData] = useState({
    totalInvested: 0,
    currentValue: 0,
    profitLoss: 0,
    holdings: [],
  })

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const stocks = [
    { symbol: "TATA", name: "Tata Consultancy Services", price: 3842.5, change: 2.35, volume: "2.1M", trend: "up" },
    { symbol: "RELIANCE", name: "Reliance Industries", price: 1287.6, change: -1.24, volume: "1.8M", trend: "down" },
    { symbol: "HDFC", name: "HDFC Bank", price: 1654.75, change: 3.18, volume: "3.2M", trend: "up" },
    { symbol: "INFY", name: "Infosys", price: 1892.3, change: 1.87, volume: "1.5M", trend: "up" },
  ]

  return (
    <div className="flex-1 p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Anish Singh. Track your investments in real-time.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,45,000</div>
            <p className="text-xs text-muted-foreground mt-1">Across 4 stocks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,68,500</div>
            <p className="text-xs text-muted-foreground mt-1">Live valuation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Profit/Loss</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">+₹23,500</div>
            <p className="text-xs text-accent mt-1">+9.6% return</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Today's Change</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">+₹8,200</div>
            <p className="text-xs text-primary mt-1">+3.2%</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Portfolio Performance</CardTitle>
              <CardDescription>Your holdings value over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ChartComponent />
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Holdings Distribution</CardTitle>
            <CardDescription>Asset allocation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stocks.slice(0, 3).map((stock) => (
                <div key={stock.symbol} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-medium">{stock.symbol}</div>
                    <div className="h-2 bg-secondary rounded-full mt-1 overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${Math.random() * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-2">{Math.round(Math.random() * 40 + 10)}%</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Stocks Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Top Stocks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </div>

      {/* Buy Stock CTA */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Ready to invest?
          </CardTitle>
          <CardDescription>Add more stocks to your portfolio</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="rounded-full">Buy Stocks</Button>
        </CardContent>
      </Card>
    </div>
  )
}

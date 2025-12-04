"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Plus, Trash2 } from "lucide-react"

export default function PortfolioPage() {
  const [holdings, setHoldings] = useState([
    { symbol: "TATA", quantity: 10, buyPrice: 3750, currentPrice: 3842.5, value: 38425, invested: 37500 },
    { symbol: "RELIANCE", quantity: 15, buyPrice: 1300, currentPrice: 1287.6, value: 19314, invested: 19500 },
    { symbol: "HDFC", quantity: 8, buyPrice: 1600, currentPrice: 1654.75, value: 13238, invested: 12800 },
    { symbol: "INFY", quantity: 20, buyPrice: 1855, currentPrice: 1892.3, value: 37846, invested: 37100 },
  ])

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    stock: "",
    quantity: "",
    amount: "",
  })

  const totalInvested = holdings.reduce((sum, h) => sum + h.invested, 0)
  const totalValue = holdings.reduce((sum, h) => sum + h.value, 0)
  const totalPnL = totalValue - totalInvested
  const totalPnLPercent = ((totalPnL / totalInvested) * 100).toFixed(2)

  const handleBuy = () => {
    if (formData.stock && formData.quantity) {
      // Simulate buy
      setIsDialogOpen(false)
      setFormData({ stock: "", quantity: "", amount: "" })
    }
  }

  const handleRemove = (symbol: string) => {
    setHoldings(holdings.filter((h) => h.symbol !== symbol))
  }

  return (
    <div className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Portfolio</h1>
        <p className="text-muted-foreground">Manage and track your stock holdings</p>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total Invested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalInvested.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Current Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalValue.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Total P&L</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${totalPnL > 0 ? "text-accent" : "text-destructive"}`}>
              ₹{Math.abs(totalPnL).toLocaleString()}
            </div>
            <div className={`text-xs mt-1 ${totalPnL > 0 ? "text-accent" : "text-destructive"}`}>
              {totalPnL > 0 ? "+" : ""}
              {totalPnLPercent}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm">Holdings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{holdings.length}</div>
            <div className="text-xs text-muted-foreground mt-1">Active stocks</div>
          </CardContent>
        </Card>
      </div>

      {/* Holdings Table */}
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Your Holdings</CardTitle>
              <CardDescription>Current stock positions</CardDescription>
            </div>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="rounded-full">
                  <Plus className="w-4 h-4 mr-2" /> Buy Stock
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Buy Stock</DialogTitle>
                  <DialogDescription>Add a new stock to your portfolio</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Stock</label>
                    <Select
                      value={formData.stock}
                      onValueChange={(value) => setFormData({ ...formData, stock: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select stock" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TATA">TATA - Tata Consultancy Services</SelectItem>
                        <SelectItem value="RELIANCE">RELIANCE - Reliance Industries</SelectItem>
                        <SelectItem value="HDFC">HDFC - HDFC Bank</SelectItem>
                        <SelectItem value="INFY">INFY - Infosys</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Quantity</label>
                    <Input
                      type="number"
                      placeholder="Number of shares"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Amount</label>
                    <Input
                      type="number"
                      placeholder="Total investment amount"
                      value={formData.amount}
                      onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                      disabled
                    />
                  </div>
                  <Button onClick={handleBuy} className="w-full">
                    Confirm Purchase
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-semibold">Symbol</th>
                  <th className="text-right py-3 px-4 font-semibold">Quantity</th>
                  <th className="text-right py-3 px-4 font-semibold">Buy Price</th>
                  <th className="text-right py-3 px-4 font-semibold">Current</th>
                  <th className="text-right py-3 px-4 font-semibold">Value</th>
                  <th className="text-right py-3 px-4 font-semibold">P&L</th>
                  <th className="text-center py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {holdings.map((holding) => {
                  const pnl = holding.value - holding.invested
                  const pnlPercent = ((pnl / holding.invested) * 100).toFixed(2)
                  return (
                    <tr key={holding.symbol} className="border-b border-border hover:bg-secondary/30 transition-colors">
                      <td className="py-3 px-4 font-semibold">{holding.symbol}</td>
                      <td className="py-3 px-4 text-right">{holding.quantity}</td>
                      <td className="py-3 px-4 text-right">₹{holding.buyPrice.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right">₹{holding.currentPrice.toFixed(2)}</td>
                      <td className="py-3 px-4 text-right font-medium">₹{holding.value.toLocaleString()}</td>
                      <td
                        className={`py-3 px-4 text-right flex items-center justify-end gap-1 ${pnl > 0 ? "text-accent" : "text-destructive"}`}
                      >
                        {pnl > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {pnl > 0 ? "+" : ""}₹{Math.abs(pnl).toLocaleString()} ({pnlPercent}%)
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => handleRemove(holding.symbol)}
                          className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Add Stock CTA */}
      <Card>
        <CardHeader>
          <CardTitle>Diversify Your Portfolio</CardTitle>
          <CardDescription>Explore more stocks available in the markets</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="rounded-full bg-transparent">
            Browse Markets
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

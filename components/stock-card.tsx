"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, TrendingDown, Plus } from "lucide-react"

export default function StockCard({ stock }: any) {
  return (
    <Card className="hover:border-primary/50 hover:shadow-lg transition-all duration-300 group cursor-pointer">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="text-lg font-bold">{stock.symbol}</div>
            <div className="text-xs text-muted-foreground">{stock.name}</div>
          </div>
          <div className={`p-2 rounded-lg ${stock.trend === "up" ? "bg-accent/10" : "bg-destructive/10"}`}>
            {stock.trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-accent" />
            ) : (
              <TrendingDown className="w-4 h-4 text-destructive" />
            )}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-2xl font-bold">₹{stock.price.toFixed(2)}</div>
          <div className={`text-sm ${stock.trend === "up" ? "text-accent" : "text-destructive"}`}>
            {stock.trend === "up" ? "+" : ""}
            {stock.change}%
          </div>
        </div>

        <div className="text-xs text-muted-foreground mb-4">Volume: {stock.volume}</div>

        <Button size="sm" className="w-full rounded-lg group/btn bg-transparent" variant="outline">
          <Plus className="w-4 h-4 mr-1 group-hover/btn:rotate-90 transition-transform" />
          Buy
        </Button>
      </CardContent>
    </Card>
  )
}

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, BarChart3, Zap } from "lucide-react"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [animateElements, setAnimateElements] = useState(false)

  useEffect(() => {
    setAnimateElements(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">FluxRisk</div>
          <Link href="/dashboard">
            <Button className="rounded-full">Launch Dashboard</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-block mb-8 px-4 py-2 rounded-full border border-border bg-secondary/50 text-foreground text-sm transition-all duration-700 transform ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Real-time Indian Stock Analytics
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 transition-all duration-700 transform ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="gradient-text">Trade Smarter</span>
            <br />
            Invest Faster
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 transition-all duration-700 transform delay-100 ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Real-time analysis of Indian market leaders. Watch live price movements, track your portfolio, and make
            data-driven investment decisions in seconds.
          </p>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className={`inline-block transition-all duration-700 transform delay-200 ${
              animateElements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="rounded-full group glow-effect">
              Explore Dashboard
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Powerful Features</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Live Market Data</h3>
              <p className="text-muted-foreground">
                Real-time quotes for Tata, Reliance, HDFC, and other top Indian stocks
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-muted-foreground">
                Charts, trends, volume metrics, and historical analysis at your fingertips
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Portfolio Tracking</h3>
              <p className="text-muted-foreground">
                Simulate purchases and track your holdings with live profit/loss calculations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to analyze the market?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start exploring real-time Indian stock data now. No signup required.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="rounded-full glow-effect">
              Enter Dashboard
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

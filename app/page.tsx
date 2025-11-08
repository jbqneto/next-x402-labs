'use client';

import Link from 'next/link';
import { ArrowRight, Zap, Cookie, Image } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Web3 Labs
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Experiments with x402 Payments
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            Unlocking Web3 micro-payments and experiments
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Experiment</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ExperimentCard
              href="/pay-to-view"
              icon={<Zap className="w-8 h-8 text-cyan-400" />}
              title="Pay-to-View Page"
              description="Mock payment to access exclusive hidden content"
              price="0.05 USDC"
            />
            <ExperimentCard
              href="/fortune"
              icon={<Cookie className="w-8 h-8 text-violet-400" />}
              title="Web3 Fortune Cookie"
              description="Reveal a crypto-themed fortune for just a penny"
              price="$0.01"
            />
            <ExperimentCard
              href="/mint"
              icon={<Image className="w-8 h-8 text-cyan-400" />}
              title="Upload & Mint NFT"
              description="Upload your file and simulate NFT generation"
              price="Variable"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperimentCard({ href, icon, title, description, price }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
}) {
  return (
    <Link href={href}>
      <Card className="h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer border-muted">
        <CardHeader>
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-cyan-400">{price}</span>
            <ArrowRight className="w-5 h-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

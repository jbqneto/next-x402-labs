'use client';

import { useState } from 'react';
import { Lock, CheckCircle2, Loader2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function PayToViewPage() {
  const [paid, setPaid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    setPaid(true);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
            Pay-to-View Content
          </h1>
          <p className="text-lg text-muted-foreground">
            Unlock exclusive content with a micro-payment
          </p>
        </div>

        {!paid ? (
          <Card className="border-cyan-900/30">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              <CardTitle className="text-2xl">Content Locked</CardTitle>
              <CardDescription className="text-base">
                Please send 0.05 USDC via x402 protocol to proceed
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted p-6 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Amount</span>
                  <span className="font-semibold text-cyan-400">0.05 USDC</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Network</span>
                  <span className="font-semibold">Base Sepolia</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Protocol</span>
                  <span className="font-semibold">x402 (mock)</span>
                </div>
              </div>

              <Button
                onClick={handlePayment}
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 hover:from-cyan-600 hover:to-violet-600 text-lg py-6"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 mr-2" />
                    Pay & Unlock Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500">
            <Card className="border-green-900/30">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Payment Successful!</CardTitle>
                <CardDescription className="text-base">
                  Content unlocked. Enjoy your exclusive access.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-cyan-900/30">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-cyan-400" />
                  <CardTitle>Exclusive Web3 Insights</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="prose prose-invert max-w-none">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  The Future of Micro-Payments in Web3
                </h3>
                <p className="text-muted-foreground mb-4">
                  The x402 protocol represents a paradigm shift in how we think about content monetization
                  on the internet. By enabling seamless micro-payments with minimal friction, creators can
                  now monetize individual pieces of content without requiring subscriptions or paywalls.
                </p>
                <p className="text-muted-foreground mb-4">
                  Key benefits of x402 payments:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• No sign-up required - pay with your wallet directly</li>
                  <li>• Sub-cent transactions become economically viable</li>
                  <li>• Instant settlement on Layer 2 networks</li>
                  <li>• True ownership of payment history</li>
                  <li>• Programmable payment flows with smart contracts</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  This technology unlocks new business models for creators, developers, and platforms
                  that were previously impossible due to high transaction fees and processing times.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}

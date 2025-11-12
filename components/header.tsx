import Link from 'next/link';
import { FaucetButton } from './faucet-button';

export function Header() {

  return (
    <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-xl font-bold text-white">W3</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Web3 Labs
            </span>
          </Link>

          <FaucetButton />
        </div>
      </div>

      <div className="bg-cyan-950/30 border-t border-cyan-900/30 py-2 px-4">
        <p className="text-center text-sm text-cyan-400/80">
          Running on <span className="font-semibold text-cyan-400">Base Sepolia</span> testnet
        </p>
      </div>
    </header>
  );
}

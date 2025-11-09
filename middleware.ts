import { Address } from "viem";
import { Network, paymentMiddleware, Resource } from "x402-next";

const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL as Resource;
const payTo = process.env.RESOURCE_WALLET_ADDRESS as Address;
const network = process.env.NETWORK as Network;

console.log("Using facilitator URL:", facilitatorUrl);
console.log(`payTo address: ${payTo} -> network: ${network}`);

const routes =  {
    "/protecteds": {
      price: "$0.01",
      network,
      config: {
        description: "Access to protected content",
        mimeType: "text/html"
      }
  },
};

export const middleware = paymentMiddleware(
  payTo,
  routes,
  {
    url: facilitatorUrl  
  },
  {
    appName: "Next X402 Coinbase Example",
  }
);


export const config = {
  matcher: [
    '/protected/:path*',
  ]
};
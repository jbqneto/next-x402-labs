import { paymentMiddleware } from "./lib/payment.middleware";

type Network = 'base' | 'base-sepolia';

const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL as `${string}://${string}`;
const payTo = process.env.RESOURCE_WALLET_ADDRESS as `0x${string}`;
const network = process.env.NETWORK as Network;

const routes =  {
    "/protected": {
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
  }
);

export const config = {
  matcher: ['/protected/:path*']
};
"use client"
import { Chakra } from "./chakra";

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';


const { chains, publicClient } = configureChains(
  [mainnet, goerli ,  polygon],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY as string }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Simple dApp',
  projectId: 'Simple dApp',
  chains
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Chakra>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
          </WagmiConfig>
        </Chakra>
      </body>
    </html>
  );
}
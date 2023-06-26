"use client";
import { NavBar } from "./Components";
import "./globals.css";
import { SidebarProvider } from "./Context/SidebarContext";
import { StateProvider } from "./Context/StateProvider";
import { initialState } from "./Context/initialState";
import  reducer  from "./Context/reducer";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnectV1,
} from "@thirdweb-dev/react";
import { MoonbaseAlpha } from "@thirdweb-dev/chains";  
import { StateContextProvider } from "./Context/Thirdweb";
import { ThemeProvider } from "./Context/GetCampaigns";

export default function RootLayout({ children }) {    
  return (
    <html lang="en">
      <body >
        <StateProvider initialState={initialState} reducer={reducer}>
          <ThirdwebProvider
            activeChain={MoonbaseAlpha }
            supportedWallets={[
              metamaskWallet(),
              coinbaseWallet(),
              walletConnectV1(),
            ]}
          >
            <StateContextProvider>
              <ThemeProvider>
                <NavBar />
                <SidebarProvider>{children}</SidebarProvider>
              </ThemeProvider>
            </StateContextProvider>
          </ThirdwebProvider>
        </StateProvider>
      </body>
    </html>
  );
}

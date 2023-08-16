import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
// import { MoralisProvider } from "react-moralis"
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { createClient, configureChains, } from 'wagmi'
// import { publicProvider } from 'wagmi/providers/public'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { infuraProvider } from 'wagmi/providers/infura'
// import { mainnet, goerli } from 'wagmi/chains'
// import { WagmiConfig } from 'wagmi'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
// import { SSRProvider } from 'react-aria'

// const { provider, webSocketProvider, chains } = configureChains(
//   [mainnet],
//   [
//     // alchemyProvider({ apiKey: 'hu9KmpMxud_8q6Tlskrt42zOpiGy-9xN' }),
//     infuraProvider({ apiKey: '5c9cb0b35a2742659dec6fc7680c16c4' }),
//     publicProvider()
//   ],
//   // { targetQuorum: 2 },
// )

// // Necessary for Wagmi Client Provider /* Do Not Delete or client will not work*/
// const client = createClient({
//   autoConnect: true,
//   connectors: [
//     new MetaMaskConnector({ chains }),
//     // new CoinbaseWalletConnector({
//     //   chains,
//     //   options: {
//     //     appName: 'TaurosDAO',
//     //   },
//     // }),
//     new WalletConnectConnector({
//       chains,
//       options: {
//         qrcode: true,
//       },
//     }),
//     new InjectedConnector({
//       chains,
//       options: {
//         name: 'Injected',
//         shimDisconnect: true,
//       },
//     }),
//   ],
//   provider,
//   webSocketProvider,
// })



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SSRProvider> */}
        {/* <WagmiConfig client={client}> */}
          {/* <MoralisProvider appId="ny6Iude7WFwg2QaZtvDK7zQC81e9uKRIeaCkFNxM" serverUrl="https://htogiwbd7il5.usemoralis.com:2053/server"> */}

            <App />


          {/* </MoralisProvider> */}
        {/* </WagmiConfig> */}
      {/* </SSRProvider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

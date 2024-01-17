import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5";

const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "SepoliaETH",
  explorerUrl: "https://sepolia.etherscan.io/",
  rpcUrl: "https://ethereum-sepolia.publicnode.com",
};

const projectId = "1b270fd1dd80393c215c551fc57c8f95";

const metadata = {
  name: "Qwik Example",
  description: "Qwik Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const modal = createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [mainnet, sepolia],
  projectId,
});

export default modal;

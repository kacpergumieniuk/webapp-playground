import { component$ } from "@builder.io/qwik";
import { arbitrum, mainnet } from '@wagmi/core/chains';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi';

const projectId ='1b270fd1dd80393c215c551fc57c8f95'
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata: {
    name: 'Qwik Example',
    description: 'Qwik Example',
    url: 'https://web3modal.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
})


const modal = createWeb3Modal({ wagmiConfig, projectId, chains, themeMode: 'light' })


export default component$(() => {

  const {selectedNetworkId} = modal.getState()

  
  return (
    <div class="h-screen w-screen bg-black text-white text-xl flex flex-col gap-2 justify-center items-center" onClick$={() => console.log(modal.getState())}>
      <button onClick$={() => modal.open({ view: 'Networks' })}>Connect</button>
      <p>{selectedNetworkId}</p>
    </div>
  );
});

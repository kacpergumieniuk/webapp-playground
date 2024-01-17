import { component$, useStore, useVisibleTask$, $ } from "@builder.io/qwik";
import modal from "~/modal";

interface UserStore {
  networkId: undefined | number;
  address: undefined | string;
}

export default component$(() => {
  const userStore = useStore<UserStore>({
    networkId: undefined,
    address: undefined,
  });

  const isConnected = userStore.networkId; //for readability

  useVisibleTask$(async () => {
    modal.subscribeState((state) => {
      if (state.selectedNetworkId) {
        userStore.networkId = modal.getChainId();
        userStore.address = modal.getAddress();
      }
    });
  });

  const openModal = $(() => {
    if (isConnected) {
      modal.disconnect();
      userStore.networkId = undefined;
    } else {
      modal.open({ view: "Networks" });
    }
  });

  return (
    <div class="h-screen w-screen bg-black text-white text-xl flex flex-col gap-2 justify-center items-center">
      <button
        onClick$={openModal}
        class="bg-purple-700 px-4 py-2 rounded text-semibold"
      >
        {isConnected ? "Disconnect" : "Connect"}
      </button>
      <p>{isConnected && userStore.networkId}</p>
      <p>{isConnected && userStore.address}</p>
    </div>
  );
});

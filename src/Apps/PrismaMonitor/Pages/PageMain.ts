import { type Page } from "@PM/Pages/Page";

import Vaults from "@PM/Pages/Vaults/Vaults.vue";
import StabilityPool from "@PM/Pages/Pool/StabilityPool.vue";
import VaultManager from "@PM/Pages/Vaults/VaultManager.vue";

export const pageMain: Page = {
  titleRoute: "/",
  routes: [
    { path: "/", redirect: { name: "vaults" } },

    { path: "/pool", name: "pool", component: StabilityPool },
    { path: "/vaults", name: "vaults", component: Vaults },
    {
      path: "/vault/:vaultAddr/:tab?",
      name: "prismavault",
      component: VaultManager,
    },
  ],
  menuItems: [
    {
      label: "Platform",
      children: [
        {
          to: "/vaults",
          label: "Vaults",
        },
        {
          to: "/",
          label: "mkUSD",
        },
        {
          to: "/pool",
          label: "Stability pool",
        },
        {
          to: "/",
          label: "DAO",
        },
      ],
    },
  ],
};

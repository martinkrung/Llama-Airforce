import type { Platform } from "@/Pages/Bribes/Models/Platform";

const protocols = ["cvx-crv", "aura-bal"] as const;

export type Protocol = typeof protocols[number];

export function isProtocol(protocol: string): protocol is Protocol {
  return protocols.includes(protocol as Protocol);
}

export function getProtocols(platform?: Platform): Protocol[] {
  switch (platform) {
    case "votium":
      return ["cvx-crv"];
    case "hh":
      return ["aura-bal"];
    default:
      return [];
  }
}

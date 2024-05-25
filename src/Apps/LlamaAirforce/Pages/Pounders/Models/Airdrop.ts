import { type JsonRpcSigner } from "@ethersproject/providers";
import {
  CurveV6FactoryPool__factory,
  CurveV2FactoryPool__factory,
  CvxCrvFactoryPool__factory,
  type MerkleDistributor2,
  MerkleDistributor2__factory,
  UnionVaultPirex__factory,
  UnionVaultUCrv__factory,
  UnionVault__factory,
} from "@/Contracts";
import {
  CvxCrvFactoryAddress,
  CvxFxsFactoryAddress,
  CvxPrismaFactoryAddress,
  DistributorUCrvAddress,
  DistributorUCvxAddress,
  DistributorUFxsAddress,
  DistributorUPrismaAddress,
  PxCvxFactoryAddress,
  UnionCrvVaultAddress,
  UnionCvxVaultAddress,
  UnionFxsVaultAddress,
  UnionPrismaVaultAddress,
} from "@/Util/Addresses";
import { type DefiLlamaService } from "@/Services";
import {
  bigNumToNumber,
  getCvxCrvPrice,
  getCvxFxsPrice,
  getCvxPrismaPrice,
  getPxCvxPrice,
} from "@/Util";
import { getVirtualPrice } from "@Pounders/Util/UnionHelper";
import { type AirdropId, type Claim } from "@LAF/Services/UnionService";

export type Airdrop = {
  id: AirdropId;
  tkn: string;
  utkn: string;
  claim: Claim;
  amount: bigint;
  amountAsset: number;
  amountDollar: number;
  distributor: () => MerkleDistributor2;
};

export type AirdropUCrv = Airdrop & {
  id: "union";
  tkn: "cvxCRV";
  utkn: "uCRV";
};

export type AirdropUFxs = Airdrop & {
  id: "ufxs";
  tkn: "cvxFXS";
  utkn: "uFXS";
};

export type AirdropUPrisma = Airdrop & {
  id: "uprisma";
  tkn: "cvxPRISMA";
  utkn: "uPRISMA";
};

export type AirdropUCvx = Airdrop & {
  id: "ucvx";
  tkn: "pxCVX";
  utkn: "uCVX";
};

export function isAirdropUCrv(airdrop: Airdrop): airdrop is AirdropUCrv {
  return airdrop.tkn === "cvxCRV" && airdrop.utkn === "uCRV";
}

export function isAirdropUFxs(airdrop: Airdrop): airdrop is AirdropUFxs {
  return airdrop.tkn === "cvxFXS" && airdrop.utkn === "uFXS";
}

export function isAirdropUPrisma(airdrop: Airdrop): airdrop is AirdropUPrisma {
  return airdrop.tkn === "cvxPRISMA" && airdrop.utkn === "uPRISMA";
}

export function isAirdropUCvx(airdrop: Airdrop): airdrop is AirdropUCvx {
  return airdrop.tkn === "pxCVX" && airdrop.utkn === "uCVX";
}

export async function uCrvAirdrop(
  signer: JsonRpcSigner,
  llamaService: DefiLlamaService,
  claim: Claim | null
): Promise<AirdropUCrv> {
  const factory = CvxCrvFactoryPool__factory.connect(
    CvxCrvFactoryAddress,
    signer
  );
  const cvxCrvPrice = await getCvxCrvPrice(llamaService, factory);

  const utkn = UnionVaultUCrv__factory.connect(UnionCrvVaultAddress, signer);
  const virtualPrice = await getVirtualPrice(utkn);

  claim = claim ?? { index: 0, amount: "0x0", proof: [] };
  const amount = BigInt(claim.amount);
  const amountAsset = virtualPrice * bigNumToNumber(amount, 18n);
  const amountDollar = amountAsset * cvxCrvPrice;

  const distributor = MerkleDistributor2__factory.connect(
    DistributorUCrvAddress,
    signer
  );

  return {
    id: "union",
    tkn: "cvxCRV",
    utkn: "uCRV",
    claim,
    amount,
    amountAsset,
    amountDollar,
    distributor: () => distributor,
  };
}

export async function uFxsAirdrop(
  signer: JsonRpcSigner,
  llamaService: DefiLlamaService,
  claim: Claim | null
): Promise<AirdropUFxs> {
  const factory = CurveV2FactoryPool__factory.connect(
    CvxFxsFactoryAddress,
    signer
  );
  const cvxFxsPrice = await getCvxFxsPrice(llamaService, factory);

  const utkn = UnionVault__factory.connect(UnionFxsVaultAddress, signer);
  const virtualPrice = await getVirtualPrice(utkn);

  claim = claim ?? { index: 0, amount: "0x0", proof: [] };
  const amount = BigInt(claim?.amount ?? 0);
  const amountAsset = virtualPrice * bigNumToNumber(amount, 18n);
  const amountDollar = amountAsset * cvxFxsPrice;

  const distributor = MerkleDistributor2__factory.connect(
    DistributorUFxsAddress,
    signer
  );

  return {
    id: "ufxs",
    tkn: "cvxFXS",
    utkn: "uFXS",
    claim,
    amount,
    amountAsset,
    amountDollar,
    distributor: () => distributor,
  };
}

export async function uPrismaAirdrop(
  signer: JsonRpcSigner,
  llamaService: DefiLlamaService,
  claim: Claim | null
): Promise<AirdropUPrisma> {
  const factory = CurveV6FactoryPool__factory.connect(
    CvxPrismaFactoryAddress,
    signer
  );
  const cvxPrismaPrice = await getCvxPrismaPrice(llamaService, factory);

  const utkn = UnionVault__factory.connect(UnionPrismaVaultAddress, signer);
  const virtualPrice = await getVirtualPrice(utkn);

  claim = claim ?? { index: 0, amount: "0x0", proof: [] };
  const amount = BigInt(claim?.amount ?? 0);
  const amountAsset = virtualPrice * bigNumToNumber(amount, 18n);
  const amountDollar = amountAsset * cvxPrismaPrice;

  const distributor = MerkleDistributor2__factory.connect(
    DistributorUPrismaAddress,
    signer
  );

  return {
    id: "uprisma",
    tkn: "cvxPRISMA",
    utkn: "uPRISMA",
    claim,
    amount,
    amountAsset,
    amountDollar,
    distributor: () => distributor,
  };
}

export async function uCvxAirdrop(
  signer: JsonRpcSigner,
  llamaService: DefiLlamaService,
  claim: Claim | null
): Promise<AirdropUCvx> {
  const factory = CurveV2FactoryPool__factory.connect(
    PxCvxFactoryAddress,
    signer
  );
  const pxCvxPrice = await getPxCvxPrice(llamaService, factory);

  const utkn = UnionVaultPirex__factory.connect(UnionCvxVaultAddress, signer);
  const virtualPrice = await getVirtualPrice(utkn);

  claim = claim ?? { index: 0, amount: "0x0", proof: [] };
  const amount = BigInt(claim.amount);
  const amountAsset = virtualPrice * bigNumToNumber(amount, 18n);
  const amountDollar = amountAsset * pxCvxPrice;

  const distributor = MerkleDistributor2__factory.connect(
    DistributorUCvxAddress,
    signer
  );

  return {
    id: "ucvx",
    tkn: "pxCVX",
    utkn: "uCVX",
    claim,
    amount,
    amountAsset,
    amountDollar,
    distributor: () => distributor,
  };
}

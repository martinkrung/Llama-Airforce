export type Market = {
  name: string;
  address: string;
  llamma: string;
  rate: number;
  borrowed: number;
  collateral: number;
  collateralUsd: number;
  loans: number;
};

export type Snapshot = {
  timestamp: number;
  rate: number;
  nLoans: number;
  minted: number;
  redeemed: number;
  totalCollateral: number;
  totalCollateralUsd: number;
  totalStablecoin: number;
  totalDebt: number;
  priceAMM: number;
  priceOracle: number;
  borrowable: number;
};

export type MarketDecile = {
  debt: number;
  collateral: number;
  collateralUsd: number;
  stableCoin: number;
};

export type MarketState = MarketDecile & {
  index: number;
  user: string;
  N: number;
  health: number;
};

export type PoolStats = {
  address: string;
  name: string;
  tvl: number;
  normalizedReserves: [number, number];
  reservesUSD: [number, number];
  volumeUSD: number;
};

export type PoolPrice = {
  timestamp: number;
  [token: string]: number;
};

export type PriceHistogram = {
  x: number[];
  y: number[];
};

export type CrvUsdSupply = {
  timestamp: number;
  market: string;
  supply: number;
  borrowable: number;
};

export type Fees = {
  pending: number;
  collected: number;
};

export type FeesBreakdown = {
  market: string;
  crvUsdAdminFees: number;
  adminBorrowingFees: number;
  collateralAdminFeesUsd: number;
};

export type Keeper = {
  address: string;
  pool: string;
  pool_address: string;
  pair: {
    symbol: string;
    address: string;
  }[];
  active: boolean;
  total_debt: number;
  total_profit: number;
  tvl: number;
  volume: number;
};

export type Yield = {
  platform: string;
  pool: string;
  apy: number;
};

export type SoftLiqRatio = {
  timestamp: number;
  proportion: number;
};

export type LiquidationDetails = {
  timestamp: number;
  user: string;
  liquidator: string;
  self: boolean;
  collateralReceived: number;
  collateralReceivedUsd: number;
  stablecoinReceived: number;
  priceOracle: number;
  debt: number;
  n1: number;
  n2: number;
  tx: string;
  block: number;
};

export type LiquidationAggregate = {
  timestamp: number;
  selfCount: number;
  hardCount: number;
  selfValue: number;
  hardValue: number;
  price: number;
};

export type LiqOverview = {
  softLiqUsers: number;
  liqablePositions: number;
  liqableDebtUsd: number;
  liqableCollatUsd: number;
  liqableStableUsd: number;
  medianHealth: number;
  avgHealth: number;
  collatRatio: number;
};

export type LiqLosses = {
  timestamp: number;
  pctLossMedian: number;
  pctLossAverage: number;
  absoluteLossMedian: number;
  absoluteLossAverage: number;
  numTotalUsers: number;
  numUsersWithLosses: number;
  ratio: number;
};

export type HistoricalAverageHealth = {
  timestamp: number;
  quartiles: number[];
};

export type HealthDecile = {
  decile: string;
  collateralUsdValue: number;
  debt: number;
  stablecoin: number;
};

export type LiquidatorRevenue = {
  timestamp: number;
  amount: number;
  discount: number;
};

export type CollateralRatios = {
  timestamp: number;
  ratio: number;
};

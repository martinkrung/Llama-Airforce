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
};

export type LlammaOHLC = {
  time: number;
  open: number;
  close: number;
  high: number;
  low: number;
  base_price: number;
  oracle_price: number;
  volume: number;
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
  name: string;
  totalSupply: number;
};

export type MarketVolume = {
  timestamp: number;
  swapVolumeUsd: number;
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

export type HistoricalSoftLiquidations = {
  timestamp: number;
  collateralPrice: number;
  proportion: number;
};

export type HistoricalMedianLoss = {
  timestamp: number;
  lossPct: number;
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

export type HistoricalLosers = {
  timestamp: number;
  losers: number;
};

export type HistoricalLiquidations = {
  timestamp: number;
  selfCount: number;
  hardCount: number;
  selfValue: number;
  hardValue: number;
};

export type Liquidators = {
  address: string;
  count: number;
  value: number;
};

export type MarketHealthState = {
  softLiqUsers: number;
  softLiqRatio: number;
  liqablePositions: number;
  liqableDebt: number;
  liqableCollatUsd: number;
  liqableStable: number;
  medianHealth: number;
  collatRatio: number;
};

export type AvailableCap = {
  timestamp: number;
  borrowable: number;
  ceiling: number;
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

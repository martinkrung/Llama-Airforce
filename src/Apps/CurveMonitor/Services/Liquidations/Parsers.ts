import { toUTC } from "@CM/Services";
import type * as ApiTypes from "@CM/Services/Liquidations/ApiTypes";
import type * as Models from "@CM/Services/Liquidations/Models";

export const parseSoftLiqRatio = (
  x: ApiTypes.GetSoftLiqRatiosResponse["data"][number]
): Models.SoftLiqRatio => {
  return {
    timestamp: toUTC(x.timestamp),
    proportion: x.proportion / 100,
  };
};

export const parseLiqsDetailed = (
  x: ApiTypes.GetLiqsDetailedResponse["data"][number]
): Models.LiquidationDetails => {
  return {
    timestamp: toUTC(x.dt),
    user: x.user.toLocaleLowerCase(),
    liquidator: x.liquidator.toLocaleLowerCase(),
    self: x.self,
    collateralReceived: x.collateral_received,
    collateralReceivedUsd: x.collateral_received_usd,
    stablecoinReceived: x.stablecoin_received,
    priceOracle: x.oracle_price,
    debt: x.debt,
    n1: x.n1,
    n2: x.n2,
    tx: x.tx.toLocaleLowerCase(),
    block: x.block,
  };
};

export const parseLiqsAggregate = (
  x: ApiTypes.GetLiqsAggregateResponse["data"][number]
): Models.LiquidationAggregate => {
  return {
    timestamp: toUTC(x.timestamp),
    selfCount: x.self_count,
    hardCount: x.hard_count,
    selfValue: x.self_value,
    hardValue: x.hard_value,
    price: x.price,
  };
};

export const parseLiqOverview = (
  x: ApiTypes.GetLiqOverviewResponse
): Models.LiqOverview => {
  return {
    softLiqUsers: x.soft_liquidation_users,
    liqablePositions: x.liquidatable_positions,
    liqableDebtUsd: x.liquidatable_pos_debt_usd,
    liqableCollatUsd: x.liquidatable_collateral_usd,
    liqableStableUsd: x.liquidatable_stablecoin_usd,
    medianHealth: x.median_health,
    avgHealth: x.average_health,
    collatRatio: x.collat_ratio,
  };
};

export const parseLiqLosses = (
  x: ApiTypes.GetLiqLossesResponse["data"][number]
): Models.LiqLosses => {
  return {
    timestamp: toUTC(x.timestamp),
    pctLossAverage: x.avg_pct_loss,
    pctLossMedian: x.median_pct_loss,
    absoluteLossAverage: x.avg_abs_loss,
    absoluteLossMedian: x.median_abs_loss,
    numTotalUsers: x.total_users,
    numUsersWithLosses: x.users_with_losses,
    ratio: x.ratio,
  };
};

export const parseLiqHealthDeciles = (
  x: ApiTypes.GetLiqHealthDecilesResponse["data"][number]
): Models.LiqHealthDecile => {
  return {
    decile: x.health_decile,
    collateralUsdValue: x.collateral,
    debt: x.debt,
    stablecoin: x.stablecoin,
  };
};

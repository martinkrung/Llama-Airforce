import Reserves from "@/Pages/Curve/Reserves/Models/Reserves";
import Pool from "@/Pages/Curve/Models/Pool";
import ServiceBase from "@/Services/ServiceBase";

const THEGRAPH_URL =
  "https://api.thegraph.com/subgraphs/name/convex-community/volume-mainnet";

type PoolReserves = {
  timestamp: string;
  reservesUsd: string[];
};

export class PoolReservesResponse {
  data: {
    dailyPoolSnapshots: PoolReserves[];
  };
}

export default class ReservesService extends ServiceBase {
  public async get(pool: Pool): Promise<Reserves[]> {
    const query = `{
        dailyPoolSnapshots(
          where: {
            pool: "${pool.id}"
          }
          first: 1000
          orderBy: timestamp
          orderDirection: desc
        )
        {
          timestamp
          reservesUsd
        }
      }`;

    return this.fetch(THEGRAPH_URL, PoolReservesResponse, { query }).then(
      (resp) =>
        resp.data.dailyPoolSnapshots.map((snapshot) => {
          return {
            timestamp: parseInt(snapshot.timestamp, 10),
            reservesUsd: snapshot.reservesUsd.map((x) => parseFloat(x)),
          };
        })
    );
  }
}

import Pool from "@/Pages/Curve/Models/Pool";
import { shorten } from "@/Util/PoolHelper";

/** Match function used for searching by pool name or contract address. */
export function match(input: string, option: Pool): boolean {
  const inputLower = input.toLocaleLowerCase();

  const hasName = shorten(option.name).toLocaleLowerCase().includes(inputLower);

  const hasSymbol = option.symbol.toLocaleLowerCase().includes(inputLower);

  const hasAddress =
    inputLower.startsWith("0x") &&
    option.id.toLocaleLowerCase().includes(inputLower);

  return hasName || hasSymbol || hasAddress;
}

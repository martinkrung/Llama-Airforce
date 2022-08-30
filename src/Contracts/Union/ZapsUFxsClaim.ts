/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ZapsUFxsClaimInterface extends utils.Interface {
  functions: {
    "claimFromDistributorAsCvx(uint256,address,uint256,bytes32[],uint256,address,bool)": FunctionFragment;
    "claimFromDistributorAsEth(uint256,address,uint256,bytes32[],uint256,address)": FunctionFragment;
    "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)": FunctionFragment;
    "claimFromDistributorAsUsdt(uint256,address,uint256,bytes32[],uint256,address)": FunctionFragment;
    "claimFromDistributorViaUniV2EthPair(uint256,address,uint256,bytes32[],uint256,address,address,address)": FunctionFragment;
    "distributor()": FunctionFragment;
    "setApprovals()": FunctionFragment;
    "vault()": FunctionFragment;
    "zaps()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claimFromDistributorAsCvx"
      | "claimFromDistributorAsEth"
      | "claimFromDistributorAsUnderlying"
      | "claimFromDistributorAsUsdt"
      | "claimFromDistributorViaUniV2EthPair"
      | "distributor"
      | "setApprovals"
      | "vault"
      | "zaps"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimFromDistributorAsCvx",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<boolean>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsEth",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsUnderlying",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsUsdt",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorViaUniV2EthPair",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "zaps", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsCvx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsUnderlying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsUsdt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zaps", data: BytesLike): Result;

  events: {};
}

export interface ZapsUFxsClaim extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ZapsUFxsClaimInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    claimFromDistributorAsCvx(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromDistributorAsEth(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromDistributorAsUnderlying(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      assetIndex: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromDistributorAsUsdt(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFromDistributorViaUniV2EthPair(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    distributor(overrides?: CallOverrides): Promise<[string]>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    zaps(overrides?: CallOverrides): Promise<[string]>;
  };

  claimFromDistributorAsCvx(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    lock: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromDistributorAsEth(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromDistributorAsUnderlying(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    assetIndex: PromiseOrValue<BigNumberish>,
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromDistributorAsUsdt(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    minAmountOut: PromiseOrValue<BigNumberish>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFromDistributorViaUniV2EthPair(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    minAmountOut: PromiseOrValue<BigNumberish>,
    router: PromiseOrValue<string>,
    outputToken: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  distributor(overrides?: CallOverrides): Promise<string>;

  setApprovals(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  zaps(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    claimFromDistributorAsCvx(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimFromDistributorAsEth(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimFromDistributorAsUnderlying(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      assetIndex: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromDistributorAsUsdt(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimFromDistributorViaUniV2EthPair(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    distributor(overrides?: CallOverrides): Promise<string>;

    setApprovals(overrides?: CallOverrides): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    zaps(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    claimFromDistributorAsCvx(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromDistributorAsEth(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromDistributorAsUnderlying(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      assetIndex: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromDistributorAsUsdt(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFromDistributorViaUniV2EthPair(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    distributor(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    zaps(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claimFromDistributorAsCvx(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      lock: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromDistributorAsEth(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromDistributorAsUnderlying(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      assetIndex: PromiseOrValue<BigNumberish>,
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromDistributorAsUsdt(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFromDistributorViaUniV2EthPair(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      minAmountOut: PromiseOrValue<BigNumberish>,
      router: PromiseOrValue<string>,
      outputToken: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    distributor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    zaps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

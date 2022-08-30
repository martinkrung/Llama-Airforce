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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface MerkleDistributorInterface extends utils.Interface {
  functions: {
    "CRVETH_CRV_INDEX()": FunctionFragment;
    "CRVETH_ETH_INDEX()": FunctionFragment;
    "CRV_TOKEN()": FunctionFragment;
    "CURVE_CRV_ETH_POOL()": FunctionFragment;
    "CURVE_CVXCRV_CRV_POOL()": FunctionFragment;
    "CURVE_CVX_ETH_POOL()": FunctionFragment;
    "CVXCRV_CRV_INDEX()": FunctionFragment;
    "CVXCRV_CVXCRV_INDEX()": FunctionFragment;
    "CVXCRV_STAKING_CONTRACT()": FunctionFragment;
    "CVXCRV_TOKEN()": FunctionFragment;
    "CVXETH_CVX_INDEX()": FunctionFragment;
    "CVXETH_ETH_INDEX()": FunctionFragment;
    "CVX_TOKEN()": FunctionFragment;
    "admin()": FunctionFragment;
    "claim(uint256,address,uint256,bytes32[],uint8)": FunctionFragment;
    "depositor()": FunctionFragment;
    "freeze()": FunctionFragment;
    "frozen()": FunctionFragment;
    "isClaimed(uint256)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "setApprovals()": FunctionFragment;
    "token()": FunctionFragment;
    "unfreeze()": FunctionFragment;
    "updateAdmin(address)": FunctionFragment;
    "updateMerkleRoot(bytes32)": FunctionFragment;
    "week()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CRVETH_CRV_INDEX"
      | "CRVETH_ETH_INDEX"
      | "CRV_TOKEN"
      | "CURVE_CRV_ETH_POOL"
      | "CURVE_CVXCRV_CRV_POOL"
      | "CURVE_CVX_ETH_POOL"
      | "CVXCRV_CRV_INDEX"
      | "CVXCRV_CVXCRV_INDEX"
      | "CVXCRV_STAKING_CONTRACT"
      | "CVXCRV_TOKEN"
      | "CVXETH_CVX_INDEX"
      | "CVXETH_ETH_INDEX"
      | "CVX_TOKEN"
      | "admin"
      | "claim"
      | "depositor"
      | "freeze"
      | "frozen"
      | "isClaimed"
      | "merkleRoot"
      | "setApprovals"
      | "token"
      | "unfreeze"
      | "updateAdmin"
      | "updateMerkleRoot"
      | "week"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CRVETH_CRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CRVETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CRV_TOKEN", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CURVE_CRV_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVXCRV_CRV_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_CVX_ETH_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_CRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_CVXCRV_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_STAKING_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXCRV_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_CVX_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CVXETH_ETH_INDEX",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "CVX_TOKEN", values?: undefined): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "depositor", values?: undefined): string;
  encodeFunctionData(functionFragment: "freeze", values?: undefined): string;
  encodeFunctionData(functionFragment: "frozen", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(functionFragment: "unfreeze", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "updateAdmin",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMerkleRoot",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "week", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "CRVETH_CRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CRVETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CRV_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CRV_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVXCRV_CRV_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_CVX_ETH_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_CRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_CVXCRV_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_STAKING_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXCRV_TOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_CVX_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CVXETH_ETH_INDEX",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "CVX_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositor", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "freeze", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "frozen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unfreeze", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "week", data: BytesLike): Result;

  events: {
    "AdminUpdated(address,address)": EventFragment;
    "Claimed(uint256,uint256,address,uint256,uint8)": EventFragment;
    "MerkleRootUpdated(bytes32,uint32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Claimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MerkleRootUpdated"): EventFragment;
}

export interface AdminUpdatedEventObject {
  oldAdmin: string;
  newAdmin: string;
}
export type AdminUpdatedEvent = TypedEvent<
  [string, string],
  AdminUpdatedEventObject
>;

export type AdminUpdatedEventFilter = TypedEventFilter<AdminUpdatedEvent>;

export interface ClaimedEventObject {
  index: BigNumber;
  amount: BigNumber;
  account: string;
  week: BigNumber;
  option: number;
}
export type ClaimedEvent = TypedEvent<
  [BigNumber, BigNumber, string, BigNumber, number],
  ClaimedEventObject
>;

export type ClaimedEventFilter = TypedEventFilter<ClaimedEvent>;

export interface MerkleRootUpdatedEventObject {
  merkleRoot: string;
  week: number;
}
export type MerkleRootUpdatedEvent = TypedEvent<
  [string, number],
  MerkleRootUpdatedEventObject
>;

export type MerkleRootUpdatedEventFilter =
  TypedEventFilter<MerkleRootUpdatedEvent>;

export interface MerkleDistributor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleDistributorInterface;

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
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<[string]>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<[string]>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<[BigNumber]>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<[string]>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      option: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    depositor(overrides?: CallOverrides): Promise<[string]>;

    freeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    frozen(overrides?: CallOverrides): Promise<[boolean]>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    token(overrides?: CallOverrides): Promise<[string]>;

    unfreeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    week(overrides?: CallOverrides): Promise<[number]>;
  };

  CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<string>;

  CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

  CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

  CVXCRV_TOKEN(overrides?: CallOverrides): Promise<string>;

  CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

  CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

  admin(overrides?: CallOverrides): Promise<string>;

  claim(
    index: PromiseOrValue<BigNumberish>,
    account: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    merkleProof: PromiseOrValue<BytesLike>[],
    option: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  depositor(overrides?: CallOverrides): Promise<string>;

  freeze(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  frozen(overrides?: CallOverrides): Promise<boolean>;

  isClaimed(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  setApprovals(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  token(overrides?: CallOverrides): Promise<string>;

  unfreeze(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateAdmin(
    newAdmin: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateMerkleRoot(
    _merkleRoot: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  week(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<string>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<string>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<string>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<string>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<string>;

    admin(overrides?: CallOverrides): Promise<string>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      option: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    depositor(overrides?: CallOverrides): Promise<string>;

    freeze(overrides?: CallOverrides): Promise<void>;

    frozen(overrides?: CallOverrides): Promise<boolean>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    setApprovals(overrides?: CallOverrides): Promise<void>;

    token(overrides?: CallOverrides): Promise<string>;

    unfreeze(overrides?: CallOverrides): Promise<void>;

    updateAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    week(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "AdminUpdated(address,address)"(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): AdminUpdatedEventFilter;
    AdminUpdated(
      oldAdmin?: PromiseOrValue<string> | null,
      newAdmin?: PromiseOrValue<string> | null
    ): AdminUpdatedEventFilter;

    "Claimed(uint256,uint256,address,uint256,uint8)"(
      index?: null,
      amount?: null,
      account?: PromiseOrValue<string> | null,
      week?: PromiseOrValue<BigNumberish> | null,
      option?: null
    ): ClaimedEventFilter;
    Claimed(
      index?: null,
      amount?: null,
      account?: PromiseOrValue<string> | null,
      week?: PromiseOrValue<BigNumberish> | null,
      option?: null
    ): ClaimedEventFilter;

    "MerkleRootUpdated(bytes32,uint32)"(
      merkleRoot?: PromiseOrValue<BytesLike> | null,
      week?: PromiseOrValue<BigNumberish> | null
    ): MerkleRootUpdatedEventFilter;
    MerkleRootUpdated(
      merkleRoot?: PromiseOrValue<BytesLike> | null,
      week?: PromiseOrValue<BigNumberish> | null
    ): MerkleRootUpdatedEventFilter;
  };

  estimateGas: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CRV_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVXCRV_CRV_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CURVE_CVX_ETH_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_CVXCRV_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_STAKING_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      option: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    depositor(overrides?: CallOverrides): Promise<BigNumber>;

    freeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    frozen(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    unfreeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    week(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CRVETH_CRV_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRVETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CURVE_CRV_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVXCRV_CRV_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CURVE_CVX_ETH_POOL(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_CRV_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXCRV_CVXCRV_INDEX(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_STAKING_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    CVXCRV_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXETH_CVX_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVXETH_ETH_INDEX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX_TOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claim(
      index: PromiseOrValue<BigNumberish>,
      account: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      merkleProof: PromiseOrValue<BytesLike>[],
      option: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    depositor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    frozen(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setApprovals(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unfreeze(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateAdmin(
      newAdmin: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateMerkleRoot(
      _merkleRoot: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    week(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}

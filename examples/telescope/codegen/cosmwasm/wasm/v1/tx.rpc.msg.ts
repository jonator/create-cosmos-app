import { Rpc } from "@osmonauts/helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgStoreCode, MsgStoreCodeResponse, MsgStoreCodeResponseSDKType, MsgInstantiateContract, MsgInstantiateContractResponse, MsgInstantiateContractResponseSDKType, MsgExecuteContract, MsgExecuteContractResponse, MsgExecuteContractResponseSDKType, MsgMigrateContract, MsgMigrateContractResponse, MsgMigrateContractResponseSDKType, MsgUpdateAdmin, MsgUpdateAdminResponse, MsgUpdateAdminResponseSDKType, MsgClearAdmin, MsgClearAdminResponse, MsgClearAdminResponseSDKType } from "./tx";
/** Msg defines the RPC service */

export interface Msg {
  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponseSDKType>;
  /*StoreCode to submit Wasm code to the system*/

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponseSDKType>;
  /*Instantiate creates a new smart contract instance for the given code id.*/

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponseSDKType>;
  /*Execute submits the given message data to a smart contract*/

  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponseSDKType>;
  /*Migrate runs a code upgrade/ downgrade for a smart contract*/

  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponseSDKType>;
  /*UpdateAdmin sets a new   admin for a smart contract*/

  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponseSDKType>;
  /*ClearAdmin removes any admin stored for a smart contract*/

}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.storeCode = this.storeCode.bind(this);
    this.instantiateContract = this.instantiateContract.bind(this);
    this.executeContract = this.executeContract.bind(this);
    this.migrateContract = this.migrateContract.bind(this);
    this.updateAdmin = this.updateAdmin.bind(this);
    this.clearAdmin = this.clearAdmin.bind(this);
  }

  storeCode(request: MsgStoreCode): Promise<MsgStoreCodeResponseSDKType> {
    const data = MsgStoreCode.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "StoreCode", data);
    return promise.then(data => MsgStoreCodeResponse.decode(new _m0.Reader(data)));
  }

  instantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponseSDKType> {
    const data = MsgInstantiateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "InstantiateContract", data);
    return promise.then(data => MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
  }

  executeContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponseSDKType> {
    const data = MsgExecuteContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ExecuteContract", data);
    return promise.then(data => MsgExecuteContractResponse.decode(new _m0.Reader(data)));
  }

  migrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponseSDKType> {
    const data = MsgMigrateContract.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "MigrateContract", data);
    return promise.then(data => MsgMigrateContractResponse.decode(new _m0.Reader(data)));
  }

  updateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponseSDKType> {
    const data = MsgUpdateAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "UpdateAdmin", data);
    return promise.then(data => MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
  }

  clearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponseSDKType> {
    const data = MsgClearAdmin.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Msg", "ClearAdmin", data);
    return promise.then(data => MsgClearAdminResponse.decode(new _m0.Reader(data)));
  }

}
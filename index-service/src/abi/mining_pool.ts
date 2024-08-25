import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x51db8128f6fdf52ba90763e498a9b03b60c3a026b681dcba5657e0ee3f900e52",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.76.0",
        "build_info": {
            "build_mode": "Release",
            "cargo_contract_version": "3.2.0",
            "rust_toolchain": "stable-aarch64-apple-darwin",
            "wasm_opt_settings": {
                "keep_debug_symbols": false,
                "optimization_passes": "Z"
            }
        }
    },
    "contract": {
        "name": "mining_pool",
        "version": "0.2.0",
        "authors": [
            "D9"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "main_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "merchant_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "node_reward_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "amm_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [
                    "Constructor that initializes the `bool` value to the given `init_value`."
                ],
                "label": "new",
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink_primitives",
                        "ConstructorResult"
                    ],
                    "type": 5
                },
                "selector": "0x9bae9d5e"
            }
        ],
        "docs": [],
        "environment": {
            "accountId": {
                "displayName": [
                    "AccountId"
                ],
                "type": 0
            },
            "balance": {
                "displayName": [
                    "Balance"
                ],
                "type": 3
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 4
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 16
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 14
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 15
            }
        },
        "events": [],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 7
        },
        "messages": [
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_accumulative_reward_pool",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x71ebcde6"
            },
            {
                "args": [
                    {
                        "label": "account_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "pay_node_reward",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x2f0dd006"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_merchant_volume",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x3e3207be"
            },
            {
                "args": [
                    {
                        "label": "session_index",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_session_volume",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x91894472"
            },
            {
                "args": [
                    {
                        "label": "session_index",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "update_pool_and_retrieve",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0x8a1783cd"
            },
            {
                "args": [
                    {
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "deduct_from_reward_pool",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x7df305eb"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_total_volume",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xe88330b2"
            },
            {
                "args": [
                    {
                        "label": "merchant_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "process_merchant_payment",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0xcbdfeaf9"
            },
            {
                "args": [
                    {
                        "label": "user_account",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "redeemable_usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "merchant_user_redeem_d9",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 12
                },
                "selector": "0x152062a1"
            },
            {
                "args": [
                    {
                        "label": "merchant_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_merchant_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x1221b207"
            },
            {
                "args": [
                    {
                        "label": "to",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "send_to",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x651d5be0"
            },
            {
                "args": [
                    {
                        "label": "node_reward_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_node_reward_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x5cfb2c63"
            },
            {
                "args": [
                    {
                        "label": "amm_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_amm_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0x0db11b82"
            },
            {
                "args": [
                    {
                        "label": "main_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_main_contract",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 9
                },
                "selector": "0xbb530edc"
            },
            {
                "args": [
                    {
                        "label": "code_hash",
                        "type": {
                            "displayName": [],
                            "type": 1
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "set_code",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 5
                },
                "selector": "0x694fb50f"
            }
        ]
    },
    "storage": {
        "root": {
            "layout": {
                "struct": {
                    "fields": [
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "main_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "merchant_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "node_reward_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "amm_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "merchant_volume"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0xd9887759",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0xd9887759"
                                }
                            },
                            "name": "volume_at_index"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "last_session"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "accumulative_reward_pool"
                        }
                    ],
                    "name": "MiningPool"
                }
            },
            "root_key": "0x00000000"
        }
    },
    "types": [
        {
            "id": 0,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "AccountId"
                ]
            }
        },
        {
            "id": 1,
            "type": {
                "def": {
                    "array": {
                        "len": 32,
                        "type": 2
                    }
                }
            }
        },
        {
            "id": 2,
            "type": {
                "def": {
                    "primitive": "u8"
                }
            }
        },
        {
            "id": 3,
            "type": {
                "def": {
                    "primitive": "u128"
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 5,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 6
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 6,
            "type": {
                "def": {
                    "tuple": []
                }
            }
        },
        {
            "id": 7,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 1,
                                "name": "CouldNotReadInput"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "LangError"
                ]
            }
        },
        {
            "id": 8,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 9,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 10
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 10
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 10,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 6
                    },
                    {
                        "name": "E",
                        "type": 11
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 11,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0,
                                        "typeName": "AccountId"
                                    }
                                ],
                                "index": 0,
                                "name": "OnlyCallableBy"
                            },
                            {
                                "index": 1,
                                "name": "FailedToGetExchangeAmount"
                            },
                            {
                                "index": 2,
                                "name": "FailedToTransferD9ToUser"
                            },
                            {
                                "index": 3,
                                "name": "SessionPoolNotReady"
                            },
                            {
                                "index": 4,
                                "name": "ErrorAddingVotes"
                            }
                        ]
                    }
                },
                "path": [
                    "mining_pool",
                    "mining_pool",
                    "Error"
                ]
            }
        },
        {
            "id": 12,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 13
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 7
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 13
                    },
                    {
                        "name": "E",
                        "type": 7
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 13,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 11
                                    }
                                ],
                                "index": 1,
                                "name": "Err"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    },
                    {
                        "name": "E",
                        "type": 11
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 14,
            "type": {
                "def": {
                    "composite": {
                        "fields": [
                            {
                                "type": 1,
                                "typeName": "[u8; 32]"
                            }
                        ]
                    }
                },
                "path": [
                    "ink_primitives",
                    "types",
                    "Hash"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {}
                },
                "path": [
                    "d9_chain_extension",
                    "D9ChainExtension"
                ]
            }
        }
    ],
    "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(bytes: Bytes): Event {
    return _abi.decodeEvent(bytes)
}

export function decodeMessage(bytes: Bytes): Message {
    return _abi.decodeMessage(bytes)
}

export function decodeConstructor(bytes: Bytes): Constructor {
    return _abi.decodeConstructor(bytes)
}

export interface Chain {
    rpc: {
        call<T=any>(method: string, params?: unknown[]): Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: Bytes, private blockHash?: Bytes) { }

    get_accumulative_reward_pool(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x71ebcde6', [])
    }

    get_merchant_volume(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x3e3207be', [])
    }

    get_session_volume(session_index: u32): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x91894472', [session_index])
    }

    get_total_volume(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0xe88330b2', [])
    }

    merchant_user_redeem_d9(user_account: AccountId, redeemable_usdt: Balance): Promise<Result<Result<Balance, Error>, LangError>> {
        return this.stateCall('0x152062a1', [user_account, redeemable_usdt])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Error = Error_ErrorAddingVotes | Error_FailedToGetExchangeAmount | Error_FailedToTransferD9ToUser | Error_OnlyCallableBy | Error_SessionPoolNotReady

export interface Error_ErrorAddingVotes {
    __kind: 'ErrorAddingVotes'
}

export interface Error_FailedToGetExchangeAmount {
    __kind: 'FailedToGetExchangeAmount'
}

export interface Error_FailedToTransferD9ToUser {
    __kind: 'FailedToTransferD9ToUser'
}

export interface Error_OnlyCallableBy {
    __kind: 'OnlyCallableBy'
    value: AccountId
}

export interface Error_SessionPoolNotReady {
    __kind: 'SessionPoolNotReady'
}

export type AccountId = Bytes

export type u32 = number

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Balance = bigint

export type Constructor = Constructor_new

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    mainContract: AccountId
    merchantContract: AccountId
    nodeRewardContract: AccountId
    ammContract: AccountId
}

export type Message = Message_change_amm_contract | Message_change_main_contract | Message_change_merchant_contract | Message_change_node_reward_contract | Message_deduct_from_reward_pool | Message_get_accumulative_reward_pool | Message_get_merchant_volume | Message_get_session_volume | Message_get_total_volume | Message_merchant_user_redeem_d9 | Message_pay_node_reward | Message_process_merchant_payment | Message_send_to | Message_set_code | Message_update_pool_and_retrieve

export interface Message_change_amm_contract {
    __kind: 'change_amm_contract'
    ammContract: AccountId
}

export interface Message_change_main_contract {
    __kind: 'change_main_contract'
    mainContract: AccountId
}

export interface Message_change_merchant_contract {
    __kind: 'change_merchant_contract'
    merchantContract: AccountId
}

export interface Message_change_node_reward_contract {
    __kind: 'change_node_reward_contract'
    nodeRewardContract: AccountId
}

export interface Message_deduct_from_reward_pool {
    __kind: 'deduct_from_reward_pool'
    amount: Balance
}

export interface Message_get_accumulative_reward_pool {
    __kind: 'get_accumulative_reward_pool'
}

export interface Message_get_merchant_volume {
    __kind: 'get_merchant_volume'
}

export interface Message_get_session_volume {
    __kind: 'get_session_volume'
    sessionIndex: u32
}

export interface Message_get_total_volume {
    __kind: 'get_total_volume'
}

export interface Message_merchant_user_redeem_d9 {
    __kind: 'merchant_user_redeem_d9'
    userAccount: AccountId
    redeemableUsdt: Balance
}

export interface Message_pay_node_reward {
    __kind: 'pay_node_reward'
    accountId: AccountId
    amount: Balance
}

export interface Message_process_merchant_payment {
    __kind: 'process_merchant_payment'
    merchantId: AccountId
}

export interface Message_send_to {
    __kind: 'send_to'
    to: AccountId
    amount: Balance
}

export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Bytes
}

export interface Message_update_pool_and_retrieve {
    __kind: 'update_pool_and_retrieve'
    sessionIndex: u32
}

export type Event = never

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}

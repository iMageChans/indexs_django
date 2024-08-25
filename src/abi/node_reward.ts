import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0x049411e2736bb853d6fca73db41282ada104b409bc78926e061d164e38204479",
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
        "name": "node_reward",
        "version": "1.0.0",
        "authors": [
            "D9 Network tech@d9network.com"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "mining_pool",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "rewards_pallet",
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
                "type": 12
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 22
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 21
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 4
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "node",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "receiver",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "amount",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "docs": [],
                "label": "NodeRewardPaid"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "session_index",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 12
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "reward_pool",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "total_paid_out",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 3
                        }
                    }
                ],
                "docs": [],
                "label": "SessionRewardsIssued"
            }
        ],
        "lang_error": {
            "displayName": [
                "ink",
                "LangError"
            ],
            "type": 7
        },
        "messages": [
            {
                "args": [
                    {
                        "label": "mining_pool",
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
                "label": "set_mining_pool",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xbad17c27"
            },
            {
                "args": [
                    {
                        "label": "rewards_pallet",
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
                "label": "set_rewards_pallet",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xe54af172"
            },
            {
                "args": [
                    {
                        "label": "new_admin",
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
                "label": "relinquish_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xda7dbaee"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "accept_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x3830821d"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "cancel_admin_relinquish",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0xf9cc42d0"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_vote_limit",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0x345bb4a1"
            },
            {
                "args": [
                    {
                        "label": "new_limit",
                        "type": {
                            "displayName": [
                                "u64"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "change_vote_limit",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x3b7e719a"
            },
            {
                "args": [
                    {
                        "label": "node_id",
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
                "label": "withdraw_reward",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x07fe6b9e"
            },
            {
                "args": [
                    {
                        "label": "session_index",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 12
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_session_rewards_data",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 13
                },
                "selector": "0x5b4a8bb7"
            },
            {
                "args": [
                    {
                        "label": "node_id",
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
                "label": "get_node_reward_data",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 16
                },
                "selector": "0x72c500b8"
            },
            {
                "args": [
                    {
                        "label": "node_id",
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
                "label": "get_authorized_receiver",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 18
                },
                "selector": "0x7a99af59"
            },
            {
                "args": [
                    {
                        "label": "node_id",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "receiver",
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
                "label": "set_authorized_receiver",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x0aa2247a"
            },
            {
                "args": [
                    {
                        "label": "node_id",
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
                "label": "remove_authorized_receiver",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x58920ed0"
            },
            {
                "args": [
                    {
                        "label": "last_session",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 12
                        }
                    },
                    {
                        "label": "sorted_nodes_and_votes",
                        "type": {
                            "displayName": [
                                "Vec"
                            ],
                            "type": 19
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "update_rewards",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x93440f8d"
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
                            "name": "new_admin"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "mining_pool"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "rewards_pallet"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "struct": {
                                            "fields": [
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x57cf89ff",
                                                            "ty": 3
                                                        }
                                                    },
                                                    "name": "0"
                                                },
                                                {
                                                    "layout": {
                                                        "leaf": {
                                                            "key": "0x57cf89ff",
                                                            "ty": 3
                                                        }
                                                    },
                                                    "name": "1"
                                                }
                                            ],
                                            "name": "(A, B)"
                                        }
                                    },
                                    "root_key": "0x57cf89ff"
                                }
                            },
                            "name": "session_rewards"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0xce7978af",
                                            "ty": 3
                                        }
                                    },
                                    "root_key": "0xce7978af"
                                }
                            },
                            "name": "node_reward"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x2802a071",
                                            "ty": 0
                                        }
                                    },
                                    "root_key": "0x2802a071"
                                }
                            },
                            "name": "authorized_reward_receiver"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "vote_limit"
                        }
                    ],
                    "name": "NodeReward"
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
                    "primitive": "u64"
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
                                        "type": 9
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
                        "type": 9
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
                                        "type": 6
                                    }
                                ],
                                "index": 0,
                                "name": "Ok"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 10
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
                        "type": 10
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
                                        "type": 0,
                                        "typeName": "AccountId"
                                    }
                                ],
                                "index": 0,
                                "name": "OnlyCallableBy"
                            },
                            {
                                "index": 1,
                                "name": "BeyondQualificationForNodeStatus"
                            },
                            {
                                "index": 2,
                                "name": "ErrorIssuingPayment"
                            },
                            {
                                "index": 3,
                                "name": "ErrorGettingSessionPoolFromMiningPoolContract"
                            },
                            {
                                "index": 4,
                                "name": "NotAuthorizedToWithdraw"
                            },
                            {
                                "index": 5,
                                "name": "NothingToWithdraw"
                            },
                            {
                                "index": 6,
                                "name": "ErrorGettingCurrentValidators"
                            }
                        ]
                    }
                },
                "path": [
                    "node_reward",
                    "node_reward",
                    "Error"
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
                                        "type": 4
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
                        "type": 4
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
            "id": 12,
            "type": {
                "def": {
                    "primitive": "u32"
                }
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
                                        "type": 14
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
                        "type": 14
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
            "id": 14,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 15
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 15
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "tuple": [
                        3,
                        3
                    ]
                }
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 17
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
                        "type": 17
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
            "id": 17,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 3
                                    }
                                ],
                                "index": 1,
                                "name": "Some"
                            }
                        ]
                    }
                },
                "params": [
                    {
                        "name": "T",
                        "type": 3
                    }
                ],
                "path": [
                    "Option"
                ]
            }
        },
        {
            "id": 18,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 0
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
                        "type": 0
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
            "id": 19,
            "type": {
                "def": {
                    "sequence": {
                        "type": 20
                    }
                }
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "tuple": [
                        0,
                        4
                    ]
                }
            }
        },
        {
            "id": 21,
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
            "id": 22,
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

    get_vote_limit(): Promise<Result<u64, LangError>> {
        return this.stateCall('0x345bb4a1', [])
    }

    get_session_rewards_data(session_index: u32): Promise<Result<([Balance, Balance] | undefined), LangError>> {
        return this.stateCall('0x5b4a8bb7', [session_index])
    }

    get_node_reward_data(node_id: AccountId): Promise<Result<(Balance | undefined), LangError>> {
        return this.stateCall('0x72c500b8', [node_id])
    }

    get_authorized_receiver(node_id: AccountId): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0x7a99af59', [node_id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type AccountId = Bytes

export type Balance = bigint

export type u32 = number

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type u64 = bigint

export type Constructor = Constructor_new

/**
 * Constructor that initializes the `bool` value to the given `init_value`.
 */
export interface Constructor_new {
    __kind: 'new'
    miningPool: AccountId
    rewardsPallet: AccountId
}

export type Message = Message_accept_admin | Message_cancel_admin_relinquish | Message_change_vote_limit | Message_get_authorized_receiver | Message_get_node_reward_data | Message_get_session_rewards_data | Message_get_vote_limit | Message_relinquish_admin | Message_remove_authorized_receiver | Message_set_authorized_receiver | Message_set_code | Message_set_mining_pool | Message_set_rewards_pallet | Message_update_rewards | Message_withdraw_reward

export interface Message_accept_admin {
    __kind: 'accept_admin'
}

export interface Message_cancel_admin_relinquish {
    __kind: 'cancel_admin_relinquish'
}

export interface Message_change_vote_limit {
    __kind: 'change_vote_limit'
    newLimit: u64
}

export interface Message_get_authorized_receiver {
    __kind: 'get_authorized_receiver'
    nodeId: AccountId
}

export interface Message_get_node_reward_data {
    __kind: 'get_node_reward_data'
    nodeId: AccountId
}

export interface Message_get_session_rewards_data {
    __kind: 'get_session_rewards_data'
    sessionIndex: u32
}

export interface Message_get_vote_limit {
    __kind: 'get_vote_limit'
}

export interface Message_relinquish_admin {
    __kind: 'relinquish_admin'
    newAdmin: AccountId
}

export interface Message_remove_authorized_receiver {
    __kind: 'remove_authorized_receiver'
    nodeId: AccountId
}

export interface Message_set_authorized_receiver {
    __kind: 'set_authorized_receiver'
    nodeId: AccountId
    receiver: AccountId
}

export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Bytes
}

export interface Message_set_mining_pool {
    __kind: 'set_mining_pool'
    miningPool: AccountId
}

export interface Message_set_rewards_pallet {
    __kind: 'set_rewards_pallet'
    rewardsPallet: AccountId
}

export interface Message_update_rewards {
    __kind: 'update_rewards'
    lastSession: u32
    sortedNodesAndVotes: [AccountId, u64][]
}

export interface Message_withdraw_reward {
    __kind: 'withdraw_reward'
    nodeId: AccountId
}

export type Event = Event_NodeRewardPaid | Event_SessionRewardsIssued

export interface Event_NodeRewardPaid {
    __kind: 'NodeRewardPaid'
    node: AccountId
    receiver: AccountId
    amount: Balance
}

export interface Event_SessionRewardsIssued {
    __kind: 'SessionRewardsIssued'
    sessionIndex: u32
    rewardPool: Balance
    totalPaidOut: Balance
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}

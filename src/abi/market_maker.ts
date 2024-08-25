import {Abi, Bytes, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
    "source": {
        "hash": "0xd215283db7fe7c14361e57395565d8fccc14b7a1d09b520ee7d209cb5bebdfc6",
        "language": "ink! 4.3.0",
        "compiler": "rustc 1.79.0",
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
        "name": "market-maker",
        "version": "1.0.0",
        "authors": [
            "D9Dev"
        ]
    },
    "spec": {
        "constructors": [
            {
                "args": [
                    {
                        "label": "usdt_contract",
                        "type": {
                            "displayName": [
                                "AccountId"
                            ],
                            "type": 0
                        }
                    },
                    {
                        "label": "fee_percent",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 3
                        }
                    },
                    {
                        "label": "liquidity_tolerance_percent",
                        "type": {
                            "displayName": [
                                "u32"
                            ],
                            "type": 3
                        }
                    }
                ],
                "default": false,
                "docs": [],
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
                "type": 4
            },
            "blockNumber": {
                "displayName": [
                    "BlockNumber"
                ],
                "type": 3
            },
            "chainExtension": {
                "displayName": [
                    "ChainExtension"
                ],
                "type": 24
            },
            "hash": {
                "displayName": [
                    "Hash"
                ],
                "type": 22
            },
            "maxEventTopics": 4,
            "timestamp": {
                "displayName": [
                    "Timestamp"
                ],
                "type": 23
            }
        },
        "events": [
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account_id",
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
                        "label": "usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "d9",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "LiquidityAdded"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account_id",
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
                        "label": "usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "d9",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "LiquidityRemoved"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account_id",
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
                        "label": "usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "d9",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "D9ToUSDTConversion"
            },
            {
                "args": [
                    {
                        "docs": [],
                        "indexed": true,
                        "label": "account_id",
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
                        "label": "usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "docs": [],
                        "indexed": false,
                        "label": "d9",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "docs": [],
                "label": "USDTToD9Conversion"
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
                "label": "change_admin",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 5
                },
                "selector": "0x61ae97d7"
            },
            {
                "args": [],
                "default": false,
                "docs": [
                    " get pool balances (d9, usdt)"
                ],
                "label": "get_currency_reserves",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 8
                },
                "selector": "0x43b2d0e6"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "get_total_lp_tokens",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0x25445509"
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
                    }
                ],
                "default": false,
                "docs": [],
                "label": "get_liquidity_provider",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 11
                },
                "selector": "0x32e702ad"
            },
            {
                "args": [
                    {
                        "label": "usdt_liquidity",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " add liquidity by adding tokens to the reserves"
                ],
                "label": "add_liquidity",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 13
                },
                "selector": "0x264cd04b"
            },
            {
                "args": [],
                "default": false,
                "docs": [],
                "label": "remove_liquidity",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 13
                },
                "selector": "0xbdd16bfa"
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
                "docs": [
                    " Modifies the code which is used to execute calls to this contract address (`AccountId`).",
                    "",
                    " We use this to upgrade the contract logic. We don't do any authorization here, any caller",
                    " can execute this method. In a production contract you would do some authorization here."
                ],
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
            },
            {
                "args": [
                    {
                        "label": "usdt_liquidity",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "d9_liquidity",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "check_new_liquidity",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 13
                },
                "selector": "0x5a150c03"
            },
            {
                "args": [
                    {
                        "label": "usdt",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " sell usdt"
                ],
                "label": "get_d9",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0x0edab8e1"
            },
            {
                "args": [],
                "default": false,
                "docs": [
                    " sell d9"
                ],
                "label": "get_usdt",
                "mutates": true,
                "payable": true,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0x5b41ab8a"
            },
            {
                "args": [
                    {
                        "label": "d9_liquidity",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    },
                    {
                        "label": "usdt_liquidity",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " calculate lp tokens based on usdt liquidity"
                ],
                "label": "calc_new_lp_tokens",
                "mutates": true,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 10
                },
                "selector": "0xbdcee4ed"
            },
            {
                "args": [
                    {
                        "label": "direction",
                        "type": {
                            "displayName": [
                                "Direction"
                            ],
                            "type": 19
                        }
                    },
                    {
                        "label": "amount_0",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " amount of currency B from A, if A => B"
                ],
                "label": "calculate_exchange",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 17
                },
                "selector": "0x2413eb9a"
            },
            {
                "args": [
                    {
                        "label": "direction",
                        "type": {
                            "displayName": [
                                "Direction"
                            ],
                            "type": 19
                        }
                    },
                    {
                        "label": "amount_0",
                        "type": {
                            "displayName": [
                                "Balance"
                            ],
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [],
                "label": "estimate_exchange",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 20
                },
                "selector": "0x06f49352"
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
                            "type": 4
                        }
                    }
                ],
                "default": false,
                "docs": [
                    " check if usdt balance is sufficient for swap"
                ],
                "label": "check_usdt_balance",
                "mutates": false,
                "payable": false,
                "returnType": {
                    "displayName": [
                        "ink",
                        "MessageResult"
                    ],
                    "type": 13
                },
                "selector": "0x4a74f8d9"
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
                            "name": "usdt_contract"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "fee_percent"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "fee_total"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 3
                                }
                            },
                            "name": "liquidity_tolerance_percent"
                        },
                        {
                            "layout": {
                                "root": {
                                    "layout": {
                                        "leaf": {
                                            "key": "0x838a4d0c",
                                            "ty": 4
                                        }
                                    },
                                    "root_key": "0x838a4d0c"
                                }
                            },
                            "name": "liquidity_providers"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 4
                                }
                            },
                            "name": "total_lp_tokens"
                        },
                        {
                            "layout": {
                                "leaf": {
                                    "key": "0x00000000",
                                    "ty": 0
                                }
                            },
                            "name": "admin"
                        }
                    ],
                    "name": "MarketMaker"
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
                    "primitive": "u32"
                }
            }
        },
        {
            "id": 4,
            "type": {
                "def": {
                    "primitive": "u128"
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
                    "tuple": [
                        4,
                        4
                    ]
                }
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
            "id": 11,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 12
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
                        "type": 12
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
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "None"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 4
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
                        "type": 4
                    }
                ],
                "path": [
                    "Option"
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
                                        "type": 15
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
                        "type": 15
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 15,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "D9orUSDTProvidedLiquidityAtZero"
                            },
                            {
                                "index": 1,
                                "name": "ConversionAmountTooLow"
                            },
                            {
                                "index": 2,
                                "name": "CouldntTransferUSDTFromUser"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16,
                                        "typeName": "Currency"
                                    }
                                ],
                                "index": 3,
                                "name": "InsufficientLiquidity"
                            },
                            {
                                "index": 4,
                                "name": "InsufficientAllowance"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 16,
                                        "typeName": "Currency"
                                    }
                                ],
                                "index": 5,
                                "name": "MarketMakerHasInsufficientFunds"
                            },
                            {
                                "index": 6,
                                "name": "InsufficientLiquidityProvided"
                            },
                            {
                                "index": 7,
                                "name": "USDTBalanceInsufficient"
                            },
                            {
                                "index": 8,
                                "name": "LiquidityProviderNotFound"
                            },
                            {
                                "fields": [
                                    {
                                        "type": 4,
                                        "typeName": "Balance"
                                    },
                                    {
                                        "type": 4,
                                        "typeName": "Balance"
                                    }
                                ],
                                "index": 9,
                                "name": "LiquidityAddedBeyondTolerance"
                            },
                            {
                                "index": 10,
                                "name": "InsufficientLPTokens"
                            },
                            {
                                "index": 11,
                                "name": "InsufficientContractLPTokens"
                            },
                            {
                                "index": 12,
                                "name": "DivisionByZero"
                            },
                            {
                                "index": 13,
                                "name": "MultiplicationError"
                            },
                            {
                                "index": 14,
                                "name": "USDTTooSmall"
                            },
                            {
                                "index": 15,
                                "name": "USDTTooMuch"
                            },
                            {
                                "index": 16,
                                "name": "LiquidityTooLow"
                            }
                        ]
                    }
                },
                "path": [
                    "market_maker",
                    "market_maker",
                    "Error"
                ]
            }
        },
        {
            "id": 16,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "index": 0,
                                "name": "D9"
                            },
                            {
                                "index": 1,
                                "name": "USDT"
                            }
                        ]
                    }
                },
                "path": [
                    "market_maker",
                    "market_maker",
                    "Currency"
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
                                "fields": [
                                    {
                                        "type": 18
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
                        "type": 18
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
            "id": 18,
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
                                        "type": 15
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
                        "type": 15
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
                    "composite": {
                        "fields": [
                            {
                                "type": 16,
                                "typeName": "Currency"
                            },
                            {
                                "type": 16,
                                "typeName": "Currency"
                            }
                        ]
                    }
                },
                "path": [
                    "market_maker",
                    "market_maker",
                    "Direction"
                ]
            }
        },
        {
            "id": 20,
            "type": {
                "def": {
                    "variant": {
                        "variants": [
                            {
                                "fields": [
                                    {
                                        "type": 21
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
                        "type": 21
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
            "id": 21,
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
                                        "type": 15
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
                        "type": 15
                    }
                ],
                "path": [
                    "Result"
                ]
            }
        },
        {
            "id": 22,
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
            "id": 23,
            "type": {
                "def": {
                    "primitive": "u64"
                }
            }
        },
        {
            "id": 24,
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

    get_currency_reserves(): Promise<Result<[Balance, Balance], LangError>> {
        return this.stateCall('0x43b2d0e6', [])
    }

    get_total_lp_tokens(): Promise<Result<Balance, LangError>> {
        return this.stateCall('0x25445509', [])
    }

    get_liquidity_provider(account_id: AccountId): Promise<Result<(Balance | undefined), LangError>> {
        return this.stateCall('0x32e702ad', [account_id])
    }

    check_new_liquidity(usdt_liquidity: Balance, d9_liquidity: Balance): Promise<Result<Result<null, Error>, LangError>> {
        return this.stateCall('0x5a150c03', [usdt_liquidity, d9_liquidity])
    }

    calculate_exchange(direction: Direction, amount_0: Balance): Promise<Result<Result<Balance, Error>, LangError>> {
        return this.stateCall('0x2413eb9a', [direction, amount_0])
    }

    estimate_exchange(direction: Direction, amount_0: Balance): Promise<Result<Result<[Balance, Balance], Error>, LangError>> {
        return this.stateCall('0x06f49352', [direction, amount_0])
    }

    check_usdt_balance(account_id: AccountId, amount: Balance): Promise<Result<Result<null, Error>, LangError>> {
        return this.stateCall('0x4a74f8d9', [account_id, amount])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.rpc.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Direction = [Currency, Currency]

export type Currency = Currency_D9 | Currency_USDT

export interface Currency_D9 {
    __kind: 'D9'
}

export interface Currency_USDT {
    __kind: 'USDT'
}

export type Error = Error_ConversionAmountTooLow | Error_CouldntTransferUSDTFromUser | Error_D9orUSDTProvidedLiquidityAtZero | Error_DivisionByZero | Error_InsufficientAllowance | Error_InsufficientContractLPTokens | Error_InsufficientLPTokens | Error_InsufficientLiquidity | Error_InsufficientLiquidityProvided | Error_LiquidityAddedBeyondTolerance | Error_LiquidityProviderNotFound | Error_LiquidityTooLow | Error_MarketMakerHasInsufficientFunds | Error_MultiplicationError | Error_USDTBalanceInsufficient | Error_USDTTooMuch | Error_USDTTooSmall

export interface Error_ConversionAmountTooLow {
    __kind: 'ConversionAmountTooLow'
}

export interface Error_CouldntTransferUSDTFromUser {
    __kind: 'CouldntTransferUSDTFromUser'
}

export interface Error_D9orUSDTProvidedLiquidityAtZero {
    __kind: 'D9orUSDTProvidedLiquidityAtZero'
}

export interface Error_DivisionByZero {
    __kind: 'DivisionByZero'
}

export interface Error_InsufficientAllowance {
    __kind: 'InsufficientAllowance'
}

export interface Error_InsufficientContractLPTokens {
    __kind: 'InsufficientContractLPTokens'
}

export interface Error_InsufficientLPTokens {
    __kind: 'InsufficientLPTokens'
}

export interface Error_InsufficientLiquidity {
    __kind: 'InsufficientLiquidity'
    value: Currency
}

export interface Error_InsufficientLiquidityProvided {
    __kind: 'InsufficientLiquidityProvided'
}

export interface Error_LiquidityAddedBeyondTolerance {
    __kind: 'LiquidityAddedBeyondTolerance'
    value: [Balance, Balance]
}

export interface Error_LiquidityProviderNotFound {
    __kind: 'LiquidityProviderNotFound'
}

export interface Error_LiquidityTooLow {
    __kind: 'LiquidityTooLow'
}

export interface Error_MarketMakerHasInsufficientFunds {
    __kind: 'MarketMakerHasInsufficientFunds'
    value: Currency
}

export interface Error_MultiplicationError {
    __kind: 'MultiplicationError'
}

export interface Error_USDTBalanceInsufficient {
    __kind: 'USDTBalanceInsufficient'
}

export interface Error_USDTTooMuch {
    __kind: 'USDTTooMuch'
}

export interface Error_USDTTooSmall {
    __kind: 'USDTTooSmall'
}

export type AccountId = Bytes

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type Balance = bigint

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    usdtContract: AccountId
    feePercent: u32
    liquidityTolerancePercent: u32
}

export type u32 = number

export type Message = Message_add_liquidity | Message_calc_new_lp_tokens | Message_calculate_exchange | Message_change_admin | Message_check_new_liquidity | Message_check_usdt_balance | Message_estimate_exchange | Message_get_currency_reserves | Message_get_d9 | Message_get_liquidity_provider | Message_get_total_lp_tokens | Message_get_usdt | Message_remove_liquidity | Message_set_code

/**
 *  add liquidity by adding tokens to the reserves
 */
export interface Message_add_liquidity {
    __kind: 'add_liquidity'
    usdtLiquidity: Balance
}

/**
 *  calculate lp tokens based on usdt liquidity
 */
export interface Message_calc_new_lp_tokens {
    __kind: 'calc_new_lp_tokens'
    d9Liquidity: Balance
    usdtLiquidity: Balance
}

/**
 *  amount of currency B from A, if A => B
 */
export interface Message_calculate_exchange {
    __kind: 'calculate_exchange'
    direction: Direction
    amount0: Balance
}

export interface Message_change_admin {
    __kind: 'change_admin'
    newAdmin: AccountId
}

export interface Message_check_new_liquidity {
    __kind: 'check_new_liquidity'
    usdtLiquidity: Balance
    d9Liquidity: Balance
}

/**
 *  check if usdt balance is sufficient for swap
 */
export interface Message_check_usdt_balance {
    __kind: 'check_usdt_balance'
    accountId: AccountId
    amount: Balance
}

export interface Message_estimate_exchange {
    __kind: 'estimate_exchange'
    direction: Direction
    amount0: Balance
}

/**
 *  get pool balances (d9, usdt)
 */
export interface Message_get_currency_reserves {
    __kind: 'get_currency_reserves'
}

/**
 *  sell usdt
 */
export interface Message_get_d9 {
    __kind: 'get_d9'
    usdt: Balance
}

export interface Message_get_liquidity_provider {
    __kind: 'get_liquidity_provider'
    accountId: AccountId
}

export interface Message_get_total_lp_tokens {
    __kind: 'get_total_lp_tokens'
}

/**
 *  sell d9
 */
export interface Message_get_usdt {
    __kind: 'get_usdt'
}

export interface Message_remove_liquidity {
    __kind: 'remove_liquidity'
}

/**
 *  Modifies the code which is used to execute calls to this contract address (`AccountId`).
 * 
 *  We use this to upgrade the contract logic. We don't do any authorization here, any caller
 *  can execute this method. In a production contract you would do some authorization here.
 */
export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Bytes
}

export type Event = Event_D9ToUSDTConversion | Event_LiquidityAdded | Event_LiquidityRemoved | Event_USDTToD9Conversion

export interface Event_D9ToUSDTConversion {
    __kind: 'D9ToUSDTConversion'
    accountId: AccountId
    usdt: Balance
    d9: Balance
}

export interface Event_LiquidityAdded {
    __kind: 'LiquidityAdded'
    accountId: AccountId
    usdt: Balance
    d9: Balance
}

export interface Event_LiquidityRemoved {
    __kind: 'LiquidityRemoved'
    accountId: AccountId
    usdt: Balance
    d9: Balance
}

export interface Event_USDTToD9Conversion {
    __kind: 'USDTToD9Conversion'
    accountId: AccountId
    usdt: Balance
    d9: Balance
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}

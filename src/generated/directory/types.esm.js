export default {
    "scalars": [
        0,
        1,
        4,
        10,
        24,
        35,
        45,
        53,
        62,
        64,
        69,
        70,
        80,
        82,
        87,
        95,
        97,
        98,
        104,
        105,
        115,
        117,
        124,
        134,
        141,
        151,
        153,
        161,
        171,
        173,
        174,
        183,
        188,
        197,
        199,
        211,
        221,
        232,
        233,
        243,
        245,
        252,
        262,
        264,
        266,
        271,
        280,
        282,
        287,
        288,
        298,
        300,
        305,
        306,
        316,
        318,
        323,
        324,
        334,
        336,
        343,
        353,
        355,
        360,
        361,
        371,
        373,
        380,
        391,
        393,
        394,
        402,
        413,
        415,
        420,
        429,
        431,
        445,
        456,
        466,
        474,
        485,
        487,
        488
    ],
    "types": {
        "Boolean": {},
        "Float": {},
        "InsertUserData": {
            "brukerBrukerNavn": [
                10
            ],
            "brukerRegion": [
                10
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "identity": [
                10
            ],
            "name": [
                10
            ],
            "password": [
                10
            ],
            "phone_nr": [
                10
            ],
            "role": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "InsertUserOrWarnIfExistsOutput": {
            "affected_rows": [
                4
            ],
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "Int": {},
        "Int_comparison_exp": {
            "_eq": [
                4
            ],
            "_gt": [
                4
            ],
            "_gte": [
                4
            ],
            "_in": [
                4
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                4
            ],
            "_lte": [
                4
            ],
            "_neq": [
                4
            ],
            "_nin": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "ReturnAffectedItemId": {
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "ReturnAffectedRows": {
            "affected_rows": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "SigninOutput": {
            "message": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "SinginOutputWithRefreshToken": {
            "message": [
                10
            ],
            "refresh_token": [
                10
            ],
            "token": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "String": {},
        "String_comparison_exp": {
            "_eq": [
                10
            ],
            "_gt": [
                10
            ],
            "_gte": [
                10
            ],
            "_ilike": [
                10
            ],
            "_in": [
                10
            ],
            "_iregex": [
                10
            ],
            "_is_null": [
                0
            ],
            "_like": [
                10
            ],
            "_lt": [
                10
            ],
            "_lte": [
                10
            ],
            "_neq": [
                10
            ],
            "_nilike": [
                10
            ],
            "_nin": [
                10
            ],
            "_niregex": [
                10
            ],
            "_nlike": [
                10
            ],
            "_nregex": [
                10
            ],
            "_nsimilar": [
                10
            ],
            "_regex": [
                10
            ],
            "_similar": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "UpdateUserOutput": {
            "affected_rows": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins": {
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "created_at": [
                394
            ],
            "email": [
                98
            ],
            "id": [
                488
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "phone": [
                10
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "admins_aggregate": {
            "aggregate": [
                15
            ],
            "nodes": [
                13
            ],
            "__typename": [
                10
            ]
        },
        "admins_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                55
            ],
            "min": [
                56
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs": {
            "admin": [
                13
            ],
            "admin_id": [
                488
            ],
            "authenticated_at": [
                394
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate": {
            "aggregate": [
                18
            ],
            "nodes": [
                16
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate_fields": {
            "avg": [
                21
            ],
            "count": [
                4,
                {
                    "columns": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                27
            ],
            "min": [
                29
            ],
            "stddev": [
                37
            ],
            "stddev_pop": [
                39
            ],
            "stddev_samp": [
                41
            ],
            "sum": [
                43
            ],
            "var_pop": [
                46
            ],
            "var_samp": [
                48
            ],
            "variance": [
                50
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_aggregate_order_by": {
            "avg": [
                22
            ],
            "count": [
                266
            ],
            "max": [
                28
            ],
            "min": [
                30
            ],
            "stddev": [
                38
            ],
            "stddev_pop": [
                40
            ],
            "stddev_samp": [
                42
            ],
            "sum": [
                44
            ],
            "var_pop": [
                47
            ],
            "var_samp": [
                49
            ],
            "variance": [
                51
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_arr_rel_insert_input": {
            "data": [
                26
            ],
            "on_conflict": [
                32
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_avg_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_avg_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_bool_exp": {
            "_and": [
                23
            ],
            "_not": [
                23
            ],
            "_or": [
                23
            ],
            "admin": [
                52
            ],
            "admin_id": [
                489
            ],
            "authenticated_at": [
                395
            ],
            "id": [
                5
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_constraint": {},
        "admins_auth_logs_inc_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_insert_input": {
            "admin": [
                58
            ],
            "admin_id": [
                488
            ],
            "authenticated_at": [
                394
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_max_fields": {
            "admin_id": [
                488
            ],
            "authenticated_at": [
                394
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_max_order_by": {
            "admin_id": [
                266
            ],
            "authenticated_at": [
                266
            ],
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_min_fields": {
            "admin_id": [
                488
            ],
            "authenticated_at": [
                394
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_min_order_by": {
            "admin_id": [
                266
            ],
            "authenticated_at": [
                266
            ],
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                16
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_on_conflict": {
            "constraint": [
                24
            ],
            "update_columns": [
                45
            ],
            "where": [
                23
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_order_by": {
            "admin": [
                60
            ],
            "admin_id": [
                266
            ],
            "authenticated_at": [
                266
            ],
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_pk_columns_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_select_column": {},
        "admins_auth_logs_set_input": {
            "admin_id": [
                488
            ],
            "authenticated_at": [
                394
            ],
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_pop_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_stddev_samp_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_sum_fields": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_sum_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_update_column": {},
        "admins_auth_logs_var_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_pop_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_var_samp_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_variance_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "admins_auth_logs_variance_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_bool_exp": {
            "_and": [
                52
            ],
            "_not": [
                52
            ],
            "_or": [
                52
            ],
            "admins_auth_logs": [
                23
            ],
            "created_at": [
                395
            ],
            "email": [
                99
            ],
            "id": [
                489
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "phone": [
                11
            ],
            "updated_at": [
                395
            ],
            "__typename": [
                10
            ]
        },
        "admins_constraint": {},
        "admins_insert_input": {
            "admins_auth_logs": [
                20
            ],
            "created_at": [
                394
            ],
            "email": [
                98
            ],
            "id": [
                488
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "phone": [
                10
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "admins_max_fields": {
            "created_at": [
                394
            ],
            "email": [
                98
            ],
            "id": [
                488
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "phone": [
                10
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "admins_min_fields": {
            "created_at": [
                394
            ],
            "email": [
                98
            ],
            "id": [
                488
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "phone": [
                10
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "admins_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                13
            ],
            "__typename": [
                10
            ]
        },
        "admins_obj_rel_insert_input": {
            "data": [
                54
            ],
            "on_conflict": [
                59
            ],
            "__typename": [
                10
            ]
        },
        "admins_on_conflict": {
            "constraint": [
                53
            ],
            "update_columns": [
                64
            ],
            "where": [
                52
            ],
            "__typename": [
                10
            ]
        },
        "admins_order_by": {
            "admins_auth_logs_aggregate": [
                19
            ],
            "created_at": [
                266
            ],
            "email": [
                266
            ],
            "id": [
                266
            ],
            "name": [
                266
            ],
            "password": [
                266
            ],
            "phone": [
                266
            ],
            "updated_at": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "admins_pk_columns_input": {
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "admins_select_column": {},
        "admins_set_input": {
            "created_at": [
                394
            ],
            "email": [
                98
            ],
            "id": [
                488
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "phone": [
                10
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "admins_update_column": {},
        "auth_methods": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users_auth_logs": [
                437,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                438,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_aggregate": {
            "aggregate": [
                67
            ],
            "nodes": [
                65
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                73
            ],
            "min": [
                74
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_bool_exp": {
            "_and": [
                68
            ],
            "_not": [
                68
            ],
            "_or": [
                68
            ],
            "comment": [
                11
            ],
            "name": [
                11
            ],
            "users_auth_logs": [
                444
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_constraint": {},
        "auth_methods_enum": {},
        "auth_methods_enum_comparison_exp": {
            "_eq": [
                70
            ],
            "_in": [
                70
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                70
            ],
            "_nin": [
                70
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_insert_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users_auth_logs": [
                441
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                65
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_obj_rel_insert_input": {
            "data": [
                72
            ],
            "on_conflict": [
                77
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_on_conflict": {
            "constraint": [
                69
            ],
            "update_columns": [
                82
            ],
            "where": [
                68
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_order_by": {
            "comment": [
                266
            ],
            "name": [
                266
            ],
            "users_auth_logs_aggregate": [
                440
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_select_column": {},
        "auth_methods_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "auth_methods_update_column": {},
        "blacklist_refresh_token": {
            "sig": [
                10
            ],
            "valid_till": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_aggregate": {
            "aggregate": [
                85
            ],
            "nodes": [
                83
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        95,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                89
            ],
            "min": [
                90
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_bool_exp": {
            "_and": [
                86
            ],
            "_not": [
                86
            ],
            "_or": [
                86
            ],
            "sig": [
                11
            ],
            "valid_till": [
                395
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_constraint": {},
        "blacklist_refresh_token_insert_input": {
            "sig": [
                10
            ],
            "valid_till": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_max_fields": {
            "sig": [
                10
            ],
            "valid_till": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_min_fields": {
            "sig": [
                10
            ],
            "valid_till": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                83
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_on_conflict": {
            "constraint": [
                87
            ],
            "update_columns": [
                97
            ],
            "where": [
                86
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_order_by": {
            "sig": [
                266
            ],
            "valid_till": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_pk_columns_input": {
            "sig": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_select_column": {},
        "blacklist_refresh_token_set_input": {
            "sig": [
                10
            ],
            "valid_till": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "blacklist_refresh_token_update_column": {},
        "bpchar": {},
        "bpchar_comparison_exp": {
            "_eq": [
                98
            ],
            "_gt": [
                98
            ],
            "_gte": [
                98
            ],
            "_ilike": [
                98
            ],
            "_in": [
                98
            ],
            "_iregex": [
                98
            ],
            "_is_null": [
                0
            ],
            "_like": [
                98
            ],
            "_lt": [
                98
            ],
            "_lte": [
                98
            ],
            "_neq": [
                98
            ],
            "_nilike": [
                98
            ],
            "_nin": [
                98
            ],
            "_niregex": [
                98
            ],
            "_nlike": [
                98
            ],
            "_nregex": [
                98
            ],
            "_nsimilar": [
                98
            ],
            "_regex": [
                98
            ],
            "_similar": [
                98
            ],
            "__typename": [
                10
            ]
        },
        "connectors": {
            "comment": [
                10
            ],
            "customers": [
                175,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_aggregate": [
                176,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_aggregate": {
            "aggregate": [
                102
            ],
            "nodes": [
                100
            ],
            "__typename": [
                10
            ]
        },
        "connectors_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        115,
                        "[connectors_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                108
            ],
            "min": [
                109
            ],
            "__typename": [
                10
            ]
        },
        "connectors_bool_exp": {
            "_and": [
                103
            ],
            "_not": [
                103
            ],
            "_or": [
                103
            ],
            "comment": [
                11
            ],
            "customers": [
                182
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "connectors_constraint": {},
        "connectors_enum": {},
        "connectors_enum_comparison_exp": {
            "_eq": [
                105
            ],
            "_in": [
                105
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                105
            ],
            "_nin": [
                105
            ],
            "__typename": [
                10
            ]
        },
        "connectors_insert_input": {
            "comment": [
                10
            ],
            "customers": [
                179
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                100
            ],
            "__typename": [
                10
            ]
        },
        "connectors_obj_rel_insert_input": {
            "data": [
                107
            ],
            "on_conflict": [
                112
            ],
            "__typename": [
                10
            ]
        },
        "connectors_on_conflict": {
            "constraint": [
                104
            ],
            "update_columns": [
                117
            ],
            "where": [
                103
            ],
            "__typename": [
                10
            ]
        },
        "connectors_order_by": {
            "comment": [
                266
            ],
            "customers_aggregate": [
                178
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "connectors_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_select_column": {},
        "connectors_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "connectors_update_column": {},
        "customer_user": {
            "brukerBrukerNavn": [
                10
            ],
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "journal_user_id": [
                10
            ],
            "region": [
                10
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate": {
            "aggregate": [
                120
            ],
            "nodes": [
                118
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                126
            ],
            "min": [
                128
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                127
            ],
            "min": [
                129
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_arr_rel_insert_input": {
            "data": [
                125
            ],
            "on_conflict": [
                131
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_bool_exp": {
            "_and": [
                123
            ],
            "_not": [
                123
            ],
            "_or": [
                123
            ],
            "brukerBrukerNavn": [
                11
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "journal_user_id": [
                11
            ],
            "region": [
                11
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_constraint": {},
        "customer_user_insert_input": {
            "brukerBrukerNavn": [
                10
            ],
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "journal_user_id": [
                10
            ],
            "region": [
                10
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_max_fields": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                488
            ],
            "journal_user_id": [
                10
            ],
            "region": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_max_order_by": {
            "brukerBrukerNavn": [
                266
            ],
            "customer_id": [
                266
            ],
            "journal_user_id": [
                266
            ],
            "region": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_min_fields": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                488
            ],
            "journal_user_id": [
                10
            ],
            "region": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_min_order_by": {
            "brukerBrukerNavn": [
                266
            ],
            "customer_id": [
                266
            ],
            "journal_user_id": [
                266
            ],
            "region": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                118
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_on_conflict": {
            "constraint": [
                124
            ],
            "update_columns": [
                174
            ],
            "where": [
                123
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_order_by": {
            "brukerBrukerNavn": [
                266
            ],
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "journal_user_id": [
                266
            ],
            "region": [
                266
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_pk_columns_input": {
            "customer_id": [
                488
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_select_column": {},
        "customer_user_service": {
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "serviceByService": [
                301
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate": {
            "aggregate": [
                137
            ],
            "nodes": [
                135
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                143
            ],
            "min": [
                145
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                144
            ],
            "min": [
                146
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_arr_rel_insert_input": {
            "data": [
                142
            ],
            "on_conflict": [
                148
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_bool_exp": {
            "_and": [
                140
            ],
            "_not": [
                140
            ],
            "_or": [
                140
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "service": [
                307
            ],
            "serviceByService": [
                304
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_constraint": {},
        "customer_user_service_insert_input": {
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "serviceByService": [
                312
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_max_fields": {
            "customer_id": [
                488
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_max_order_by": {
            "customer_id": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_min_fields": {
            "customer_id": [
                488
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_min_order_by": {
            "customer_id": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                135
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_on_conflict": {
            "constraint": [
                141
            ],
            "update_columns": [
                153
            ],
            "where": [
                140
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_order_by": {
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "service": [
                266
            ],
            "serviceByService": [
                314
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_pk_columns_input": {
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_select_column": {},
        "customer_user_service_set_input": {
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_service_update_column": {},
        "customer_user_set_input": {
            "brukerBrukerNavn": [
                10
            ],
            "customer_id": [
                488
            ],
            "journal_user_id": [
                10
            ],
            "region": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service": {
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "serviceByService": [
                301
            ],
            "subServiceByServiceSubService": [
                374
            ],
            "subServiceBySubService": [
                374
            ],
            "sub_service": [
                10
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate": {
            "aggregate": [
                157
            ],
            "nodes": [
                155
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                163
            ],
            "min": [
                165
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                164
            ],
            "min": [
                166
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_arr_rel_insert_input": {
            "data": [
                162
            ],
            "on_conflict": [
                168
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_bool_exp": {
            "_and": [
                160
            ],
            "_not": [
                160
            ],
            "_or": [
                160
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "service": [
                307
            ],
            "serviceByService": [
                304
            ],
            "subServiceByServiceSubService": [
                379
            ],
            "subServiceBySubService": [
                379
            ],
            "sub_service": [
                11
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_constraint": {},
        "customer_user_sub_service_insert_input": {
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "serviceByService": [
                312
            ],
            "subServiceByServiceSubService": [
                387
            ],
            "subServiceBySubService": [
                387
            ],
            "sub_service": [
                10
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_max_fields": {
            "customer_id": [
                488
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_max_order_by": {
            "customer_id": [
                266
            ],
            "sub_service": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_min_fields": {
            "customer_id": [
                488
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_min_order_by": {
            "customer_id": [
                266
            ],
            "sub_service": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                155
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_on_conflict": {
            "constraint": [
                161
            ],
            "update_columns": [
                173
            ],
            "where": [
                160
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_order_by": {
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "service": [
                266
            ],
            "serviceByService": [
                314
            ],
            "subServiceByServiceSubService": [
                389
            ],
            "subServiceBySubService": [
                389
            ],
            "sub_service": [
                266
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_pk_columns_input": {
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_select_column": {},
        "customer_user_sub_service_set_input": {
            "customer_id": [
                488
            ],
            "service": [
                306
            ],
            "sub_service": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customer_user_sub_service_update_column": {},
        "customer_user_update_column": {},
        "customers": {
            "conn_string": [
                10
            ],
            "connector": [
                105
            ],
            "connectorByConnector": [
                100
            ],
            "created_at": [
                394
            ],
            "customer_srv_urls": [
                337,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "customer_srv_urls_aggregate": [
                338,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "customer_user_services": [
                135,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                136,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_sub_services": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_users": [
                118,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_users_aggregate": [
                119,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customers_contact": [
                184
            ],
            "deleted_at": [
                394
            ],
            "features": [
                246,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_aggregate": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner": [
                267
            ],
            "partner_id": [
                488
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                361
            ],
            "statusByStatus": [
                356
            ],
            "updated_at": [
                394
            ],
            "users_auth_logs": [
                437,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                438,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate": {
            "aggregate": [
                177
            ],
            "nodes": [
                175
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate_fields": {
            "avg": [
                180
            ],
            "count": [
                4,
                {
                    "columns": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                202
            ],
            "min": [
                204
            ],
            "stddev": [
                213
            ],
            "stddev_pop": [
                215
            ],
            "stddev_samp": [
                217
            ],
            "sum": [
                219
            ],
            "var_pop": [
                222
            ],
            "var_samp": [
                224
            ],
            "variance": [
                226
            ],
            "__typename": [
                10
            ]
        },
        "customers_aggregate_order_by": {
            "avg": [
                181
            ],
            "count": [
                266
            ],
            "max": [
                203
            ],
            "min": [
                205
            ],
            "stddev": [
                214
            ],
            "stddev_pop": [
                216
            ],
            "stddev_samp": [
                218
            ],
            "sum": [
                220
            ],
            "var_pop": [
                223
            ],
            "var_samp": [
                225
            ],
            "variance": [
                227
            ],
            "__typename": [
                10
            ]
        },
        "customers_arr_rel_insert_input": {
            "data": [
                201
            ],
            "on_conflict": [
                208
            ],
            "__typename": [
                10
            ]
        },
        "customers_avg_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_avg_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_bool_exp": {
            "_and": [
                182
            ],
            "_not": [
                182
            ],
            "_or": [
                182
            ],
            "conn_string": [
                11
            ],
            "connector": [
                106
            ],
            "connectorByConnector": [
                103
            ],
            "created_at": [
                395
            ],
            "customer_srv_urls": [
                342
            ],
            "customer_user_services": [
                140
            ],
            "customer_user_sub_services": [
                160
            ],
            "customer_users": [
                123
            ],
            "customers_contact": [
                187
            ],
            "deleted_at": [
                395
            ],
            "features": [
                251
            ],
            "id": [
                489
            ],
            "name": [
                11
            ],
            "org_nr": [
                11
            ],
            "partner": [
                270
            ],
            "partner_id": [
                489
            ],
            "refresh_token_validity": [
                5
            ],
            "status": [
                362
            ],
            "statusByStatus": [
                359
            ],
            "updated_at": [
                395
            ],
            "users_auth_logs": [
                444
            ],
            "__typename": [
                10
            ]
        },
        "customers_constraint": {},
        "customers_contact": {
            "comm_consents_descr": [
                10
            ],
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_aggregate": {
            "aggregate": [
                186
            ],
            "nodes": [
                184
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        197,
                        "[customers_contact_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                190
            ],
            "min": [
                191
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_bool_exp": {
            "_and": [
                187
            ],
            "_not": [
                187
            ],
            "_or": [
                187
            ],
            "comm_consents_descr": [
                11
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "email": [
                11
            ],
            "logo": [
                11
            ],
            "message": [
                11
            ],
            "tel": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_constraint": {},
        "customers_contact_insert_input": {
            "comm_consents_descr": [
                10
            ],
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_max_fields": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_min_fields": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                184
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_obj_rel_insert_input": {
            "data": [
                189
            ],
            "on_conflict": [
                194
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_on_conflict": {
            "constraint": [
                188
            ],
            "update_columns": [
                199
            ],
            "where": [
                187
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_order_by": {
            "comm_consents_descr": [
                266
            ],
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "email": [
                266
            ],
            "logo": [
                266
            ],
            "message": [
                266
            ],
            "tel": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_pk_columns_input": {
            "customer_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_select_column": {},
        "customers_contact_set_input": {
            "comm_consents_descr": [
                10
            ],
            "customer_id": [
                488
            ],
            "email": [
                10
            ],
            "logo": [
                10
            ],
            "message": [
                10
            ],
            "tel": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "customers_contact_update_column": {},
        "customers_inc_input": {
            "refresh_token_validity": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customers_insert_input": {
            "conn_string": [
                10
            ],
            "connector": [
                105
            ],
            "connectorByConnector": [
                111
            ],
            "created_at": [
                394
            ],
            "customer_srv_urls": [
                341
            ],
            "customer_user_services": [
                139
            ],
            "customer_user_sub_services": [
                159
            ],
            "customer_users": [
                122
            ],
            "customers_contact": [
                193
            ],
            "deleted_at": [
                394
            ],
            "features": [
                250
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner": [
                276
            ],
            "partner_id": [
                488
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                361
            ],
            "statusByStatus": [
                367
            ],
            "updated_at": [
                394
            ],
            "users_auth_logs": [
                441
            ],
            "__typename": [
                10
            ]
        },
        "customers_max_fields": {
            "conn_string": [
                10
            ],
            "created_at": [
                394
            ],
            "deleted_at": [
                394
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                488
            ],
            "refresh_token_validity": [
                4
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "customers_max_order_by": {
            "conn_string": [
                266
            ],
            "created_at": [
                266
            ],
            "deleted_at": [
                266
            ],
            "id": [
                266
            ],
            "name": [
                266
            ],
            "org_nr": [
                266
            ],
            "partner_id": [
                266
            ],
            "refresh_token_validity": [
                266
            ],
            "updated_at": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_min_fields": {
            "conn_string": [
                10
            ],
            "created_at": [
                394
            ],
            "deleted_at": [
                394
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                488
            ],
            "refresh_token_validity": [
                4
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "customers_min_order_by": {
            "conn_string": [
                266
            ],
            "created_at": [
                266
            ],
            "deleted_at": [
                266
            ],
            "id": [
                266
            ],
            "name": [
                266
            ],
            "org_nr": [
                266
            ],
            "partner_id": [
                266
            ],
            "refresh_token_validity": [
                266
            ],
            "updated_at": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                175
            ],
            "__typename": [
                10
            ]
        },
        "customers_obj_rel_insert_input": {
            "data": [
                201
            ],
            "on_conflict": [
                208
            ],
            "__typename": [
                10
            ]
        },
        "customers_on_conflict": {
            "constraint": [
                183
            ],
            "update_columns": [
                221
            ],
            "where": [
                182
            ],
            "__typename": [
                10
            ]
        },
        "customers_order_by": {
            "conn_string": [
                266
            ],
            "connector": [
                266
            ],
            "connectorByConnector": [
                113
            ],
            "created_at": [
                266
            ],
            "customer_srv_urls_aggregate": [
                340
            ],
            "customer_user_services_aggregate": [
                138
            ],
            "customer_user_sub_services_aggregate": [
                158
            ],
            "customer_users_aggregate": [
                121
            ],
            "customers_contact": [
                195
            ],
            "deleted_at": [
                266
            ],
            "features_aggregate": [
                249
            ],
            "id": [
                266
            ],
            "name": [
                266
            ],
            "org_nr": [
                266
            ],
            "partner": [
                278
            ],
            "partner_id": [
                266
            ],
            "refresh_token_validity": [
                266
            ],
            "status": [
                266
            ],
            "statusByStatus": [
                369
            ],
            "updated_at": [
                266
            ],
            "users_auth_logs_aggregate": [
                440
            ],
            "__typename": [
                10
            ]
        },
        "customers_pk_columns_input": {
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "customers_select_column": {},
        "customers_set_input": {
            "conn_string": [
                10
            ],
            "connector": [
                105
            ],
            "created_at": [
                394
            ],
            "deleted_at": [
                394
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "org_nr": [
                10
            ],
            "partner_id": [
                488
            ],
            "refresh_token_validity": [
                4
            ],
            "status": [
                361
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_pop_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_pop_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_samp_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_stddev_samp_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_sum_fields": {
            "refresh_token_validity": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "customers_sum_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_update_column": {},
        "customers_var_pop_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_pop_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_samp_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_var_samp_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "customers_variance_fields": {
            "refresh_token_validity": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "customers_variance_order_by": {
            "refresh_token_validity": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "feature_names": {
            "description": [
                10
            ],
            "features": [
                246,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_aggregate": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_aggregate": {
            "aggregate": [
                230
            ],
            "nodes": [
                228
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        243,
                        "[feature_names_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                236
            ],
            "min": [
                237
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_bool_exp": {
            "_and": [
                231
            ],
            "_not": [
                231
            ],
            "_or": [
                231
            ],
            "description": [
                11
            ],
            "features": [
                251
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_constraint": {},
        "feature_names_enum": {},
        "feature_names_enum_comparison_exp": {
            "_eq": [
                233
            ],
            "_in": [
                233
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                233
            ],
            "_nin": [
                233
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_insert_input": {
            "description": [
                10
            ],
            "features": [
                250
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_max_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_min_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                228
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_obj_rel_insert_input": {
            "data": [
                235
            ],
            "on_conflict": [
                240
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_on_conflict": {
            "constraint": [
                232
            ],
            "update_columns": [
                245
            ],
            "where": [
                231
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_order_by": {
            "description": [
                266
            ],
            "features_aggregate": [
                249
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_select_column": {},
        "feature_names_set_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "feature_names_update_column": {},
        "features": {
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "feature_name": [
                228
            ],
            "name": [
                233
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate": {
            "aggregate": [
                248
            ],
            "nodes": [
                246
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        262,
                        "[features_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                254
            ],
            "min": [
                256
            ],
            "__typename": [
                10
            ]
        },
        "features_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                255
            ],
            "min": [
                257
            ],
            "__typename": [
                10
            ]
        },
        "features_arr_rel_insert_input": {
            "data": [
                253
            ],
            "on_conflict": [
                259
            ],
            "__typename": [
                10
            ]
        },
        "features_bool_exp": {
            "_and": [
                251
            ],
            "_not": [
                251
            ],
            "_or": [
                251
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "feature_name": [
                231
            ],
            "name": [
                234
            ],
            "__typename": [
                10
            ]
        },
        "features_constraint": {},
        "features_insert_input": {
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "feature_name": [
                239
            ],
            "name": [
                233
            ],
            "__typename": [
                10
            ]
        },
        "features_max_fields": {
            "customer_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "features_max_order_by": {
            "customer_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "features_min_fields": {
            "customer_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "features_min_order_by": {
            "customer_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "features_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                246
            ],
            "__typename": [
                10
            ]
        },
        "features_on_conflict": {
            "constraint": [
                252
            ],
            "update_columns": [
                264
            ],
            "where": [
                251
            ],
            "__typename": [
                10
            ]
        },
        "features_order_by": {
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "feature_name": [
                241
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "features_pk_columns_input": {
            "customer_id": [
                488
            ],
            "name": [
                233
            ],
            "__typename": [
                10
            ]
        },
        "features_select_column": {},
        "features_set_input": {
            "customer_id": [
                488
            ],
            "name": [
                233
            ],
            "__typename": [
                10
            ]
        },
        "features_update_column": {},
        "getCustomersAndCountUsersOutput": {
            "conn_string": [
                10
            ],
            "connector": [
                10
            ],
            "customerFeatures": [
                246,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "customerFeatures_aggregate": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "customerSrvUrls": [
                337,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "customerSrvUrls_aggregate": [
                338,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "customersContact": [
                184
            ],
            "id": [
                10
            ],
            "name": [
                10
            ],
            "refresh_token_validity": [
                4
            ],
            "users_count": [
                4
            ],
            "x_api_key": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "order_by": {},
        "partners": {
            "customers": [
                175,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_aggregate": [
                176,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_aggregate": {
            "aggregate": [
                269
            ],
            "nodes": [
                267
            ],
            "__typename": [
                10
            ]
        },
        "partners_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        280,
                        "[partners_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                273
            ],
            "min": [
                274
            ],
            "__typename": [
                10
            ]
        },
        "partners_bool_exp": {
            "_and": [
                270
            ],
            "_not": [
                270
            ],
            "_or": [
                270
            ],
            "customers": [
                182
            ],
            "id": [
                489
            ],
            "name": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "partners_constraint": {},
        "partners_insert_input": {
            "customers": [
                179
            ],
            "id": [
                488
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_max_fields": {
            "id": [
                488
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_min_fields": {
            "id": [
                488
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                267
            ],
            "__typename": [
                10
            ]
        },
        "partners_obj_rel_insert_input": {
            "data": [
                272
            ],
            "on_conflict": [
                277
            ],
            "__typename": [
                10
            ]
        },
        "partners_on_conflict": {
            "constraint": [
                271
            ],
            "update_columns": [
                282
            ],
            "where": [
                270
            ],
            "__typename": [
                10
            ]
        },
        "partners_order_by": {
            "customers_aggregate": [
                178
            ],
            "id": [
                266
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "partners_pk_columns_input": {
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "partners_select_column": {},
        "partners_set_input": {
            "id": [
                488
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "partners_update_column": {},
        "roles": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users": [
                432,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "users_aggregate": [
                433,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "roles_aggregate": {
            "aggregate": [
                285
            ],
            "nodes": [
                283
            ],
            "__typename": [
                10
            ]
        },
        "roles_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        298,
                        "[roles_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                291
            ],
            "min": [
                292
            ],
            "__typename": [
                10
            ]
        },
        "roles_bool_exp": {
            "_and": [
                286
            ],
            "_not": [
                286
            ],
            "_or": [
                286
            ],
            "comment": [
                11
            ],
            "name": [
                11
            ],
            "users": [
                473
            ],
            "__typename": [
                10
            ]
        },
        "roles_constraint": {},
        "roles_enum": {},
        "roles_enum_comparison_exp": {
            "_eq": [
                288
            ],
            "_in": [
                288
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                288
            ],
            "_nin": [
                288
            ],
            "__typename": [
                10
            ]
        },
        "roles_insert_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "users": [
                436
            ],
            "__typename": [
                10
            ]
        },
        "roles_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                283
            ],
            "__typename": [
                10
            ]
        },
        "roles_obj_rel_insert_input": {
            "data": [
                290
            ],
            "on_conflict": [
                295
            ],
            "__typename": [
                10
            ]
        },
        "roles_on_conflict": {
            "constraint": [
                287
            ],
            "update_columns": [
                300
            ],
            "where": [
                286
            ],
            "__typename": [
                10
            ]
        },
        "roles_order_by": {
            "comment": [
                266
            ],
            "name": [
                266
            ],
            "users_aggregate": [
                435
            ],
            "__typename": [
                10
            ]
        },
        "roles_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_select_column": {},
        "roles_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "roles_update_column": {},
        "services": {
            "comment": [
                10
            ],
            "customer_user_services": [
                135,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                136,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_sub_services": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "name": [
                10
            ],
            "sub_services": [
                374,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "sub_services_aggregate": [
                375,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "services_aggregate": {
            "aggregate": [
                303
            ],
            "nodes": [
                301
            ],
            "__typename": [
                10
            ]
        },
        "services_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        316,
                        "[services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                309
            ],
            "min": [
                310
            ],
            "__typename": [
                10
            ]
        },
        "services_bool_exp": {
            "_and": [
                304
            ],
            "_not": [
                304
            ],
            "_or": [
                304
            ],
            "comment": [
                11
            ],
            "customer_user_services": [
                140
            ],
            "customer_user_sub_services": [
                160
            ],
            "name": [
                11
            ],
            "sub_services": [
                379
            ],
            "__typename": [
                10
            ]
        },
        "services_constraint": {},
        "services_enum": {},
        "services_enum_comparison_exp": {
            "_eq": [
                306
            ],
            "_in": [
                306
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                306
            ],
            "_nin": [
                306
            ],
            "__typename": [
                10
            ]
        },
        "services_insert_input": {
            "comment": [
                10
            ],
            "customer_user_services": [
                139
            ],
            "customer_user_sub_services": [
                159
            ],
            "name": [
                10
            ],
            "sub_services": [
                378
            ],
            "__typename": [
                10
            ]
        },
        "services_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                301
            ],
            "__typename": [
                10
            ]
        },
        "services_obj_rel_insert_input": {
            "data": [
                308
            ],
            "on_conflict": [
                313
            ],
            "__typename": [
                10
            ]
        },
        "services_on_conflict": {
            "constraint": [
                305
            ],
            "update_columns": [
                318
            ],
            "where": [
                304
            ],
            "__typename": [
                10
            ]
        },
        "services_order_by": {
            "comment": [
                266
            ],
            "customer_user_services_aggregate": [
                138
            ],
            "customer_user_sub_services_aggregate": [
                158
            ],
            "name": [
                266
            ],
            "sub_services_aggregate": [
                377
            ],
            "__typename": [
                10
            ]
        },
        "services_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_select_column": {},
        "services_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "services_update_column": {},
        "srv_names": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "srv_urls": [
                337,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "srv_urls_aggregate": [
                338,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_aggregate": {
            "aggregate": [
                321
            ],
            "nodes": [
                319
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        334,
                        "[srv_names_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                327
            ],
            "min": [
                328
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_bool_exp": {
            "_and": [
                322
            ],
            "_not": [
                322
            ],
            "_or": [
                322
            ],
            "description": [
                11
            ],
            "name": [
                11
            ],
            "srv_urls": [
                342
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_constraint": {},
        "srv_names_enum": {},
        "srv_names_enum_comparison_exp": {
            "_eq": [
                324
            ],
            "_in": [
                324
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                324
            ],
            "_nin": [
                324
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_insert_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "srv_urls": [
                341
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_max_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_min_fields": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                319
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_obj_rel_insert_input": {
            "data": [
                326
            ],
            "on_conflict": [
                331
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_on_conflict": {
            "constraint": [
                323
            ],
            "update_columns": [
                336
            ],
            "where": [
                322
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_order_by": {
            "description": [
                266
            ],
            "name": [
                266
            ],
            "srv_urls_aggregate": [
                340
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_select_column": {},
        "srv_names_set_input": {
            "description": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_names_update_column": {},
        "srv_urls": {
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "name": [
                324
            ],
            "srv_name": [
                319
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate": {
            "aggregate": [
                339
            ],
            "nodes": [
                337
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                345
            ],
            "min": [
                347
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                346
            ],
            "min": [
                348
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_arr_rel_insert_input": {
            "data": [
                344
            ],
            "on_conflict": [
                350
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_bool_exp": {
            "_and": [
                342
            ],
            "_not": [
                342
            ],
            "_or": [
                342
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "name": [
                325
            ],
            "srv_name": [
                322
            ],
            "url": [
                11
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_constraint": {},
        "srv_urls_insert_input": {
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "name": [
                324
            ],
            "srv_name": [
                330
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_max_fields": {
            "customer_id": [
                488
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_max_order_by": {
            "customer_id": [
                266
            ],
            "url": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_min_fields": {
            "customer_id": [
                488
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_min_order_by": {
            "customer_id": [
                266
            ],
            "url": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                337
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_on_conflict": {
            "constraint": [
                343
            ],
            "update_columns": [
                355
            ],
            "where": [
                342
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_order_by": {
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "name": [
                266
            ],
            "srv_name": [
                332
            ],
            "url": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_pk_columns_input": {
            "customer_id": [
                488
            ],
            "name": [
                324
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_select_column": {},
        "srv_urls_set_input": {
            "customer_id": [
                488
            ],
            "name": [
                324
            ],
            "url": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "srv_urls_update_column": {},
        "status": {
            "comment": [
                10
            ],
            "customers": [
                175,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_aggregate": [
                176,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "name": [
                10
            ],
            "user_basic_data": [
                396,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                397,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "status_aggregate": {
            "aggregate": [
                358
            ],
            "nodes": [
                356
            ],
            "__typename": [
                10
            ]
        },
        "status_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        371,
                        "[status_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                364
            ],
            "min": [
                365
            ],
            "__typename": [
                10
            ]
        },
        "status_bool_exp": {
            "_and": [
                359
            ],
            "_not": [
                359
            ],
            "_or": [
                359
            ],
            "comment": [
                11
            ],
            "customers": [
                182
            ],
            "name": [
                11
            ],
            "user_basic_data": [
                401
            ],
            "__typename": [
                10
            ]
        },
        "status_constraint": {},
        "status_enum": {},
        "status_enum_comparison_exp": {
            "_eq": [
                361
            ],
            "_in": [
                361
            ],
            "_is_null": [
                0
            ],
            "_neq": [
                361
            ],
            "_nin": [
                361
            ],
            "__typename": [
                10
            ]
        },
        "status_insert_input": {
            "comment": [
                10
            ],
            "customers": [
                179
            ],
            "name": [
                10
            ],
            "user_basic_data": [
                400
            ],
            "__typename": [
                10
            ]
        },
        "status_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                356
            ],
            "__typename": [
                10
            ]
        },
        "status_obj_rel_insert_input": {
            "data": [
                363
            ],
            "on_conflict": [
                368
            ],
            "__typename": [
                10
            ]
        },
        "status_on_conflict": {
            "constraint": [
                360
            ],
            "update_columns": [
                373
            ],
            "where": [
                359
            ],
            "__typename": [
                10
            ]
        },
        "status_order_by": {
            "comment": [
                266
            ],
            "customers_aggregate": [
                178
            ],
            "name": [
                266
            ],
            "user_basic_data_aggregate": [
                399
            ],
            "__typename": [
                10
            ]
        },
        "status_pk_columns_input": {
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_select_column": {},
        "status_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "status_update_column": {},
        "sub_services": {
            "comment": [
                10
            ],
            "customer_user_sub_services": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "name": [
                10
            ],
            "service": [
                306
            ],
            "serviceByService": [
                301
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate": {
            "aggregate": [
                376
            ],
            "nodes": [
                374
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                382
            ],
            "min": [
                384
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                383
            ],
            "min": [
                385
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_arr_rel_insert_input": {
            "data": [
                381
            ],
            "on_conflict": [
                388
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_bool_exp": {
            "_and": [
                379
            ],
            "_not": [
                379
            ],
            "_or": [
                379
            ],
            "comment": [
                11
            ],
            "customer_user_sub_services": [
                160
            ],
            "name": [
                11
            ],
            "service": [
                307
            ],
            "serviceByService": [
                304
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_constraint": {},
        "sub_services_insert_input": {
            "comment": [
                10
            ],
            "customer_user_sub_services": [
                159
            ],
            "name": [
                10
            ],
            "service": [
                306
            ],
            "serviceByService": [
                312
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_max_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_max_order_by": {
            "comment": [
                266
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_min_fields": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_min_order_by": {
            "comment": [
                266
            ],
            "name": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                374
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_obj_rel_insert_input": {
            "data": [
                381
            ],
            "on_conflict": [
                388
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_on_conflict": {
            "constraint": [
                380
            ],
            "update_columns": [
                393
            ],
            "where": [
                379
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_order_by": {
            "comment": [
                266
            ],
            "customer_user_sub_services_aggregate": [
                158
            ],
            "name": [
                266
            ],
            "service": [
                266
            ],
            "serviceByService": [
                314
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_pk_columns_input": {
            "name": [
                10
            ],
            "service": [
                306
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_select_column": {},
        "sub_services_set_input": {
            "comment": [
                10
            ],
            "name": [
                10
            ],
            "service": [
                306
            ],
            "__typename": [
                10
            ]
        },
        "sub_services_update_column": {},
        "timestamptz": {},
        "timestamptz_comparison_exp": {
            "_eq": [
                394
            ],
            "_gt": [
                394
            ],
            "_gte": [
                394
            ],
            "_in": [
                394
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                394
            ],
            "_lte": [
                394
            ],
            "_neq": [
                394
            ],
            "_nin": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data": {
            "email": [
                98
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "status": [
                361
            ],
            "statusByStatus": [
                356
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate": {
            "aggregate": [
                398
            ],
            "nodes": [
                396
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                404
            ],
            "min": [
                406
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                405
            ],
            "min": [
                407
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_arr_rel_insert_input": {
            "data": [
                403
            ],
            "on_conflict": [
                410
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_bool_exp": {
            "_and": [
                401
            ],
            "_not": [
                401
            ],
            "_or": [
                401
            ],
            "email": [
                99
            ],
            "name": [
                99
            ],
            "password": [
                99
            ],
            "status": [
                362
            ],
            "statusByStatus": [
                359
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_constraint": {},
        "user_basic_data_insert_input": {
            "email": [
                98
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "status": [
                361
            ],
            "statusByStatus": [
                367
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_max_fields": {
            "email": [
                98
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_max_order_by": {
            "email": [
                266
            ],
            "name": [
                266
            ],
            "password": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_min_fields": {
            "email": [
                98
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_min_order_by": {
            "email": [
                266
            ],
            "name": [
                266
            ],
            "password": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                396
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_obj_rel_insert_input": {
            "data": [
                403
            ],
            "on_conflict": [
                410
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_on_conflict": {
            "constraint": [
                402
            ],
            "update_columns": [
                415
            ],
            "where": [
                401
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_order_by": {
            "email": [
                266
            ],
            "name": [
                266
            ],
            "password": [
                266
            ],
            "status": [
                266
            ],
            "statusByStatus": [
                369
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_pk_columns_input": {
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_select_column": {},
        "user_basic_data_set_input": {
            "email": [
                98
            ],
            "name": [
                98
            ],
            "password": [
                98
            ],
            "status": [
                361
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_basic_data_update_column": {},
        "user_phone": {
            "identity": [
                10
            ],
            "phone_nr": [
                10
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_aggregate": {
            "aggregate": [
                418
            ],
            "nodes": [
                416
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        429,
                        "[user_phone_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                422
            ],
            "min": [
                423
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_bool_exp": {
            "_and": [
                419
            ],
            "_not": [
                419
            ],
            "_or": [
                419
            ],
            "identity": [
                11
            ],
            "phone_nr": [
                11
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_constraint": {},
        "user_phone_insert_input": {
            "identity": [
                10
            ],
            "phone_nr": [
                10
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_max_fields": {
            "identity": [
                10
            ],
            "phone_nr": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_min_fields": {
            "identity": [
                10
            ],
            "phone_nr": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                416
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_obj_rel_insert_input": {
            "data": [
                421
            ],
            "on_conflict": [
                426
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_on_conflict": {
            "constraint": [
                420
            ],
            "update_columns": [
                431
            ],
            "where": [
                419
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_order_by": {
            "identity": [
                266
            ],
            "phone_nr": [
                266
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_pk_columns_input": {
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_select_column": {},
        "user_phone_set_input": {
            "identity": [
                10
            ],
            "phone_nr": [
                10
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "user_phone_update_column": {},
        "users": {
            "created_at": [
                394
            ],
            "customer_user_services": [
                135,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_services_aggregate": [
                136,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_sub_services": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_services_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_users": [
                118,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_users_aggregate": [
                119,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "id": [
                488
            ],
            "role": [
                288
            ],
            "roleByRole": [
                283
            ],
            "token": [
                98
            ],
            "updated_at": [
                394
            ],
            "user_basic_data": [
                396
            ],
            "user_phone": [
                416
            ],
            "users_auth_logs": [
                437,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                438,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate": {
            "aggregate": [
                434
            ],
            "nodes": [
                432
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate_fields": {
            "count": [
                4,
                {
                    "columns": [
                        485,
                        "[users_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                476
            ],
            "min": [
                478
            ],
            "__typename": [
                10
            ]
        },
        "users_aggregate_order_by": {
            "count": [
                266
            ],
            "max": [
                477
            ],
            "min": [
                479
            ],
            "__typename": [
                10
            ]
        },
        "users_arr_rel_insert_input": {
            "data": [
                475
            ],
            "on_conflict": [
                482
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs": {
            "authMethodByAuthMethod": [
                65
            ],
            "auth_method": [
                70
            ],
            "authenticated_at": [
                394
            ],
            "customer": [
                175
            ],
            "customer_id": [
                488
            ],
            "id": [
                4
            ],
            "user": [
                432
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate": {
            "aggregate": [
                439
            ],
            "nodes": [
                437
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate_fields": {
            "avg": [
                442
            ],
            "count": [
                4,
                {
                    "columns": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "distinct": [
                        0
                    ]
                }
            ],
            "max": [
                448
            ],
            "min": [
                450
            ],
            "stddev": [
                458
            ],
            "stddev_pop": [
                460
            ],
            "stddev_samp": [
                462
            ],
            "sum": [
                464
            ],
            "var_pop": [
                467
            ],
            "var_samp": [
                469
            ],
            "variance": [
                471
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_aggregate_order_by": {
            "avg": [
                443
            ],
            "count": [
                266
            ],
            "max": [
                449
            ],
            "min": [
                451
            ],
            "stddev": [
                459
            ],
            "stddev_pop": [
                461
            ],
            "stddev_samp": [
                463
            ],
            "sum": [
                465
            ],
            "var_pop": [
                468
            ],
            "var_samp": [
                470
            ],
            "variance": [
                472
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_arr_rel_insert_input": {
            "data": [
                447
            ],
            "on_conflict": [
                453
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_avg_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_avg_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_bool_exp": {
            "_and": [
                444
            ],
            "_not": [
                444
            ],
            "_or": [
                444
            ],
            "authMethodByAuthMethod": [
                68
            ],
            "auth_method": [
                71
            ],
            "authenticated_at": [
                395
            ],
            "customer": [
                182
            ],
            "customer_id": [
                489
            ],
            "id": [
                5
            ],
            "user": [
                473
            ],
            "user_id": [
                489
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_constraint": {},
        "users_auth_logs_inc_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_insert_input": {
            "authMethodByAuthMethod": [
                76
            ],
            "auth_method": [
                70
            ],
            "authenticated_at": [
                394
            ],
            "customer": [
                207
            ],
            "customer_id": [
                488
            ],
            "id": [
                4
            ],
            "user": [
                481
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_max_fields": {
            "authenticated_at": [
                394
            ],
            "customer_id": [
                488
            ],
            "id": [
                4
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_max_order_by": {
            "authenticated_at": [
                266
            ],
            "customer_id": [
                266
            ],
            "id": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_min_fields": {
            "authenticated_at": [
                394
            ],
            "customer_id": [
                488
            ],
            "id": [
                4
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_min_order_by": {
            "authenticated_at": [
                266
            ],
            "customer_id": [
                266
            ],
            "id": [
                266
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                437
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_on_conflict": {
            "constraint": [
                445
            ],
            "update_columns": [
                466
            ],
            "where": [
                444
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_order_by": {
            "authMethodByAuthMethod": [
                78
            ],
            "auth_method": [
                266
            ],
            "authenticated_at": [
                266
            ],
            "customer": [
                209
            ],
            "customer_id": [
                266
            ],
            "id": [
                266
            ],
            "user": [
                483
            ],
            "user_id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_pk_columns_input": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_select_column": {},
        "users_auth_logs_set_input": {
            "auth_method": [
                70
            ],
            "authenticated_at": [
                394
            ],
            "customer_id": [
                488
            ],
            "id": [
                4
            ],
            "user_id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_pop_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_stddev_samp_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_sum_fields": {
            "id": [
                4
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_sum_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_update_column": {},
        "users_auth_logs_var_pop_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_pop_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_samp_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_var_samp_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_variance_fields": {
            "id": [
                1
            ],
            "__typename": [
                10
            ]
        },
        "users_auth_logs_variance_order_by": {
            "id": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_bool_exp": {
            "_and": [
                473
            ],
            "_not": [
                473
            ],
            "_or": [
                473
            ],
            "created_at": [
                395
            ],
            "customer_user_services": [
                140
            ],
            "customer_user_sub_services": [
                160
            ],
            "customer_users": [
                123
            ],
            "id": [
                489
            ],
            "role": [
                289
            ],
            "roleByRole": [
                286
            ],
            "token": [
                99
            ],
            "updated_at": [
                395
            ],
            "user_basic_data": [
                401
            ],
            "user_phone": [
                419
            ],
            "users_auth_logs": [
                444
            ],
            "__typename": [
                10
            ]
        },
        "users_constraint": {},
        "users_insert_input": {
            "created_at": [
                394
            ],
            "customer_user_services": [
                139
            ],
            "customer_user_sub_services": [
                159
            ],
            "customer_users": [
                122
            ],
            "id": [
                488
            ],
            "role": [
                288
            ],
            "roleByRole": [
                294
            ],
            "token": [
                98
            ],
            "updated_at": [
                394
            ],
            "user_basic_data": [
                409
            ],
            "user_phone": [
                425
            ],
            "users_auth_logs": [
                441
            ],
            "__typename": [
                10
            ]
        },
        "users_max_fields": {
            "created_at": [
                394
            ],
            "id": [
                488
            ],
            "token": [
                98
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "users_max_order_by": {
            "created_at": [
                266
            ],
            "id": [
                266
            ],
            "token": [
                266
            ],
            "updated_at": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_min_fields": {
            "created_at": [
                394
            ],
            "id": [
                488
            ],
            "token": [
                98
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "users_min_order_by": {
            "created_at": [
                266
            ],
            "id": [
                266
            ],
            "token": [
                266
            ],
            "updated_at": [
                266
            ],
            "__typename": [
                10
            ]
        },
        "users_mutation_response": {
            "affected_rows": [
                4
            ],
            "returning": [
                432
            ],
            "__typename": [
                10
            ]
        },
        "users_obj_rel_insert_input": {
            "data": [
                475
            ],
            "on_conflict": [
                482
            ],
            "__typename": [
                10
            ]
        },
        "users_on_conflict": {
            "constraint": [
                474
            ],
            "update_columns": [
                487
            ],
            "where": [
                473
            ],
            "__typename": [
                10
            ]
        },
        "users_order_by": {
            "created_at": [
                266
            ],
            "customer_user_services_aggregate": [
                138
            ],
            "customer_user_sub_services_aggregate": [
                158
            ],
            "customer_users_aggregate": [
                121
            ],
            "id": [
                266
            ],
            "role": [
                266
            ],
            "roleByRole": [
                296
            ],
            "token": [
                266
            ],
            "updated_at": [
                266
            ],
            "user_basic_data": [
                411
            ],
            "user_phone": [
                427
            ],
            "users_auth_logs_aggregate": [
                440
            ],
            "__typename": [
                10
            ]
        },
        "users_pk_columns_input": {
            "id": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "users_select_column": {},
        "users_set_input": {
            "created_at": [
                394
            ],
            "id": [
                488
            ],
            "role": [
                288
            ],
            "token": [
                98
            ],
            "updated_at": [
                394
            ],
            "__typename": [
                10
            ]
        },
        "users_update_column": {},
        "uuid": {},
        "uuid_comparison_exp": {
            "_eq": [
                488
            ],
            "_gt": [
                488
            ],
            "_gte": [
                488
            ],
            "_in": [
                488
            ],
            "_is_null": [
                0
            ],
            "_lt": [
                488
            ],
            "_lte": [
                488
            ],
            "_neq": [
                488
            ],
            "_nin": [
                488
            ],
            "__typename": [
                10
            ]
        },
        "Query": {
            "admins": [
                13,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_aggregate": [
                14,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "admins_by_pk": [
                13,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "auth_methods": [
                65,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_aggregate": [
                66,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "blacklist_refresh_token": [
                83,
                {
                    "distinct_on": [
                        95,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        93,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_aggregate": [
                84,
                {
                    "distinct_on": [
                        95,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        93,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "connectors": [
                100,
                {
                    "distinct_on": [
                        115,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        113,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "connectors_aggregate": [
                101,
                {
                    "distinct_on": [
                        115,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        113,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "connectors_by_pk": [
                100,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "customer_user": [
                118,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_user_aggregate": [
                119,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_user_by_pk": [
                118,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_service": [
                135,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_service_aggregate": [
                136,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_service_by_pk": [
                135,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_sub_service": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_service_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_service_by_pk": [
                155,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customers": [
                175,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_aggregate": [
                176,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_by_pk": [
                175,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customers_contact": [
                184,
                {
                    "distinct_on": [
                        197,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        195,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        187
                    ]
                }
            ],
            "customers_contact_aggregate": [
                185,
                {
                    "distinct_on": [
                        197,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        195,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        187
                    ]
                }
            ],
            "customers_contact_by_pk": [
                184,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "feature_names": [
                228,
                {
                    "distinct_on": [
                        243,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        241,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "feature_names_aggregate": [
                229,
                {
                    "distinct_on": [
                        243,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        241,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "feature_names_by_pk": [
                228,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "features": [
                246,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_aggregate": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_by_pk": [
                246,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        233,
                        "feature_names_enum!"
                    ]
                }
            ],
            "getCustomerById": [
                265,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "getCustomersAndCountUsers": [
                265
            ],
            "partners": [
                267,
                {
                    "distinct_on": [
                        280,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "partners_aggregate": [
                268,
                {
                    "distinct_on": [
                        280,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "partners_by_pk": [
                267,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "roles": [
                283,
                {
                    "distinct_on": [
                        298,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        286
                    ]
                }
            ],
            "roles_aggregate": [
                284,
                {
                    "distinct_on": [
                        298,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        286
                    ]
                }
            ],
            "roles_by_pk": [
                283,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "services": [
                301,
                {
                    "distinct_on": [
                        316,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[services_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "services_aggregate": [
                302,
                {
                    "distinct_on": [
                        316,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[services_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "services_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_names": [
                319,
                {
                    "distinct_on": [
                        334,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "srv_names_aggregate": [
                320,
                {
                    "distinct_on": [
                        334,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "srv_names_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_urls": [
                337,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "srv_urls_aggregate": [
                338,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "srv_urls_by_pk": [
                337,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        324,
                        "srv_names_enum!"
                    ]
                }
            ],
            "status": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[status_order_by!]"
                    ],
                    "where": [
                        359
                    ]
                }
            ],
            "status_aggregate": [
                357,
                {
                    "distinct_on": [
                        371,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[status_order_by!]"
                    ],
                    "where": [
                        359
                    ]
                }
            ],
            "status_by_pk": [
                356,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "sub_services": [
                374,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "sub_services_aggregate": [
                375,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "sub_services_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ]
                }
            ],
            "user_basic_data": [
                396,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                397,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "user_basic_data_by_pk": [
                396,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "user_phone": [
                416,
                {
                    "distinct_on": [
                        429,
                        "[user_phone_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        427,
                        "[user_phone_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_phone_aggregate": [
                417,
                {
                    "distinct_on": [
                        429,
                        "[user_phone_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        427,
                        "[user_phone_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_phone_by_pk": [
                416,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                432,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "users_aggregate": [
                433,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "users_auth_logs": [
                437,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                438,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_by_pk": [
                437,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "users_by_pk": [
                432,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "Mutation": {
            "delete_admins": [
                57,
                {
                    "where": [
                        52,
                        "admins_bool_exp!"
                    ]
                }
            ],
            "delete_admins_auth_logs": [
                31,
                {
                    "where": [
                        23,
                        "admins_auth_logs_bool_exp!"
                    ]
                }
            ],
            "delete_admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "delete_admins_by_pk": [
                13,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_auth_methods": [
                75,
                {
                    "where": [
                        68,
                        "auth_methods_bool_exp!"
                    ]
                }
            ],
            "delete_auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_blacklist_refresh_token": [
                91,
                {
                    "where": [
                        86,
                        "blacklist_refresh_token_bool_exp!"
                    ]
                }
            ],
            "delete_blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_connectors": [
                110,
                {
                    "where": [
                        103,
                        "connectors_bool_exp!"
                    ]
                }
            ],
            "delete_connectors_by_pk": [
                100,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_customer_user": [
                130,
                {
                    "where": [
                        123,
                        "customer_user_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_by_pk": [
                118,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_customer_user_service": [
                147,
                {
                    "where": [
                        140,
                        "customer_user_service_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_service_by_pk": [
                135,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_customer_user_sub_service": [
                167,
                {
                    "where": [
                        160,
                        "customer_user_sub_service_bool_exp!"
                    ]
                }
            ],
            "delete_customer_user_sub_service_by_pk": [
                155,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_customers": [
                206,
                {
                    "where": [
                        182,
                        "customers_bool_exp!"
                    ]
                }
            ],
            "delete_customers_by_pk": [
                175,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_customers_contact": [
                192,
                {
                    "where": [
                        187,
                        "customers_contact_bool_exp!"
                    ]
                }
            ],
            "delete_customers_contact_by_pk": [
                184,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_feature_names": [
                238,
                {
                    "where": [
                        231,
                        "feature_names_bool_exp!"
                    ]
                }
            ],
            "delete_feature_names_by_pk": [
                228,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_features": [
                258,
                {
                    "where": [
                        251,
                        "features_bool_exp!"
                    ]
                }
            ],
            "delete_features_by_pk": [
                246,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        233,
                        "feature_names_enum!"
                    ]
                }
            ],
            "delete_partners": [
                275,
                {
                    "where": [
                        270,
                        "partners_bool_exp!"
                    ]
                }
            ],
            "delete_partners_by_pk": [
                267,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_roles": [
                293,
                {
                    "where": [
                        286,
                        "roles_bool_exp!"
                    ]
                }
            ],
            "delete_roles_by_pk": [
                283,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_services": [
                311,
                {
                    "where": [
                        304,
                        "services_bool_exp!"
                    ]
                }
            ],
            "delete_services_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_srv_names": [
                329,
                {
                    "where": [
                        322,
                        "srv_names_bool_exp!"
                    ]
                }
            ],
            "delete_srv_names_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_srv_urls": [
                349,
                {
                    "where": [
                        342,
                        "srv_urls_bool_exp!"
                    ]
                }
            ],
            "delete_srv_urls_by_pk": [
                337,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        324,
                        "srv_names_enum!"
                    ]
                }
            ],
            "delete_status": [
                366,
                {
                    "where": [
                        359,
                        "status_bool_exp!"
                    ]
                }
            ],
            "delete_status_by_pk": [
                356,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "delete_sub_services": [
                386,
                {
                    "where": [
                        379,
                        "sub_services_bool_exp!"
                    ]
                }
            ],
            "delete_sub_services_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ]
                }
            ],
            "delete_user_basic_data": [
                408,
                {
                    "where": [
                        401,
                        "user_basic_data_bool_exp!"
                    ]
                }
            ],
            "delete_user_basic_data_by_pk": [
                396,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_user_phone": [
                424,
                {
                    "where": [
                        419,
                        "user_phone_bool_exp!"
                    ]
                }
            ],
            "delete_user_phone_by_pk": [
                416,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "delete_users": [
                480,
                {
                    "where": [
                        473,
                        "users_bool_exp!"
                    ]
                }
            ],
            "delete_users_auth_logs": [
                452,
                {
                    "where": [
                        444,
                        "users_auth_logs_bool_exp!"
                    ]
                }
            ],
            "delete_users_auth_logs_by_pk": [
                437,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "delete_users_by_pk": [
                432,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "insertAdmin": [
                6,
                {
                    "email": [
                        98,
                        "bpchar!"
                    ],
                    "name": [
                        98,
                        "bpchar!"
                    ],
                    "password": [
                        98,
                        "bpchar!"
                    ],
                    "phone": [
                        10,
                        "String!"
                    ]
                }
            ],
            "insertCustomer": [
                265,
                {
                    "conn_string": [
                        10,
                        "String!"
                    ],
                    "connector": [
                        10
                    ],
                    "contact_email": [
                        10
                    ],
                    "contact_message": [
                        10
                    ],
                    "contact_tel": [
                        10
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "refresh_token_validity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "insertUserOrWarnIfExists": [
                3,
                {
                    "brukerBrukerNavn": [
                        10
                    ],
                    "brukerRegion": [
                        4
                    ],
                    "customer_id": [
                        488
                    ],
                    "email": [
                        10,
                        "String!"
                    ],
                    "identity": [
                        10
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ],
                    "phone_nr": [
                        10
                    ],
                    "role": [
                        10
                    ],
                    "token": [
                        10
                    ]
                }
            ],
            "insertUsersOrWarnIfExists": [
                3,
                {
                    "objects": [
                        2,
                        "[InsertUserData!]"
                    ]
                }
            ],
            "insert_admins": [
                57,
                {
                    "objects": [
                        54,
                        "[admins_insert_input!]!"
                    ],
                    "on_conflict": [
                        59
                    ]
                }
            ],
            "insert_admins_auth_logs": [
                31,
                {
                    "objects": [
                        26,
                        "[admins_auth_logs_insert_input!]!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_admins_auth_logs_one": [
                16,
                {
                    "object": [
                        26,
                        "admins_auth_logs_insert_input!"
                    ],
                    "on_conflict": [
                        32
                    ]
                }
            ],
            "insert_admins_one": [
                13,
                {
                    "object": [
                        54,
                        "admins_insert_input!"
                    ],
                    "on_conflict": [
                        59
                    ]
                }
            ],
            "insert_auth_methods": [
                75,
                {
                    "objects": [
                        72,
                        "[auth_methods_insert_input!]!"
                    ],
                    "on_conflict": [
                        77
                    ]
                }
            ],
            "insert_auth_methods_one": [
                65,
                {
                    "object": [
                        72,
                        "auth_methods_insert_input!"
                    ],
                    "on_conflict": [
                        77
                    ]
                }
            ],
            "insert_blacklist_refresh_token": [
                91,
                {
                    "objects": [
                        88,
                        "[blacklist_refresh_token_insert_input!]!"
                    ],
                    "on_conflict": [
                        92
                    ]
                }
            ],
            "insert_blacklist_refresh_token_one": [
                83,
                {
                    "object": [
                        88,
                        "blacklist_refresh_token_insert_input!"
                    ],
                    "on_conflict": [
                        92
                    ]
                }
            ],
            "insert_connectors": [
                110,
                {
                    "objects": [
                        107,
                        "[connectors_insert_input!]!"
                    ],
                    "on_conflict": [
                        112
                    ]
                }
            ],
            "insert_connectors_one": [
                100,
                {
                    "object": [
                        107,
                        "connectors_insert_input!"
                    ],
                    "on_conflict": [
                        112
                    ]
                }
            ],
            "insert_customer_user": [
                130,
                {
                    "objects": [
                        125,
                        "[customer_user_insert_input!]!"
                    ],
                    "on_conflict": [
                        131
                    ]
                }
            ],
            "insert_customer_user_one": [
                118,
                {
                    "object": [
                        125,
                        "customer_user_insert_input!"
                    ],
                    "on_conflict": [
                        131
                    ]
                }
            ],
            "insert_customer_user_service": [
                147,
                {
                    "objects": [
                        142,
                        "[customer_user_service_insert_input!]!"
                    ],
                    "on_conflict": [
                        148
                    ]
                }
            ],
            "insert_customer_user_service_one": [
                135,
                {
                    "object": [
                        142,
                        "customer_user_service_insert_input!"
                    ],
                    "on_conflict": [
                        148
                    ]
                }
            ],
            "insert_customer_user_sub_service": [
                167,
                {
                    "objects": [
                        162,
                        "[customer_user_sub_service_insert_input!]!"
                    ],
                    "on_conflict": [
                        168
                    ]
                }
            ],
            "insert_customer_user_sub_service_one": [
                155,
                {
                    "object": [
                        162,
                        "customer_user_sub_service_insert_input!"
                    ],
                    "on_conflict": [
                        168
                    ]
                }
            ],
            "insert_customers": [
                206,
                {
                    "objects": [
                        201,
                        "[customers_insert_input!]!"
                    ],
                    "on_conflict": [
                        208
                    ]
                }
            ],
            "insert_customers_contact": [
                192,
                {
                    "objects": [
                        189,
                        "[customers_contact_insert_input!]!"
                    ],
                    "on_conflict": [
                        194
                    ]
                }
            ],
            "insert_customers_contact_one": [
                184,
                {
                    "object": [
                        189,
                        "customers_contact_insert_input!"
                    ],
                    "on_conflict": [
                        194
                    ]
                }
            ],
            "insert_customers_one": [
                175,
                {
                    "object": [
                        201,
                        "customers_insert_input!"
                    ],
                    "on_conflict": [
                        208
                    ]
                }
            ],
            "insert_feature_names": [
                238,
                {
                    "objects": [
                        235,
                        "[feature_names_insert_input!]!"
                    ],
                    "on_conflict": [
                        240
                    ]
                }
            ],
            "insert_feature_names_one": [
                228,
                {
                    "object": [
                        235,
                        "feature_names_insert_input!"
                    ],
                    "on_conflict": [
                        240
                    ]
                }
            ],
            "insert_features": [
                258,
                {
                    "objects": [
                        253,
                        "[features_insert_input!]!"
                    ],
                    "on_conflict": [
                        259
                    ]
                }
            ],
            "insert_features_one": [
                246,
                {
                    "object": [
                        253,
                        "features_insert_input!"
                    ],
                    "on_conflict": [
                        259
                    ]
                }
            ],
            "insert_partners": [
                275,
                {
                    "objects": [
                        272,
                        "[partners_insert_input!]!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_partners_one": [
                267,
                {
                    "object": [
                        272,
                        "partners_insert_input!"
                    ],
                    "on_conflict": [
                        277
                    ]
                }
            ],
            "insert_roles": [
                293,
                {
                    "objects": [
                        290,
                        "[roles_insert_input!]!"
                    ],
                    "on_conflict": [
                        295
                    ]
                }
            ],
            "insert_roles_one": [
                283,
                {
                    "object": [
                        290,
                        "roles_insert_input!"
                    ],
                    "on_conflict": [
                        295
                    ]
                }
            ],
            "insert_services": [
                311,
                {
                    "objects": [
                        308,
                        "[services_insert_input!]!"
                    ],
                    "on_conflict": [
                        313
                    ]
                }
            ],
            "insert_services_one": [
                301,
                {
                    "object": [
                        308,
                        "services_insert_input!"
                    ],
                    "on_conflict": [
                        313
                    ]
                }
            ],
            "insert_srv_names": [
                329,
                {
                    "objects": [
                        326,
                        "[srv_names_insert_input!]!"
                    ],
                    "on_conflict": [
                        331
                    ]
                }
            ],
            "insert_srv_names_one": [
                319,
                {
                    "object": [
                        326,
                        "srv_names_insert_input!"
                    ],
                    "on_conflict": [
                        331
                    ]
                }
            ],
            "insert_srv_urls": [
                349,
                {
                    "objects": [
                        344,
                        "[srv_urls_insert_input!]!"
                    ],
                    "on_conflict": [
                        350
                    ]
                }
            ],
            "insert_srv_urls_one": [
                337,
                {
                    "object": [
                        344,
                        "srv_urls_insert_input!"
                    ],
                    "on_conflict": [
                        350
                    ]
                }
            ],
            "insert_status": [
                366,
                {
                    "objects": [
                        363,
                        "[status_insert_input!]!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_status_one": [
                356,
                {
                    "object": [
                        363,
                        "status_insert_input!"
                    ],
                    "on_conflict": [
                        368
                    ]
                }
            ],
            "insert_sub_services": [
                386,
                {
                    "objects": [
                        381,
                        "[sub_services_insert_input!]!"
                    ],
                    "on_conflict": [
                        388
                    ]
                }
            ],
            "insert_sub_services_one": [
                374,
                {
                    "object": [
                        381,
                        "sub_services_insert_input!"
                    ],
                    "on_conflict": [
                        388
                    ]
                }
            ],
            "insert_user_basic_data": [
                408,
                {
                    "objects": [
                        403,
                        "[user_basic_data_insert_input!]!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_user_basic_data_one": [
                396,
                {
                    "object": [
                        403,
                        "user_basic_data_insert_input!"
                    ],
                    "on_conflict": [
                        410
                    ]
                }
            ],
            "insert_user_phone": [
                424,
                {
                    "objects": [
                        421,
                        "[user_phone_insert_input!]!"
                    ],
                    "on_conflict": [
                        426
                    ]
                }
            ],
            "insert_user_phone_one": [
                416,
                {
                    "object": [
                        421,
                        "user_phone_insert_input!"
                    ],
                    "on_conflict": [
                        426
                    ]
                }
            ],
            "insert_users": [
                480,
                {
                    "objects": [
                        475,
                        "[users_insert_input!]!"
                    ],
                    "on_conflict": [
                        482
                    ]
                }
            ],
            "insert_users_auth_logs": [
                452,
                {
                    "objects": [
                        447,
                        "[users_auth_logs_insert_input!]!"
                    ],
                    "on_conflict": [
                        453
                    ]
                }
            ],
            "insert_users_auth_logs_one": [
                437,
                {
                    "object": [
                        447,
                        "users_auth_logs_insert_input!"
                    ],
                    "on_conflict": [
                        453
                    ]
                }
            ],
            "insert_users_one": [
                432,
                {
                    "object": [
                        475,
                        "users_insert_input!"
                    ],
                    "on_conflict": [
                        482
                    ]
                }
            ],
            "signin": [
                8,
                {
                    "customer_name": [
                        10,
                        "String!"
                    ],
                    "email": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ]
                }
            ],
            "singinAvansAdmin": [
                9,
                {
                    "email": [
                        10,
                        "String!"
                    ],
                    "password": [
                        10,
                        "String!"
                    ]
                }
            ],
            "singinAvansAdminByRefreshToken": [
                9,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "updateAdmin": [
                6,
                {
                    "email": [
                        98,
                        "bpchar!"
                    ],
                    "id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        98,
                        "bpchar!"
                    ],
                    "password": [
                        98,
                        "bpchar!"
                    ],
                    "phone": [
                        10,
                        "String!"
                    ]
                }
            ],
            "updateCustomer": [
                7,
                {
                    "conn_string": [
                        10
                    ],
                    "connector": [
                        10,
                        "String!"
                    ],
                    "contact_email": [
                        10
                    ],
                    "contact_message": [
                        10
                    ],
                    "contact_tel": [
                        10
                    ],
                    "id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        10,
                        "String!"
                    ],
                    "refresh_token_validity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "updateUser": [
                12,
                {
                    "email": [
                        98
                    ],
                    "id": [
                        488,
                        "uuid!"
                    ],
                    "identity": [
                        10
                    ],
                    "name": [
                        98
                    ],
                    "password": [
                        98
                    ],
                    "phone_nr": [
                        10
                    ],
                    "role": [
                        10
                    ]
                }
            ],
            "update_admins": [
                57,
                {
                    "_set": [
                        63
                    ],
                    "where": [
                        52,
                        "admins_bool_exp!"
                    ]
                }
            ],
            "update_admins_auth_logs": [
                31,
                {
                    "_inc": [
                        25
                    ],
                    "_set": [
                        36
                    ],
                    "where": [
                        23,
                        "admins_auth_logs_bool_exp!"
                    ]
                }
            ],
            "update_admins_auth_logs_by_pk": [
                16,
                {
                    "_inc": [
                        25
                    ],
                    "_set": [
                        36
                    ],
                    "pk_columns": [
                        34,
                        "admins_auth_logs_pk_columns_input!"
                    ]
                }
            ],
            "update_admins_by_pk": [
                13,
                {
                    "_set": [
                        63
                    ],
                    "pk_columns": [
                        61,
                        "admins_pk_columns_input!"
                    ]
                }
            ],
            "update_auth_methods": [
                75,
                {
                    "_set": [
                        81
                    ],
                    "where": [
                        68,
                        "auth_methods_bool_exp!"
                    ]
                }
            ],
            "update_auth_methods_by_pk": [
                65,
                {
                    "_set": [
                        81
                    ],
                    "pk_columns": [
                        79,
                        "auth_methods_pk_columns_input!"
                    ]
                }
            ],
            "update_blacklist_refresh_token": [
                91,
                {
                    "_set": [
                        96
                    ],
                    "where": [
                        86,
                        "blacklist_refresh_token_bool_exp!"
                    ]
                }
            ],
            "update_blacklist_refresh_token_by_pk": [
                83,
                {
                    "_set": [
                        96
                    ],
                    "pk_columns": [
                        94,
                        "blacklist_refresh_token_pk_columns_input!"
                    ]
                }
            ],
            "update_connectors": [
                110,
                {
                    "_set": [
                        116
                    ],
                    "where": [
                        103,
                        "connectors_bool_exp!"
                    ]
                }
            ],
            "update_connectors_by_pk": [
                100,
                {
                    "_set": [
                        116
                    ],
                    "pk_columns": [
                        114,
                        "connectors_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user": [
                130,
                {
                    "_set": [
                        154
                    ],
                    "where": [
                        123,
                        "customer_user_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_by_pk": [
                118,
                {
                    "_set": [
                        154
                    ],
                    "pk_columns": [
                        133,
                        "customer_user_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user_service": [
                147,
                {
                    "_set": [
                        152
                    ],
                    "where": [
                        140,
                        "customer_user_service_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_service_by_pk": [
                135,
                {
                    "_set": [
                        152
                    ],
                    "pk_columns": [
                        150,
                        "customer_user_service_pk_columns_input!"
                    ]
                }
            ],
            "update_customer_user_sub_service": [
                167,
                {
                    "_set": [
                        172
                    ],
                    "where": [
                        160,
                        "customer_user_sub_service_bool_exp!"
                    ]
                }
            ],
            "update_customer_user_sub_service_by_pk": [
                155,
                {
                    "_set": [
                        172
                    ],
                    "pk_columns": [
                        170,
                        "customer_user_sub_service_pk_columns_input!"
                    ]
                }
            ],
            "update_customers": [
                206,
                {
                    "_inc": [
                        200
                    ],
                    "_set": [
                        212
                    ],
                    "where": [
                        182,
                        "customers_bool_exp!"
                    ]
                }
            ],
            "update_customers_by_pk": [
                175,
                {
                    "_inc": [
                        200
                    ],
                    "_set": [
                        212
                    ],
                    "pk_columns": [
                        210,
                        "customers_pk_columns_input!"
                    ]
                }
            ],
            "update_customers_contact": [
                192,
                {
                    "_set": [
                        198
                    ],
                    "where": [
                        187,
                        "customers_contact_bool_exp!"
                    ]
                }
            ],
            "update_customers_contact_by_pk": [
                184,
                {
                    "_set": [
                        198
                    ],
                    "pk_columns": [
                        196,
                        "customers_contact_pk_columns_input!"
                    ]
                }
            ],
            "update_feature_names": [
                238,
                {
                    "_set": [
                        244
                    ],
                    "where": [
                        231,
                        "feature_names_bool_exp!"
                    ]
                }
            ],
            "update_feature_names_by_pk": [
                228,
                {
                    "_set": [
                        244
                    ],
                    "pk_columns": [
                        242,
                        "feature_names_pk_columns_input!"
                    ]
                }
            ],
            "update_features": [
                258,
                {
                    "_set": [
                        263
                    ],
                    "where": [
                        251,
                        "features_bool_exp!"
                    ]
                }
            ],
            "update_features_by_pk": [
                246,
                {
                    "_set": [
                        263
                    ],
                    "pk_columns": [
                        261,
                        "features_pk_columns_input!"
                    ]
                }
            ],
            "update_partners": [
                275,
                {
                    "_set": [
                        281
                    ],
                    "where": [
                        270,
                        "partners_bool_exp!"
                    ]
                }
            ],
            "update_partners_by_pk": [
                267,
                {
                    "_set": [
                        281
                    ],
                    "pk_columns": [
                        279,
                        "partners_pk_columns_input!"
                    ]
                }
            ],
            "update_roles": [
                293,
                {
                    "_set": [
                        299
                    ],
                    "where": [
                        286,
                        "roles_bool_exp!"
                    ]
                }
            ],
            "update_roles_by_pk": [
                283,
                {
                    "_set": [
                        299
                    ],
                    "pk_columns": [
                        297,
                        "roles_pk_columns_input!"
                    ]
                }
            ],
            "update_services": [
                311,
                {
                    "_set": [
                        317
                    ],
                    "where": [
                        304,
                        "services_bool_exp!"
                    ]
                }
            ],
            "update_services_by_pk": [
                301,
                {
                    "_set": [
                        317
                    ],
                    "pk_columns": [
                        315,
                        "services_pk_columns_input!"
                    ]
                }
            ],
            "update_srv_names": [
                329,
                {
                    "_set": [
                        335
                    ],
                    "where": [
                        322,
                        "srv_names_bool_exp!"
                    ]
                }
            ],
            "update_srv_names_by_pk": [
                319,
                {
                    "_set": [
                        335
                    ],
                    "pk_columns": [
                        333,
                        "srv_names_pk_columns_input!"
                    ]
                }
            ],
            "update_srv_urls": [
                349,
                {
                    "_set": [
                        354
                    ],
                    "where": [
                        342,
                        "srv_urls_bool_exp!"
                    ]
                }
            ],
            "update_srv_urls_by_pk": [
                337,
                {
                    "_set": [
                        354
                    ],
                    "pk_columns": [
                        352,
                        "srv_urls_pk_columns_input!"
                    ]
                }
            ],
            "update_status": [
                366,
                {
                    "_set": [
                        372
                    ],
                    "where": [
                        359,
                        "status_bool_exp!"
                    ]
                }
            ],
            "update_status_by_pk": [
                356,
                {
                    "_set": [
                        372
                    ],
                    "pk_columns": [
                        370,
                        "status_pk_columns_input!"
                    ]
                }
            ],
            "update_sub_services": [
                386,
                {
                    "_set": [
                        392
                    ],
                    "where": [
                        379,
                        "sub_services_bool_exp!"
                    ]
                }
            ],
            "update_sub_services_by_pk": [
                374,
                {
                    "_set": [
                        392
                    ],
                    "pk_columns": [
                        390,
                        "sub_services_pk_columns_input!"
                    ]
                }
            ],
            "update_user_basic_data": [
                408,
                {
                    "_set": [
                        414
                    ],
                    "where": [
                        401,
                        "user_basic_data_bool_exp!"
                    ]
                }
            ],
            "update_user_basic_data_by_pk": [
                396,
                {
                    "_set": [
                        414
                    ],
                    "pk_columns": [
                        412,
                        "user_basic_data_pk_columns_input!"
                    ]
                }
            ],
            "update_user_phone": [
                424,
                {
                    "_set": [
                        430
                    ],
                    "where": [
                        419,
                        "user_phone_bool_exp!"
                    ]
                }
            ],
            "update_user_phone_by_pk": [
                416,
                {
                    "_set": [
                        430
                    ],
                    "pk_columns": [
                        428,
                        "user_phone_pk_columns_input!"
                    ]
                }
            ],
            "update_users": [
                480,
                {
                    "_set": [
                        486
                    ],
                    "where": [
                        473,
                        "users_bool_exp!"
                    ]
                }
            ],
            "update_users_auth_logs": [
                452,
                {
                    "_inc": [
                        446
                    ],
                    "_set": [
                        457
                    ],
                    "where": [
                        444,
                        "users_auth_logs_bool_exp!"
                    ]
                }
            ],
            "update_users_auth_logs_by_pk": [
                437,
                {
                    "_inc": [
                        446
                    ],
                    "_set": [
                        457
                    ],
                    "pk_columns": [
                        455,
                        "users_auth_logs_pk_columns_input!"
                    ]
                }
            ],
            "update_users_by_pk": [
                432,
                {
                    "_set": [
                        486
                    ],
                    "pk_columns": [
                        484,
                        "users_pk_columns_input!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        },
        "Subscription": {
            "admins": [
                13,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_aggregate": [
                14,
                {
                    "distinct_on": [
                        62,
                        "[admins_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        60,
                        "[admins_order_by!]"
                    ],
                    "where": [
                        52
                    ]
                }
            ],
            "admins_auth_logs": [
                16,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_aggregate": [
                17,
                {
                    "distinct_on": [
                        35,
                        "[admins_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        33,
                        "[admins_auth_logs_order_by!]"
                    ],
                    "where": [
                        23
                    ]
                }
            ],
            "admins_auth_logs_by_pk": [
                16,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "admins_by_pk": [
                13,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "auth_methods": [
                65,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_aggregate": [
                66,
                {
                    "distinct_on": [
                        80,
                        "[auth_methods_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        78,
                        "[auth_methods_order_by!]"
                    ],
                    "where": [
                        68
                    ]
                }
            ],
            "auth_methods_by_pk": [
                65,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "blacklist_refresh_token": [
                83,
                {
                    "distinct_on": [
                        95,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        93,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_aggregate": [
                84,
                {
                    "distinct_on": [
                        95,
                        "[blacklist_refresh_token_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        93,
                        "[blacklist_refresh_token_order_by!]"
                    ],
                    "where": [
                        86
                    ]
                }
            ],
            "blacklist_refresh_token_by_pk": [
                83,
                {
                    "sig": [
                        10,
                        "String!"
                    ]
                }
            ],
            "connectors": [
                100,
                {
                    "distinct_on": [
                        115,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        113,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "connectors_aggregate": [
                101,
                {
                    "distinct_on": [
                        115,
                        "[connectors_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        113,
                        "[connectors_order_by!]"
                    ],
                    "where": [
                        103
                    ]
                }
            ],
            "connectors_by_pk": [
                100,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "customer_user": [
                118,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_user_aggregate": [
                119,
                {
                    "distinct_on": [
                        134,
                        "[customer_user_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        132,
                        "[customer_user_order_by!]"
                    ],
                    "where": [
                        123
                    ]
                }
            ],
            "customer_user_by_pk": [
                118,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_service": [
                135,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_service_aggregate": [
                136,
                {
                    "distinct_on": [
                        151,
                        "[customer_user_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        149,
                        "[customer_user_service_order_by!]"
                    ],
                    "where": [
                        140
                    ]
                }
            ],
            "customer_user_service_by_pk": [
                135,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customer_user_sub_service": [
                155,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_service_aggregate": [
                156,
                {
                    "distinct_on": [
                        171,
                        "[customer_user_sub_service_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        169,
                        "[customer_user_sub_service_order_by!]"
                    ],
                    "where": [
                        160
                    ]
                }
            ],
            "customer_user_sub_service_by_pk": [
                155,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ],
                    "sub_service": [
                        10,
                        "String!"
                    ],
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customers": [
                175,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_aggregate": [
                176,
                {
                    "distinct_on": [
                        211,
                        "[customers_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        209,
                        "[customers_order_by!]"
                    ],
                    "where": [
                        182
                    ]
                }
            ],
            "customers_by_pk": [
                175,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "customers_contact": [
                184,
                {
                    "distinct_on": [
                        197,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        195,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        187
                    ]
                }
            ],
            "customers_contact_aggregate": [
                185,
                {
                    "distinct_on": [
                        197,
                        "[customers_contact_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        195,
                        "[customers_contact_order_by!]"
                    ],
                    "where": [
                        187
                    ]
                }
            ],
            "customers_contact_by_pk": [
                184,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "feature_names": [
                228,
                {
                    "distinct_on": [
                        243,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        241,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "feature_names_aggregate": [
                229,
                {
                    "distinct_on": [
                        243,
                        "[feature_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        241,
                        "[feature_names_order_by!]"
                    ],
                    "where": [
                        231
                    ]
                }
            ],
            "feature_names_by_pk": [
                228,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "features": [
                246,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_aggregate": [
                247,
                {
                    "distinct_on": [
                        262,
                        "[features_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        260,
                        "[features_order_by!]"
                    ],
                    "where": [
                        251
                    ]
                }
            ],
            "features_by_pk": [
                246,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        233,
                        "feature_names_enum!"
                    ]
                }
            ],
            "partners": [
                267,
                {
                    "distinct_on": [
                        280,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "partners_aggregate": [
                268,
                {
                    "distinct_on": [
                        280,
                        "[partners_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        278,
                        "[partners_order_by!]"
                    ],
                    "where": [
                        270
                    ]
                }
            ],
            "partners_by_pk": [
                267,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "roles": [
                283,
                {
                    "distinct_on": [
                        298,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        286
                    ]
                }
            ],
            "roles_aggregate": [
                284,
                {
                    "distinct_on": [
                        298,
                        "[roles_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        296,
                        "[roles_order_by!]"
                    ],
                    "where": [
                        286
                    ]
                }
            ],
            "roles_by_pk": [
                283,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "services": [
                301,
                {
                    "distinct_on": [
                        316,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[services_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "services_aggregate": [
                302,
                {
                    "distinct_on": [
                        316,
                        "[services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        314,
                        "[services_order_by!]"
                    ],
                    "where": [
                        304
                    ]
                }
            ],
            "services_by_pk": [
                301,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_names": [
                319,
                {
                    "distinct_on": [
                        334,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "srv_names_aggregate": [
                320,
                {
                    "distinct_on": [
                        334,
                        "[srv_names_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        332,
                        "[srv_names_order_by!]"
                    ],
                    "where": [
                        322
                    ]
                }
            ],
            "srv_names_by_pk": [
                319,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "srv_urls": [
                337,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "srv_urls_aggregate": [
                338,
                {
                    "distinct_on": [
                        353,
                        "[srv_urls_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        351,
                        "[srv_urls_order_by!]"
                    ],
                    "where": [
                        342
                    ]
                }
            ],
            "srv_urls_by_pk": [
                337,
                {
                    "customer_id": [
                        488,
                        "uuid!"
                    ],
                    "name": [
                        324,
                        "srv_names_enum!"
                    ]
                }
            ],
            "status": [
                356,
                {
                    "distinct_on": [
                        371,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[status_order_by!]"
                    ],
                    "where": [
                        359
                    ]
                }
            ],
            "status_aggregate": [
                357,
                {
                    "distinct_on": [
                        371,
                        "[status_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        369,
                        "[status_order_by!]"
                    ],
                    "where": [
                        359
                    ]
                }
            ],
            "status_by_pk": [
                356,
                {
                    "name": [
                        10,
                        "String!"
                    ]
                }
            ],
            "sub_services": [
                374,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "sub_services_aggregate": [
                375,
                {
                    "distinct_on": [
                        391,
                        "[sub_services_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        389,
                        "[sub_services_order_by!]"
                    ],
                    "where": [
                        379
                    ]
                }
            ],
            "sub_services_by_pk": [
                374,
                {
                    "name": [
                        10,
                        "String!"
                    ],
                    "service": [
                        306,
                        "services_enum!"
                    ]
                }
            ],
            "user_basic_data": [
                396,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "user_basic_data_aggregate": [
                397,
                {
                    "distinct_on": [
                        413,
                        "[user_basic_data_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        411,
                        "[user_basic_data_order_by!]"
                    ],
                    "where": [
                        401
                    ]
                }
            ],
            "user_basic_data_by_pk": [
                396,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "user_phone": [
                416,
                {
                    "distinct_on": [
                        429,
                        "[user_phone_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        427,
                        "[user_phone_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_phone_aggregate": [
                417,
                {
                    "distinct_on": [
                        429,
                        "[user_phone_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        427,
                        "[user_phone_order_by!]"
                    ],
                    "where": [
                        419
                    ]
                }
            ],
            "user_phone_by_pk": [
                416,
                {
                    "user_id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "users": [
                432,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "users_aggregate": [
                433,
                {
                    "distinct_on": [
                        485,
                        "[users_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        483,
                        "[users_order_by!]"
                    ],
                    "where": [
                        473
                    ]
                }
            ],
            "users_auth_logs": [
                437,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_aggregate": [
                438,
                {
                    "distinct_on": [
                        456,
                        "[users_auth_logs_select_column!]"
                    ],
                    "limit": [
                        4
                    ],
                    "offset": [
                        4
                    ],
                    "order_by": [
                        454,
                        "[users_auth_logs_order_by!]"
                    ],
                    "where": [
                        444
                    ]
                }
            ],
            "users_auth_logs_by_pk": [
                437,
                {
                    "id": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "users_by_pk": [
                432,
                {
                    "id": [
                        488,
                        "uuid!"
                    ]
                }
            ],
            "__typename": [
                10
            ]
        }
    }
}
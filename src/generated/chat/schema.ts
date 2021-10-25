import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    Float: number,
    Int: number,
    String: string,
    time: any,
    timestamptz: any,
    uuid: any,
}


/** columns and relationships of "attachment_extensions" */
export interface attachment_extensions {
    /** An array relationship */
    attachments: attachments[]
    /** An aggregate relationship */
    attachments_aggregate: attachments_aggregate
    comment: Scalars['String']
    name: Scalars['String']
    __typename: 'attachment_extensions'
}


/** aggregated selection of "attachment_extensions" */
export interface attachment_extensions_aggregate {
    aggregate?: attachment_extensions_aggregate_fields
    nodes: attachment_extensions[]
    __typename: 'attachment_extensions_aggregate'
}


/** aggregate fields of "attachment_extensions" */
export interface attachment_extensions_aggregate_fields {
    count: Scalars['Int']
    max?: attachment_extensions_max_fields
    min?: attachment_extensions_min_fields
    __typename: 'attachment_extensions_aggregate_fields'
}


/** unique or primary key constraints on table "attachment_extensions" */
export type attachment_extensions_constraint = 'attachment_extensions_pkey'

export type attachment_extensions_enum = 'doc' | 'docx' | 'jpeg' | 'jpg' | 'pdf' | 'png' | 'unknown'


/** aggregate max on columns */
export interface attachment_extensions_max_fields {
    comment?: Scalars['String']
    name?: Scalars['String']
    __typename: 'attachment_extensions_max_fields'
}


/** aggregate min on columns */
export interface attachment_extensions_min_fields {
    comment?: Scalars['String']
    name?: Scalars['String']
    __typename: 'attachment_extensions_min_fields'
}


/** response of any mutation on the table "attachment_extensions" */
export interface attachment_extensions_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: attachment_extensions[]
    __typename: 'attachment_extensions_mutation_response'
}


/** select columns of table "attachment_extensions" */
export type attachment_extensions_select_column = 'comment' | 'name'


/** update columns of table "attachment_extensions" */
export type attachment_extensions_update_column = 'comment' | 'name'


/** columns and relationships of "attachments" */
export interface attachments {
    /** An object relationship */
    attachment_extension: attachment_extensions
    created_at: Scalars['timestamptz']
    deleted_at?: Scalars['time']
    extension: attachment_extensions_enum
    id: Scalars['uuid']
    message_id?: Scalars['uuid']
    path: Scalars['String']
    /** An object relationship */
    ticket: tickets
    ticket_id: Scalars['uuid']
    /** An object relationship */
    ticket_message?: ticket_messages
    title: Scalars['String']
    updated_at: Scalars['timestamptz']
    __typename: 'attachments'
}


/** aggregated selection of "attachments" */
export interface attachments_aggregate {
    aggregate?: attachments_aggregate_fields
    nodes: attachments[]
    __typename: 'attachments_aggregate'
}


/** aggregate fields of "attachments" */
export interface attachments_aggregate_fields {
    count: Scalars['Int']
    max?: attachments_max_fields
    min?: attachments_min_fields
    __typename: 'attachments_aggregate_fields'
}


/** unique or primary key constraints on table "attachments" */
export type attachments_constraint = 'attachments_pkey'


/** aggregate max on columns */
export interface attachments_max_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message_id?: Scalars['uuid']
    path?: Scalars['String']
    ticket_id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'attachments_max_fields'
}


/** aggregate min on columns */
export interface attachments_min_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    message_id?: Scalars['uuid']
    path?: Scalars['String']
    ticket_id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'attachments_min_fields'
}


/** response of any mutation on the table "attachments" */
export interface attachments_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: attachments[]
    __typename: 'attachments_mutation_response'
}


/** select columns of table "attachments" */
export type attachments_select_column = 'created_at' | 'deleted_at' | 'extension' | 'id' | 'message_id' | 'path' | 'ticket_id' | 'title' | 'updated_at'


/** update columns of table "attachments" */
export type attachments_update_column = 'created_at' | 'deleted_at' | 'extension' | 'id' | 'message_id' | 'path' | 'ticket_id' | 'title' | 'updated_at'


/** columns and relationships of "is_participant_online" */
export interface is_participant_online {
    description?: Scalars['String']
    is_online: Scalars['String']
    /** An array relationship */
    participants: participants[]
    /** An aggregate relationship */
    participants_aggregate: participants_aggregate
    __typename: 'is_participant_online'
}


/** aggregated selection of "is_participant_online" */
export interface is_participant_online_aggregate {
    aggregate?: is_participant_online_aggregate_fields
    nodes: is_participant_online[]
    __typename: 'is_participant_online_aggregate'
}


/** aggregate fields of "is_participant_online" */
export interface is_participant_online_aggregate_fields {
    count: Scalars['Int']
    max?: is_participant_online_max_fields
    min?: is_participant_online_min_fields
    __typename: 'is_participant_online_aggregate_fields'
}


/** unique or primary key constraints on table "is_participant_online" */
export type is_participant_online_constraint = 'is_participant_online_pkey'


/** aggregate max on columns */
export interface is_participant_online_max_fields {
    description?: Scalars['String']
    is_online?: Scalars['String']
    __typename: 'is_participant_online_max_fields'
}


/** aggregate min on columns */
export interface is_participant_online_min_fields {
    description?: Scalars['String']
    is_online?: Scalars['String']
    __typename: 'is_participant_online_min_fields'
}


/** response of any mutation on the table "is_participant_online" */
export interface is_participant_online_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: is_participant_online[]
    __typename: 'is_participant_online_mutation_response'
}


/** select columns of table "is_participant_online" */
export type is_participant_online_select_column = 'description' | 'is_online'


/** update columns of table "is_participant_online" */
export type is_participant_online_update_column = 'description' | 'is_online'


/** columns and relationships of "messages" */
export interface messages {
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    message: Scalars['String']
    participant_id: Scalars['Int']
    participant_name: Scalars['String']
    /** An array relationship */
    participant_rooms: participant_room[]
    /** An aggregate relationship */
    participant_rooms_aggregate: participant_room_aggregate
    /** An object relationship */
    room: rooms
    room_id: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'messages'
}


/** aggregated selection of "messages" */
export interface messages_aggregate {
    aggregate?: messages_aggregate_fields
    nodes: messages[]
    __typename: 'messages_aggregate'
}


/** aggregate fields of "messages" */
export interface messages_aggregate_fields {
    avg?: messages_avg_fields
    count: Scalars['Int']
    max?: messages_max_fields
    min?: messages_min_fields
    stddev?: messages_stddev_fields
    stddev_pop?: messages_stddev_pop_fields
    stddev_samp?: messages_stddev_samp_fields
    sum?: messages_sum_fields
    var_pop?: messages_var_pop_fields
    var_samp?: messages_var_samp_fields
    variance?: messages_variance_fields
    __typename: 'messages_aggregate_fields'
}


/** aggregate avg on columns */
export interface messages_avg_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_avg_fields'
}


/** unique or primary key constraints on table "messages" */
export type messages_constraint = 'messages_pkey'


/** aggregate max on columns */
export interface messages_max_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    message?: Scalars['String']
    participant_id?: Scalars['Int']
    participant_name?: Scalars['String']
    room_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'messages_max_fields'
}


/** aggregate min on columns */
export interface messages_min_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    message?: Scalars['String']
    participant_id?: Scalars['Int']
    participant_name?: Scalars['String']
    room_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'messages_min_fields'
}


/** response of any mutation on the table "messages" */
export interface messages_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: messages[]
    __typename: 'messages_mutation_response'
}


/** select columns of table "messages" */
export type messages_select_column = 'created_at' | 'id' | 'message' | 'participant_id' | 'participant_name' | 'room_id' | 'updated_at'


/** aggregate stddev on columns */
export interface messages_stddev_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface messages_stddev_pop_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface messages_stddev_samp_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface messages_sum_fields {
    id?: Scalars['Int']
    participant_id?: Scalars['Int']
    room_id?: Scalars['Int']
    __typename: 'messages_sum_fields'
}


/** update columns of table "messages" */
export type messages_update_column = 'created_at' | 'id' | 'message' | 'participant_id' | 'participant_name' | 'room_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface messages_var_pop_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface messages_var_samp_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_var_samp_fields'
}


/** aggregate variance on columns */
export interface messages_variance_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    __typename: 'messages_variance_fields'
}


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "attachment_extensions" */
    delete_attachment_extensions?: attachment_extensions_mutation_response
    /** delete single row from the table: "attachment_extensions" */
    delete_attachment_extensions_by_pk?: attachment_extensions
    /** delete data from the table: "attachments" */
    delete_attachments?: attachments_mutation_response
    /** delete single row from the table: "attachments" */
    delete_attachments_by_pk?: attachments
    /** delete data from the table: "is_participant_online" */
    delete_is_participant_online?: is_participant_online_mutation_response
    /** delete single row from the table: "is_participant_online" */
    delete_is_participant_online_by_pk?: is_participant_online
    /** delete data from the table: "messages" */
    delete_messages?: messages_mutation_response
    /** delete single row from the table: "messages" */
    delete_messages_by_pk?: messages
    /** delete data from the table: "participant_room" */
    delete_participant_room?: participant_room_mutation_response
    /** delete single row from the table: "participant_room" */
    delete_participant_room_by_pk?: participant_room
    /** delete data from the table: "participant_type" */
    delete_participant_type?: participant_type_mutation_response
    /** delete single row from the table: "participant_type" */
    delete_participant_type_by_pk?: participant_type
    /** delete data from the table: "participants" */
    delete_participants?: participants_mutation_response
    /** delete single row from the table: "participants" */
    delete_participants_by_pk?: participants
    /** delete data from the table: "room_status" */
    delete_room_status?: room_status_mutation_response
    /** delete single row from the table: "room_status" */
    delete_room_status_by_pk?: room_status
    /** delete data from the table: "room_type" */
    delete_room_type?: room_type_mutation_response
    /** delete single row from the table: "room_type" */
    delete_room_type_by_pk?: room_type
    /** delete data from the table: "room_visibility" */
    delete_room_visibility?: room_visibility_mutation_response
    /** delete single row from the table: "room_visibility" */
    delete_room_visibility_by_pk?: room_visibility
    /** delete data from the table: "rooms" */
    delete_rooms?: rooms_mutation_response
    /** delete single row from the table: "rooms" */
    delete_rooms_by_pk?: rooms
    /** delete data from the table: "ticket_messages" */
    delete_ticket_messages?: ticket_messages_mutation_response
    /** delete single row from the table: "ticket_messages" */
    delete_ticket_messages_by_pk?: ticket_messages
    /** delete data from the table: "ticket_participants" */
    delete_ticket_participants?: ticket_participants_mutation_response
    /** delete single row from the table: "ticket_participants" */
    delete_ticket_participants_by_pk?: ticket_participants
    /** delete data from the table: "ticket_states" */
    delete_ticket_states?: ticket_states_mutation_response
    /** delete single row from the table: "ticket_states" */
    delete_ticket_states_by_pk?: ticket_states
    /** delete data from the table: "tickets" */
    delete_tickets?: tickets_mutation_response
    /** delete single row from the table: "tickets" */
    delete_tickets_by_pk?: tickets
    /** delete data from the table: "users" */
    delete_users?: users_mutation_response
    /** delete single row from the table: "users" */
    delete_users_by_pk?: users
    /** insert data into the table: "attachment_extensions" */
    insert_attachment_extensions?: attachment_extensions_mutation_response
    /** insert a single row into the table: "attachment_extensions" */
    insert_attachment_extensions_one?: attachment_extensions
    /** insert data into the table: "attachments" */
    insert_attachments?: attachments_mutation_response
    /** insert a single row into the table: "attachments" */
    insert_attachments_one?: attachments
    /** insert data into the table: "is_participant_online" */
    insert_is_participant_online?: is_participant_online_mutation_response
    /** insert a single row into the table: "is_participant_online" */
    insert_is_participant_online_one?: is_participant_online
    /** insert data into the table: "messages" */
    insert_messages?: messages_mutation_response
    /** insert a single row into the table: "messages" */
    insert_messages_one?: messages
    /** insert data into the table: "participant_room" */
    insert_participant_room?: participant_room_mutation_response
    /** insert a single row into the table: "participant_room" */
    insert_participant_room_one?: participant_room
    /** insert data into the table: "participant_type" */
    insert_participant_type?: participant_type_mutation_response
    /** insert a single row into the table: "participant_type" */
    insert_participant_type_one?: participant_type
    /** insert data into the table: "participants" */
    insert_participants?: participants_mutation_response
    /** insert a single row into the table: "participants" */
    insert_participants_one?: participants
    /** insert data into the table: "room_status" */
    insert_room_status?: room_status_mutation_response
    /** insert a single row into the table: "room_status" */
    insert_room_status_one?: room_status
    /** insert data into the table: "room_type" */
    insert_room_type?: room_type_mutation_response
    /** insert a single row into the table: "room_type" */
    insert_room_type_one?: room_type
    /** insert data into the table: "room_visibility" */
    insert_room_visibility?: room_visibility_mutation_response
    /** insert a single row into the table: "room_visibility" */
    insert_room_visibility_one?: room_visibility
    /** insert data into the table: "rooms" */
    insert_rooms?: rooms_mutation_response
    /** insert a single row into the table: "rooms" */
    insert_rooms_one?: rooms
    /** insert data into the table: "ticket_messages" */
    insert_ticket_messages?: ticket_messages_mutation_response
    /** insert a single row into the table: "ticket_messages" */
    insert_ticket_messages_one?: ticket_messages
    /** insert data into the table: "ticket_participants" */
    insert_ticket_participants?: ticket_participants_mutation_response
    /** insert a single row into the table: "ticket_participants" */
    insert_ticket_participants_one?: ticket_participants
    /** insert data into the table: "ticket_states" */
    insert_ticket_states?: ticket_states_mutation_response
    /** insert a single row into the table: "ticket_states" */
    insert_ticket_states_one?: ticket_states
    /** insert data into the table: "tickets" */
    insert_tickets?: tickets_mutation_response
    /** insert a single row into the table: "tickets" */
    insert_tickets_one?: tickets
    /** insert data into the table: "users" */
    insert_users?: users_mutation_response
    /** insert a single row into the table: "users" */
    insert_users_one?: users
    /** update data of the table: "attachment_extensions" */
    update_attachment_extensions?: attachment_extensions_mutation_response
    /** update single row of the table: "attachment_extensions" */
    update_attachment_extensions_by_pk?: attachment_extensions
    /** update data of the table: "attachments" */
    update_attachments?: attachments_mutation_response
    /** update single row of the table: "attachments" */
    update_attachments_by_pk?: attachments
    /** update data of the table: "is_participant_online" */
    update_is_participant_online?: is_participant_online_mutation_response
    /** update single row of the table: "is_participant_online" */
    update_is_participant_online_by_pk?: is_participant_online
    /** update data of the table: "messages" */
    update_messages?: messages_mutation_response
    /** update single row of the table: "messages" */
    update_messages_by_pk?: messages
    /** update data of the table: "participant_room" */
    update_participant_room?: participant_room_mutation_response
    /** update single row of the table: "participant_room" */
    update_participant_room_by_pk?: participant_room
    /** update data of the table: "participant_type" */
    update_participant_type?: participant_type_mutation_response
    /** update single row of the table: "participant_type" */
    update_participant_type_by_pk?: participant_type
    /** update data of the table: "participants" */
    update_participants?: participants_mutation_response
    /** update single row of the table: "participants" */
    update_participants_by_pk?: participants
    /** update data of the table: "room_status" */
    update_room_status?: room_status_mutation_response
    /** update single row of the table: "room_status" */
    update_room_status_by_pk?: room_status
    /** update data of the table: "room_type" */
    update_room_type?: room_type_mutation_response
    /** update single row of the table: "room_type" */
    update_room_type_by_pk?: room_type
    /** update data of the table: "room_visibility" */
    update_room_visibility?: room_visibility_mutation_response
    /** update single row of the table: "room_visibility" */
    update_room_visibility_by_pk?: room_visibility
    /** update data of the table: "rooms" */
    update_rooms?: rooms_mutation_response
    /** update single row of the table: "rooms" */
    update_rooms_by_pk?: rooms
    /** update data of the table: "ticket_messages" */
    update_ticket_messages?: ticket_messages_mutation_response
    /** update single row of the table: "ticket_messages" */
    update_ticket_messages_by_pk?: ticket_messages
    /** update data of the table: "ticket_participants" */
    update_ticket_participants?: ticket_participants_mutation_response
    /** update single row of the table: "ticket_participants" */
    update_ticket_participants_by_pk?: ticket_participants
    /** update data of the table: "ticket_states" */
    update_ticket_states?: ticket_states_mutation_response
    /** update single row of the table: "ticket_states" */
    update_ticket_states_by_pk?: ticket_states
    /** update data of the table: "tickets" */
    update_tickets?: tickets_mutation_response
    /** update single row of the table: "tickets" */
    update_tickets_by_pk?: tickets
    /** update data of the table: "users" */
    update_users?: users_mutation_response
    /** update single row of the table: "users" */
    update_users_by_pk?: users
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'


/** columns and relationships of "participant_room" */
export interface participant_room {
    created_at: Scalars['timestamptz']
    id: Scalars['Int']
    is_room_owner: Scalars['Boolean']
    /** An object relationship */
    message?: messages
    /** An object relationship */
    participant: participants
    participant_id: Scalars['Int']
    /** An object relationship */
    room: rooms
    room_id: Scalars['Int']
    unread_count: Scalars['Int']
    unread_message_id?: Scalars['Int']
    updated_at: Scalars['timestamptz']
    __typename: 'participant_room'
}


/** aggregated selection of "participant_room" */
export interface participant_room_aggregate {
    aggregate?: participant_room_aggregate_fields
    nodes: participant_room[]
    __typename: 'participant_room_aggregate'
}


/** aggregate fields of "participant_room" */
export interface participant_room_aggregate_fields {
    avg?: participant_room_avg_fields
    count: Scalars['Int']
    max?: participant_room_max_fields
    min?: participant_room_min_fields
    stddev?: participant_room_stddev_fields
    stddev_pop?: participant_room_stddev_pop_fields
    stddev_samp?: participant_room_stddev_samp_fields
    sum?: participant_room_sum_fields
    var_pop?: participant_room_var_pop_fields
    var_samp?: participant_room_var_samp_fields
    variance?: participant_room_variance_fields
    __typename: 'participant_room_aggregate_fields'
}


/** aggregate avg on columns */
export interface participant_room_avg_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_avg_fields'
}


/** unique or primary key constraints on table "participant_room" */
export type participant_room_constraint = 'participant_room_pkey'


/** aggregate max on columns */
export interface participant_room_max_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    participant_id?: Scalars['Int']
    room_id?: Scalars['Int']
    unread_count?: Scalars['Int']
    unread_message_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'participant_room_max_fields'
}


/** aggregate min on columns */
export interface participant_room_min_fields {
    created_at?: Scalars['timestamptz']
    id?: Scalars['Int']
    participant_id?: Scalars['Int']
    room_id?: Scalars['Int']
    unread_count?: Scalars['Int']
    unread_message_id?: Scalars['Int']
    updated_at?: Scalars['timestamptz']
    __typename: 'participant_room_min_fields'
}


/** response of any mutation on the table "participant_room" */
export interface participant_room_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: participant_room[]
    __typename: 'participant_room_mutation_response'
}


/** select columns of table "participant_room" */
export type participant_room_select_column = 'created_at' | 'id' | 'is_room_owner' | 'participant_id' | 'room_id' | 'unread_count' | 'unread_message_id' | 'updated_at'


/** aggregate stddev on columns */
export interface participant_room_stddev_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface participant_room_stddev_pop_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface participant_room_stddev_samp_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface participant_room_sum_fields {
    id?: Scalars['Int']
    participant_id?: Scalars['Int']
    room_id?: Scalars['Int']
    unread_count?: Scalars['Int']
    unread_message_id?: Scalars['Int']
    __typename: 'participant_room_sum_fields'
}


/** update columns of table "participant_room" */
export type participant_room_update_column = 'created_at' | 'id' | 'is_room_owner' | 'participant_id' | 'room_id' | 'unread_count' | 'unread_message_id' | 'updated_at'


/** aggregate var_pop on columns */
export interface participant_room_var_pop_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface participant_room_var_samp_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_var_samp_fields'
}


/** aggregate variance on columns */
export interface participant_room_variance_fields {
    id?: Scalars['Float']
    participant_id?: Scalars['Float']
    room_id?: Scalars['Float']
    unread_count?: Scalars['Float']
    unread_message_id?: Scalars['Float']
    __typename: 'participant_room_variance_fields'
}


/** columns and relationships of "participant_type" */
export interface participant_type {
    description?: Scalars['String']
    /** An array relationship */
    participants: participants[]
    /** An aggregate relationship */
    participants_aggregate: participants_aggregate
    type: Scalars['String']
    __typename: 'participant_type'
}


/** aggregated selection of "participant_type" */
export interface participant_type_aggregate {
    aggregate?: participant_type_aggregate_fields
    nodes: participant_type[]
    __typename: 'participant_type_aggregate'
}


/** aggregate fields of "participant_type" */
export interface participant_type_aggregate_fields {
    count: Scalars['Int']
    max?: participant_type_max_fields
    min?: participant_type_min_fields
    __typename: 'participant_type_aggregate_fields'
}


/** unique or primary key constraints on table "participant_type" */
export type participant_type_constraint = 'participant_type_pkey'


/** aggregate max on columns */
export interface participant_type_max_fields {
    description?: Scalars['String']
    type?: Scalars['String']
    __typename: 'participant_type_max_fields'
}


/** aggregate min on columns */
export interface participant_type_min_fields {
    description?: Scalars['String']
    type?: Scalars['String']
    __typename: 'participant_type_min_fields'
}


/** response of any mutation on the table "participant_type" */
export interface participant_type_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: participant_type[]
    __typename: 'participant_type_mutation_response'
}


/** select columns of table "participant_type" */
export type participant_type_select_column = 'description' | 'type'


/** update columns of table "participant_type" */
export type participant_type_update_column = 'description' | 'type'


/** columns and relationships of "participants" */
export interface participants {
    created_at?: Scalars['timestamptz']
    customer_id: Scalars['uuid']
    customer_name: Scalars['String']
    id: Scalars['Int']
    is_online: Scalars['String']
    /** An object relationship */
    is_participant_online: is_participant_online
    name: Scalars['String']
    /** An array relationship */
    participant_rooms: participant_room[]
    /** An aggregate relationship */
    participant_rooms_aggregate: participant_room_aggregate
    /** An object relationship */
    participant_type: participant_type
    patient_token?: Scalars['String']
    type: Scalars['String']
    updated_at?: Scalars['timestamptz']
    user_id: Scalars['uuid']
    __typename: 'participants'
}


/** aggregated selection of "participants" */
export interface participants_aggregate {
    aggregate?: participants_aggregate_fields
    nodes: participants[]
    __typename: 'participants_aggregate'
}


/** aggregate fields of "participants" */
export interface participants_aggregate_fields {
    avg?: participants_avg_fields
    count: Scalars['Int']
    max?: participants_max_fields
    min?: participants_min_fields
    stddev?: participants_stddev_fields
    stddev_pop?: participants_stddev_pop_fields
    stddev_samp?: participants_stddev_samp_fields
    sum?: participants_sum_fields
    var_pop?: participants_var_pop_fields
    var_samp?: participants_var_samp_fields
    variance?: participants_variance_fields
    __typename: 'participants_aggregate_fields'
}


/** aggregate avg on columns */
export interface participants_avg_fields {
    id?: Scalars['Float']
    __typename: 'participants_avg_fields'
}


/** unique or primary key constraints on table "participants" */
export type participants_constraint = 'participants_pkey' | 'participants_user_id_key'


/** aggregate max on columns */
export interface participants_max_fields {
    created_at?: Scalars['timestamptz']
    customer_id?: Scalars['uuid']
    customer_name?: Scalars['String']
    id?: Scalars['Int']
    is_online?: Scalars['String']
    name?: Scalars['String']
    patient_token?: Scalars['String']
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    user_id?: Scalars['uuid']
    __typename: 'participants_max_fields'
}


/** aggregate min on columns */
export interface participants_min_fields {
    created_at?: Scalars['timestamptz']
    customer_id?: Scalars['uuid']
    customer_name?: Scalars['String']
    id?: Scalars['Int']
    is_online?: Scalars['String']
    name?: Scalars['String']
    patient_token?: Scalars['String']
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    user_id?: Scalars['uuid']
    __typename: 'participants_min_fields'
}


/** response of any mutation on the table "participants" */
export interface participants_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: participants[]
    __typename: 'participants_mutation_response'
}


/** select columns of table "participants" */
export type participants_select_column = 'created_at' | 'customer_id' | 'customer_name' | 'id' | 'is_online' | 'name' | 'patient_token' | 'type' | 'updated_at' | 'user_id'


/** aggregate stddev on columns */
export interface participants_stddev_fields {
    id?: Scalars['Float']
    __typename: 'participants_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface participants_stddev_pop_fields {
    id?: Scalars['Float']
    __typename: 'participants_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface participants_stddev_samp_fields {
    id?: Scalars['Float']
    __typename: 'participants_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface participants_sum_fields {
    id?: Scalars['Int']
    __typename: 'participants_sum_fields'
}


/** update columns of table "participants" */
export type participants_update_column = 'created_at' | 'customer_id' | 'customer_name' | 'id' | 'is_online' | 'name' | 'patient_token' | 'type' | 'updated_at' | 'user_id'


/** aggregate var_pop on columns */
export interface participants_var_pop_fields {
    id?: Scalars['Float']
    __typename: 'participants_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface participants_var_samp_fields {
    id?: Scalars['Float']
    __typename: 'participants_var_samp_fields'
}


/** aggregate variance on columns */
export interface participants_variance_fields {
    id?: Scalars['Float']
    __typename: 'participants_variance_fields'
}

export interface query_root {
    /** fetch data from the table: "attachment_extensions" */
    attachment_extensions: attachment_extensions[]
    /** fetch aggregated fields from the table: "attachment_extensions" */
    attachment_extensions_aggregate: attachment_extensions_aggregate
    /** fetch data from the table: "attachment_extensions" using primary key columns */
    attachment_extensions_by_pk?: attachment_extensions
    /** An array relationship */
    attachments: attachments[]
    /** An aggregate relationship */
    attachments_aggregate: attachments_aggregate
    /** fetch data from the table: "attachments" using primary key columns */
    attachments_by_pk?: attachments
    /** fetch data from the table: "is_participant_online" */
    is_participant_online: is_participant_online[]
    /** fetch aggregated fields from the table: "is_participant_online" */
    is_participant_online_aggregate: is_participant_online_aggregate
    /** fetch data from the table: "is_participant_online" using primary key columns */
    is_participant_online_by_pk?: is_participant_online
    /** An array relationship */
    messages: messages[]
    /** An aggregate relationship */
    messages_aggregate: messages_aggregate
    /** fetch data from the table: "messages" using primary key columns */
    messages_by_pk?: messages
    /** fetch data from the table: "participant_room" */
    participant_room: participant_room[]
    /** fetch aggregated fields from the table: "participant_room" */
    participant_room_aggregate: participant_room_aggregate
    /** fetch data from the table: "participant_room" using primary key columns */
    participant_room_by_pk?: participant_room
    /** fetch data from the table: "participant_type" */
    participant_type: participant_type[]
    /** fetch aggregated fields from the table: "participant_type" */
    participant_type_aggregate: participant_type_aggregate
    /** fetch data from the table: "participant_type" using primary key columns */
    participant_type_by_pk?: participant_type
    /** An array relationship */
    participants: participants[]
    /** An aggregate relationship */
    participants_aggregate: participants_aggregate
    /** fetch data from the table: "participants" using primary key columns */
    participants_by_pk?: participants
    /** fetch data from the table: "room_status" */
    room_status: room_status[]
    /** fetch aggregated fields from the table: "room_status" */
    room_status_aggregate: room_status_aggregate
    /** fetch data from the table: "room_status" using primary key columns */
    room_status_by_pk?: room_status
    /** fetch data from the table: "room_type" */
    room_type: room_type[]
    /** fetch aggregated fields from the table: "room_type" */
    room_type_aggregate: room_type_aggregate
    /** fetch data from the table: "room_type" using primary key columns */
    room_type_by_pk?: room_type
    /** fetch data from the table: "room_visibility" */
    room_visibility: room_visibility[]
    /** fetch aggregated fields from the table: "room_visibility" */
    room_visibility_aggregate: room_visibility_aggregate
    /** fetch data from the table: "room_visibility" using primary key columns */
    room_visibility_by_pk?: room_visibility
    /** fetch data from the table: "rooms" */
    rooms: rooms[]
    /** An aggregate relationship */
    rooms_aggregate: rooms_aggregate
    /** fetch data from the table: "rooms" using primary key columns */
    rooms_by_pk?: rooms
    /** An array relationship */
    ticket_messages: ticket_messages[]
    /** An aggregate relationship */
    ticket_messages_aggregate: ticket_messages_aggregate
    /** fetch data from the table: "ticket_messages" using primary key columns */
    ticket_messages_by_pk?: ticket_messages
    /** An array relationship */
    ticket_participants: ticket_participants[]
    /** An aggregate relationship */
    ticket_participants_aggregate: ticket_participants_aggregate
    /** fetch data from the table: "ticket_participants" using primary key columns */
    ticket_participants_by_pk?: ticket_participants
    /** fetch data from the table: "ticket_states" */
    ticket_states: ticket_states[]
    /** fetch aggregated fields from the table: "ticket_states" */
    ticket_states_aggregate: ticket_states_aggregate
    /** fetch data from the table: "ticket_states" using primary key columns */
    ticket_states_by_pk?: ticket_states
    /** An array relationship */
    tickets: tickets[]
    /** An aggregate relationship */
    tickets_aggregate: tickets_aggregate
    /** fetch data from the table: "tickets" using primary key columns */
    tickets_by_pk?: tickets
    /** fetch data from the table: "users" */
    users: users[]
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: users_aggregate
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: users
    __typename: 'query_root'
}


/** columns and relationships of "room_status" */
export interface room_status {
    description?: Scalars['String']
    /** fetch data from the table: "rooms" */
    rooms: rooms[]
    /** An aggregate relationship */
    rooms_aggregate: rooms_aggregate
    status: Scalars['String']
    __typename: 'room_status'
}


/** aggregated selection of "room_status" */
export interface room_status_aggregate {
    aggregate?: room_status_aggregate_fields
    nodes: room_status[]
    __typename: 'room_status_aggregate'
}


/** aggregate fields of "room_status" */
export interface room_status_aggregate_fields {
    count: Scalars['Int']
    max?: room_status_max_fields
    min?: room_status_min_fields
    __typename: 'room_status_aggregate_fields'
}


/** unique or primary key constraints on table "room_status" */
export type room_status_constraint = 'room_status_pkey' | 'room_status_status_key'


/** aggregate max on columns */
export interface room_status_max_fields {
    description?: Scalars['String']
    status?: Scalars['String']
    __typename: 'room_status_max_fields'
}


/** aggregate min on columns */
export interface room_status_min_fields {
    description?: Scalars['String']
    status?: Scalars['String']
    __typename: 'room_status_min_fields'
}


/** response of any mutation on the table "room_status" */
export interface room_status_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: room_status[]
    __typename: 'room_status_mutation_response'
}


/** select columns of table "room_status" */
export type room_status_select_column = 'description' | 'status'


/** update columns of table "room_status" */
export type room_status_update_column = 'description' | 'status'


/** columns and relationships of "room_type" */
export interface room_type {
    description?: Scalars['String']
    /** fetch data from the table: "rooms" */
    rooms: rooms[]
    /** An aggregate relationship */
    rooms_aggregate: rooms_aggregate
    type: Scalars['String']
    __typename: 'room_type'
}


/** aggregated selection of "room_type" */
export interface room_type_aggregate {
    aggregate?: room_type_aggregate_fields
    nodes: room_type[]
    __typename: 'room_type_aggregate'
}


/** aggregate fields of "room_type" */
export interface room_type_aggregate_fields {
    count: Scalars['Int']
    max?: room_type_max_fields
    min?: room_type_min_fields
    __typename: 'room_type_aggregate_fields'
}


/** unique or primary key constraints on table "room_type" */
export type room_type_constraint = 'room_type_pkey' | 'room_type_type_key'


/** aggregate max on columns */
export interface room_type_max_fields {
    description?: Scalars['String']
    type?: Scalars['String']
    __typename: 'room_type_max_fields'
}


/** aggregate min on columns */
export interface room_type_min_fields {
    description?: Scalars['String']
    type?: Scalars['String']
    __typename: 'room_type_min_fields'
}


/** response of any mutation on the table "room_type" */
export interface room_type_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: room_type[]
    __typename: 'room_type_mutation_response'
}


/** select columns of table "room_type" */
export type room_type_select_column = 'description' | 'type'


/** update columns of table "room_type" */
export type room_type_update_column = 'description' | 'type'


/** columns and relationships of "room_visibility" */
export interface room_visibility {
    description?: Scalars['String']
    /** fetch data from the table: "rooms" */
    rooms: rooms[]
    /** An aggregate relationship */
    rooms_aggregate: rooms_aggregate
    visibility: Scalars['String']
    __typename: 'room_visibility'
}


/** aggregated selection of "room_visibility" */
export interface room_visibility_aggregate {
    aggregate?: room_visibility_aggregate_fields
    nodes: room_visibility[]
    __typename: 'room_visibility_aggregate'
}


/** aggregate fields of "room_visibility" */
export interface room_visibility_aggregate_fields {
    count: Scalars['Int']
    max?: room_visibility_max_fields
    min?: room_visibility_min_fields
    __typename: 'room_visibility_aggregate_fields'
}


/** unique or primary key constraints on table "room_visibility" */
export type room_visibility_constraint = 'room_visibility_pkey' | 'room_visibility_visibility_key'


/** aggregate max on columns */
export interface room_visibility_max_fields {
    description?: Scalars['String']
    visibility?: Scalars['String']
    __typename: 'room_visibility_max_fields'
}


/** aggregate min on columns */
export interface room_visibility_min_fields {
    description?: Scalars['String']
    visibility?: Scalars['String']
    __typename: 'room_visibility_min_fields'
}


/** response of any mutation on the table "room_visibility" */
export interface room_visibility_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: room_visibility[]
    __typename: 'room_visibility_mutation_response'
}


/** select columns of table "room_visibility" */
export type room_visibility_select_column = 'description' | 'visibility'


/** update columns of table "room_visibility" */
export type room_visibility_update_column = 'description' | 'visibility'


/** columns and relationships of "rooms" */
export interface rooms {
    access_code: Scalars['String']
    created_at: Scalars['timestamptz']
    creator_customer_id: Scalars['uuid']
    creator_participant_id: Scalars['Int']
    direct_key: Scalars['String']
    id: Scalars['Int']
    /** An array relationship */
    messages: messages[]
    /** An aggregate relationship */
    messages_aggregate: messages_aggregate
    name: Scalars['String']
    /** An array relationship */
    participant_rooms: participant_room[]
    /** An aggregate relationship */
    participant_rooms_aggregate: participant_room_aggregate
    /** An object relationship */
    room_status: room_status
    /** An object relationship */
    room_type: room_type
    /** An object relationship */
    room_visibility: room_visibility
    status: Scalars['String']
    type: Scalars['String']
    updated_at: Scalars['timestamptz']
    visibility: Scalars['String']
    __typename: 'rooms'
}


/** aggregated selection of "rooms" */
export interface rooms_aggregate {
    aggregate?: rooms_aggregate_fields
    nodes: rooms[]
    __typename: 'rooms_aggregate'
}


/** aggregate fields of "rooms" */
export interface rooms_aggregate_fields {
    avg?: rooms_avg_fields
    count: Scalars['Int']
    max?: rooms_max_fields
    min?: rooms_min_fields
    stddev?: rooms_stddev_fields
    stddev_pop?: rooms_stddev_pop_fields
    stddev_samp?: rooms_stddev_samp_fields
    sum?: rooms_sum_fields
    var_pop?: rooms_var_pop_fields
    var_samp?: rooms_var_samp_fields
    variance?: rooms_variance_fields
    __typename: 'rooms_aggregate_fields'
}


/** aggregate avg on columns */
export interface rooms_avg_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_avg_fields'
}


/** unique or primary key constraints on table "rooms" */
export type rooms_constraint = 'rooms_direct_key_key' | 'rooms_pkey'


/** aggregate max on columns */
export interface rooms_max_fields {
    access_code?: Scalars['String']
    created_at?: Scalars['timestamptz']
    creator_customer_id?: Scalars['uuid']
    creator_participant_id?: Scalars['Int']
    direct_key?: Scalars['String']
    id?: Scalars['Int']
    name?: Scalars['String']
    status?: Scalars['String']
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    visibility?: Scalars['String']
    __typename: 'rooms_max_fields'
}


/** aggregate min on columns */
export interface rooms_min_fields {
    access_code?: Scalars['String']
    created_at?: Scalars['timestamptz']
    creator_customer_id?: Scalars['uuid']
    creator_participant_id?: Scalars['Int']
    direct_key?: Scalars['String']
    id?: Scalars['Int']
    name?: Scalars['String']
    status?: Scalars['String']
    type?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    visibility?: Scalars['String']
    __typename: 'rooms_min_fields'
}


/** response of any mutation on the table "rooms" */
export interface rooms_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: rooms[]
    __typename: 'rooms_mutation_response'
}


/** select columns of table "rooms" */
export type rooms_select_column = 'access_code' | 'created_at' | 'creator_customer_id' | 'creator_participant_id' | 'direct_key' | 'id' | 'name' | 'status' | 'type' | 'updated_at' | 'visibility'


/** aggregate stddev on columns */
export interface rooms_stddev_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface rooms_stddev_pop_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface rooms_stddev_samp_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface rooms_sum_fields {
    creator_participant_id?: Scalars['Int']
    id?: Scalars['Int']
    __typename: 'rooms_sum_fields'
}


/** update columns of table "rooms" */
export type rooms_update_column = 'access_code' | 'created_at' | 'creator_customer_id' | 'creator_participant_id' | 'direct_key' | 'id' | 'name' | 'status' | 'type' | 'updated_at' | 'visibility'


/** aggregate var_pop on columns */
export interface rooms_var_pop_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface rooms_var_samp_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_var_samp_fields'
}


/** aggregate variance on columns */
export interface rooms_variance_fields {
    creator_participant_id?: Scalars['Float']
    id?: Scalars['Float']
    __typename: 'rooms_variance_fields'
}

export interface subscription_root {
    /** fetch data from the table: "attachment_extensions" */
    attachment_extensions: attachment_extensions[]
    /** fetch aggregated fields from the table: "attachment_extensions" */
    attachment_extensions_aggregate: attachment_extensions_aggregate
    /** fetch data from the table: "attachment_extensions" using primary key columns */
    attachment_extensions_by_pk?: attachment_extensions
    /** An array relationship */
    attachments: attachments[]
    /** An aggregate relationship */
    attachments_aggregate: attachments_aggregate
    /** fetch data from the table: "attachments" using primary key columns */
    attachments_by_pk?: attachments
    /** fetch data from the table: "is_participant_online" */
    is_participant_online: is_participant_online[]
    /** fetch aggregated fields from the table: "is_participant_online" */
    is_participant_online_aggregate: is_participant_online_aggregate
    /** fetch data from the table: "is_participant_online" using primary key columns */
    is_participant_online_by_pk?: is_participant_online
    /** An array relationship */
    messages: messages[]
    /** An aggregate relationship */
    messages_aggregate: messages_aggregate
    /** fetch data from the table: "messages" using primary key columns */
    messages_by_pk?: messages
    /** fetch data from the table: "participant_room" */
    participant_room: participant_room[]
    /** fetch aggregated fields from the table: "participant_room" */
    participant_room_aggregate: participant_room_aggregate
    /** fetch data from the table: "participant_room" using primary key columns */
    participant_room_by_pk?: participant_room
    /** fetch data from the table: "participant_type" */
    participant_type: participant_type[]
    /** fetch aggregated fields from the table: "participant_type" */
    participant_type_aggregate: participant_type_aggregate
    /** fetch data from the table: "participant_type" using primary key columns */
    participant_type_by_pk?: participant_type
    /** An array relationship */
    participants: participants[]
    /** An aggregate relationship */
    participants_aggregate: participants_aggregate
    /** fetch data from the table: "participants" using primary key columns */
    participants_by_pk?: participants
    /** fetch data from the table: "room_status" */
    room_status: room_status[]
    /** fetch aggregated fields from the table: "room_status" */
    room_status_aggregate: room_status_aggregate
    /** fetch data from the table: "room_status" using primary key columns */
    room_status_by_pk?: room_status
    /** fetch data from the table: "room_type" */
    room_type: room_type[]
    /** fetch aggregated fields from the table: "room_type" */
    room_type_aggregate: room_type_aggregate
    /** fetch data from the table: "room_type" using primary key columns */
    room_type_by_pk?: room_type
    /** fetch data from the table: "room_visibility" */
    room_visibility: room_visibility[]
    /** fetch aggregated fields from the table: "room_visibility" */
    room_visibility_aggregate: room_visibility_aggregate
    /** fetch data from the table: "room_visibility" using primary key columns */
    room_visibility_by_pk?: room_visibility
    /** fetch data from the table: "rooms" */
    rooms: rooms[]
    /** An aggregate relationship */
    rooms_aggregate: rooms_aggregate
    /** fetch data from the table: "rooms" using primary key columns */
    rooms_by_pk?: rooms
    /** An array relationship */
    ticket_messages: ticket_messages[]
    /** An aggregate relationship */
    ticket_messages_aggregate: ticket_messages_aggregate
    /** fetch data from the table: "ticket_messages" using primary key columns */
    ticket_messages_by_pk?: ticket_messages
    /** An array relationship */
    ticket_participants: ticket_participants[]
    /** An aggregate relationship */
    ticket_participants_aggregate: ticket_participants_aggregate
    /** fetch data from the table: "ticket_participants" using primary key columns */
    ticket_participants_by_pk?: ticket_participants
    /** fetch data from the table: "ticket_states" */
    ticket_states: ticket_states[]
    /** fetch aggregated fields from the table: "ticket_states" */
    ticket_states_aggregate: ticket_states_aggregate
    /** fetch data from the table: "ticket_states" using primary key columns */
    ticket_states_by_pk?: ticket_states
    /** An array relationship */
    tickets: tickets[]
    /** An aggregate relationship */
    tickets_aggregate: tickets_aggregate
    /** fetch data from the table: "tickets" using primary key columns */
    tickets_by_pk?: tickets
    /** fetch data from the table: "users" */
    users: users[]
    /** fetch aggregated fields from the table: "users" */
    users_aggregate: users_aggregate
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: users
    __typename: 'subscription_root'
}


/** columns and relationships of "ticket_messages" */
export interface ticket_messages {
    /** An array relationship */
    attachments: attachments[]
    /** An aggregate relationship */
    attachments_aggregate: attachments_aggregate
    /** An object relationship */
    author?: ticket_participants
    author_id: Scalars['uuid']
    content: Scalars['String']
    created_at: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id: Scalars['uuid']
    seen: Scalars['Boolean']
    /** An object relationship */
    ticket: tickets
    ticket_id: Scalars['uuid']
    updated_at: Scalars['timestamptz']
    __typename: 'ticket_messages'
}


/** aggregated selection of "ticket_messages" */
export interface ticket_messages_aggregate {
    aggregate?: ticket_messages_aggregate_fields
    nodes: ticket_messages[]
    __typename: 'ticket_messages_aggregate'
}


/** aggregate fields of "ticket_messages" */
export interface ticket_messages_aggregate_fields {
    count: Scalars['Int']
    max?: ticket_messages_max_fields
    min?: ticket_messages_min_fields
    __typename: 'ticket_messages_aggregate_fields'
}


/** unique or primary key constraints on table "ticket_messages" */
export type ticket_messages_constraint = 'meesages_pkey'


/** aggregate max on columns */
export interface ticket_messages_max_fields {
    author_id?: Scalars['uuid']
    content?: Scalars['String']
    created_at?: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    ticket_id?: Scalars['uuid']
    updated_at?: Scalars['timestamptz']
    __typename: 'ticket_messages_max_fields'
}


/** aggregate min on columns */
export interface ticket_messages_min_fields {
    author_id?: Scalars['uuid']
    content?: Scalars['String']
    created_at?: Scalars['timestamptz']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    ticket_id?: Scalars['uuid']
    updated_at?: Scalars['timestamptz']
    __typename: 'ticket_messages_min_fields'
}


/** response of any mutation on the table "ticket_messages" */
export interface ticket_messages_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ticket_messages[]
    __typename: 'ticket_messages_mutation_response'
}


/** select columns of table "ticket_messages" */
export type ticket_messages_select_column = 'author_id' | 'content' | 'created_at' | 'deleted_at' | 'id' | 'seen' | 'ticket_id' | 'updated_at'


/** update columns of table "ticket_messages" */
export type ticket_messages_update_column = 'author_id' | 'content' | 'created_at' | 'deleted_at' | 'id' | 'seen' | 'ticket_id' | 'updated_at'


/** columns and relationships of "ticket_participants" */
export interface ticket_participants {
    /** An array relationship */
    messages: ticket_messages[]
    /** An aggregate relationship */
    messages_aggregate: ticket_messages_aggregate
    owner: Scalars['Boolean']
    participant_id: Scalars['uuid']
    /** An object relationship */
    ticket: tickets
    ticket_id: Scalars['uuid']
    __typename: 'ticket_participants'
}


/** aggregated selection of "ticket_participants" */
export interface ticket_participants_aggregate {
    aggregate?: ticket_participants_aggregate_fields
    nodes: ticket_participants[]
    __typename: 'ticket_participants_aggregate'
}


/** aggregate fields of "ticket_participants" */
export interface ticket_participants_aggregate_fields {
    count: Scalars['Int']
    max?: ticket_participants_max_fields
    min?: ticket_participants_min_fields
    __typename: 'ticket_participants_aggregate_fields'
}


/** unique or primary key constraints on table "ticket_participants" */
export type ticket_participants_constraint = 'ticket_participants_pkey'


/** aggregate max on columns */
export interface ticket_participants_max_fields {
    participant_id?: Scalars['uuid']
    ticket_id?: Scalars['uuid']
    __typename: 'ticket_participants_max_fields'
}


/** aggregate min on columns */
export interface ticket_participants_min_fields {
    participant_id?: Scalars['uuid']
    ticket_id?: Scalars['uuid']
    __typename: 'ticket_participants_min_fields'
}


/** response of any mutation on the table "ticket_participants" */
export interface ticket_participants_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ticket_participants[]
    __typename: 'ticket_participants_mutation_response'
}


/** select columns of table "ticket_participants" */
export type ticket_participants_select_column = 'owner' | 'participant_id' | 'ticket_id'


/** update columns of table "ticket_participants" */
export type ticket_participants_update_column = 'owner' | 'participant_id' | 'ticket_id'


/** columns and relationships of "ticket_states" */
export interface ticket_states {
    comment?: Scalars['String']
    name: Scalars['String']
    /** An array relationship */
    tickets: tickets[]
    /** An aggregate relationship */
    tickets_aggregate: tickets_aggregate
    __typename: 'ticket_states'
}


/** aggregated selection of "ticket_states" */
export interface ticket_states_aggregate {
    aggregate?: ticket_states_aggregate_fields
    nodes: ticket_states[]
    __typename: 'ticket_states_aggregate'
}


/** aggregate fields of "ticket_states" */
export interface ticket_states_aggregate_fields {
    count: Scalars['Int']
    max?: ticket_states_max_fields
    min?: ticket_states_min_fields
    __typename: 'ticket_states_aggregate_fields'
}


/** unique or primary key constraints on table "ticket_states" */
export type ticket_states_constraint = 'ticket_states_pkey'

export type ticket_states_enum = 'ACTIVE' | 'REOPENED' | 'RESOLVED'


/** aggregate max on columns */
export interface ticket_states_max_fields {
    comment?: Scalars['String']
    name?: Scalars['String']
    __typename: 'ticket_states_max_fields'
}


/** aggregate min on columns */
export interface ticket_states_min_fields {
    comment?: Scalars['String']
    name?: Scalars['String']
    __typename: 'ticket_states_min_fields'
}


/** response of any mutation on the table "ticket_states" */
export interface ticket_states_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: ticket_states[]
    __typename: 'ticket_states_mutation_response'
}


/** select columns of table "ticket_states" */
export type ticket_states_select_column = 'comment' | 'name'


/** update columns of table "ticket_states" */
export type ticket_states_update_column = 'comment' | 'name'


/** columns and relationships of "tickets" */
export interface tickets {
    /** An array relationship */
    attachments: attachments[]
    /** An aggregate relationship */
    attachments_aggregate: attachments_aggregate
    created_at: Scalars['timestamptz']
    customer_id: Scalars['uuid']
    deleted_at?: Scalars['timestamptz']
    id: Scalars['uuid']
    state: ticket_states_enum
    /** An array relationship */
    ticket_messages: ticket_messages[]
    /** An aggregate relationship */
    ticket_messages_aggregate: ticket_messages_aggregate
    /** An array relationship */
    ticket_participants: ticket_participants[]
    /** An aggregate relationship */
    ticket_participants_aggregate: ticket_participants_aggregate
    /** An object relationship */
    ticket_state: ticket_states
    title: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'tickets'
}


/** aggregated selection of "tickets" */
export interface tickets_aggregate {
    aggregate?: tickets_aggregate_fields
    nodes: tickets[]
    __typename: 'tickets_aggregate'
}


/** aggregate fields of "tickets" */
export interface tickets_aggregate_fields {
    count: Scalars['Int']
    max?: tickets_max_fields
    min?: tickets_min_fields
    __typename: 'tickets_aggregate_fields'
}


/** unique or primary key constraints on table "tickets" */
export type tickets_constraint = 'tickets_pkey'


/** aggregate max on columns */
export interface tickets_max_fields {
    created_at?: Scalars['timestamptz']
    customer_id?: Scalars['uuid']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'tickets_max_fields'
}


/** aggregate min on columns */
export interface tickets_min_fields {
    created_at?: Scalars['timestamptz']
    customer_id?: Scalars['uuid']
    deleted_at?: Scalars['timestamptz']
    id?: Scalars['uuid']
    title?: Scalars['String']
    updated_at?: Scalars['timestamptz']
    __typename: 'tickets_min_fields'
}


/** response of any mutation on the table "tickets" */
export interface tickets_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: tickets[]
    __typename: 'tickets_mutation_response'
}


/** select columns of table "tickets" */
export type tickets_select_column = 'created_at' | 'customer_id' | 'deleted_at' | 'id' | 'state' | 'title' | 'updated_at'


/** update columns of table "tickets" */
export type tickets_update_column = 'created_at' | 'customer_id' | 'deleted_at' | 'id' | 'state' | 'title' | 'updated_at'


/** columns and relationships of "users" */
export interface users {
    display_name: Scalars['String']
    id: Scalars['uuid']
    __typename: 'users'
}


/** aggregated selection of "users" */
export interface users_aggregate {
    aggregate?: users_aggregate_fields
    nodes: users[]
    __typename: 'users_aggregate'
}


/** aggregate fields of "users" */
export interface users_aggregate_fields {
    count: Scalars['Int']
    max?: users_max_fields
    min?: users_min_fields
    __typename: 'users_aggregate_fields'
}


/** unique or primary key constraints on table "users" */
export type users_constraint = 'users_pkey'


/** aggregate max on columns */
export interface users_max_fields {
    display_name?: Scalars['String']
    id?: Scalars['uuid']
    __typename: 'users_max_fields'
}


/** aggregate min on columns */
export interface users_min_fields {
    display_name?: Scalars['String']
    id?: Scalars['uuid']
    __typename: 'users_min_fields'
}


/** response of any mutation on the table "users" */
export interface users_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: users[]
    __typename: 'users_mutation_response'
}


/** select columns of table "users" */
export type users_select_column = 'display_name' | 'id'


/** update columns of table "users" */
export type users_update_column = 'display_name' | 'id'

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export interface Boolean_comparison_exp {_eq?: (Scalars['Boolean'] | null),_gt?: (Scalars['Boolean'] | null),_gte?: (Scalars['Boolean'] | null),_in?: (Scalars['Boolean'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Boolean'] | null),_lte?: (Scalars['Boolean'] | null),_neq?: (Scalars['Boolean'] | null),_nin?: (Scalars['Boolean'][] | null)}


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** columns and relationships of "attachment_extensions" */
export interface attachment_extensionsRequest{
    /** An array relationship */
    attachments?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachmentsRequest] | attachmentsRequest
    /** An aggregate relationship */
    attachments_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachments_aggregateRequest] | attachments_aggregateRequest
    comment?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "attachment_extensions" */
export interface attachment_extensions_aggregateRequest{
    aggregate?: attachment_extensions_aggregate_fieldsRequest
    nodes?: attachment_extensionsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "attachment_extensions" */
export interface attachment_extensions_aggregate_fieldsRequest{
    count?: [{columns?: (attachment_extensions_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: attachment_extensions_max_fieldsRequest
    min?: attachment_extensions_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "attachment_extensions". All fields are combined with a logical 'AND'. */
export interface attachment_extensions_bool_exp {_and?: (attachment_extensions_bool_exp[] | null),_not?: (attachment_extensions_bool_exp | null),_or?: (attachment_extensions_bool_exp[] | null),attachments?: (attachments_bool_exp | null),comment?: (String_comparison_exp | null),name?: (String_comparison_exp | null)}


/** Boolean expression to compare columns of type "attachment_extensions_enum". All fields are combined with logical 'AND'. */
export interface attachment_extensions_enum_comparison_exp {_eq?: (attachment_extensions_enum | null),_in?: (attachment_extensions_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (attachment_extensions_enum | null),_nin?: (attachment_extensions_enum[] | null)}


/** input type for inserting data into table "attachment_extensions" */
export interface attachment_extensions_insert_input {attachments?: (attachments_arr_rel_insert_input | null),comment?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface attachment_extensions_max_fieldsRequest{
    comment?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface attachment_extensions_min_fieldsRequest{
    comment?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "attachment_extensions" */
export interface attachment_extensions_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: attachment_extensionsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "attachment_extensions" */
export interface attachment_extensions_obj_rel_insert_input {data: attachment_extensions_insert_input,
/** on conflict condition */
on_conflict?: (attachment_extensions_on_conflict | null)}


/** on conflict condition type for table "attachment_extensions" */
export interface attachment_extensions_on_conflict {constraint: attachment_extensions_constraint,update_columns: attachment_extensions_update_column[],where?: (attachment_extensions_bool_exp | null)}


/** Ordering options when selecting data from "attachment_extensions". */
export interface attachment_extensions_order_by {attachments_aggregate?: (attachments_aggregate_order_by | null),comment?: (order_by | null),name?: (order_by | null)}


/** primary key columns input for table: attachment_extensions */
export interface attachment_extensions_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "attachment_extensions" */
export interface attachment_extensions_set_input {comment?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** columns and relationships of "attachments" */
export interface attachmentsRequest{
    /** An object relationship */
    attachment_extension?: attachment_extensionsRequest
    created_at?: boolean | number
    deleted_at?: boolean | number
    extension?: boolean | number
    id?: boolean | number
    message_id?: boolean | number
    path?: boolean | number
    /** An object relationship */
    ticket?: ticketsRequest
    ticket_id?: boolean | number
    /** An object relationship */
    ticket_message?: ticket_messagesRequest
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "attachments" */
export interface attachments_aggregateRequest{
    aggregate?: attachments_aggregate_fieldsRequest
    nodes?: attachmentsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "attachments" */
export interface attachments_aggregate_fieldsRequest{
    count?: [{columns?: (attachments_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: attachments_max_fieldsRequest
    min?: attachments_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "attachments" */
export interface attachments_aggregate_order_by {count?: (order_by | null),max?: (attachments_max_order_by | null),min?: (attachments_min_order_by | null)}


/** input type for inserting array relation for remote table "attachments" */
export interface attachments_arr_rel_insert_input {data: attachments_insert_input[],
/** on conflict condition */
on_conflict?: (attachments_on_conflict | null)}


/** Boolean expression to filter rows from the table "attachments". All fields are combined with a logical 'AND'. */
export interface attachments_bool_exp {_and?: (attachments_bool_exp[] | null),_not?: (attachments_bool_exp | null),_or?: (attachments_bool_exp[] | null),attachment_extension?: (attachment_extensions_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (time_comparison_exp | null),extension?: (attachment_extensions_enum_comparison_exp | null),id?: (uuid_comparison_exp | null),message_id?: (uuid_comparison_exp | null),path?: (String_comparison_exp | null),ticket?: (tickets_bool_exp | null),ticket_id?: (uuid_comparison_exp | null),ticket_message?: (ticket_messages_bool_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "attachments" */
export interface attachments_insert_input {attachment_extension?: (attachment_extensions_obj_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['time'] | null),extension?: (attachment_extensions_enum | null),id?: (Scalars['uuid'] | null),message_id?: (Scalars['uuid'] | null),path?: (Scalars['String'] | null),ticket?: (tickets_obj_rel_insert_input | null),ticket_id?: (Scalars['uuid'] | null),ticket_message?: (ticket_messages_obj_rel_insert_input | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface attachments_max_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    message_id?: boolean | number
    path?: boolean | number
    ticket_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "attachments" */
export interface attachments_max_order_by {created_at?: (order_by | null),id?: (order_by | null),message_id?: (order_by | null),path?: (order_by | null),ticket_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface attachments_min_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    message_id?: boolean | number
    path?: boolean | number
    ticket_id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "attachments" */
export interface attachments_min_order_by {created_at?: (order_by | null),id?: (order_by | null),message_id?: (order_by | null),path?: (order_by | null),ticket_id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "attachments" */
export interface attachments_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: attachmentsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "attachments" */
export interface attachments_on_conflict {constraint: attachments_constraint,update_columns: attachments_update_column[],where?: (attachments_bool_exp | null)}


/** Ordering options when selecting data from "attachments". */
export interface attachments_order_by {attachment_extension?: (attachment_extensions_order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),extension?: (order_by | null),id?: (order_by | null),message_id?: (order_by | null),path?: (order_by | null),ticket?: (tickets_order_by | null),ticket_id?: (order_by | null),ticket_message?: (ticket_messages_order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: attachments */
export interface attachments_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "attachments" */
export interface attachments_set_input {created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['time'] | null),extension?: (attachment_extensions_enum | null),id?: (Scalars['uuid'] | null),message_id?: (Scalars['uuid'] | null),path?: (Scalars['String'] | null),ticket_id?: (Scalars['uuid'] | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "is_participant_online" */
export interface is_participant_onlineRequest{
    description?: boolean | number
    is_online?: boolean | number
    /** An array relationship */
    participants?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participantsRequest] | participantsRequest
    /** An aggregate relationship */
    participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participants_aggregateRequest] | participants_aggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "is_participant_online" */
export interface is_participant_online_aggregateRequest{
    aggregate?: is_participant_online_aggregate_fieldsRequest
    nodes?: is_participant_onlineRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "is_participant_online" */
export interface is_participant_online_aggregate_fieldsRequest{
    count?: [{columns?: (is_participant_online_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: is_participant_online_max_fieldsRequest
    min?: is_participant_online_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "is_participant_online". All fields are combined with a logical 'AND'. */
export interface is_participant_online_bool_exp {_and?: (is_participant_online_bool_exp[] | null),_not?: (is_participant_online_bool_exp | null),_or?: (is_participant_online_bool_exp[] | null),description?: (String_comparison_exp | null),is_online?: (String_comparison_exp | null),participants?: (participants_bool_exp | null)}


/** input type for inserting data into table "is_participant_online" */
export interface is_participant_online_insert_input {description?: (Scalars['String'] | null),is_online?: (Scalars['String'] | null),participants?: (participants_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface is_participant_online_max_fieldsRequest{
    description?: boolean | number
    is_online?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface is_participant_online_min_fieldsRequest{
    description?: boolean | number
    is_online?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "is_participant_online" */
export interface is_participant_online_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: is_participant_onlineRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "is_participant_online" */
export interface is_participant_online_obj_rel_insert_input {data: is_participant_online_insert_input,
/** on conflict condition */
on_conflict?: (is_participant_online_on_conflict | null)}


/** on conflict condition type for table "is_participant_online" */
export interface is_participant_online_on_conflict {constraint: is_participant_online_constraint,update_columns: is_participant_online_update_column[],where?: (is_participant_online_bool_exp | null)}


/** Ordering options when selecting data from "is_participant_online". */
export interface is_participant_online_order_by {description?: (order_by | null),is_online?: (order_by | null),participants_aggregate?: (participants_aggregate_order_by | null)}


/** primary key columns input for table: is_participant_online */
export interface is_participant_online_pk_columns_input {is_online: Scalars['String']}


/** input type for updating data in table "is_participant_online" */
export interface is_participant_online_set_input {description?: (Scalars['String'] | null),is_online?: (Scalars['String'] | null)}


/** columns and relationships of "messages" */
export interface messagesRequest{
    created_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    participant_id?: boolean | number
    participant_name?: boolean | number
    /** An array relationship */
    participant_rooms?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_roomRequest] | participant_roomRequest
    /** An aggregate relationship */
    participant_rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_room_aggregateRequest] | participant_room_aggregateRequest
    /** An object relationship */
    room?: roomsRequest
    room_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "messages" */
export interface messages_aggregateRequest{
    aggregate?: messages_aggregate_fieldsRequest
    nodes?: messagesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "messages" */
export interface messages_aggregate_fieldsRequest{
    avg?: messages_avg_fieldsRequest
    count?: [{columns?: (messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: messages_max_fieldsRequest
    min?: messages_min_fieldsRequest
    stddev?: messages_stddev_fieldsRequest
    stddev_pop?: messages_stddev_pop_fieldsRequest
    stddev_samp?: messages_stddev_samp_fieldsRequest
    sum?: messages_sum_fieldsRequest
    var_pop?: messages_var_pop_fieldsRequest
    var_samp?: messages_var_samp_fieldsRequest
    variance?: messages_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "messages" */
export interface messages_aggregate_order_by {avg?: (messages_avg_order_by | null),count?: (order_by | null),max?: (messages_max_order_by | null),min?: (messages_min_order_by | null),stddev?: (messages_stddev_order_by | null),stddev_pop?: (messages_stddev_pop_order_by | null),stddev_samp?: (messages_stddev_samp_order_by | null),sum?: (messages_sum_order_by | null),var_pop?: (messages_var_pop_order_by | null),var_samp?: (messages_var_samp_order_by | null),variance?: (messages_variance_order_by | null)}


/** input type for inserting array relation for remote table "messages" */
export interface messages_arr_rel_insert_input {data: messages_insert_input[],
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}


/** aggregate avg on columns */
export interface messages_avg_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "messages" */
export interface messages_avg_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export interface messages_bool_exp {_and?: (messages_bool_exp[] | null),_not?: (messages_bool_exp | null),_or?: (messages_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),message?: (String_comparison_exp | null),participant_id?: (Int_comparison_exp | null),participant_name?: (String_comparison_exp | null),participant_rooms?: (participant_room_bool_exp | null),room?: (rooms_bool_exp | null),room_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "messages" */
export interface messages_inc_input {id?: (Scalars['Int'] | null),participant_id?: (Scalars['Int'] | null),room_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "messages" */
export interface messages_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),message?: (Scalars['String'] | null),participant_id?: (Scalars['Int'] | null),participant_name?: (Scalars['String'] | null),participant_rooms?: (participant_room_arr_rel_insert_input | null),room?: (rooms_obj_rel_insert_input | null),room_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface messages_max_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    participant_id?: boolean | number
    participant_name?: boolean | number
    room_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "messages" */
export interface messages_max_order_by {created_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),participant_id?: (order_by | null),participant_name?: (order_by | null),room_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface messages_min_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    message?: boolean | number
    participant_id?: boolean | number
    participant_name?: boolean | number
    room_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "messages" */
export interface messages_min_order_by {created_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),participant_id?: (order_by | null),participant_name?: (order_by | null),room_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "messages" */
export interface messages_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: messagesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "messages" */
export interface messages_obj_rel_insert_input {data: messages_insert_input,
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}


/** on conflict condition type for table "messages" */
export interface messages_on_conflict {constraint: messages_constraint,update_columns: messages_update_column[],where?: (messages_bool_exp | null)}


/** Ordering options when selecting data from "messages". */
export interface messages_order_by {created_at?: (order_by | null),id?: (order_by | null),message?: (order_by | null),participant_id?: (order_by | null),participant_name?: (order_by | null),participant_rooms_aggregate?: (participant_room_aggregate_order_by | null),room?: (rooms_order_by | null),room_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: messages */
export interface messages_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "messages" */
export interface messages_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),message?: (Scalars['String'] | null),participant_id?: (Scalars['Int'] | null),participant_name?: (Scalars['String'] | null),room_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface messages_stddev_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "messages" */
export interface messages_stddev_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface messages_stddev_pop_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "messages" */
export interface messages_stddev_pop_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface messages_stddev_samp_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "messages" */
export interface messages_stddev_samp_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate sum on columns */
export interface messages_sum_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "messages" */
export interface messages_sum_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface messages_var_pop_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "messages" */
export interface messages_var_pop_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface messages_var_samp_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "messages" */
export interface messages_var_samp_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** aggregate variance on columns */
export interface messages_variance_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "messages" */
export interface messages_variance_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null)}


/** mutation root */
export interface mutation_rootRequest{
    /** delete data from the table: "attachment_extensions" */
    delete_attachment_extensions?: [{
    /** filter the rows which have to be deleted */
    where: attachment_extensions_bool_exp},attachment_extensions_mutation_responseRequest]
    /** delete single row from the table: "attachment_extensions" */
    delete_attachment_extensions_by_pk?: [{name: Scalars['String']},attachment_extensionsRequest]
    /** delete data from the table: "attachments" */
    delete_attachments?: [{
    /** filter the rows which have to be deleted */
    where: attachments_bool_exp},attachments_mutation_responseRequest]
    /** delete single row from the table: "attachments" */
    delete_attachments_by_pk?: [{id: Scalars['uuid']},attachmentsRequest]
    /** delete data from the table: "is_participant_online" */
    delete_is_participant_online?: [{
    /** filter the rows which have to be deleted */
    where: is_participant_online_bool_exp},is_participant_online_mutation_responseRequest]
    /** delete single row from the table: "is_participant_online" */
    delete_is_participant_online_by_pk?: [{is_online: Scalars['String']},is_participant_onlineRequest]
    /** delete data from the table: "messages" */
    delete_messages?: [{
    /** filter the rows which have to be deleted */
    where: messages_bool_exp},messages_mutation_responseRequest]
    /** delete single row from the table: "messages" */
    delete_messages_by_pk?: [{id: Scalars['Int']},messagesRequest]
    /** delete data from the table: "participant_room" */
    delete_participant_room?: [{
    /** filter the rows which have to be deleted */
    where: participant_room_bool_exp},participant_room_mutation_responseRequest]
    /** delete single row from the table: "participant_room" */
    delete_participant_room_by_pk?: [{id: Scalars['Int']},participant_roomRequest]
    /** delete data from the table: "participant_type" */
    delete_participant_type?: [{
    /** filter the rows which have to be deleted */
    where: participant_type_bool_exp},participant_type_mutation_responseRequest]
    /** delete single row from the table: "participant_type" */
    delete_participant_type_by_pk?: [{type: Scalars['String']},participant_typeRequest]
    /** delete data from the table: "participants" */
    delete_participants?: [{
    /** filter the rows which have to be deleted */
    where: participants_bool_exp},participants_mutation_responseRequest]
    /** delete single row from the table: "participants" */
    delete_participants_by_pk?: [{id: Scalars['Int']},participantsRequest]
    /** delete data from the table: "room_status" */
    delete_room_status?: [{
    /** filter the rows which have to be deleted */
    where: room_status_bool_exp},room_status_mutation_responseRequest]
    /** delete single row from the table: "room_status" */
    delete_room_status_by_pk?: [{status: Scalars['String']},room_statusRequest]
    /** delete data from the table: "room_type" */
    delete_room_type?: [{
    /** filter the rows which have to be deleted */
    where: room_type_bool_exp},room_type_mutation_responseRequest]
    /** delete single row from the table: "room_type" */
    delete_room_type_by_pk?: [{type: Scalars['String']},room_typeRequest]
    /** delete data from the table: "room_visibility" */
    delete_room_visibility?: [{
    /** filter the rows which have to be deleted */
    where: room_visibility_bool_exp},room_visibility_mutation_responseRequest]
    /** delete single row from the table: "room_visibility" */
    delete_room_visibility_by_pk?: [{visibility: Scalars['String']},room_visibilityRequest]
    /** delete data from the table: "rooms" */
    delete_rooms?: [{
    /** filter the rows which have to be deleted */
    where: rooms_bool_exp},rooms_mutation_responseRequest]
    /** delete single row from the table: "rooms" */
    delete_rooms_by_pk?: [{id: Scalars['Int']},roomsRequest]
    /** delete data from the table: "ticket_messages" */
    delete_ticket_messages?: [{
    /** filter the rows which have to be deleted */
    where: ticket_messages_bool_exp},ticket_messages_mutation_responseRequest]
    /** delete single row from the table: "ticket_messages" */
    delete_ticket_messages_by_pk?: [{id: Scalars['uuid']},ticket_messagesRequest]
    /** delete data from the table: "ticket_participants" */
    delete_ticket_participants?: [{
    /** filter the rows which have to be deleted */
    where: ticket_participants_bool_exp},ticket_participants_mutation_responseRequest]
    /** delete single row from the table: "ticket_participants" */
    delete_ticket_participants_by_pk?: [{participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']},ticket_participantsRequest]
    /** delete data from the table: "ticket_states" */
    delete_ticket_states?: [{
    /** filter the rows which have to be deleted */
    where: ticket_states_bool_exp},ticket_states_mutation_responseRequest]
    /** delete single row from the table: "ticket_states" */
    delete_ticket_states_by_pk?: [{name: Scalars['String']},ticket_statesRequest]
    /** delete data from the table: "tickets" */
    delete_tickets?: [{
    /** filter the rows which have to be deleted */
    where: tickets_bool_exp},tickets_mutation_responseRequest]
    /** delete single row from the table: "tickets" */
    delete_tickets_by_pk?: [{id: Scalars['uuid']},ticketsRequest]
    /** delete data from the table: "users" */
    delete_users?: [{
    /** filter the rows which have to be deleted */
    where: users_bool_exp},users_mutation_responseRequest]
    /** delete single row from the table: "users" */
    delete_users_by_pk?: [{id: Scalars['uuid']},usersRequest]
    /** insert data into the table: "attachment_extensions" */
    insert_attachment_extensions?: [{
    /** the rows to be inserted */
    objects: attachment_extensions_insert_input[],
    /** on conflict condition */
    on_conflict?: (attachment_extensions_on_conflict | null)},attachment_extensions_mutation_responseRequest]
    /** insert a single row into the table: "attachment_extensions" */
    insert_attachment_extensions_one?: [{
    /** the row to be inserted */
    object: attachment_extensions_insert_input,
    /** on conflict condition */
    on_conflict?: (attachment_extensions_on_conflict | null)},attachment_extensionsRequest]
    /** insert data into the table: "attachments" */
    insert_attachments?: [{
    /** the rows to be inserted */
    objects: attachments_insert_input[],
    /** on conflict condition */
    on_conflict?: (attachments_on_conflict | null)},attachments_mutation_responseRequest]
    /** insert a single row into the table: "attachments" */
    insert_attachments_one?: [{
    /** the row to be inserted */
    object: attachments_insert_input,
    /** on conflict condition */
    on_conflict?: (attachments_on_conflict | null)},attachmentsRequest]
    /** insert data into the table: "is_participant_online" */
    insert_is_participant_online?: [{
    /** the rows to be inserted */
    objects: is_participant_online_insert_input[],
    /** on conflict condition */
    on_conflict?: (is_participant_online_on_conflict | null)},is_participant_online_mutation_responseRequest]
    /** insert a single row into the table: "is_participant_online" */
    insert_is_participant_online_one?: [{
    /** the row to be inserted */
    object: is_participant_online_insert_input,
    /** on conflict condition */
    on_conflict?: (is_participant_online_on_conflict | null)},is_participant_onlineRequest]
    /** insert data into the table: "messages" */
    insert_messages?: [{
    /** the rows to be inserted */
    objects: messages_insert_input[],
    /** on conflict condition */
    on_conflict?: (messages_on_conflict | null)},messages_mutation_responseRequest]
    /** insert a single row into the table: "messages" */
    insert_messages_one?: [{
    /** the row to be inserted */
    object: messages_insert_input,
    /** on conflict condition */
    on_conflict?: (messages_on_conflict | null)},messagesRequest]
    /** insert data into the table: "participant_room" */
    insert_participant_room?: [{
    /** the rows to be inserted */
    objects: participant_room_insert_input[],
    /** on conflict condition */
    on_conflict?: (participant_room_on_conflict | null)},participant_room_mutation_responseRequest]
    /** insert a single row into the table: "participant_room" */
    insert_participant_room_one?: [{
    /** the row to be inserted */
    object: participant_room_insert_input,
    /** on conflict condition */
    on_conflict?: (participant_room_on_conflict | null)},participant_roomRequest]
    /** insert data into the table: "participant_type" */
    insert_participant_type?: [{
    /** the rows to be inserted */
    objects: participant_type_insert_input[],
    /** on conflict condition */
    on_conflict?: (participant_type_on_conflict | null)},participant_type_mutation_responseRequest]
    /** insert a single row into the table: "participant_type" */
    insert_participant_type_one?: [{
    /** the row to be inserted */
    object: participant_type_insert_input,
    /** on conflict condition */
    on_conflict?: (participant_type_on_conflict | null)},participant_typeRequest]
    /** insert data into the table: "participants" */
    insert_participants?: [{
    /** the rows to be inserted */
    objects: participants_insert_input[],
    /** on conflict condition */
    on_conflict?: (participants_on_conflict | null)},participants_mutation_responseRequest]
    /** insert a single row into the table: "participants" */
    insert_participants_one?: [{
    /** the row to be inserted */
    object: participants_insert_input,
    /** on conflict condition */
    on_conflict?: (participants_on_conflict | null)},participantsRequest]
    /** insert data into the table: "room_status" */
    insert_room_status?: [{
    /** the rows to be inserted */
    objects: room_status_insert_input[],
    /** on conflict condition */
    on_conflict?: (room_status_on_conflict | null)},room_status_mutation_responseRequest]
    /** insert a single row into the table: "room_status" */
    insert_room_status_one?: [{
    /** the row to be inserted */
    object: room_status_insert_input,
    /** on conflict condition */
    on_conflict?: (room_status_on_conflict | null)},room_statusRequest]
    /** insert data into the table: "room_type" */
    insert_room_type?: [{
    /** the rows to be inserted */
    objects: room_type_insert_input[],
    /** on conflict condition */
    on_conflict?: (room_type_on_conflict | null)},room_type_mutation_responseRequest]
    /** insert a single row into the table: "room_type" */
    insert_room_type_one?: [{
    /** the row to be inserted */
    object: room_type_insert_input,
    /** on conflict condition */
    on_conflict?: (room_type_on_conflict | null)},room_typeRequest]
    /** insert data into the table: "room_visibility" */
    insert_room_visibility?: [{
    /** the rows to be inserted */
    objects: room_visibility_insert_input[],
    /** on conflict condition */
    on_conflict?: (room_visibility_on_conflict | null)},room_visibility_mutation_responseRequest]
    /** insert a single row into the table: "room_visibility" */
    insert_room_visibility_one?: [{
    /** the row to be inserted */
    object: room_visibility_insert_input,
    /** on conflict condition */
    on_conflict?: (room_visibility_on_conflict | null)},room_visibilityRequest]
    /** insert data into the table: "rooms" */
    insert_rooms?: [{
    /** the rows to be inserted */
    objects: rooms_insert_input[],
    /** on conflict condition */
    on_conflict?: (rooms_on_conflict | null)},rooms_mutation_responseRequest]
    /** insert a single row into the table: "rooms" */
    insert_rooms_one?: [{
    /** the row to be inserted */
    object: rooms_insert_input,
    /** on conflict condition */
    on_conflict?: (rooms_on_conflict | null)},roomsRequest]
    /** insert data into the table: "ticket_messages" */
    insert_ticket_messages?: [{
    /** the rows to be inserted */
    objects: ticket_messages_insert_input[],
    /** on conflict condition */
    on_conflict?: (ticket_messages_on_conflict | null)},ticket_messages_mutation_responseRequest]
    /** insert a single row into the table: "ticket_messages" */
    insert_ticket_messages_one?: [{
    /** the row to be inserted */
    object: ticket_messages_insert_input,
    /** on conflict condition */
    on_conflict?: (ticket_messages_on_conflict | null)},ticket_messagesRequest]
    /** insert data into the table: "ticket_participants" */
    insert_ticket_participants?: [{
    /** the rows to be inserted */
    objects: ticket_participants_insert_input[],
    /** on conflict condition */
    on_conflict?: (ticket_participants_on_conflict | null)},ticket_participants_mutation_responseRequest]
    /** insert a single row into the table: "ticket_participants" */
    insert_ticket_participants_one?: [{
    /** the row to be inserted */
    object: ticket_participants_insert_input,
    /** on conflict condition */
    on_conflict?: (ticket_participants_on_conflict | null)},ticket_participantsRequest]
    /** insert data into the table: "ticket_states" */
    insert_ticket_states?: [{
    /** the rows to be inserted */
    objects: ticket_states_insert_input[],
    /** on conflict condition */
    on_conflict?: (ticket_states_on_conflict | null)},ticket_states_mutation_responseRequest]
    /** insert a single row into the table: "ticket_states" */
    insert_ticket_states_one?: [{
    /** the row to be inserted */
    object: ticket_states_insert_input,
    /** on conflict condition */
    on_conflict?: (ticket_states_on_conflict | null)},ticket_statesRequest]
    /** insert data into the table: "tickets" */
    insert_tickets?: [{
    /** the rows to be inserted */
    objects: tickets_insert_input[],
    /** on conflict condition */
    on_conflict?: (tickets_on_conflict | null)},tickets_mutation_responseRequest]
    /** insert a single row into the table: "tickets" */
    insert_tickets_one?: [{
    /** the row to be inserted */
    object: tickets_insert_input,
    /** on conflict condition */
    on_conflict?: (tickets_on_conflict | null)},ticketsRequest]
    /** insert data into the table: "users" */
    insert_users?: [{
    /** the rows to be inserted */
    objects: users_insert_input[],
    /** on conflict condition */
    on_conflict?: (users_on_conflict | null)},users_mutation_responseRequest]
    /** insert a single row into the table: "users" */
    insert_users_one?: [{
    /** the row to be inserted */
    object: users_insert_input,
    /** on conflict condition */
    on_conflict?: (users_on_conflict | null)},usersRequest]
    /** update data of the table: "attachment_extensions" */
    update_attachment_extensions?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (attachment_extensions_set_input | null),
    /** filter the rows which have to be updated */
    where: attachment_extensions_bool_exp},attachment_extensions_mutation_responseRequest]
    /** update single row of the table: "attachment_extensions" */
    update_attachment_extensions_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (attachment_extensions_set_input | null),pk_columns: attachment_extensions_pk_columns_input},attachment_extensionsRequest]
    /** update data of the table: "attachments" */
    update_attachments?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (attachments_set_input | null),
    /** filter the rows which have to be updated */
    where: attachments_bool_exp},attachments_mutation_responseRequest]
    /** update single row of the table: "attachments" */
    update_attachments_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (attachments_set_input | null),pk_columns: attachments_pk_columns_input},attachmentsRequest]
    /** update data of the table: "is_participant_online" */
    update_is_participant_online?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (is_participant_online_set_input | null),
    /** filter the rows which have to be updated */
    where: is_participant_online_bool_exp},is_participant_online_mutation_responseRequest]
    /** update single row of the table: "is_participant_online" */
    update_is_participant_online_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (is_participant_online_set_input | null),pk_columns: is_participant_online_pk_columns_input},is_participant_onlineRequest]
    /** update data of the table: "messages" */
    update_messages?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (messages_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (messages_set_input | null),
    /** filter the rows which have to be updated */
    where: messages_bool_exp},messages_mutation_responseRequest]
    /** update single row of the table: "messages" */
    update_messages_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (messages_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (messages_set_input | null),pk_columns: messages_pk_columns_input},messagesRequest]
    /** update data of the table: "participant_room" */
    update_participant_room?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (participant_room_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (participant_room_set_input | null),
    /** filter the rows which have to be updated */
    where: participant_room_bool_exp},participant_room_mutation_responseRequest]
    /** update single row of the table: "participant_room" */
    update_participant_room_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (participant_room_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (participant_room_set_input | null),pk_columns: participant_room_pk_columns_input},participant_roomRequest]
    /** update data of the table: "participant_type" */
    update_participant_type?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (participant_type_set_input | null),
    /** filter the rows which have to be updated */
    where: participant_type_bool_exp},participant_type_mutation_responseRequest]
    /** update single row of the table: "participant_type" */
    update_participant_type_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (participant_type_set_input | null),pk_columns: participant_type_pk_columns_input},participant_typeRequest]
    /** update data of the table: "participants" */
    update_participants?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (participants_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (participants_set_input | null),
    /** filter the rows which have to be updated */
    where: participants_bool_exp},participants_mutation_responseRequest]
    /** update single row of the table: "participants" */
    update_participants_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (participants_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (participants_set_input | null),pk_columns: participants_pk_columns_input},participantsRequest]
    /** update data of the table: "room_status" */
    update_room_status?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_status_set_input | null),
    /** filter the rows which have to be updated */
    where: room_status_bool_exp},room_status_mutation_responseRequest]
    /** update single row of the table: "room_status" */
    update_room_status_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_status_set_input | null),pk_columns: room_status_pk_columns_input},room_statusRequest]
    /** update data of the table: "room_type" */
    update_room_type?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_type_set_input | null),
    /** filter the rows which have to be updated */
    where: room_type_bool_exp},room_type_mutation_responseRequest]
    /** update single row of the table: "room_type" */
    update_room_type_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_type_set_input | null),pk_columns: room_type_pk_columns_input},room_typeRequest]
    /** update data of the table: "room_visibility" */
    update_room_visibility?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_visibility_set_input | null),
    /** filter the rows which have to be updated */
    where: room_visibility_bool_exp},room_visibility_mutation_responseRequest]
    /** update single row of the table: "room_visibility" */
    update_room_visibility_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (room_visibility_set_input | null),pk_columns: room_visibility_pk_columns_input},room_visibilityRequest]
    /** update data of the table: "rooms" */
    update_rooms?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (rooms_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (rooms_set_input | null),
    /** filter the rows which have to be updated */
    where: rooms_bool_exp},rooms_mutation_responseRequest]
    /** update single row of the table: "rooms" */
    update_rooms_by_pk?: [{
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (rooms_inc_input | null),
    /** sets the columns of the filtered rows to the given values */
    _set?: (rooms_set_input | null),pk_columns: rooms_pk_columns_input},roomsRequest]
    /** update data of the table: "ticket_messages" */
    update_ticket_messages?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_messages_set_input | null),
    /** filter the rows which have to be updated */
    where: ticket_messages_bool_exp},ticket_messages_mutation_responseRequest]
    /** update single row of the table: "ticket_messages" */
    update_ticket_messages_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_messages_set_input | null),pk_columns: ticket_messages_pk_columns_input},ticket_messagesRequest]
    /** update data of the table: "ticket_participants" */
    update_ticket_participants?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_participants_set_input | null),
    /** filter the rows which have to be updated */
    where: ticket_participants_bool_exp},ticket_participants_mutation_responseRequest]
    /** update single row of the table: "ticket_participants" */
    update_ticket_participants_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_participants_set_input | null),pk_columns: ticket_participants_pk_columns_input},ticket_participantsRequest]
    /** update data of the table: "ticket_states" */
    update_ticket_states?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_states_set_input | null),
    /** filter the rows which have to be updated */
    where: ticket_states_bool_exp},ticket_states_mutation_responseRequest]
    /** update single row of the table: "ticket_states" */
    update_ticket_states_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (ticket_states_set_input | null),pk_columns: ticket_states_pk_columns_input},ticket_statesRequest]
    /** update data of the table: "tickets" */
    update_tickets?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (tickets_set_input | null),
    /** filter the rows which have to be updated */
    where: tickets_bool_exp},tickets_mutation_responseRequest]
    /** update single row of the table: "tickets" */
    update_tickets_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (tickets_set_input | null),pk_columns: tickets_pk_columns_input},ticketsRequest]
    /** update data of the table: "users" */
    update_users?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null),
    /** filter the rows which have to be updated */
    where: users_bool_exp},users_mutation_responseRequest]
    /** update single row of the table: "users" */
    update_users_by_pk?: [{
    /** sets the columns of the filtered rows to the given values */
    _set?: (users_set_input | null),pk_columns: users_pk_columns_input},usersRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "participant_room" */
export interface participant_roomRequest{
    created_at?: boolean | number
    id?: boolean | number
    is_room_owner?: boolean | number
    /** An object relationship */
    message?: messagesRequest
    /** An object relationship */
    participant?: participantsRequest
    participant_id?: boolean | number
    /** An object relationship */
    room?: roomsRequest
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "participant_room" */
export interface participant_room_aggregateRequest{
    aggregate?: participant_room_aggregate_fieldsRequest
    nodes?: participant_roomRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "participant_room" */
export interface participant_room_aggregate_fieldsRequest{
    avg?: participant_room_avg_fieldsRequest
    count?: [{columns?: (participant_room_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: participant_room_max_fieldsRequest
    min?: participant_room_min_fieldsRequest
    stddev?: participant_room_stddev_fieldsRequest
    stddev_pop?: participant_room_stddev_pop_fieldsRequest
    stddev_samp?: participant_room_stddev_samp_fieldsRequest
    sum?: participant_room_sum_fieldsRequest
    var_pop?: participant_room_var_pop_fieldsRequest
    var_samp?: participant_room_var_samp_fieldsRequest
    variance?: participant_room_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "participant_room" */
export interface participant_room_aggregate_order_by {avg?: (participant_room_avg_order_by | null),count?: (order_by | null),max?: (participant_room_max_order_by | null),min?: (participant_room_min_order_by | null),stddev?: (participant_room_stddev_order_by | null),stddev_pop?: (participant_room_stddev_pop_order_by | null),stddev_samp?: (participant_room_stddev_samp_order_by | null),sum?: (participant_room_sum_order_by | null),var_pop?: (participant_room_var_pop_order_by | null),var_samp?: (participant_room_var_samp_order_by | null),variance?: (participant_room_variance_order_by | null)}


/** input type for inserting array relation for remote table "participant_room" */
export interface participant_room_arr_rel_insert_input {data: participant_room_insert_input[],
/** on conflict condition */
on_conflict?: (participant_room_on_conflict | null)}


/** aggregate avg on columns */
export interface participant_room_avg_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "participant_room" */
export interface participant_room_avg_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** Boolean expression to filter rows from the table "participant_room". All fields are combined with a logical 'AND'. */
export interface participant_room_bool_exp {_and?: (participant_room_bool_exp[] | null),_not?: (participant_room_bool_exp | null),_or?: (participant_room_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),id?: (Int_comparison_exp | null),is_room_owner?: (Boolean_comparison_exp | null),message?: (messages_bool_exp | null),participant?: (participants_bool_exp | null),participant_id?: (Int_comparison_exp | null),room?: (rooms_bool_exp | null),room_id?: (Int_comparison_exp | null),unread_count?: (Int_comparison_exp | null),unread_message_id?: (Int_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for incrementing numeric columns in table "participant_room" */
export interface participant_room_inc_input {id?: (Scalars['Int'] | null),participant_id?: (Scalars['Int'] | null),room_id?: (Scalars['Int'] | null),unread_count?: (Scalars['Int'] | null),unread_message_id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "participant_room" */
export interface participant_room_insert_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),is_room_owner?: (Scalars['Boolean'] | null),message?: (messages_obj_rel_insert_input | null),participant?: (participants_obj_rel_insert_input | null),participant_id?: (Scalars['Int'] | null),room?: (rooms_obj_rel_insert_input | null),room_id?: (Scalars['Int'] | null),unread_count?: (Scalars['Int'] | null),unread_message_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface participant_room_max_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "participant_room" */
export interface participant_room_max_order_by {created_at?: (order_by | null),id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface participant_room_min_fieldsRequest{
    created_at?: boolean | number
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "participant_room" */
export interface participant_room_min_order_by {created_at?: (order_by | null),id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "participant_room" */
export interface participant_room_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: participant_roomRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "participant_room" */
export interface participant_room_on_conflict {constraint: participant_room_constraint,update_columns: participant_room_update_column[],where?: (participant_room_bool_exp | null)}


/** Ordering options when selecting data from "participant_room". */
export interface participant_room_order_by {created_at?: (order_by | null),id?: (order_by | null),is_room_owner?: (order_by | null),message?: (messages_order_by | null),participant?: (participants_order_by | null),participant_id?: (order_by | null),room?: (rooms_order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: participant_room */
export interface participant_room_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "participant_room" */
export interface participant_room_set_input {created_at?: (Scalars['timestamptz'] | null),id?: (Scalars['Int'] | null),is_room_owner?: (Scalars['Boolean'] | null),participant_id?: (Scalars['Int'] | null),room_id?: (Scalars['Int'] | null),unread_count?: (Scalars['Int'] | null),unread_message_id?: (Scalars['Int'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate stddev on columns */
export interface participant_room_stddev_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "participant_room" */
export interface participant_room_stddev_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface participant_room_stddev_pop_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "participant_room" */
export interface participant_room_stddev_pop_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface participant_room_stddev_samp_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "participant_room" */
export interface participant_room_stddev_samp_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate sum on columns */
export interface participant_room_sum_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "participant_room" */
export interface participant_room_sum_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface participant_room_var_pop_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "participant_room" */
export interface participant_room_var_pop_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface participant_room_var_samp_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "participant_room" */
export interface participant_room_var_samp_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** aggregate variance on columns */
export interface participant_room_variance_fieldsRequest{
    id?: boolean | number
    participant_id?: boolean | number
    room_id?: boolean | number
    unread_count?: boolean | number
    unread_message_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "participant_room" */
export interface participant_room_variance_order_by {id?: (order_by | null),participant_id?: (order_by | null),room_id?: (order_by | null),unread_count?: (order_by | null),unread_message_id?: (order_by | null)}


/** columns and relationships of "participant_type" */
export interface participant_typeRequest{
    description?: boolean | number
    /** An array relationship */
    participants?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participantsRequest] | participantsRequest
    /** An aggregate relationship */
    participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participants_aggregateRequest] | participants_aggregateRequest
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "participant_type" */
export interface participant_type_aggregateRequest{
    aggregate?: participant_type_aggregate_fieldsRequest
    nodes?: participant_typeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "participant_type" */
export interface participant_type_aggregate_fieldsRequest{
    count?: [{columns?: (participant_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: participant_type_max_fieldsRequest
    min?: participant_type_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "participant_type". All fields are combined with a logical 'AND'. */
export interface participant_type_bool_exp {_and?: (participant_type_bool_exp[] | null),_not?: (participant_type_bool_exp | null),_or?: (participant_type_bool_exp[] | null),description?: (String_comparison_exp | null),participants?: (participants_bool_exp | null),type?: (String_comparison_exp | null)}


/** input type for inserting data into table "participant_type" */
export interface participant_type_insert_input {description?: (Scalars['String'] | null),participants?: (participants_arr_rel_insert_input | null),type?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface participant_type_max_fieldsRequest{
    description?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface participant_type_min_fieldsRequest{
    description?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "participant_type" */
export interface participant_type_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: participant_typeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "participant_type" */
export interface participant_type_obj_rel_insert_input {data: participant_type_insert_input,
/** on conflict condition */
on_conflict?: (participant_type_on_conflict | null)}


/** on conflict condition type for table "participant_type" */
export interface participant_type_on_conflict {constraint: participant_type_constraint,update_columns: participant_type_update_column[],where?: (participant_type_bool_exp | null)}


/** Ordering options when selecting data from "participant_type". */
export interface participant_type_order_by {description?: (order_by | null),participants_aggregate?: (participants_aggregate_order_by | null),type?: (order_by | null)}


/** primary key columns input for table: participant_type */
export interface participant_type_pk_columns_input {type: Scalars['String']}


/** input type for updating data in table "participant_type" */
export interface participant_type_set_input {description?: (Scalars['String'] | null),type?: (Scalars['String'] | null)}


/** columns and relationships of "participants" */
export interface participantsRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    customer_name?: boolean | number
    id?: boolean | number
    is_online?: boolean | number
    /** An object relationship */
    is_participant_online?: is_participant_onlineRequest
    name?: boolean | number
    /** An array relationship */
    participant_rooms?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_roomRequest] | participant_roomRequest
    /** An aggregate relationship */
    participant_rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_room_aggregateRequest] | participant_room_aggregateRequest
    /** An object relationship */
    participant_type?: participant_typeRequest
    patient_token?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "participants" */
export interface participants_aggregateRequest{
    aggregate?: participants_aggregate_fieldsRequest
    nodes?: participantsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "participants" */
export interface participants_aggregate_fieldsRequest{
    avg?: participants_avg_fieldsRequest
    count?: [{columns?: (participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: participants_max_fieldsRequest
    min?: participants_min_fieldsRequest
    stddev?: participants_stddev_fieldsRequest
    stddev_pop?: participants_stddev_pop_fieldsRequest
    stddev_samp?: participants_stddev_samp_fieldsRequest
    sum?: participants_sum_fieldsRequest
    var_pop?: participants_var_pop_fieldsRequest
    var_samp?: participants_var_samp_fieldsRequest
    variance?: participants_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "participants" */
export interface participants_aggregate_order_by {avg?: (participants_avg_order_by | null),count?: (order_by | null),max?: (participants_max_order_by | null),min?: (participants_min_order_by | null),stddev?: (participants_stddev_order_by | null),stddev_pop?: (participants_stddev_pop_order_by | null),stddev_samp?: (participants_stddev_samp_order_by | null),sum?: (participants_sum_order_by | null),var_pop?: (participants_var_pop_order_by | null),var_samp?: (participants_var_samp_order_by | null),variance?: (participants_variance_order_by | null)}


/** input type for inserting array relation for remote table "participants" */
export interface participants_arr_rel_insert_input {data: participants_insert_input[],
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}


/** aggregate avg on columns */
export interface participants_avg_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "participants" */
export interface participants_avg_order_by {id?: (order_by | null)}


/** Boolean expression to filter rows from the table "participants". All fields are combined with a logical 'AND'. */
export interface participants_bool_exp {_and?: (participants_bool_exp[] | null),_not?: (participants_bool_exp | null),_or?: (participants_bool_exp[] | null),created_at?: (timestamptz_comparison_exp | null),customer_id?: (uuid_comparison_exp | null),customer_name?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),is_online?: (String_comparison_exp | null),is_participant_online?: (is_participant_online_bool_exp | null),name?: (String_comparison_exp | null),participant_rooms?: (participant_room_bool_exp | null),participant_type?: (participant_type_bool_exp | null),patient_token?: (String_comparison_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),user_id?: (uuid_comparison_exp | null)}


/** input type for incrementing numeric columns in table "participants" */
export interface participants_inc_input {id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "participants" */
export interface participants_insert_input {created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),customer_name?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),is_online?: (Scalars['String'] | null),is_participant_online?: (is_participant_online_obj_rel_insert_input | null),name?: (Scalars['String'] | null),participant_rooms?: (participant_room_arr_rel_insert_input | null),participant_type?: (participant_type_obj_rel_insert_input | null),patient_token?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface participants_max_fieldsRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    customer_name?: boolean | number
    id?: boolean | number
    is_online?: boolean | number
    name?: boolean | number
    patient_token?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "participants" */
export interface participants_max_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),customer_name?: (order_by | null),id?: (order_by | null),is_online?: (order_by | null),name?: (order_by | null),patient_token?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** aggregate min on columns */
export interface participants_min_fieldsRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    customer_name?: boolean | number
    id?: boolean | number
    is_online?: boolean | number
    name?: boolean | number
    patient_token?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    user_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "participants" */
export interface participants_min_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),customer_name?: (order_by | null),id?: (order_by | null),is_online?: (order_by | null),name?: (order_by | null),patient_token?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** response of any mutation on the table "participants" */
export interface participants_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: participantsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "participants" */
export interface participants_obj_rel_insert_input {data: participants_insert_input,
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}


/** on conflict condition type for table "participants" */
export interface participants_on_conflict {constraint: participants_constraint,update_columns: participants_update_column[],where?: (participants_bool_exp | null)}


/** Ordering options when selecting data from "participants". */
export interface participants_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),customer_name?: (order_by | null),id?: (order_by | null),is_online?: (order_by | null),is_participant_online?: (is_participant_online_order_by | null),name?: (order_by | null),participant_rooms_aggregate?: (participant_room_aggregate_order_by | null),participant_type?: (participant_type_order_by | null),patient_token?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),user_id?: (order_by | null)}


/** primary key columns input for table: participants */
export interface participants_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "participants" */
export interface participants_set_input {created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),customer_name?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),is_online?: (Scalars['String'] | null),name?: (Scalars['String'] | null),patient_token?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),user_id?: (Scalars['uuid'] | null)}


/** aggregate stddev on columns */
export interface participants_stddev_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "participants" */
export interface participants_stddev_order_by {id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface participants_stddev_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "participants" */
export interface participants_stddev_pop_order_by {id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface participants_stddev_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "participants" */
export interface participants_stddev_samp_order_by {id?: (order_by | null)}


/** aggregate sum on columns */
export interface participants_sum_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "participants" */
export interface participants_sum_order_by {id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface participants_var_pop_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "participants" */
export interface participants_var_pop_order_by {id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface participants_var_samp_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "participants" */
export interface participants_var_samp_order_by {id?: (order_by | null)}


/** aggregate variance on columns */
export interface participants_variance_fieldsRequest{
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "participants" */
export interface participants_variance_order_by {id?: (order_by | null)}

export interface query_rootRequest{
    /** fetch data from the table: "attachment_extensions" */
    attachment_extensions?: [{
    /** distinct select on columns */
    distinct_on?: (attachment_extensions_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachment_extensions_order_by[] | null),
    /** filter the rows returned */
    where?: (attachment_extensions_bool_exp | null)},attachment_extensionsRequest] | attachment_extensionsRequest
    /** fetch aggregated fields from the table: "attachment_extensions" */
    attachment_extensions_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachment_extensions_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachment_extensions_order_by[] | null),
    /** filter the rows returned */
    where?: (attachment_extensions_bool_exp | null)},attachment_extensions_aggregateRequest] | attachment_extensions_aggregateRequest
    /** fetch data from the table: "attachment_extensions" using primary key columns */
    attachment_extensions_by_pk?: [{name: Scalars['String']},attachment_extensionsRequest]
    /** An array relationship */
    attachments?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachmentsRequest] | attachmentsRequest
    /** An aggregate relationship */
    attachments_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachments_aggregateRequest] | attachments_aggregateRequest
    /** fetch data from the table: "attachments" using primary key columns */
    attachments_by_pk?: [{id: Scalars['uuid']},attachmentsRequest]
    /** fetch data from the table: "is_participant_online" */
    is_participant_online?: [{
    /** distinct select on columns */
    distinct_on?: (is_participant_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (is_participant_online_order_by[] | null),
    /** filter the rows returned */
    where?: (is_participant_online_bool_exp | null)},is_participant_onlineRequest] | is_participant_onlineRequest
    /** fetch aggregated fields from the table: "is_participant_online" */
    is_participant_online_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (is_participant_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (is_participant_online_order_by[] | null),
    /** filter the rows returned */
    where?: (is_participant_online_bool_exp | null)},is_participant_online_aggregateRequest] | is_participant_online_aggregateRequest
    /** fetch data from the table: "is_participant_online" using primary key columns */
    is_participant_online_by_pk?: [{is_online: Scalars['String']},is_participant_onlineRequest]
    /** An array relationship */
    messages?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messagesRequest] | messagesRequest
    /** An aggregate relationship */
    messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messages_aggregateRequest] | messages_aggregateRequest
    /** fetch data from the table: "messages" using primary key columns */
    messages_by_pk?: [{id: Scalars['Int']},messagesRequest]
    /** fetch data from the table: "participant_room" */
    participant_room?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_roomRequest] | participant_roomRequest
    /** fetch aggregated fields from the table: "participant_room" */
    participant_room_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_room_aggregateRequest] | participant_room_aggregateRequest
    /** fetch data from the table: "participant_room" using primary key columns */
    participant_room_by_pk?: [{id: Scalars['Int']},participant_roomRequest]
    /** fetch data from the table: "participant_type" */
    participant_type?: [{
    /** distinct select on columns */
    distinct_on?: (participant_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_type_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_type_bool_exp | null)},participant_typeRequest] | participant_typeRequest
    /** fetch aggregated fields from the table: "participant_type" */
    participant_type_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_type_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_type_bool_exp | null)},participant_type_aggregateRequest] | participant_type_aggregateRequest
    /** fetch data from the table: "participant_type" using primary key columns */
    participant_type_by_pk?: [{type: Scalars['String']},participant_typeRequest]
    /** An array relationship */
    participants?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participantsRequest] | participantsRequest
    /** An aggregate relationship */
    participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participants_aggregateRequest] | participants_aggregateRequest
    /** fetch data from the table: "participants" using primary key columns */
    participants_by_pk?: [{id: Scalars['Int']},participantsRequest]
    /** fetch data from the table: "room_status" */
    room_status?: [{
    /** distinct select on columns */
    distinct_on?: (room_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_status_order_by[] | null),
    /** filter the rows returned */
    where?: (room_status_bool_exp | null)},room_statusRequest] | room_statusRequest
    /** fetch aggregated fields from the table: "room_status" */
    room_status_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_status_order_by[] | null),
    /** filter the rows returned */
    where?: (room_status_bool_exp | null)},room_status_aggregateRequest] | room_status_aggregateRequest
    /** fetch data from the table: "room_status" using primary key columns */
    room_status_by_pk?: [{status: Scalars['String']},room_statusRequest]
    /** fetch data from the table: "room_type" */
    room_type?: [{
    /** distinct select on columns */
    distinct_on?: (room_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_type_order_by[] | null),
    /** filter the rows returned */
    where?: (room_type_bool_exp | null)},room_typeRequest] | room_typeRequest
    /** fetch aggregated fields from the table: "room_type" */
    room_type_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_type_order_by[] | null),
    /** filter the rows returned */
    where?: (room_type_bool_exp | null)},room_type_aggregateRequest] | room_type_aggregateRequest
    /** fetch data from the table: "room_type" using primary key columns */
    room_type_by_pk?: [{type: Scalars['String']},room_typeRequest]
    /** fetch data from the table: "room_visibility" */
    room_visibility?: [{
    /** distinct select on columns */
    distinct_on?: (room_visibility_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_visibility_order_by[] | null),
    /** filter the rows returned */
    where?: (room_visibility_bool_exp | null)},room_visibilityRequest] | room_visibilityRequest
    /** fetch aggregated fields from the table: "room_visibility" */
    room_visibility_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_visibility_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_visibility_order_by[] | null),
    /** filter the rows returned */
    where?: (room_visibility_bool_exp | null)},room_visibility_aggregateRequest] | room_visibility_aggregateRequest
    /** fetch data from the table: "room_visibility" using primary key columns */
    room_visibility_by_pk?: [{visibility: Scalars['String']},room_visibilityRequest]
    /** fetch data from the table: "rooms" */
    rooms?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},roomsRequest] | roomsRequest
    /** An aggregate relationship */
    rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},rooms_aggregateRequest] | rooms_aggregateRequest
    /** fetch data from the table: "rooms" using primary key columns */
    rooms_by_pk?: [{id: Scalars['Int']},roomsRequest]
    /** An array relationship */
    ticket_messages?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messagesRequest] | ticket_messagesRequest
    /** An aggregate relationship */
    ticket_messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messages_aggregateRequest] | ticket_messages_aggregateRequest
    /** fetch data from the table: "ticket_messages" using primary key columns */
    ticket_messages_by_pk?: [{id: Scalars['uuid']},ticket_messagesRequest]
    /** An array relationship */
    ticket_participants?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participantsRequest] | ticket_participantsRequest
    /** An aggregate relationship */
    ticket_participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participants_aggregateRequest] | ticket_participants_aggregateRequest
    /** fetch data from the table: "ticket_participants" using primary key columns */
    ticket_participants_by_pk?: [{participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']},ticket_participantsRequest]
    /** fetch data from the table: "ticket_states" */
    ticket_states?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_states_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_states_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_states_bool_exp | null)},ticket_statesRequest] | ticket_statesRequest
    /** fetch aggregated fields from the table: "ticket_states" */
    ticket_states_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_states_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_states_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_states_bool_exp | null)},ticket_states_aggregateRequest] | ticket_states_aggregateRequest
    /** fetch data from the table: "ticket_states" using primary key columns */
    ticket_states_by_pk?: [{name: Scalars['String']},ticket_statesRequest]
    /** An array relationship */
    tickets?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},ticketsRequest] | ticketsRequest
    /** An aggregate relationship */
    tickets_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},tickets_aggregateRequest] | tickets_aggregateRequest
    /** fetch data from the table: "tickets" using primary key columns */
    tickets_by_pk?: [{id: Scalars['uuid']},ticketsRequest]
    /** fetch data from the table: "users" */
    users?: [{
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null),
    /** filter the rows returned */
    where?: (users_bool_exp | null)},usersRequest] | usersRequest
    /** fetch aggregated fields from the table: "users" */
    users_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null),
    /** filter the rows returned */
    where?: (users_bool_exp | null)},users_aggregateRequest] | users_aggregateRequest
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: [{id: Scalars['uuid']},usersRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "room_status" */
export interface room_statusRequest{
    description?: boolean | number
    /** fetch data from the table: "rooms" */
    rooms?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},roomsRequest] | roomsRequest
    /** An aggregate relationship */
    rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},rooms_aggregateRequest] | rooms_aggregateRequest
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "room_status" */
export interface room_status_aggregateRequest{
    aggregate?: room_status_aggregate_fieldsRequest
    nodes?: room_statusRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "room_status" */
export interface room_status_aggregate_fieldsRequest{
    count?: [{columns?: (room_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: room_status_max_fieldsRequest
    min?: room_status_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "room_status". All fields are combined with a logical 'AND'. */
export interface room_status_bool_exp {_and?: (room_status_bool_exp[] | null),_not?: (room_status_bool_exp | null),_or?: (room_status_bool_exp[] | null),description?: (String_comparison_exp | null),rooms?: (rooms_bool_exp | null),status?: (String_comparison_exp | null)}


/** input type for inserting data into table "room_status" */
export interface room_status_insert_input {description?: (Scalars['String'] | null),rooms?: (rooms_arr_rel_insert_input | null),status?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface room_status_max_fieldsRequest{
    description?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface room_status_min_fieldsRequest{
    description?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "room_status" */
export interface room_status_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: room_statusRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "room_status" */
export interface room_status_obj_rel_insert_input {data: room_status_insert_input,
/** on conflict condition */
on_conflict?: (room_status_on_conflict | null)}


/** on conflict condition type for table "room_status" */
export interface room_status_on_conflict {constraint: room_status_constraint,update_columns: room_status_update_column[],where?: (room_status_bool_exp | null)}


/** Ordering options when selecting data from "room_status". */
export interface room_status_order_by {description?: (order_by | null),rooms_aggregate?: (rooms_aggregate_order_by | null),status?: (order_by | null)}


/** primary key columns input for table: room_status */
export interface room_status_pk_columns_input {status: Scalars['String']}


/** input type for updating data in table "room_status" */
export interface room_status_set_input {description?: (Scalars['String'] | null),status?: (Scalars['String'] | null)}


/** columns and relationships of "room_type" */
export interface room_typeRequest{
    description?: boolean | number
    /** fetch data from the table: "rooms" */
    rooms?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},roomsRequest] | roomsRequest
    /** An aggregate relationship */
    rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},rooms_aggregateRequest] | rooms_aggregateRequest
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "room_type" */
export interface room_type_aggregateRequest{
    aggregate?: room_type_aggregate_fieldsRequest
    nodes?: room_typeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "room_type" */
export interface room_type_aggregate_fieldsRequest{
    count?: [{columns?: (room_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: room_type_max_fieldsRequest
    min?: room_type_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "room_type". All fields are combined with a logical 'AND'. */
export interface room_type_bool_exp {_and?: (room_type_bool_exp[] | null),_not?: (room_type_bool_exp | null),_or?: (room_type_bool_exp[] | null),description?: (String_comparison_exp | null),rooms?: (rooms_bool_exp | null),type?: (String_comparison_exp | null)}


/** input type for inserting data into table "room_type" */
export interface room_type_insert_input {description?: (Scalars['String'] | null),rooms?: (rooms_arr_rel_insert_input | null),type?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface room_type_max_fieldsRequest{
    description?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface room_type_min_fieldsRequest{
    description?: boolean | number
    type?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "room_type" */
export interface room_type_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: room_typeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "room_type" */
export interface room_type_obj_rel_insert_input {data: room_type_insert_input,
/** on conflict condition */
on_conflict?: (room_type_on_conflict | null)}


/** on conflict condition type for table "room_type" */
export interface room_type_on_conflict {constraint: room_type_constraint,update_columns: room_type_update_column[],where?: (room_type_bool_exp | null)}


/** Ordering options when selecting data from "room_type". */
export interface room_type_order_by {description?: (order_by | null),rooms_aggregate?: (rooms_aggregate_order_by | null),type?: (order_by | null)}


/** primary key columns input for table: room_type */
export interface room_type_pk_columns_input {type: Scalars['String']}


/** input type for updating data in table "room_type" */
export interface room_type_set_input {description?: (Scalars['String'] | null),type?: (Scalars['String'] | null)}


/** columns and relationships of "room_visibility" */
export interface room_visibilityRequest{
    description?: boolean | number
    /** fetch data from the table: "rooms" */
    rooms?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},roomsRequest] | roomsRequest
    /** An aggregate relationship */
    rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},rooms_aggregateRequest] | rooms_aggregateRequest
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "room_visibility" */
export interface room_visibility_aggregateRequest{
    aggregate?: room_visibility_aggregate_fieldsRequest
    nodes?: room_visibilityRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "room_visibility" */
export interface room_visibility_aggregate_fieldsRequest{
    count?: [{columns?: (room_visibility_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: room_visibility_max_fieldsRequest
    min?: room_visibility_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "room_visibility". All fields are combined with a logical 'AND'. */
export interface room_visibility_bool_exp {_and?: (room_visibility_bool_exp[] | null),_not?: (room_visibility_bool_exp | null),_or?: (room_visibility_bool_exp[] | null),description?: (String_comparison_exp | null),rooms?: (rooms_bool_exp | null),visibility?: (String_comparison_exp | null)}


/** input type for inserting data into table "room_visibility" */
export interface room_visibility_insert_input {description?: (Scalars['String'] | null),rooms?: (rooms_arr_rel_insert_input | null),visibility?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface room_visibility_max_fieldsRequest{
    description?: boolean | number
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface room_visibility_min_fieldsRequest{
    description?: boolean | number
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "room_visibility" */
export interface room_visibility_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: room_visibilityRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "room_visibility" */
export interface room_visibility_obj_rel_insert_input {data: room_visibility_insert_input,
/** on conflict condition */
on_conflict?: (room_visibility_on_conflict | null)}


/** on conflict condition type for table "room_visibility" */
export interface room_visibility_on_conflict {constraint: room_visibility_constraint,update_columns: room_visibility_update_column[],where?: (room_visibility_bool_exp | null)}


/** Ordering options when selecting data from "room_visibility". */
export interface room_visibility_order_by {description?: (order_by | null),rooms_aggregate?: (rooms_aggregate_order_by | null),visibility?: (order_by | null)}


/** primary key columns input for table: room_visibility */
export interface room_visibility_pk_columns_input {visibility: Scalars['String']}


/** input type for updating data in table "room_visibility" */
export interface room_visibility_set_input {description?: (Scalars['String'] | null),visibility?: (Scalars['String'] | null)}


/** columns and relationships of "rooms" */
export interface roomsRequest{
    access_code?: boolean | number
    created_at?: boolean | number
    creator_customer_id?: boolean | number
    creator_participant_id?: boolean | number
    direct_key?: boolean | number
    id?: boolean | number
    /** An array relationship */
    messages?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messagesRequest] | messagesRequest
    /** An aggregate relationship */
    messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messages_aggregateRequest] | messages_aggregateRequest
    name?: boolean | number
    /** An array relationship */
    participant_rooms?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_roomRequest] | participant_roomRequest
    /** An aggregate relationship */
    participant_rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_room_aggregateRequest] | participant_room_aggregateRequest
    /** An object relationship */
    room_status?: room_statusRequest
    /** An object relationship */
    room_type?: room_typeRequest
    /** An object relationship */
    room_visibility?: room_visibilityRequest
    status?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "rooms" */
export interface rooms_aggregateRequest{
    aggregate?: rooms_aggregate_fieldsRequest
    nodes?: roomsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "rooms" */
export interface rooms_aggregate_fieldsRequest{
    avg?: rooms_avg_fieldsRequest
    count?: [{columns?: (rooms_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: rooms_max_fieldsRequest
    min?: rooms_min_fieldsRequest
    stddev?: rooms_stddev_fieldsRequest
    stddev_pop?: rooms_stddev_pop_fieldsRequest
    stddev_samp?: rooms_stddev_samp_fieldsRequest
    sum?: rooms_sum_fieldsRequest
    var_pop?: rooms_var_pop_fieldsRequest
    var_samp?: rooms_var_samp_fieldsRequest
    variance?: rooms_variance_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "rooms" */
export interface rooms_aggregate_order_by {avg?: (rooms_avg_order_by | null),count?: (order_by | null),max?: (rooms_max_order_by | null),min?: (rooms_min_order_by | null),stddev?: (rooms_stddev_order_by | null),stddev_pop?: (rooms_stddev_pop_order_by | null),stddev_samp?: (rooms_stddev_samp_order_by | null),sum?: (rooms_sum_order_by | null),var_pop?: (rooms_var_pop_order_by | null),var_samp?: (rooms_var_samp_order_by | null),variance?: (rooms_variance_order_by | null)}


/** input type for inserting array relation for remote table "rooms" */
export interface rooms_arr_rel_insert_input {data: rooms_insert_input[],
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}


/** aggregate avg on columns */
export interface rooms_avg_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by avg() on columns of table "rooms" */
export interface rooms_avg_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export interface rooms_bool_exp {_and?: (rooms_bool_exp[] | null),_not?: (rooms_bool_exp | null),_or?: (rooms_bool_exp[] | null),access_code?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),creator_customer_id?: (uuid_comparison_exp | null),creator_participant_id?: (Int_comparison_exp | null),direct_key?: (String_comparison_exp | null),id?: (Int_comparison_exp | null),messages?: (messages_bool_exp | null),name?: (String_comparison_exp | null),participant_rooms?: (participant_room_bool_exp | null),room_status?: (room_status_bool_exp | null),room_type?: (room_type_bool_exp | null),room_visibility?: (room_visibility_bool_exp | null),status?: (String_comparison_exp | null),type?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null),visibility?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "rooms" */
export interface rooms_inc_input {creator_participant_id?: (Scalars['Int'] | null),id?: (Scalars['Int'] | null)}


/** input type for inserting data into table "rooms" */
export interface rooms_insert_input {access_code?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),creator_customer_id?: (Scalars['uuid'] | null),creator_participant_id?: (Scalars['Int'] | null),direct_key?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),messages?: (messages_arr_rel_insert_input | null),name?: (Scalars['String'] | null),participant_rooms?: (participant_room_arr_rel_insert_input | null),room_status?: (room_status_obj_rel_insert_input | null),room_type?: (room_type_obj_rel_insert_input | null),room_visibility?: (room_visibility_obj_rel_insert_input | null),status?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),visibility?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface rooms_max_fieldsRequest{
    access_code?: boolean | number
    created_at?: boolean | number
    creator_customer_id?: boolean | number
    creator_participant_id?: boolean | number
    direct_key?: boolean | number
    id?: boolean | number
    name?: boolean | number
    status?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "rooms" */
export interface rooms_max_order_by {access_code?: (order_by | null),created_at?: (order_by | null),creator_customer_id?: (order_by | null),creator_participant_id?: (order_by | null),direct_key?: (order_by | null),id?: (order_by | null),name?: (order_by | null),status?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),visibility?: (order_by | null)}


/** aggregate min on columns */
export interface rooms_min_fieldsRequest{
    access_code?: boolean | number
    created_at?: boolean | number
    creator_customer_id?: boolean | number
    creator_participant_id?: boolean | number
    direct_key?: boolean | number
    id?: boolean | number
    name?: boolean | number
    status?: boolean | number
    type?: boolean | number
    updated_at?: boolean | number
    visibility?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "rooms" */
export interface rooms_min_order_by {access_code?: (order_by | null),created_at?: (order_by | null),creator_customer_id?: (order_by | null),creator_participant_id?: (order_by | null),direct_key?: (order_by | null),id?: (order_by | null),name?: (order_by | null),status?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),visibility?: (order_by | null)}


/** response of any mutation on the table "rooms" */
export interface rooms_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: roomsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "rooms" */
export interface rooms_obj_rel_insert_input {data: rooms_insert_input,
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}


/** on conflict condition type for table "rooms" */
export interface rooms_on_conflict {constraint: rooms_constraint,update_columns: rooms_update_column[],where?: (rooms_bool_exp | null)}


/** Ordering options when selecting data from "rooms". */
export interface rooms_order_by {access_code?: (order_by | null),created_at?: (order_by | null),creator_customer_id?: (order_by | null),creator_participant_id?: (order_by | null),direct_key?: (order_by | null),id?: (order_by | null),messages_aggregate?: (messages_aggregate_order_by | null),name?: (order_by | null),participant_rooms_aggregate?: (participant_room_aggregate_order_by | null),room_status?: (room_status_order_by | null),room_type?: (room_type_order_by | null),room_visibility?: (room_visibility_order_by | null),status?: (order_by | null),type?: (order_by | null),updated_at?: (order_by | null),visibility?: (order_by | null)}


/** primary key columns input for table: rooms */
export interface rooms_pk_columns_input {id: Scalars['Int']}


/** input type for updating data in table "rooms" */
export interface rooms_set_input {access_code?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),creator_customer_id?: (Scalars['uuid'] | null),creator_participant_id?: (Scalars['Int'] | null),direct_key?: (Scalars['String'] | null),id?: (Scalars['Int'] | null),name?: (Scalars['String'] | null),status?: (Scalars['String'] | null),type?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null),visibility?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface rooms_stddev_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev() on columns of table "rooms" */
export interface rooms_stddev_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate stddev_pop on columns */
export interface rooms_stddev_pop_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_pop() on columns of table "rooms" */
export interface rooms_stddev_pop_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate stddev_samp on columns */
export interface rooms_stddev_samp_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by stddev_samp() on columns of table "rooms" */
export interface rooms_stddev_samp_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate sum on columns */
export interface rooms_sum_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by sum() on columns of table "rooms" */
export interface rooms_sum_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate var_pop on columns */
export interface rooms_var_pop_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_pop() on columns of table "rooms" */
export interface rooms_var_pop_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate var_samp on columns */
export interface rooms_var_samp_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by var_samp() on columns of table "rooms" */
export interface rooms_var_samp_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}


/** aggregate variance on columns */
export interface rooms_variance_fieldsRequest{
    creator_participant_id?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by variance() on columns of table "rooms" */
export interface rooms_variance_order_by {creator_participant_id?: (order_by | null),id?: (order_by | null)}

export interface subscription_rootRequest{
    /** fetch data from the table: "attachment_extensions" */
    attachment_extensions?: [{
    /** distinct select on columns */
    distinct_on?: (attachment_extensions_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachment_extensions_order_by[] | null),
    /** filter the rows returned */
    where?: (attachment_extensions_bool_exp | null)},attachment_extensionsRequest] | attachment_extensionsRequest
    /** fetch aggregated fields from the table: "attachment_extensions" */
    attachment_extensions_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachment_extensions_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachment_extensions_order_by[] | null),
    /** filter the rows returned */
    where?: (attachment_extensions_bool_exp | null)},attachment_extensions_aggregateRequest] | attachment_extensions_aggregateRequest
    /** fetch data from the table: "attachment_extensions" using primary key columns */
    attachment_extensions_by_pk?: [{name: Scalars['String']},attachment_extensionsRequest]
    /** An array relationship */
    attachments?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachmentsRequest] | attachmentsRequest
    /** An aggregate relationship */
    attachments_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachments_aggregateRequest] | attachments_aggregateRequest
    /** fetch data from the table: "attachments" using primary key columns */
    attachments_by_pk?: [{id: Scalars['uuid']},attachmentsRequest]
    /** fetch data from the table: "is_participant_online" */
    is_participant_online?: [{
    /** distinct select on columns */
    distinct_on?: (is_participant_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (is_participant_online_order_by[] | null),
    /** filter the rows returned */
    where?: (is_participant_online_bool_exp | null)},is_participant_onlineRequest] | is_participant_onlineRequest
    /** fetch aggregated fields from the table: "is_participant_online" */
    is_participant_online_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (is_participant_online_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (is_participant_online_order_by[] | null),
    /** filter the rows returned */
    where?: (is_participant_online_bool_exp | null)},is_participant_online_aggregateRequest] | is_participant_online_aggregateRequest
    /** fetch data from the table: "is_participant_online" using primary key columns */
    is_participant_online_by_pk?: [{is_online: Scalars['String']},is_participant_onlineRequest]
    /** An array relationship */
    messages?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messagesRequest] | messagesRequest
    /** An aggregate relationship */
    messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (messages_order_by[] | null),
    /** filter the rows returned */
    where?: (messages_bool_exp | null)},messages_aggregateRequest] | messages_aggregateRequest
    /** fetch data from the table: "messages" using primary key columns */
    messages_by_pk?: [{id: Scalars['Int']},messagesRequest]
    /** fetch data from the table: "participant_room" */
    participant_room?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_roomRequest] | participant_roomRequest
    /** fetch aggregated fields from the table: "participant_room" */
    participant_room_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_room_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_room_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_room_bool_exp | null)},participant_room_aggregateRequest] | participant_room_aggregateRequest
    /** fetch data from the table: "participant_room" using primary key columns */
    participant_room_by_pk?: [{id: Scalars['Int']},participant_roomRequest]
    /** fetch data from the table: "participant_type" */
    participant_type?: [{
    /** distinct select on columns */
    distinct_on?: (participant_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_type_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_type_bool_exp | null)},participant_typeRequest] | participant_typeRequest
    /** fetch aggregated fields from the table: "participant_type" */
    participant_type_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participant_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participant_type_order_by[] | null),
    /** filter the rows returned */
    where?: (participant_type_bool_exp | null)},participant_type_aggregateRequest] | participant_type_aggregateRequest
    /** fetch data from the table: "participant_type" using primary key columns */
    participant_type_by_pk?: [{type: Scalars['String']},participant_typeRequest]
    /** An array relationship */
    participants?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participantsRequest] | participantsRequest
    /** An aggregate relationship */
    participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (participants_order_by[] | null),
    /** filter the rows returned */
    where?: (participants_bool_exp | null)},participants_aggregateRequest] | participants_aggregateRequest
    /** fetch data from the table: "participants" using primary key columns */
    participants_by_pk?: [{id: Scalars['Int']},participantsRequest]
    /** fetch data from the table: "room_status" */
    room_status?: [{
    /** distinct select on columns */
    distinct_on?: (room_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_status_order_by[] | null),
    /** filter the rows returned */
    where?: (room_status_bool_exp | null)},room_statusRequest] | room_statusRequest
    /** fetch aggregated fields from the table: "room_status" */
    room_status_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_status_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_status_order_by[] | null),
    /** filter the rows returned */
    where?: (room_status_bool_exp | null)},room_status_aggregateRequest] | room_status_aggregateRequest
    /** fetch data from the table: "room_status" using primary key columns */
    room_status_by_pk?: [{status: Scalars['String']},room_statusRequest]
    /** fetch data from the table: "room_type" */
    room_type?: [{
    /** distinct select on columns */
    distinct_on?: (room_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_type_order_by[] | null),
    /** filter the rows returned */
    where?: (room_type_bool_exp | null)},room_typeRequest] | room_typeRequest
    /** fetch aggregated fields from the table: "room_type" */
    room_type_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_type_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_type_order_by[] | null),
    /** filter the rows returned */
    where?: (room_type_bool_exp | null)},room_type_aggregateRequest] | room_type_aggregateRequest
    /** fetch data from the table: "room_type" using primary key columns */
    room_type_by_pk?: [{type: Scalars['String']},room_typeRequest]
    /** fetch data from the table: "room_visibility" */
    room_visibility?: [{
    /** distinct select on columns */
    distinct_on?: (room_visibility_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_visibility_order_by[] | null),
    /** filter the rows returned */
    where?: (room_visibility_bool_exp | null)},room_visibilityRequest] | room_visibilityRequest
    /** fetch aggregated fields from the table: "room_visibility" */
    room_visibility_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (room_visibility_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (room_visibility_order_by[] | null),
    /** filter the rows returned */
    where?: (room_visibility_bool_exp | null)},room_visibility_aggregateRequest] | room_visibility_aggregateRequest
    /** fetch data from the table: "room_visibility" using primary key columns */
    room_visibility_by_pk?: [{visibility: Scalars['String']},room_visibilityRequest]
    /** fetch data from the table: "rooms" */
    rooms?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},roomsRequest] | roomsRequest
    /** An aggregate relationship */
    rooms_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (rooms_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (rooms_order_by[] | null),
    /** filter the rows returned */
    where?: (rooms_bool_exp | null)},rooms_aggregateRequest] | rooms_aggregateRequest
    /** fetch data from the table: "rooms" using primary key columns */
    rooms_by_pk?: [{id: Scalars['Int']},roomsRequest]
    /** An array relationship */
    ticket_messages?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messagesRequest] | ticket_messagesRequest
    /** An aggregate relationship */
    ticket_messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messages_aggregateRequest] | ticket_messages_aggregateRequest
    /** fetch data from the table: "ticket_messages" using primary key columns */
    ticket_messages_by_pk?: [{id: Scalars['uuid']},ticket_messagesRequest]
    /** An array relationship */
    ticket_participants?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participantsRequest] | ticket_participantsRequest
    /** An aggregate relationship */
    ticket_participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participants_aggregateRequest] | ticket_participants_aggregateRequest
    /** fetch data from the table: "ticket_participants" using primary key columns */
    ticket_participants_by_pk?: [{participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']},ticket_participantsRequest]
    /** fetch data from the table: "ticket_states" */
    ticket_states?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_states_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_states_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_states_bool_exp | null)},ticket_statesRequest] | ticket_statesRequest
    /** fetch aggregated fields from the table: "ticket_states" */
    ticket_states_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_states_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_states_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_states_bool_exp | null)},ticket_states_aggregateRequest] | ticket_states_aggregateRequest
    /** fetch data from the table: "ticket_states" using primary key columns */
    ticket_states_by_pk?: [{name: Scalars['String']},ticket_statesRequest]
    /** An array relationship */
    tickets?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},ticketsRequest] | ticketsRequest
    /** An aggregate relationship */
    tickets_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},tickets_aggregateRequest] | tickets_aggregateRequest
    /** fetch data from the table: "tickets" using primary key columns */
    tickets_by_pk?: [{id: Scalars['uuid']},ticketsRequest]
    /** fetch data from the table: "users" */
    users?: [{
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null),
    /** filter the rows returned */
    where?: (users_bool_exp | null)},usersRequest] | usersRequest
    /** fetch aggregated fields from the table: "users" */
    users_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (users_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (users_order_by[] | null),
    /** filter the rows returned */
    where?: (users_bool_exp | null)},users_aggregateRequest] | users_aggregateRequest
    /** fetch data from the table: "users" using primary key columns */
    users_by_pk?: [{id: Scalars['uuid']},usersRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "ticket_messages" */
export interface ticket_messagesRequest{
    /** An array relationship */
    attachments?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachmentsRequest] | attachmentsRequest
    /** An aggregate relationship */
    attachments_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachments_aggregateRequest] | attachments_aggregateRequest
    /** An object relationship */
    author?: ticket_participantsRequest
    author_id?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    seen?: boolean | number
    /** An object relationship */
    ticket?: ticketsRequest
    ticket_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "ticket_messages" */
export interface ticket_messages_aggregateRequest{
    aggregate?: ticket_messages_aggregate_fieldsRequest
    nodes?: ticket_messagesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "ticket_messages" */
export interface ticket_messages_aggregate_fieldsRequest{
    count?: [{columns?: (ticket_messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: ticket_messages_max_fieldsRequest
    min?: ticket_messages_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "ticket_messages" */
export interface ticket_messages_aggregate_order_by {count?: (order_by | null),max?: (ticket_messages_max_order_by | null),min?: (ticket_messages_min_order_by | null)}


/** input type for inserting array relation for remote table "ticket_messages" */
export interface ticket_messages_arr_rel_insert_input {data: ticket_messages_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}


/** Boolean expression to filter rows from the table "ticket_messages". All fields are combined with a logical 'AND'. */
export interface ticket_messages_bool_exp {_and?: (ticket_messages_bool_exp[] | null),_not?: (ticket_messages_bool_exp | null),_or?: (ticket_messages_bool_exp[] | null),attachments?: (attachments_bool_exp | null),author?: (ticket_participants_bool_exp | null),author_id?: (uuid_comparison_exp | null),content?: (String_comparison_exp | null),created_at?: (timestamptz_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),seen?: (Boolean_comparison_exp | null),ticket?: (tickets_bool_exp | null),ticket_id?: (uuid_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "ticket_messages" */
export interface ticket_messages_insert_input {attachments?: (attachments_arr_rel_insert_input | null),author?: (ticket_participants_obj_rel_insert_input | null),author_id?: (Scalars['uuid'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),seen?: (Scalars['Boolean'] | null),ticket?: (tickets_obj_rel_insert_input | null),ticket_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface ticket_messages_max_fieldsRequest{
    author_id?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    ticket_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "ticket_messages" */
export interface ticket_messages_max_order_by {author_id?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),ticket_id?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface ticket_messages_min_fieldsRequest{
    author_id?: boolean | number
    content?: boolean | number
    created_at?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    ticket_id?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "ticket_messages" */
export interface ticket_messages_min_order_by {author_id?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),ticket_id?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "ticket_messages" */
export interface ticket_messages_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ticket_messagesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "ticket_messages" */
export interface ticket_messages_obj_rel_insert_input {data: ticket_messages_insert_input,
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}


/** on conflict condition type for table "ticket_messages" */
export interface ticket_messages_on_conflict {constraint: ticket_messages_constraint,update_columns: ticket_messages_update_column[],where?: (ticket_messages_bool_exp | null)}


/** Ordering options when selecting data from "ticket_messages". */
export interface ticket_messages_order_by {attachments_aggregate?: (attachments_aggregate_order_by | null),author?: (ticket_participants_order_by | null),author_id?: (order_by | null),content?: (order_by | null),created_at?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),seen?: (order_by | null),ticket?: (tickets_order_by | null),ticket_id?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: ticket_messages */
export interface ticket_messages_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "ticket_messages" */
export interface ticket_messages_set_input {author_id?: (Scalars['uuid'] | null),content?: (Scalars['String'] | null),created_at?: (Scalars['timestamptz'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),seen?: (Scalars['Boolean'] | null),ticket_id?: (Scalars['uuid'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** columns and relationships of "ticket_participants" */
export interface ticket_participantsRequest{
    /** An array relationship */
    messages?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messagesRequest] | ticket_messagesRequest
    /** An aggregate relationship */
    messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messages_aggregateRequest] | ticket_messages_aggregateRequest
    owner?: boolean | number
    participant_id?: boolean | number
    /** An object relationship */
    ticket?: ticketsRequest
    ticket_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "ticket_participants" */
export interface ticket_participants_aggregateRequest{
    aggregate?: ticket_participants_aggregate_fieldsRequest
    nodes?: ticket_participantsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "ticket_participants" */
export interface ticket_participants_aggregate_fieldsRequest{
    count?: [{columns?: (ticket_participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: ticket_participants_max_fieldsRequest
    min?: ticket_participants_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "ticket_participants" */
export interface ticket_participants_aggregate_order_by {count?: (order_by | null),max?: (ticket_participants_max_order_by | null),min?: (ticket_participants_min_order_by | null)}


/** input type for inserting array relation for remote table "ticket_participants" */
export interface ticket_participants_arr_rel_insert_input {data: ticket_participants_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}


/** Boolean expression to filter rows from the table "ticket_participants". All fields are combined with a logical 'AND'. */
export interface ticket_participants_bool_exp {_and?: (ticket_participants_bool_exp[] | null),_not?: (ticket_participants_bool_exp | null),_or?: (ticket_participants_bool_exp[] | null),messages?: (ticket_messages_bool_exp | null),owner?: (Boolean_comparison_exp | null),participant_id?: (uuid_comparison_exp | null),ticket?: (tickets_bool_exp | null),ticket_id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "ticket_participants" */
export interface ticket_participants_insert_input {messages?: (ticket_messages_arr_rel_insert_input | null),owner?: (Scalars['Boolean'] | null),participant_id?: (Scalars['uuid'] | null),ticket?: (tickets_obj_rel_insert_input | null),ticket_id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface ticket_participants_max_fieldsRequest{
    participant_id?: boolean | number
    ticket_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "ticket_participants" */
export interface ticket_participants_max_order_by {participant_id?: (order_by | null),ticket_id?: (order_by | null)}


/** aggregate min on columns */
export interface ticket_participants_min_fieldsRequest{
    participant_id?: boolean | number
    ticket_id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "ticket_participants" */
export interface ticket_participants_min_order_by {participant_id?: (order_by | null),ticket_id?: (order_by | null)}


/** response of any mutation on the table "ticket_participants" */
export interface ticket_participants_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ticket_participantsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "ticket_participants" */
export interface ticket_participants_obj_rel_insert_input {data: ticket_participants_insert_input,
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}


/** on conflict condition type for table "ticket_participants" */
export interface ticket_participants_on_conflict {constraint: ticket_participants_constraint,update_columns: ticket_participants_update_column[],where?: (ticket_participants_bool_exp | null)}


/** Ordering options when selecting data from "ticket_participants". */
export interface ticket_participants_order_by {messages_aggregate?: (ticket_messages_aggregate_order_by | null),owner?: (order_by | null),participant_id?: (order_by | null),ticket?: (tickets_order_by | null),ticket_id?: (order_by | null)}


/** primary key columns input for table: ticket_participants */
export interface ticket_participants_pk_columns_input {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}


/** input type for updating data in table "ticket_participants" */
export interface ticket_participants_set_input {owner?: (Scalars['Boolean'] | null),participant_id?: (Scalars['uuid'] | null),ticket_id?: (Scalars['uuid'] | null)}


/** columns and relationships of "ticket_states" */
export interface ticket_statesRequest{
    comment?: boolean | number
    name?: boolean | number
    /** An array relationship */
    tickets?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},ticketsRequest] | ticketsRequest
    /** An aggregate relationship */
    tickets_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (tickets_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (tickets_order_by[] | null),
    /** filter the rows returned */
    where?: (tickets_bool_exp | null)},tickets_aggregateRequest] | tickets_aggregateRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "ticket_states" */
export interface ticket_states_aggregateRequest{
    aggregate?: ticket_states_aggregate_fieldsRequest
    nodes?: ticket_statesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "ticket_states" */
export interface ticket_states_aggregate_fieldsRequest{
    count?: [{columns?: (ticket_states_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: ticket_states_max_fieldsRequest
    min?: ticket_states_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "ticket_states". All fields are combined with a logical 'AND'. */
export interface ticket_states_bool_exp {_and?: (ticket_states_bool_exp[] | null),_not?: (ticket_states_bool_exp | null),_or?: (ticket_states_bool_exp[] | null),comment?: (String_comparison_exp | null),name?: (String_comparison_exp | null),tickets?: (tickets_bool_exp | null)}


/** Boolean expression to compare columns of type "ticket_states_enum". All fields are combined with logical 'AND'. */
export interface ticket_states_enum_comparison_exp {_eq?: (ticket_states_enum | null),_in?: (ticket_states_enum[] | null),_is_null?: (Scalars['Boolean'] | null),_neq?: (ticket_states_enum | null),_nin?: (ticket_states_enum[] | null)}


/** input type for inserting data into table "ticket_states" */
export interface ticket_states_insert_input {comment?: (Scalars['String'] | null),name?: (Scalars['String'] | null),tickets?: (tickets_arr_rel_insert_input | null)}


/** aggregate max on columns */
export interface ticket_states_max_fieldsRequest{
    comment?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface ticket_states_min_fieldsRequest{
    comment?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "ticket_states" */
export interface ticket_states_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ticket_statesRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "ticket_states" */
export interface ticket_states_obj_rel_insert_input {data: ticket_states_insert_input,
/** on conflict condition */
on_conflict?: (ticket_states_on_conflict | null)}


/** on conflict condition type for table "ticket_states" */
export interface ticket_states_on_conflict {constraint: ticket_states_constraint,update_columns: ticket_states_update_column[],where?: (ticket_states_bool_exp | null)}


/** Ordering options when selecting data from "ticket_states". */
export interface ticket_states_order_by {comment?: (order_by | null),name?: (order_by | null),tickets_aggregate?: (tickets_aggregate_order_by | null)}


/** primary key columns input for table: ticket_states */
export interface ticket_states_pk_columns_input {name: Scalars['String']}


/** input type for updating data in table "ticket_states" */
export interface ticket_states_set_input {comment?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}


/** columns and relationships of "tickets" */
export interface ticketsRequest{
    /** An array relationship */
    attachments?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachmentsRequest] | attachmentsRequest
    /** An aggregate relationship */
    attachments_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (attachments_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (attachments_order_by[] | null),
    /** filter the rows returned */
    where?: (attachments_bool_exp | null)},attachments_aggregateRequest] | attachments_aggregateRequest
    created_at?: boolean | number
    customer_id?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    state?: boolean | number
    /** An array relationship */
    ticket_messages?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messagesRequest] | ticket_messagesRequest
    /** An aggregate relationship */
    ticket_messages_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_messages_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_messages_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_messages_bool_exp | null)},ticket_messages_aggregateRequest] | ticket_messages_aggregateRequest
    /** An array relationship */
    ticket_participants?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participantsRequest] | ticket_participantsRequest
    /** An aggregate relationship */
    ticket_participants_aggregate?: [{
    /** distinct select on columns */
    distinct_on?: (ticket_participants_select_column[] | null),
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null),
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null),
    /** sort the rows by one or more columns */
    order_by?: (ticket_participants_order_by[] | null),
    /** filter the rows returned */
    where?: (ticket_participants_bool_exp | null)},ticket_participants_aggregateRequest] | ticket_participants_aggregateRequest
    /** An object relationship */
    ticket_state?: ticket_statesRequest
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "tickets" */
export interface tickets_aggregateRequest{
    aggregate?: tickets_aggregate_fieldsRequest
    nodes?: ticketsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "tickets" */
export interface tickets_aggregate_fieldsRequest{
    count?: [{columns?: (tickets_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: tickets_max_fieldsRequest
    min?: tickets_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by aggregate values of table "tickets" */
export interface tickets_aggregate_order_by {count?: (order_by | null),max?: (tickets_max_order_by | null),min?: (tickets_min_order_by | null)}


/** input type for inserting array relation for remote table "tickets" */
export interface tickets_arr_rel_insert_input {data: tickets_insert_input[],
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}


/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export interface tickets_bool_exp {_and?: (tickets_bool_exp[] | null),_not?: (tickets_bool_exp | null),_or?: (tickets_bool_exp[] | null),attachments?: (attachments_bool_exp | null),created_at?: (timestamptz_comparison_exp | null),customer_id?: (uuid_comparison_exp | null),deleted_at?: (timestamptz_comparison_exp | null),id?: (uuid_comparison_exp | null),state?: (ticket_states_enum_comparison_exp | null),ticket_messages?: (ticket_messages_bool_exp | null),ticket_participants?: (ticket_participants_bool_exp | null),ticket_state?: (ticket_states_bool_exp | null),title?: (String_comparison_exp | null),updated_at?: (timestamptz_comparison_exp | null)}


/** input type for inserting data into table "tickets" */
export interface tickets_insert_input {attachments?: (attachments_arr_rel_insert_input | null),created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),state?: (ticket_states_enum | null),ticket_messages?: (ticket_messages_arr_rel_insert_input | null),ticket_participants?: (ticket_participants_arr_rel_insert_input | null),ticket_state?: (ticket_states_obj_rel_insert_input | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** aggregate max on columns */
export interface tickets_max_fieldsRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by max() on columns of table "tickets" */
export interface tickets_max_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** aggregate min on columns */
export interface tickets_min_fieldsRequest{
    created_at?: boolean | number
    customer_id?: boolean | number
    deleted_at?: boolean | number
    id?: boolean | number
    title?: boolean | number
    updated_at?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** order by min() on columns of table "tickets" */
export interface tickets_min_order_by {created_at?: (order_by | null),customer_id?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** response of any mutation on the table "tickets" */
export interface tickets_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: ticketsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** input type for inserting object relation for remote table "tickets" */
export interface tickets_obj_rel_insert_input {data: tickets_insert_input,
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}


/** on conflict condition type for table "tickets" */
export interface tickets_on_conflict {constraint: tickets_constraint,update_columns: tickets_update_column[],where?: (tickets_bool_exp | null)}


/** Ordering options when selecting data from "tickets". */
export interface tickets_order_by {attachments_aggregate?: (attachments_aggregate_order_by | null),created_at?: (order_by | null),customer_id?: (order_by | null),deleted_at?: (order_by | null),id?: (order_by | null),state?: (order_by | null),ticket_messages_aggregate?: (ticket_messages_aggregate_order_by | null),ticket_participants_aggregate?: (ticket_participants_aggregate_order_by | null),ticket_state?: (ticket_states_order_by | null),title?: (order_by | null),updated_at?: (order_by | null)}


/** primary key columns input for table: tickets */
export interface tickets_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "tickets" */
export interface tickets_set_input {created_at?: (Scalars['timestamptz'] | null),customer_id?: (Scalars['uuid'] | null),deleted_at?: (Scalars['timestamptz'] | null),id?: (Scalars['uuid'] | null),state?: (ticket_states_enum | null),title?: (Scalars['String'] | null),updated_at?: (Scalars['timestamptz'] | null)}


/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export interface time_comparison_exp {_eq?: (Scalars['time'] | null),_gt?: (Scalars['time'] | null),_gte?: (Scalars['time'] | null),_in?: (Scalars['time'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['time'] | null),_lte?: (Scalars['time'] | null),_neq?: (Scalars['time'] | null),_nin?: (Scalars['time'][] | null)}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export interface timestamptz_comparison_exp {_eq?: (Scalars['timestamptz'] | null),_gt?: (Scalars['timestamptz'] | null),_gte?: (Scalars['timestamptz'] | null),_in?: (Scalars['timestamptz'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['timestamptz'] | null),_lte?: (Scalars['timestamptz'] | null),_neq?: (Scalars['timestamptz'] | null),_nin?: (Scalars['timestamptz'][] | null)}


/** columns and relationships of "users" */
export interface usersRequest{
    display_name?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "users" */
export interface users_aggregateRequest{
    aggregate?: users_aggregate_fieldsRequest
    nodes?: usersRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "users" */
export interface users_aggregate_fieldsRequest{
    count?: [{columns?: (users_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}] | boolean | number
    max?: users_max_fieldsRequest
    min?: users_min_fieldsRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export interface users_bool_exp {_and?: (users_bool_exp[] | null),_not?: (users_bool_exp | null),_or?: (users_bool_exp[] | null),display_name?: (String_comparison_exp | null),id?: (uuid_comparison_exp | null)}


/** input type for inserting data into table "users" */
export interface users_insert_input {display_name?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** aggregate max on columns */
export interface users_max_fieldsRequest{
    display_name?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface users_min_fieldsRequest{
    display_name?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "users" */
export interface users_mutation_responseRequest{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: usersRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on conflict condition type for table "users" */
export interface users_on_conflict {constraint: users_constraint,update_columns: users_update_column[],where?: (users_bool_exp | null)}


/** Ordering options when selecting data from "users". */
export interface users_order_by {display_name?: (order_by | null),id?: (order_by | null)}


/** primary key columns input for table: users */
export interface users_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "users" */
export interface users_set_input {display_name?: (Scalars['String'] | null),id?: (Scalars['uuid'] | null)}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryRequest = query_rootRequest
export type MutationRequest = mutation_rootRequest
export type SubscriptionRequest = subscription_rootRequest


const attachment_extensions_possibleTypes = ['attachment_extensions']
export const isattachment_extensions = (obj?: { __typename?: any } | null): obj is attachment_extensions => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions"')
  return attachment_extensions_possibleTypes.includes(obj.__typename)
}



const attachment_extensions_aggregate_possibleTypes = ['attachment_extensions_aggregate']
export const isattachment_extensions_aggregate = (obj?: { __typename?: any } | null): obj is attachment_extensions_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions_aggregate"')
  return attachment_extensions_aggregate_possibleTypes.includes(obj.__typename)
}



const attachment_extensions_aggregate_fields_possibleTypes = ['attachment_extensions_aggregate_fields']
export const isattachment_extensions_aggregate_fields = (obj?: { __typename?: any } | null): obj is attachment_extensions_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions_aggregate_fields"')
  return attachment_extensions_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const attachment_extensions_max_fields_possibleTypes = ['attachment_extensions_max_fields']
export const isattachment_extensions_max_fields = (obj?: { __typename?: any } | null): obj is attachment_extensions_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions_max_fields"')
  return attachment_extensions_max_fields_possibleTypes.includes(obj.__typename)
}



const attachment_extensions_min_fields_possibleTypes = ['attachment_extensions_min_fields']
export const isattachment_extensions_min_fields = (obj?: { __typename?: any } | null): obj is attachment_extensions_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions_min_fields"')
  return attachment_extensions_min_fields_possibleTypes.includes(obj.__typename)
}



const attachment_extensions_mutation_response_possibleTypes = ['attachment_extensions_mutation_response']
export const isattachment_extensions_mutation_response = (obj?: { __typename?: any } | null): obj is attachment_extensions_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachment_extensions_mutation_response"')
  return attachment_extensions_mutation_response_possibleTypes.includes(obj.__typename)
}



const attachments_possibleTypes = ['attachments']
export const isattachments = (obj?: { __typename?: any } | null): obj is attachments => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments"')
  return attachments_possibleTypes.includes(obj.__typename)
}



const attachments_aggregate_possibleTypes = ['attachments_aggregate']
export const isattachments_aggregate = (obj?: { __typename?: any } | null): obj is attachments_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments_aggregate"')
  return attachments_aggregate_possibleTypes.includes(obj.__typename)
}



const attachments_aggregate_fields_possibleTypes = ['attachments_aggregate_fields']
export const isattachments_aggregate_fields = (obj?: { __typename?: any } | null): obj is attachments_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments_aggregate_fields"')
  return attachments_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const attachments_max_fields_possibleTypes = ['attachments_max_fields']
export const isattachments_max_fields = (obj?: { __typename?: any } | null): obj is attachments_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments_max_fields"')
  return attachments_max_fields_possibleTypes.includes(obj.__typename)
}



const attachments_min_fields_possibleTypes = ['attachments_min_fields']
export const isattachments_min_fields = (obj?: { __typename?: any } | null): obj is attachments_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments_min_fields"')
  return attachments_min_fields_possibleTypes.includes(obj.__typename)
}



const attachments_mutation_response_possibleTypes = ['attachments_mutation_response']
export const isattachments_mutation_response = (obj?: { __typename?: any } | null): obj is attachments_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isattachments_mutation_response"')
  return attachments_mutation_response_possibleTypes.includes(obj.__typename)
}



const is_participant_online_possibleTypes = ['is_participant_online']
export const isis_participant_online = (obj?: { __typename?: any } | null): obj is is_participant_online => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online"')
  return is_participant_online_possibleTypes.includes(obj.__typename)
}



const is_participant_online_aggregate_possibleTypes = ['is_participant_online_aggregate']
export const isis_participant_online_aggregate = (obj?: { __typename?: any } | null): obj is is_participant_online_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online_aggregate"')
  return is_participant_online_aggregate_possibleTypes.includes(obj.__typename)
}



const is_participant_online_aggregate_fields_possibleTypes = ['is_participant_online_aggregate_fields']
export const isis_participant_online_aggregate_fields = (obj?: { __typename?: any } | null): obj is is_participant_online_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online_aggregate_fields"')
  return is_participant_online_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const is_participant_online_max_fields_possibleTypes = ['is_participant_online_max_fields']
export const isis_participant_online_max_fields = (obj?: { __typename?: any } | null): obj is is_participant_online_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online_max_fields"')
  return is_participant_online_max_fields_possibleTypes.includes(obj.__typename)
}



const is_participant_online_min_fields_possibleTypes = ['is_participant_online_min_fields']
export const isis_participant_online_min_fields = (obj?: { __typename?: any } | null): obj is is_participant_online_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online_min_fields"')
  return is_participant_online_min_fields_possibleTypes.includes(obj.__typename)
}



const is_participant_online_mutation_response_possibleTypes = ['is_participant_online_mutation_response']
export const isis_participant_online_mutation_response = (obj?: { __typename?: any } | null): obj is is_participant_online_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isis_participant_online_mutation_response"')
  return is_participant_online_mutation_response_possibleTypes.includes(obj.__typename)
}



const messages_possibleTypes = ['messages']
export const ismessages = (obj?: { __typename?: any } | null): obj is messages => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages"')
  return messages_possibleTypes.includes(obj.__typename)
}



const messages_aggregate_possibleTypes = ['messages_aggregate']
export const ismessages_aggregate = (obj?: { __typename?: any } | null): obj is messages_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_aggregate"')
  return messages_aggregate_possibleTypes.includes(obj.__typename)
}



const messages_aggregate_fields_possibleTypes = ['messages_aggregate_fields']
export const ismessages_aggregate_fields = (obj?: { __typename?: any } | null): obj is messages_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_aggregate_fields"')
  return messages_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const messages_avg_fields_possibleTypes = ['messages_avg_fields']
export const ismessages_avg_fields = (obj?: { __typename?: any } | null): obj is messages_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_avg_fields"')
  return messages_avg_fields_possibleTypes.includes(obj.__typename)
}



const messages_max_fields_possibleTypes = ['messages_max_fields']
export const ismessages_max_fields = (obj?: { __typename?: any } | null): obj is messages_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_max_fields"')
  return messages_max_fields_possibleTypes.includes(obj.__typename)
}



const messages_min_fields_possibleTypes = ['messages_min_fields']
export const ismessages_min_fields = (obj?: { __typename?: any } | null): obj is messages_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_min_fields"')
  return messages_min_fields_possibleTypes.includes(obj.__typename)
}



const messages_mutation_response_possibleTypes = ['messages_mutation_response']
export const ismessages_mutation_response = (obj?: { __typename?: any } | null): obj is messages_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_mutation_response"')
  return messages_mutation_response_possibleTypes.includes(obj.__typename)
}



const messages_stddev_fields_possibleTypes = ['messages_stddev_fields']
export const ismessages_stddev_fields = (obj?: { __typename?: any } | null): obj is messages_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_stddev_fields"')
  return messages_stddev_fields_possibleTypes.includes(obj.__typename)
}



const messages_stddev_pop_fields_possibleTypes = ['messages_stddev_pop_fields']
export const ismessages_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is messages_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_stddev_pop_fields"')
  return messages_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const messages_stddev_samp_fields_possibleTypes = ['messages_stddev_samp_fields']
export const ismessages_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is messages_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_stddev_samp_fields"')
  return messages_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const messages_sum_fields_possibleTypes = ['messages_sum_fields']
export const ismessages_sum_fields = (obj?: { __typename?: any } | null): obj is messages_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_sum_fields"')
  return messages_sum_fields_possibleTypes.includes(obj.__typename)
}



const messages_var_pop_fields_possibleTypes = ['messages_var_pop_fields']
export const ismessages_var_pop_fields = (obj?: { __typename?: any } | null): obj is messages_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_var_pop_fields"')
  return messages_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const messages_var_samp_fields_possibleTypes = ['messages_var_samp_fields']
export const ismessages_var_samp_fields = (obj?: { __typename?: any } | null): obj is messages_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_var_samp_fields"')
  return messages_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const messages_variance_fields_possibleTypes = ['messages_variance_fields']
export const ismessages_variance_fields = (obj?: { __typename?: any } | null): obj is messages_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismessages_variance_fields"')
  return messages_variance_fields_possibleTypes.includes(obj.__typename)
}



const mutation_root_possibleTypes = ['mutation_root']
export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
  return mutation_root_possibleTypes.includes(obj.__typename)
}



const participant_room_possibleTypes = ['participant_room']
export const isparticipant_room = (obj?: { __typename?: any } | null): obj is participant_room => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room"')
  return participant_room_possibleTypes.includes(obj.__typename)
}



const participant_room_aggregate_possibleTypes = ['participant_room_aggregate']
export const isparticipant_room_aggregate = (obj?: { __typename?: any } | null): obj is participant_room_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_aggregate"')
  return participant_room_aggregate_possibleTypes.includes(obj.__typename)
}



const participant_room_aggregate_fields_possibleTypes = ['participant_room_aggregate_fields']
export const isparticipant_room_aggregate_fields = (obj?: { __typename?: any } | null): obj is participant_room_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_aggregate_fields"')
  return participant_room_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_avg_fields_possibleTypes = ['participant_room_avg_fields']
export const isparticipant_room_avg_fields = (obj?: { __typename?: any } | null): obj is participant_room_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_avg_fields"')
  return participant_room_avg_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_max_fields_possibleTypes = ['participant_room_max_fields']
export const isparticipant_room_max_fields = (obj?: { __typename?: any } | null): obj is participant_room_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_max_fields"')
  return participant_room_max_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_min_fields_possibleTypes = ['participant_room_min_fields']
export const isparticipant_room_min_fields = (obj?: { __typename?: any } | null): obj is participant_room_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_min_fields"')
  return participant_room_min_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_mutation_response_possibleTypes = ['participant_room_mutation_response']
export const isparticipant_room_mutation_response = (obj?: { __typename?: any } | null): obj is participant_room_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_mutation_response"')
  return participant_room_mutation_response_possibleTypes.includes(obj.__typename)
}



const participant_room_stddev_fields_possibleTypes = ['participant_room_stddev_fields']
export const isparticipant_room_stddev_fields = (obj?: { __typename?: any } | null): obj is participant_room_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_stddev_fields"')
  return participant_room_stddev_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_stddev_pop_fields_possibleTypes = ['participant_room_stddev_pop_fields']
export const isparticipant_room_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is participant_room_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_stddev_pop_fields"')
  return participant_room_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_stddev_samp_fields_possibleTypes = ['participant_room_stddev_samp_fields']
export const isparticipant_room_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is participant_room_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_stddev_samp_fields"')
  return participant_room_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_sum_fields_possibleTypes = ['participant_room_sum_fields']
export const isparticipant_room_sum_fields = (obj?: { __typename?: any } | null): obj is participant_room_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_sum_fields"')
  return participant_room_sum_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_var_pop_fields_possibleTypes = ['participant_room_var_pop_fields']
export const isparticipant_room_var_pop_fields = (obj?: { __typename?: any } | null): obj is participant_room_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_var_pop_fields"')
  return participant_room_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_var_samp_fields_possibleTypes = ['participant_room_var_samp_fields']
export const isparticipant_room_var_samp_fields = (obj?: { __typename?: any } | null): obj is participant_room_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_var_samp_fields"')
  return participant_room_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const participant_room_variance_fields_possibleTypes = ['participant_room_variance_fields']
export const isparticipant_room_variance_fields = (obj?: { __typename?: any } | null): obj is participant_room_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_room_variance_fields"')
  return participant_room_variance_fields_possibleTypes.includes(obj.__typename)
}



const participant_type_possibleTypes = ['participant_type']
export const isparticipant_type = (obj?: { __typename?: any } | null): obj is participant_type => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type"')
  return participant_type_possibleTypes.includes(obj.__typename)
}



const participant_type_aggregate_possibleTypes = ['participant_type_aggregate']
export const isparticipant_type_aggregate = (obj?: { __typename?: any } | null): obj is participant_type_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type_aggregate"')
  return participant_type_aggregate_possibleTypes.includes(obj.__typename)
}



const participant_type_aggregate_fields_possibleTypes = ['participant_type_aggregate_fields']
export const isparticipant_type_aggregate_fields = (obj?: { __typename?: any } | null): obj is participant_type_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type_aggregate_fields"')
  return participant_type_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const participant_type_max_fields_possibleTypes = ['participant_type_max_fields']
export const isparticipant_type_max_fields = (obj?: { __typename?: any } | null): obj is participant_type_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type_max_fields"')
  return participant_type_max_fields_possibleTypes.includes(obj.__typename)
}



const participant_type_min_fields_possibleTypes = ['participant_type_min_fields']
export const isparticipant_type_min_fields = (obj?: { __typename?: any } | null): obj is participant_type_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type_min_fields"')
  return participant_type_min_fields_possibleTypes.includes(obj.__typename)
}



const participant_type_mutation_response_possibleTypes = ['participant_type_mutation_response']
export const isparticipant_type_mutation_response = (obj?: { __typename?: any } | null): obj is participant_type_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipant_type_mutation_response"')
  return participant_type_mutation_response_possibleTypes.includes(obj.__typename)
}



const participants_possibleTypes = ['participants']
export const isparticipants = (obj?: { __typename?: any } | null): obj is participants => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants"')
  return participants_possibleTypes.includes(obj.__typename)
}



const participants_aggregate_possibleTypes = ['participants_aggregate']
export const isparticipants_aggregate = (obj?: { __typename?: any } | null): obj is participants_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_aggregate"')
  return participants_aggregate_possibleTypes.includes(obj.__typename)
}



const participants_aggregate_fields_possibleTypes = ['participants_aggregate_fields']
export const isparticipants_aggregate_fields = (obj?: { __typename?: any } | null): obj is participants_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_aggregate_fields"')
  return participants_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const participants_avg_fields_possibleTypes = ['participants_avg_fields']
export const isparticipants_avg_fields = (obj?: { __typename?: any } | null): obj is participants_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_avg_fields"')
  return participants_avg_fields_possibleTypes.includes(obj.__typename)
}



const participants_max_fields_possibleTypes = ['participants_max_fields']
export const isparticipants_max_fields = (obj?: { __typename?: any } | null): obj is participants_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_max_fields"')
  return participants_max_fields_possibleTypes.includes(obj.__typename)
}



const participants_min_fields_possibleTypes = ['participants_min_fields']
export const isparticipants_min_fields = (obj?: { __typename?: any } | null): obj is participants_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_min_fields"')
  return participants_min_fields_possibleTypes.includes(obj.__typename)
}



const participants_mutation_response_possibleTypes = ['participants_mutation_response']
export const isparticipants_mutation_response = (obj?: { __typename?: any } | null): obj is participants_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_mutation_response"')
  return participants_mutation_response_possibleTypes.includes(obj.__typename)
}



const participants_stddev_fields_possibleTypes = ['participants_stddev_fields']
export const isparticipants_stddev_fields = (obj?: { __typename?: any } | null): obj is participants_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_stddev_fields"')
  return participants_stddev_fields_possibleTypes.includes(obj.__typename)
}



const participants_stddev_pop_fields_possibleTypes = ['participants_stddev_pop_fields']
export const isparticipants_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is participants_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_stddev_pop_fields"')
  return participants_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const participants_stddev_samp_fields_possibleTypes = ['participants_stddev_samp_fields']
export const isparticipants_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is participants_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_stddev_samp_fields"')
  return participants_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const participants_sum_fields_possibleTypes = ['participants_sum_fields']
export const isparticipants_sum_fields = (obj?: { __typename?: any } | null): obj is participants_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_sum_fields"')
  return participants_sum_fields_possibleTypes.includes(obj.__typename)
}



const participants_var_pop_fields_possibleTypes = ['participants_var_pop_fields']
export const isparticipants_var_pop_fields = (obj?: { __typename?: any } | null): obj is participants_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_var_pop_fields"')
  return participants_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const participants_var_samp_fields_possibleTypes = ['participants_var_samp_fields']
export const isparticipants_var_samp_fields = (obj?: { __typename?: any } | null): obj is participants_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_var_samp_fields"')
  return participants_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const participants_variance_fields_possibleTypes = ['participants_variance_fields']
export const isparticipants_variance_fields = (obj?: { __typename?: any } | null): obj is participants_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isparticipants_variance_fields"')
  return participants_variance_fields_possibleTypes.includes(obj.__typename)
}



const query_root_possibleTypes = ['query_root']
export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
  return query_root_possibleTypes.includes(obj.__typename)
}



const room_status_possibleTypes = ['room_status']
export const isroom_status = (obj?: { __typename?: any } | null): obj is room_status => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status"')
  return room_status_possibleTypes.includes(obj.__typename)
}



const room_status_aggregate_possibleTypes = ['room_status_aggregate']
export const isroom_status_aggregate = (obj?: { __typename?: any } | null): obj is room_status_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status_aggregate"')
  return room_status_aggregate_possibleTypes.includes(obj.__typename)
}



const room_status_aggregate_fields_possibleTypes = ['room_status_aggregate_fields']
export const isroom_status_aggregate_fields = (obj?: { __typename?: any } | null): obj is room_status_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status_aggregate_fields"')
  return room_status_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const room_status_max_fields_possibleTypes = ['room_status_max_fields']
export const isroom_status_max_fields = (obj?: { __typename?: any } | null): obj is room_status_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status_max_fields"')
  return room_status_max_fields_possibleTypes.includes(obj.__typename)
}



const room_status_min_fields_possibleTypes = ['room_status_min_fields']
export const isroom_status_min_fields = (obj?: { __typename?: any } | null): obj is room_status_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status_min_fields"')
  return room_status_min_fields_possibleTypes.includes(obj.__typename)
}



const room_status_mutation_response_possibleTypes = ['room_status_mutation_response']
export const isroom_status_mutation_response = (obj?: { __typename?: any } | null): obj is room_status_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_status_mutation_response"')
  return room_status_mutation_response_possibleTypes.includes(obj.__typename)
}



const room_type_possibleTypes = ['room_type']
export const isroom_type = (obj?: { __typename?: any } | null): obj is room_type => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type"')
  return room_type_possibleTypes.includes(obj.__typename)
}



const room_type_aggregate_possibleTypes = ['room_type_aggregate']
export const isroom_type_aggregate = (obj?: { __typename?: any } | null): obj is room_type_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type_aggregate"')
  return room_type_aggregate_possibleTypes.includes(obj.__typename)
}



const room_type_aggregate_fields_possibleTypes = ['room_type_aggregate_fields']
export const isroom_type_aggregate_fields = (obj?: { __typename?: any } | null): obj is room_type_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type_aggregate_fields"')
  return room_type_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const room_type_max_fields_possibleTypes = ['room_type_max_fields']
export const isroom_type_max_fields = (obj?: { __typename?: any } | null): obj is room_type_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type_max_fields"')
  return room_type_max_fields_possibleTypes.includes(obj.__typename)
}



const room_type_min_fields_possibleTypes = ['room_type_min_fields']
export const isroom_type_min_fields = (obj?: { __typename?: any } | null): obj is room_type_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type_min_fields"')
  return room_type_min_fields_possibleTypes.includes(obj.__typename)
}



const room_type_mutation_response_possibleTypes = ['room_type_mutation_response']
export const isroom_type_mutation_response = (obj?: { __typename?: any } | null): obj is room_type_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_type_mutation_response"')
  return room_type_mutation_response_possibleTypes.includes(obj.__typename)
}



const room_visibility_possibleTypes = ['room_visibility']
export const isroom_visibility = (obj?: { __typename?: any } | null): obj is room_visibility => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility"')
  return room_visibility_possibleTypes.includes(obj.__typename)
}



const room_visibility_aggregate_possibleTypes = ['room_visibility_aggregate']
export const isroom_visibility_aggregate = (obj?: { __typename?: any } | null): obj is room_visibility_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility_aggregate"')
  return room_visibility_aggregate_possibleTypes.includes(obj.__typename)
}



const room_visibility_aggregate_fields_possibleTypes = ['room_visibility_aggregate_fields']
export const isroom_visibility_aggregate_fields = (obj?: { __typename?: any } | null): obj is room_visibility_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility_aggregate_fields"')
  return room_visibility_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const room_visibility_max_fields_possibleTypes = ['room_visibility_max_fields']
export const isroom_visibility_max_fields = (obj?: { __typename?: any } | null): obj is room_visibility_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility_max_fields"')
  return room_visibility_max_fields_possibleTypes.includes(obj.__typename)
}



const room_visibility_min_fields_possibleTypes = ['room_visibility_min_fields']
export const isroom_visibility_min_fields = (obj?: { __typename?: any } | null): obj is room_visibility_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility_min_fields"')
  return room_visibility_min_fields_possibleTypes.includes(obj.__typename)
}



const room_visibility_mutation_response_possibleTypes = ['room_visibility_mutation_response']
export const isroom_visibility_mutation_response = (obj?: { __typename?: any } | null): obj is room_visibility_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isroom_visibility_mutation_response"')
  return room_visibility_mutation_response_possibleTypes.includes(obj.__typename)
}



const rooms_possibleTypes = ['rooms']
export const isrooms = (obj?: { __typename?: any } | null): obj is rooms => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms"')
  return rooms_possibleTypes.includes(obj.__typename)
}



const rooms_aggregate_possibleTypes = ['rooms_aggregate']
export const isrooms_aggregate = (obj?: { __typename?: any } | null): obj is rooms_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_aggregate"')
  return rooms_aggregate_possibleTypes.includes(obj.__typename)
}



const rooms_aggregate_fields_possibleTypes = ['rooms_aggregate_fields']
export const isrooms_aggregate_fields = (obj?: { __typename?: any } | null): obj is rooms_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_aggregate_fields"')
  return rooms_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const rooms_avg_fields_possibleTypes = ['rooms_avg_fields']
export const isrooms_avg_fields = (obj?: { __typename?: any } | null): obj is rooms_avg_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_avg_fields"')
  return rooms_avg_fields_possibleTypes.includes(obj.__typename)
}



const rooms_max_fields_possibleTypes = ['rooms_max_fields']
export const isrooms_max_fields = (obj?: { __typename?: any } | null): obj is rooms_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_max_fields"')
  return rooms_max_fields_possibleTypes.includes(obj.__typename)
}



const rooms_min_fields_possibleTypes = ['rooms_min_fields']
export const isrooms_min_fields = (obj?: { __typename?: any } | null): obj is rooms_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_min_fields"')
  return rooms_min_fields_possibleTypes.includes(obj.__typename)
}



const rooms_mutation_response_possibleTypes = ['rooms_mutation_response']
export const isrooms_mutation_response = (obj?: { __typename?: any } | null): obj is rooms_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_mutation_response"')
  return rooms_mutation_response_possibleTypes.includes(obj.__typename)
}



const rooms_stddev_fields_possibleTypes = ['rooms_stddev_fields']
export const isrooms_stddev_fields = (obj?: { __typename?: any } | null): obj is rooms_stddev_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_stddev_fields"')
  return rooms_stddev_fields_possibleTypes.includes(obj.__typename)
}



const rooms_stddev_pop_fields_possibleTypes = ['rooms_stddev_pop_fields']
export const isrooms_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is rooms_stddev_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_stddev_pop_fields"')
  return rooms_stddev_pop_fields_possibleTypes.includes(obj.__typename)
}



const rooms_stddev_samp_fields_possibleTypes = ['rooms_stddev_samp_fields']
export const isrooms_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is rooms_stddev_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_stddev_samp_fields"')
  return rooms_stddev_samp_fields_possibleTypes.includes(obj.__typename)
}



const rooms_sum_fields_possibleTypes = ['rooms_sum_fields']
export const isrooms_sum_fields = (obj?: { __typename?: any } | null): obj is rooms_sum_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_sum_fields"')
  return rooms_sum_fields_possibleTypes.includes(obj.__typename)
}



const rooms_var_pop_fields_possibleTypes = ['rooms_var_pop_fields']
export const isrooms_var_pop_fields = (obj?: { __typename?: any } | null): obj is rooms_var_pop_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_var_pop_fields"')
  return rooms_var_pop_fields_possibleTypes.includes(obj.__typename)
}



const rooms_var_samp_fields_possibleTypes = ['rooms_var_samp_fields']
export const isrooms_var_samp_fields = (obj?: { __typename?: any } | null): obj is rooms_var_samp_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_var_samp_fields"')
  return rooms_var_samp_fields_possibleTypes.includes(obj.__typename)
}



const rooms_variance_fields_possibleTypes = ['rooms_variance_fields']
export const isrooms_variance_fields = (obj?: { __typename?: any } | null): obj is rooms_variance_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isrooms_variance_fields"')
  return rooms_variance_fields_possibleTypes.includes(obj.__typename)
}



const subscription_root_possibleTypes = ['subscription_root']
export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
  if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
  return subscription_root_possibleTypes.includes(obj.__typename)
}



const ticket_messages_possibleTypes = ['ticket_messages']
export const isticket_messages = (obj?: { __typename?: any } | null): obj is ticket_messages => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages"')
  return ticket_messages_possibleTypes.includes(obj.__typename)
}



const ticket_messages_aggregate_possibleTypes = ['ticket_messages_aggregate']
export const isticket_messages_aggregate = (obj?: { __typename?: any } | null): obj is ticket_messages_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages_aggregate"')
  return ticket_messages_aggregate_possibleTypes.includes(obj.__typename)
}



const ticket_messages_aggregate_fields_possibleTypes = ['ticket_messages_aggregate_fields']
export const isticket_messages_aggregate_fields = (obj?: { __typename?: any } | null): obj is ticket_messages_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages_aggregate_fields"')
  return ticket_messages_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const ticket_messages_max_fields_possibleTypes = ['ticket_messages_max_fields']
export const isticket_messages_max_fields = (obj?: { __typename?: any } | null): obj is ticket_messages_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages_max_fields"')
  return ticket_messages_max_fields_possibleTypes.includes(obj.__typename)
}



const ticket_messages_min_fields_possibleTypes = ['ticket_messages_min_fields']
export const isticket_messages_min_fields = (obj?: { __typename?: any } | null): obj is ticket_messages_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages_min_fields"')
  return ticket_messages_min_fields_possibleTypes.includes(obj.__typename)
}



const ticket_messages_mutation_response_possibleTypes = ['ticket_messages_mutation_response']
export const isticket_messages_mutation_response = (obj?: { __typename?: any } | null): obj is ticket_messages_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_messages_mutation_response"')
  return ticket_messages_mutation_response_possibleTypes.includes(obj.__typename)
}



const ticket_participants_possibleTypes = ['ticket_participants']
export const isticket_participants = (obj?: { __typename?: any } | null): obj is ticket_participants => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants"')
  return ticket_participants_possibleTypes.includes(obj.__typename)
}



const ticket_participants_aggregate_possibleTypes = ['ticket_participants_aggregate']
export const isticket_participants_aggregate = (obj?: { __typename?: any } | null): obj is ticket_participants_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants_aggregate"')
  return ticket_participants_aggregate_possibleTypes.includes(obj.__typename)
}



const ticket_participants_aggregate_fields_possibleTypes = ['ticket_participants_aggregate_fields']
export const isticket_participants_aggregate_fields = (obj?: { __typename?: any } | null): obj is ticket_participants_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants_aggregate_fields"')
  return ticket_participants_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const ticket_participants_max_fields_possibleTypes = ['ticket_participants_max_fields']
export const isticket_participants_max_fields = (obj?: { __typename?: any } | null): obj is ticket_participants_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants_max_fields"')
  return ticket_participants_max_fields_possibleTypes.includes(obj.__typename)
}



const ticket_participants_min_fields_possibleTypes = ['ticket_participants_min_fields']
export const isticket_participants_min_fields = (obj?: { __typename?: any } | null): obj is ticket_participants_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants_min_fields"')
  return ticket_participants_min_fields_possibleTypes.includes(obj.__typename)
}



const ticket_participants_mutation_response_possibleTypes = ['ticket_participants_mutation_response']
export const isticket_participants_mutation_response = (obj?: { __typename?: any } | null): obj is ticket_participants_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_participants_mutation_response"')
  return ticket_participants_mutation_response_possibleTypes.includes(obj.__typename)
}



const ticket_states_possibleTypes = ['ticket_states']
export const isticket_states = (obj?: { __typename?: any } | null): obj is ticket_states => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states"')
  return ticket_states_possibleTypes.includes(obj.__typename)
}



const ticket_states_aggregate_possibleTypes = ['ticket_states_aggregate']
export const isticket_states_aggregate = (obj?: { __typename?: any } | null): obj is ticket_states_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states_aggregate"')
  return ticket_states_aggregate_possibleTypes.includes(obj.__typename)
}



const ticket_states_aggregate_fields_possibleTypes = ['ticket_states_aggregate_fields']
export const isticket_states_aggregate_fields = (obj?: { __typename?: any } | null): obj is ticket_states_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states_aggregate_fields"')
  return ticket_states_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const ticket_states_max_fields_possibleTypes = ['ticket_states_max_fields']
export const isticket_states_max_fields = (obj?: { __typename?: any } | null): obj is ticket_states_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states_max_fields"')
  return ticket_states_max_fields_possibleTypes.includes(obj.__typename)
}



const ticket_states_min_fields_possibleTypes = ['ticket_states_min_fields']
export const isticket_states_min_fields = (obj?: { __typename?: any } | null): obj is ticket_states_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states_min_fields"')
  return ticket_states_min_fields_possibleTypes.includes(obj.__typename)
}



const ticket_states_mutation_response_possibleTypes = ['ticket_states_mutation_response']
export const isticket_states_mutation_response = (obj?: { __typename?: any } | null): obj is ticket_states_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isticket_states_mutation_response"')
  return ticket_states_mutation_response_possibleTypes.includes(obj.__typename)
}



const tickets_possibleTypes = ['tickets']
export const istickets = (obj?: { __typename?: any } | null): obj is tickets => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets"')
  return tickets_possibleTypes.includes(obj.__typename)
}



const tickets_aggregate_possibleTypes = ['tickets_aggregate']
export const istickets_aggregate = (obj?: { __typename?: any } | null): obj is tickets_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets_aggregate"')
  return tickets_aggregate_possibleTypes.includes(obj.__typename)
}



const tickets_aggregate_fields_possibleTypes = ['tickets_aggregate_fields']
export const istickets_aggregate_fields = (obj?: { __typename?: any } | null): obj is tickets_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets_aggregate_fields"')
  return tickets_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const tickets_max_fields_possibleTypes = ['tickets_max_fields']
export const istickets_max_fields = (obj?: { __typename?: any } | null): obj is tickets_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets_max_fields"')
  return tickets_max_fields_possibleTypes.includes(obj.__typename)
}



const tickets_min_fields_possibleTypes = ['tickets_min_fields']
export const istickets_min_fields = (obj?: { __typename?: any } | null): obj is tickets_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets_min_fields"')
  return tickets_min_fields_possibleTypes.includes(obj.__typename)
}



const tickets_mutation_response_possibleTypes = ['tickets_mutation_response']
export const istickets_mutation_response = (obj?: { __typename?: any } | null): obj is tickets_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "istickets_mutation_response"')
  return tickets_mutation_response_possibleTypes.includes(obj.__typename)
}



const users_possibleTypes = ['users']
export const isusers = (obj?: { __typename?: any } | null): obj is users => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers"')
  return users_possibleTypes.includes(obj.__typename)
}



const users_aggregate_possibleTypes = ['users_aggregate']
export const isusers_aggregate = (obj?: { __typename?: any } | null): obj is users_aggregate => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate"')
  return users_aggregate_possibleTypes.includes(obj.__typename)
}



const users_aggregate_fields_possibleTypes = ['users_aggregate_fields']
export const isusers_aggregate_fields = (obj?: { __typename?: any } | null): obj is users_aggregate_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers_aggregate_fields"')
  return users_aggregate_fields_possibleTypes.includes(obj.__typename)
}



const users_max_fields_possibleTypes = ['users_max_fields']
export const isusers_max_fields = (obj?: { __typename?: any } | null): obj is users_max_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers_max_fields"')
  return users_max_fields_possibleTypes.includes(obj.__typename)
}



const users_min_fields_possibleTypes = ['users_min_fields']
export const isusers_min_fields = (obj?: { __typename?: any } | null): obj is users_min_fields => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers_min_fields"')
  return users_min_fields_possibleTypes.includes(obj.__typename)
}



const users_mutation_response_possibleTypes = ['users_mutation_response']
export const isusers_mutation_response = (obj?: { __typename?: any } | null): obj is users_mutation_response => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isusers_mutation_response"')
  return users_mutation_response_possibleTypes.includes(obj.__typename)
}



/** columns and relationships of "attachment_extensions" */
export interface attachment_extensionsPromiseChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>}),
    comment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "attachment_extensions" */
export interface attachment_extensionsObservableChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>}),
    comment: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "attachment_extensions" */
export interface attachment_extensions_aggregatePromiseChain{
    aggregate: (attachment_extensions_aggregate_fieldsPromiseChain & {get: <R extends attachment_extensions_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>})
}


/** aggregated selection of "attachment_extensions" */
export interface attachment_extensions_aggregateObservableChain{
    aggregate: (attachment_extensions_aggregate_fieldsObservableChain & {get: <R extends attachment_extensions_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>})
}


/** aggregate fields of "attachment_extensions" */
export interface attachment_extensions_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (attachment_extensions_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (attachment_extensions_max_fieldsPromiseChain & {get: <R extends attachment_extensions_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_max_fields, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_max_fields, R> | undefined)>}),
    min: (attachment_extensions_min_fieldsPromiseChain & {get: <R extends attachment_extensions_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_min_fields, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_min_fields, R> | undefined)>})
}


/** aggregate fields of "attachment_extensions" */
export interface attachment_extensions_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (attachment_extensions_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (attachment_extensions_max_fieldsObservableChain & {get: <R extends attachment_extensions_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_max_fields, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_max_fields, R> | undefined)>}),
    min: (attachment_extensions_min_fieldsObservableChain & {get: <R extends attachment_extensions_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_min_fields, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface attachment_extensions_max_fieldsPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface attachment_extensions_max_fieldsObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface attachment_extensions_min_fieldsPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface attachment_extensions_min_fieldsObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "attachment_extensions" */
export interface attachment_extensions_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>})
}


/** response of any mutation on the table "attachment_extensions" */
export interface attachment_extensions_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>})
}


/** columns and relationships of "attachments" */
export interface attachmentsPromiseChain{
    
/** An object relationship */
attachment_extension: (attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>) => Promise<FieldsSelection<attachment_extensions, R>>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['time'] | undefined)) => Promise<(Scalars['time'] | undefined)>}),
    extension: ({get: (request?: boolean|number, defaultValue?: attachment_extensions_enum) => Promise<attachment_extensions_enum>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
ticket: (ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Promise<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    
/** An object relationship */
ticket_message: (ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "attachments" */
export interface attachmentsObservableChain{
    
/** An object relationship */
attachment_extension: (attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>) => Observable<FieldsSelection<attachment_extensions, R>>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['time'] | undefined)) => Observable<(Scalars['time'] | undefined)>}),
    extension: ({get: (request?: boolean|number, defaultValue?: attachment_extensions_enum) => Observable<attachment_extensions_enum>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
ticket: (ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Observable<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    
/** An object relationship */
ticket_message: (ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "attachments" */
export interface attachments_aggregatePromiseChain{
    aggregate: (attachments_aggregate_fieldsPromiseChain & {get: <R extends attachments_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<attachments_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})
}


/** aggregated selection of "attachments" */
export interface attachments_aggregateObservableChain{
    aggregate: (attachments_aggregate_fieldsObservableChain & {get: <R extends attachments_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<attachments_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})
}


/** aggregate fields of "attachments" */
export interface attachments_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (attachments_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (attachments_max_fieldsPromiseChain & {get: <R extends attachments_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_max_fields, R> | undefined)) => Promise<(FieldsSelection<attachments_max_fields, R> | undefined)>}),
    min: (attachments_min_fieldsPromiseChain & {get: <R extends attachments_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_min_fields, R> | undefined)) => Promise<(FieldsSelection<attachments_min_fields, R> | undefined)>})
}


/** aggregate fields of "attachments" */
export interface attachments_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (attachments_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (attachments_max_fieldsObservableChain & {get: <R extends attachments_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_max_fields, R> | undefined)) => Observable<(FieldsSelection<attachments_max_fields, R> | undefined)>}),
    min: (attachments_min_fieldsObservableChain & {get: <R extends attachments_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<attachments_min_fields, R> | undefined)) => Observable<(FieldsSelection<attachments_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface attachments_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface attachments_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface attachments_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface attachments_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    path: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "attachments" */
export interface attachments_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})
}


/** response of any mutation on the table "attachments" */
export interface attachments_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})
}


/** columns and relationships of "is_participant_online" */
export interface is_participant_onlinePromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>})&(participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>})
}


/** columns and relationships of "is_participant_online" */
export interface is_participant_onlineObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>})&(participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>})
}


/** aggregated selection of "is_participant_online" */
export interface is_participant_online_aggregatePromiseChain{
    aggregate: (is_participant_online_aggregate_fieldsPromiseChain & {get: <R extends is_participant_online_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>})
}


/** aggregated selection of "is_participant_online" */
export interface is_participant_online_aggregateObservableChain{
    aggregate: (is_participant_online_aggregate_fieldsObservableChain & {get: <R extends is_participant_online_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>})
}


/** aggregate fields of "is_participant_online" */
export interface is_participant_online_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (is_participant_online_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (is_participant_online_max_fieldsPromiseChain & {get: <R extends is_participant_online_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_max_fields, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_max_fields, R> | undefined)>}),
    min: (is_participant_online_min_fieldsPromiseChain & {get: <R extends is_participant_online_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_min_fields, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_min_fields, R> | undefined)>})
}


/** aggregate fields of "is_participant_online" */
export interface is_participant_online_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (is_participant_online_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (is_participant_online_max_fieldsObservableChain & {get: <R extends is_participant_online_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_max_fields, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_max_fields, R> | undefined)>}),
    min: (is_participant_online_min_fieldsObservableChain & {get: <R extends is_participant_online_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_min_fields, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface is_participant_online_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface is_participant_online_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface is_participant_online_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface is_participant_online_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "is_participant_online" */
export interface is_participant_online_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>})
}


/** response of any mutation on the table "is_participant_online" */
export interface is_participant_online_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>})
}


/** columns and relationships of "messages" */
export interface messagesPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
room: (roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>) => Promise<FieldsSelection<rooms, R>>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "messages" */
export interface messagesObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
room: (roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>) => Observable<FieldsSelection<rooms, R>>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "messages" */
export interface messages_aggregatePromiseChain{
    aggregate: (messages_aggregate_fieldsPromiseChain & {get: <R extends messages_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<messages_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>})
}


/** aggregated selection of "messages" */
export interface messages_aggregateObservableChain{
    aggregate: (messages_aggregate_fieldsObservableChain & {get: <R extends messages_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<messages_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>})
}


/** aggregate fields of "messages" */
export interface messages_aggregate_fieldsPromiseChain{
    avg: (messages_avg_fieldsPromiseChain & {get: <R extends messages_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_avg_fields, R> | undefined)) => Promise<(FieldsSelection<messages_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (messages_max_fieldsPromiseChain & {get: <R extends messages_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_max_fields, R> | undefined)) => Promise<(FieldsSelection<messages_max_fields, R> | undefined)>}),
    min: (messages_min_fieldsPromiseChain & {get: <R extends messages_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_min_fields, R> | undefined)) => Promise<(FieldsSelection<messages_min_fields, R> | undefined)>}),
    stddev: (messages_stddev_fieldsPromiseChain & {get: <R extends messages_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<messages_stddev_fields, R> | undefined)>}),
    stddev_pop: (messages_stddev_pop_fieldsPromiseChain & {get: <R extends messages_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<messages_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (messages_stddev_samp_fieldsPromiseChain & {get: <R extends messages_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<messages_stddev_samp_fields, R> | undefined)>}),
    sum: (messages_sum_fieldsPromiseChain & {get: <R extends messages_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_sum_fields, R> | undefined)) => Promise<(FieldsSelection<messages_sum_fields, R> | undefined)>}),
    var_pop: (messages_var_pop_fieldsPromiseChain & {get: <R extends messages_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<messages_var_pop_fields, R> | undefined)>}),
    var_samp: (messages_var_samp_fieldsPromiseChain & {get: <R extends messages_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<messages_var_samp_fields, R> | undefined)>}),
    variance: (messages_variance_fieldsPromiseChain & {get: <R extends messages_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_variance_fields, R> | undefined)) => Promise<(FieldsSelection<messages_variance_fields, R> | undefined)>})
}


/** aggregate fields of "messages" */
export interface messages_aggregate_fieldsObservableChain{
    avg: (messages_avg_fieldsObservableChain & {get: <R extends messages_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_avg_fields, R> | undefined)) => Observable<(FieldsSelection<messages_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (messages_max_fieldsObservableChain & {get: <R extends messages_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_max_fields, R> | undefined)) => Observable<(FieldsSelection<messages_max_fields, R> | undefined)>}),
    min: (messages_min_fieldsObservableChain & {get: <R extends messages_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_min_fields, R> | undefined)) => Observable<(FieldsSelection<messages_min_fields, R> | undefined)>}),
    stddev: (messages_stddev_fieldsObservableChain & {get: <R extends messages_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<messages_stddev_fields, R> | undefined)>}),
    stddev_pop: (messages_stddev_pop_fieldsObservableChain & {get: <R extends messages_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<messages_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (messages_stddev_samp_fieldsObservableChain & {get: <R extends messages_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<messages_stddev_samp_fields, R> | undefined)>}),
    sum: (messages_sum_fieldsObservableChain & {get: <R extends messages_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_sum_fields, R> | undefined)) => Observable<(FieldsSelection<messages_sum_fields, R> | undefined)>}),
    var_pop: (messages_var_pop_fieldsObservableChain & {get: <R extends messages_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<messages_var_pop_fields, R> | undefined)>}),
    var_samp: (messages_var_samp_fieldsObservableChain & {get: <R extends messages_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<messages_var_samp_fields, R> | undefined)>}),
    variance: (messages_variance_fieldsObservableChain & {get: <R extends messages_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<messages_variance_fields, R> | undefined)) => Observable<(FieldsSelection<messages_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface messages_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface messages_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface messages_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface messages_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface messages_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface messages_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    message: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "messages" */
export interface messages_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>})
}


/** response of any mutation on the table "messages" */
export interface messages_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>})
}


/** aggregate stddev on columns */
export interface messages_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface messages_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface messages_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface messages_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface messages_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface messages_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface messages_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface messages_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface messages_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface messages_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface messages_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface messages_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface messages_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface messages_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** mutation root */
export interface mutation_rootPromiseChain{
    
/** delete data from the table: "attachment_extensions" */
delete_attachment_extensions: ((args: {
/** filter the rows which have to be deleted */
where: attachment_extensions_bool_exp}) => attachment_extensions_mutation_responsePromiseChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "attachment_extensions" */
delete_attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** delete data from the table: "attachments" */
delete_attachments: ((args: {
/** filter the rows which have to be deleted */
where: attachments_bool_exp}) => attachments_mutation_responsePromiseChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "attachments" */
delete_attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsPromiseChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Promise<(FieldsSelection<attachments, R> | undefined)>}),
    
/** delete data from the table: "is_participant_online" */
delete_is_participant_online: ((args: {
/** filter the rows which have to be deleted */
where: is_participant_online_bool_exp}) => is_participant_online_mutation_responsePromiseChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "is_participant_online" */
delete_is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Promise<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** delete data from the table: "messages" */
delete_messages: ((args: {
/** filter the rows which have to be deleted */
where: messages_bool_exp}) => messages_mutation_responsePromiseChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "messages" */
delete_messages_by_pk: ((args: {id: Scalars['Int']}) => messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** delete data from the table: "participant_room" */
delete_participant_room: ((args: {
/** filter the rows which have to be deleted */
where: participant_room_bool_exp}) => participant_room_mutation_responsePromiseChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participant_room" */
delete_participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomPromiseChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Promise<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** delete data from the table: "participant_type" */
delete_participant_type: ((args: {
/** filter the rows which have to be deleted */
where: participant_type_bool_exp}) => participant_type_mutation_responsePromiseChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participant_type" */
delete_participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Promise<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** delete data from the table: "participants" */
delete_participants: ((args: {
/** filter the rows which have to be deleted */
where: participants_bool_exp}) => participants_mutation_responsePromiseChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participants" */
delete_participants_by_pk: ((args: {id: Scalars['Int']}) => participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Promise<(FieldsSelection<participants, R> | undefined)>}),
    
/** delete data from the table: "room_status" */
delete_room_status: ((args: {
/** filter the rows which have to be deleted */
where: room_status_bool_exp}) => room_status_mutation_responsePromiseChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_status" */
delete_room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Promise<(FieldsSelection<room_status, R> | undefined)>}),
    
/** delete data from the table: "room_type" */
delete_room_type: ((args: {
/** filter the rows which have to be deleted */
where: room_type_bool_exp}) => room_type_mutation_responsePromiseChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_type" */
delete_room_type_by_pk: ((args: {type: Scalars['String']}) => room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Promise<(FieldsSelection<room_type, R> | undefined)>}),
    
/** delete data from the table: "room_visibility" */
delete_room_visibility: ((args: {
/** filter the rows which have to be deleted */
where: room_visibility_bool_exp}) => room_visibility_mutation_responsePromiseChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_visibility" */
delete_room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Promise<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** delete data from the table: "rooms" */
delete_rooms: ((args: {
/** filter the rows which have to be deleted */
where: rooms_bool_exp}) => rooms_mutation_responsePromiseChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Promise<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "rooms" */
delete_rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Promise<(FieldsSelection<rooms, R> | undefined)>}),
    
/** delete data from the table: "ticket_messages" */
delete_ticket_messages: ((args: {
/** filter the rows which have to be deleted */
where: ticket_messages_bool_exp}) => ticket_messages_mutation_responsePromiseChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_messages" */
delete_ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** delete data from the table: "ticket_participants" */
delete_ticket_participants: ((args: {
/** filter the rows which have to be deleted */
where: ticket_participants_bool_exp}) => ticket_participants_mutation_responsePromiseChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_participants" */
delete_ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** delete data from the table: "ticket_states" */
delete_ticket_states: ((args: {
/** filter the rows which have to be deleted */
where: ticket_states_bool_exp}) => ticket_states_mutation_responsePromiseChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_states" */
delete_ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Promise<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** delete data from the table: "tickets" */
delete_tickets: ((args: {
/** filter the rows which have to be deleted */
where: tickets_bool_exp}) => tickets_mutation_responsePromiseChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Promise<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "tickets" */
delete_tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Promise<(FieldsSelection<tickets, R> | undefined)>}),
    
/** delete data from the table: "users" */
delete_users: ((args: {
/** filter the rows which have to be deleted */
where: users_bool_exp}) => users_mutation_responsePromiseChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Promise<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "users" */
delete_users_by_pk: ((args: {id: Scalars['uuid']}) => usersPromiseChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Promise<(FieldsSelection<users, R> | undefined)>}),
    
/** insert data into the table: "attachment_extensions" */
insert_attachment_extensions: ((args: {
/** the rows to be inserted */
objects: attachment_extensions_insert_input[],
/** on conflict condition */
on_conflict?: (attachment_extensions_on_conflict | null)}) => attachment_extensions_mutation_responsePromiseChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "attachment_extensions" */
insert_attachment_extensions_one: ((args: {
/** the row to be inserted */
object: attachment_extensions_insert_input,
/** on conflict condition */
on_conflict?: (attachment_extensions_on_conflict | null)}) => attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** insert data into the table: "attachments" */
insert_attachments: ((args: {
/** the rows to be inserted */
objects: attachments_insert_input[],
/** on conflict condition */
on_conflict?: (attachments_on_conflict | null)}) => attachments_mutation_responsePromiseChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "attachments" */
insert_attachments_one: ((args: {
/** the row to be inserted */
object: attachments_insert_input,
/** on conflict condition */
on_conflict?: (attachments_on_conflict | null)}) => attachmentsPromiseChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Promise<(FieldsSelection<attachments, R> | undefined)>}),
    
/** insert data into the table: "is_participant_online" */
insert_is_participant_online: ((args: {
/** the rows to be inserted */
objects: is_participant_online_insert_input[],
/** on conflict condition */
on_conflict?: (is_participant_online_on_conflict | null)}) => is_participant_online_mutation_responsePromiseChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "is_participant_online" */
insert_is_participant_online_one: ((args: {
/** the row to be inserted */
object: is_participant_online_insert_input,
/** on conflict condition */
on_conflict?: (is_participant_online_on_conflict | null)}) => is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Promise<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** insert data into the table: "messages" */
insert_messages: ((args: {
/** the rows to be inserted */
objects: messages_insert_input[],
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}) => messages_mutation_responsePromiseChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "messages" */
insert_messages_one: ((args: {
/** the row to be inserted */
object: messages_insert_input,
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}) => messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** insert data into the table: "participant_room" */
insert_participant_room: ((args: {
/** the rows to be inserted */
objects: participant_room_insert_input[],
/** on conflict condition */
on_conflict?: (participant_room_on_conflict | null)}) => participant_room_mutation_responsePromiseChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participant_room" */
insert_participant_room_one: ((args: {
/** the row to be inserted */
object: participant_room_insert_input,
/** on conflict condition */
on_conflict?: (participant_room_on_conflict | null)}) => participant_roomPromiseChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Promise<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** insert data into the table: "participant_type" */
insert_participant_type: ((args: {
/** the rows to be inserted */
objects: participant_type_insert_input[],
/** on conflict condition */
on_conflict?: (participant_type_on_conflict | null)}) => participant_type_mutation_responsePromiseChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participant_type" */
insert_participant_type_one: ((args: {
/** the row to be inserted */
object: participant_type_insert_input,
/** on conflict condition */
on_conflict?: (participant_type_on_conflict | null)}) => participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Promise<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** insert data into the table: "participants" */
insert_participants: ((args: {
/** the rows to be inserted */
objects: participants_insert_input[],
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}) => participants_mutation_responsePromiseChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participants" */
insert_participants_one: ((args: {
/** the row to be inserted */
object: participants_insert_input,
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}) => participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Promise<(FieldsSelection<participants, R> | undefined)>}),
    
/** insert data into the table: "room_status" */
insert_room_status: ((args: {
/** the rows to be inserted */
objects: room_status_insert_input[],
/** on conflict condition */
on_conflict?: (room_status_on_conflict | null)}) => room_status_mutation_responsePromiseChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_status" */
insert_room_status_one: ((args: {
/** the row to be inserted */
object: room_status_insert_input,
/** on conflict condition */
on_conflict?: (room_status_on_conflict | null)}) => room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Promise<(FieldsSelection<room_status, R> | undefined)>}),
    
/** insert data into the table: "room_type" */
insert_room_type: ((args: {
/** the rows to be inserted */
objects: room_type_insert_input[],
/** on conflict condition */
on_conflict?: (room_type_on_conflict | null)}) => room_type_mutation_responsePromiseChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_type" */
insert_room_type_one: ((args: {
/** the row to be inserted */
object: room_type_insert_input,
/** on conflict condition */
on_conflict?: (room_type_on_conflict | null)}) => room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Promise<(FieldsSelection<room_type, R> | undefined)>}),
    
/** insert data into the table: "room_visibility" */
insert_room_visibility: ((args: {
/** the rows to be inserted */
objects: room_visibility_insert_input[],
/** on conflict condition */
on_conflict?: (room_visibility_on_conflict | null)}) => room_visibility_mutation_responsePromiseChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_visibility" */
insert_room_visibility_one: ((args: {
/** the row to be inserted */
object: room_visibility_insert_input,
/** on conflict condition */
on_conflict?: (room_visibility_on_conflict | null)}) => room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Promise<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** insert data into the table: "rooms" */
insert_rooms: ((args: {
/** the rows to be inserted */
objects: rooms_insert_input[],
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}) => rooms_mutation_responsePromiseChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Promise<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "rooms" */
insert_rooms_one: ((args: {
/** the row to be inserted */
object: rooms_insert_input,
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}) => roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Promise<(FieldsSelection<rooms, R> | undefined)>}),
    
/** insert data into the table: "ticket_messages" */
insert_ticket_messages: ((args: {
/** the rows to be inserted */
objects: ticket_messages_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}) => ticket_messages_mutation_responsePromiseChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_messages" */
insert_ticket_messages_one: ((args: {
/** the row to be inserted */
object: ticket_messages_insert_input,
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}) => ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** insert data into the table: "ticket_participants" */
insert_ticket_participants: ((args: {
/** the rows to be inserted */
objects: ticket_participants_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}) => ticket_participants_mutation_responsePromiseChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_participants" */
insert_ticket_participants_one: ((args: {
/** the row to be inserted */
object: ticket_participants_insert_input,
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}) => ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** insert data into the table: "ticket_states" */
insert_ticket_states: ((args: {
/** the rows to be inserted */
objects: ticket_states_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_states_on_conflict | null)}) => ticket_states_mutation_responsePromiseChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_states" */
insert_ticket_states_one: ((args: {
/** the row to be inserted */
object: ticket_states_insert_input,
/** on conflict condition */
on_conflict?: (ticket_states_on_conflict | null)}) => ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Promise<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** insert data into the table: "tickets" */
insert_tickets: ((args: {
/** the rows to be inserted */
objects: tickets_insert_input[],
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}) => tickets_mutation_responsePromiseChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Promise<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "tickets" */
insert_tickets_one: ((args: {
/** the row to be inserted */
object: tickets_insert_input,
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}) => ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Promise<(FieldsSelection<tickets, R> | undefined)>}),
    
/** insert data into the table: "users" */
insert_users: ((args: {
/** the rows to be inserted */
objects: users_insert_input[],
/** on conflict condition */
on_conflict?: (users_on_conflict | null)}) => users_mutation_responsePromiseChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Promise<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "users" */
insert_users_one: ((args: {
/** the row to be inserted */
object: users_insert_input,
/** on conflict condition */
on_conflict?: (users_on_conflict | null)}) => usersPromiseChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Promise<(FieldsSelection<users, R> | undefined)>}),
    
/** update data of the table: "attachment_extensions" */
update_attachment_extensions: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachment_extensions_set_input | null),
/** filter the rows which have to be updated */
where: attachment_extensions_bool_exp}) => attachment_extensions_mutation_responsePromiseChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "attachment_extensions" */
update_attachment_extensions_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachment_extensions_set_input | null),pk_columns: attachment_extensions_pk_columns_input}) => attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** update data of the table: "attachments" */
update_attachments: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachments_set_input | null),
/** filter the rows which have to be updated */
where: attachments_bool_exp}) => attachments_mutation_responsePromiseChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Promise<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "attachments" */
update_attachments_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachments_set_input | null),pk_columns: attachments_pk_columns_input}) => attachmentsPromiseChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Promise<(FieldsSelection<attachments, R> | undefined)>}),
    
/** update data of the table: "is_participant_online" */
update_is_participant_online: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (is_participant_online_set_input | null),
/** filter the rows which have to be updated */
where: is_participant_online_bool_exp}) => is_participant_online_mutation_responsePromiseChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Promise<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "is_participant_online" */
update_is_participant_online_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (is_participant_online_set_input | null),pk_columns: is_participant_online_pk_columns_input}) => is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Promise<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** update data of the table: "messages" */
update_messages: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (messages_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (messages_set_input | null),
/** filter the rows which have to be updated */
where: messages_bool_exp}) => messages_mutation_responsePromiseChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "messages" */
update_messages_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (messages_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (messages_set_input | null),pk_columns: messages_pk_columns_input}) => messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** update data of the table: "participant_room" */
update_participant_room: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participant_room_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participant_room_set_input | null),
/** filter the rows which have to be updated */
where: participant_room_bool_exp}) => participant_room_mutation_responsePromiseChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participant_room" */
update_participant_room_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participant_room_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participant_room_set_input | null),pk_columns: participant_room_pk_columns_input}) => participant_roomPromiseChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Promise<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** update data of the table: "participant_type" */
update_participant_type: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (participant_type_set_input | null),
/** filter the rows which have to be updated */
where: participant_type_bool_exp}) => participant_type_mutation_responsePromiseChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participant_type" */
update_participant_type_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (participant_type_set_input | null),pk_columns: participant_type_pk_columns_input}) => participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Promise<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** update data of the table: "participants" */
update_participants: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participants_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participants_set_input | null),
/** filter the rows which have to be updated */
where: participants_bool_exp}) => participants_mutation_responsePromiseChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participants" */
update_participants_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participants_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participants_set_input | null),pk_columns: participants_pk_columns_input}) => participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Promise<(FieldsSelection<participants, R> | undefined)>}),
    
/** update data of the table: "room_status" */
update_room_status: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_status_set_input | null),
/** filter the rows which have to be updated */
where: room_status_bool_exp}) => room_status_mutation_responsePromiseChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_status" */
update_room_status_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_status_set_input | null),pk_columns: room_status_pk_columns_input}) => room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Promise<(FieldsSelection<room_status, R> | undefined)>}),
    
/** update data of the table: "room_type" */
update_room_type: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_type_set_input | null),
/** filter the rows which have to be updated */
where: room_type_bool_exp}) => room_type_mutation_responsePromiseChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_type" */
update_room_type_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_type_set_input | null),pk_columns: room_type_pk_columns_input}) => room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Promise<(FieldsSelection<room_type, R> | undefined)>}),
    
/** update data of the table: "room_visibility" */
update_room_visibility: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_visibility_set_input | null),
/** filter the rows which have to be updated */
where: room_visibility_bool_exp}) => room_visibility_mutation_responsePromiseChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Promise<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_visibility" */
update_room_visibility_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_visibility_set_input | null),pk_columns: room_visibility_pk_columns_input}) => room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Promise<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** update data of the table: "rooms" */
update_rooms: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (rooms_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (rooms_set_input | null),
/** filter the rows which have to be updated */
where: rooms_bool_exp}) => rooms_mutation_responsePromiseChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Promise<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "rooms" */
update_rooms_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (rooms_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (rooms_set_input | null),pk_columns: rooms_pk_columns_input}) => roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Promise<(FieldsSelection<rooms, R> | undefined)>}),
    
/** update data of the table: "ticket_messages" */
update_ticket_messages: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_messages_set_input | null),
/** filter the rows which have to be updated */
where: ticket_messages_bool_exp}) => ticket_messages_mutation_responsePromiseChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_messages" */
update_ticket_messages_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_messages_set_input | null),pk_columns: ticket_messages_pk_columns_input}) => ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** update data of the table: "ticket_participants" */
update_ticket_participants: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_participants_set_input | null),
/** filter the rows which have to be updated */
where: ticket_participants_bool_exp}) => ticket_participants_mutation_responsePromiseChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_participants" */
update_ticket_participants_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_participants_set_input | null),pk_columns: ticket_participants_pk_columns_input}) => ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** update data of the table: "ticket_states" */
update_ticket_states: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_states_set_input | null),
/** filter the rows which have to be updated */
where: ticket_states_bool_exp}) => ticket_states_mutation_responsePromiseChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Promise<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_states" */
update_ticket_states_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_states_set_input | null),pk_columns: ticket_states_pk_columns_input}) => ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Promise<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** update data of the table: "tickets" */
update_tickets: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (tickets_set_input | null),
/** filter the rows which have to be updated */
where: tickets_bool_exp}) => tickets_mutation_responsePromiseChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Promise<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "tickets" */
update_tickets_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (tickets_set_input | null),pk_columns: tickets_pk_columns_input}) => ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Promise<(FieldsSelection<tickets, R> | undefined)>}),
    
/** update data of the table: "users" */
update_users: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),
/** filter the rows which have to be updated */
where: users_bool_exp}) => users_mutation_responsePromiseChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Promise<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "users" */
update_users_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),pk_columns: users_pk_columns_input}) => usersPromiseChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Promise<(FieldsSelection<users, R> | undefined)>})
}


/** mutation root */
export interface mutation_rootObservableChain{
    
/** delete data from the table: "attachment_extensions" */
delete_attachment_extensions: ((args: {
/** filter the rows which have to be deleted */
where: attachment_extensions_bool_exp}) => attachment_extensions_mutation_responseObservableChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "attachment_extensions" */
delete_attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** delete data from the table: "attachments" */
delete_attachments: ((args: {
/** filter the rows which have to be deleted */
where: attachments_bool_exp}) => attachments_mutation_responseObservableChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "attachments" */
delete_attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsObservableChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Observable<(FieldsSelection<attachments, R> | undefined)>}),
    
/** delete data from the table: "is_participant_online" */
delete_is_participant_online: ((args: {
/** filter the rows which have to be deleted */
where: is_participant_online_bool_exp}) => is_participant_online_mutation_responseObservableChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "is_participant_online" */
delete_is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Observable<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** delete data from the table: "messages" */
delete_messages: ((args: {
/** filter the rows which have to be deleted */
where: messages_bool_exp}) => messages_mutation_responseObservableChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "messages" */
delete_messages_by_pk: ((args: {id: Scalars['Int']}) => messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** delete data from the table: "participant_room" */
delete_participant_room: ((args: {
/** filter the rows which have to be deleted */
where: participant_room_bool_exp}) => participant_room_mutation_responseObservableChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participant_room" */
delete_participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomObservableChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Observable<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** delete data from the table: "participant_type" */
delete_participant_type: ((args: {
/** filter the rows which have to be deleted */
where: participant_type_bool_exp}) => participant_type_mutation_responseObservableChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participant_type" */
delete_participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Observable<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** delete data from the table: "participants" */
delete_participants: ((args: {
/** filter the rows which have to be deleted */
where: participants_bool_exp}) => participants_mutation_responseObservableChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "participants" */
delete_participants_by_pk: ((args: {id: Scalars['Int']}) => participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Observable<(FieldsSelection<participants, R> | undefined)>}),
    
/** delete data from the table: "room_status" */
delete_room_status: ((args: {
/** filter the rows which have to be deleted */
where: room_status_bool_exp}) => room_status_mutation_responseObservableChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_status" */
delete_room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Observable<(FieldsSelection<room_status, R> | undefined)>}),
    
/** delete data from the table: "room_type" */
delete_room_type: ((args: {
/** filter the rows which have to be deleted */
where: room_type_bool_exp}) => room_type_mutation_responseObservableChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_type" */
delete_room_type_by_pk: ((args: {type: Scalars['String']}) => room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Observable<(FieldsSelection<room_type, R> | undefined)>}),
    
/** delete data from the table: "room_visibility" */
delete_room_visibility: ((args: {
/** filter the rows which have to be deleted */
where: room_visibility_bool_exp}) => room_visibility_mutation_responseObservableChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "room_visibility" */
delete_room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Observable<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** delete data from the table: "rooms" */
delete_rooms: ((args: {
/** filter the rows which have to be deleted */
where: rooms_bool_exp}) => rooms_mutation_responseObservableChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Observable<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "rooms" */
delete_rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Observable<(FieldsSelection<rooms, R> | undefined)>}),
    
/** delete data from the table: "ticket_messages" */
delete_ticket_messages: ((args: {
/** filter the rows which have to be deleted */
where: ticket_messages_bool_exp}) => ticket_messages_mutation_responseObservableChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_messages" */
delete_ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** delete data from the table: "ticket_participants" */
delete_ticket_participants: ((args: {
/** filter the rows which have to be deleted */
where: ticket_participants_bool_exp}) => ticket_participants_mutation_responseObservableChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_participants" */
delete_ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** delete data from the table: "ticket_states" */
delete_ticket_states: ((args: {
/** filter the rows which have to be deleted */
where: ticket_states_bool_exp}) => ticket_states_mutation_responseObservableChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "ticket_states" */
delete_ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Observable<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** delete data from the table: "tickets" */
delete_tickets: ((args: {
/** filter the rows which have to be deleted */
where: tickets_bool_exp}) => tickets_mutation_responseObservableChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Observable<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "tickets" */
delete_tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Observable<(FieldsSelection<tickets, R> | undefined)>}),
    
/** delete data from the table: "users" */
delete_users: ((args: {
/** filter the rows which have to be deleted */
where: users_bool_exp}) => users_mutation_responseObservableChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Observable<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** delete single row from the table: "users" */
delete_users_by_pk: ((args: {id: Scalars['uuid']}) => usersObservableChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Observable<(FieldsSelection<users, R> | undefined)>}),
    
/** insert data into the table: "attachment_extensions" */
insert_attachment_extensions: ((args: {
/** the rows to be inserted */
objects: attachment_extensions_insert_input[],
/** on conflict condition */
on_conflict?: (attachment_extensions_on_conflict | null)}) => attachment_extensions_mutation_responseObservableChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "attachment_extensions" */
insert_attachment_extensions_one: ((args: {
/** the row to be inserted */
object: attachment_extensions_insert_input,
/** on conflict condition */
on_conflict?: (attachment_extensions_on_conflict | null)}) => attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** insert data into the table: "attachments" */
insert_attachments: ((args: {
/** the rows to be inserted */
objects: attachments_insert_input[],
/** on conflict condition */
on_conflict?: (attachments_on_conflict | null)}) => attachments_mutation_responseObservableChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "attachments" */
insert_attachments_one: ((args: {
/** the row to be inserted */
object: attachments_insert_input,
/** on conflict condition */
on_conflict?: (attachments_on_conflict | null)}) => attachmentsObservableChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Observable<(FieldsSelection<attachments, R> | undefined)>}),
    
/** insert data into the table: "is_participant_online" */
insert_is_participant_online: ((args: {
/** the rows to be inserted */
objects: is_participant_online_insert_input[],
/** on conflict condition */
on_conflict?: (is_participant_online_on_conflict | null)}) => is_participant_online_mutation_responseObservableChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "is_participant_online" */
insert_is_participant_online_one: ((args: {
/** the row to be inserted */
object: is_participant_online_insert_input,
/** on conflict condition */
on_conflict?: (is_participant_online_on_conflict | null)}) => is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Observable<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** insert data into the table: "messages" */
insert_messages: ((args: {
/** the rows to be inserted */
objects: messages_insert_input[],
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}) => messages_mutation_responseObservableChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "messages" */
insert_messages_one: ((args: {
/** the row to be inserted */
object: messages_insert_input,
/** on conflict condition */
on_conflict?: (messages_on_conflict | null)}) => messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** insert data into the table: "participant_room" */
insert_participant_room: ((args: {
/** the rows to be inserted */
objects: participant_room_insert_input[],
/** on conflict condition */
on_conflict?: (participant_room_on_conflict | null)}) => participant_room_mutation_responseObservableChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participant_room" */
insert_participant_room_one: ((args: {
/** the row to be inserted */
object: participant_room_insert_input,
/** on conflict condition */
on_conflict?: (participant_room_on_conflict | null)}) => participant_roomObservableChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Observable<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** insert data into the table: "participant_type" */
insert_participant_type: ((args: {
/** the rows to be inserted */
objects: participant_type_insert_input[],
/** on conflict condition */
on_conflict?: (participant_type_on_conflict | null)}) => participant_type_mutation_responseObservableChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participant_type" */
insert_participant_type_one: ((args: {
/** the row to be inserted */
object: participant_type_insert_input,
/** on conflict condition */
on_conflict?: (participant_type_on_conflict | null)}) => participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Observable<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** insert data into the table: "participants" */
insert_participants: ((args: {
/** the rows to be inserted */
objects: participants_insert_input[],
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}) => participants_mutation_responseObservableChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "participants" */
insert_participants_one: ((args: {
/** the row to be inserted */
object: participants_insert_input,
/** on conflict condition */
on_conflict?: (participants_on_conflict | null)}) => participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Observable<(FieldsSelection<participants, R> | undefined)>}),
    
/** insert data into the table: "room_status" */
insert_room_status: ((args: {
/** the rows to be inserted */
objects: room_status_insert_input[],
/** on conflict condition */
on_conflict?: (room_status_on_conflict | null)}) => room_status_mutation_responseObservableChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_status" */
insert_room_status_one: ((args: {
/** the row to be inserted */
object: room_status_insert_input,
/** on conflict condition */
on_conflict?: (room_status_on_conflict | null)}) => room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Observable<(FieldsSelection<room_status, R> | undefined)>}),
    
/** insert data into the table: "room_type" */
insert_room_type: ((args: {
/** the rows to be inserted */
objects: room_type_insert_input[],
/** on conflict condition */
on_conflict?: (room_type_on_conflict | null)}) => room_type_mutation_responseObservableChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_type" */
insert_room_type_one: ((args: {
/** the row to be inserted */
object: room_type_insert_input,
/** on conflict condition */
on_conflict?: (room_type_on_conflict | null)}) => room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Observable<(FieldsSelection<room_type, R> | undefined)>}),
    
/** insert data into the table: "room_visibility" */
insert_room_visibility: ((args: {
/** the rows to be inserted */
objects: room_visibility_insert_input[],
/** on conflict condition */
on_conflict?: (room_visibility_on_conflict | null)}) => room_visibility_mutation_responseObservableChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "room_visibility" */
insert_room_visibility_one: ((args: {
/** the row to be inserted */
object: room_visibility_insert_input,
/** on conflict condition */
on_conflict?: (room_visibility_on_conflict | null)}) => room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Observable<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** insert data into the table: "rooms" */
insert_rooms: ((args: {
/** the rows to be inserted */
objects: rooms_insert_input[],
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}) => rooms_mutation_responseObservableChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Observable<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "rooms" */
insert_rooms_one: ((args: {
/** the row to be inserted */
object: rooms_insert_input,
/** on conflict condition */
on_conflict?: (rooms_on_conflict | null)}) => roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Observable<(FieldsSelection<rooms, R> | undefined)>}),
    
/** insert data into the table: "ticket_messages" */
insert_ticket_messages: ((args: {
/** the rows to be inserted */
objects: ticket_messages_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}) => ticket_messages_mutation_responseObservableChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_messages" */
insert_ticket_messages_one: ((args: {
/** the row to be inserted */
object: ticket_messages_insert_input,
/** on conflict condition */
on_conflict?: (ticket_messages_on_conflict | null)}) => ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** insert data into the table: "ticket_participants" */
insert_ticket_participants: ((args: {
/** the rows to be inserted */
objects: ticket_participants_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}) => ticket_participants_mutation_responseObservableChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_participants" */
insert_ticket_participants_one: ((args: {
/** the row to be inserted */
object: ticket_participants_insert_input,
/** on conflict condition */
on_conflict?: (ticket_participants_on_conflict | null)}) => ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** insert data into the table: "ticket_states" */
insert_ticket_states: ((args: {
/** the rows to be inserted */
objects: ticket_states_insert_input[],
/** on conflict condition */
on_conflict?: (ticket_states_on_conflict | null)}) => ticket_states_mutation_responseObservableChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "ticket_states" */
insert_ticket_states_one: ((args: {
/** the row to be inserted */
object: ticket_states_insert_input,
/** on conflict condition */
on_conflict?: (ticket_states_on_conflict | null)}) => ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Observable<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** insert data into the table: "tickets" */
insert_tickets: ((args: {
/** the rows to be inserted */
objects: tickets_insert_input[],
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}) => tickets_mutation_responseObservableChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Observable<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "tickets" */
insert_tickets_one: ((args: {
/** the row to be inserted */
object: tickets_insert_input,
/** on conflict condition */
on_conflict?: (tickets_on_conflict | null)}) => ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Observable<(FieldsSelection<tickets, R> | undefined)>}),
    
/** insert data into the table: "users" */
insert_users: ((args: {
/** the rows to be inserted */
objects: users_insert_input[],
/** on conflict condition */
on_conflict?: (users_on_conflict | null)}) => users_mutation_responseObservableChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Observable<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** insert a single row into the table: "users" */
insert_users_one: ((args: {
/** the row to be inserted */
object: users_insert_input,
/** on conflict condition */
on_conflict?: (users_on_conflict | null)}) => usersObservableChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Observable<(FieldsSelection<users, R> | undefined)>}),
    
/** update data of the table: "attachment_extensions" */
update_attachment_extensions: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachment_extensions_set_input | null),
/** filter the rows which have to be updated */
where: attachment_extensions_bool_exp}) => attachment_extensions_mutation_responseObservableChain & {get: <R extends attachment_extensions_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "attachment_extensions" */
update_attachment_extensions_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachment_extensions_set_input | null),pk_columns: attachment_extensions_pk_columns_input}) => attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** update data of the table: "attachments" */
update_attachments: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachments_set_input | null),
/** filter the rows which have to be updated */
where: attachments_bool_exp}) => attachments_mutation_responseObservableChain & {get: <R extends attachments_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<attachments_mutation_response, R> | undefined)) => Observable<(FieldsSelection<attachments_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "attachments" */
update_attachments_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (attachments_set_input | null),pk_columns: attachments_pk_columns_input}) => attachmentsObservableChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Observable<(FieldsSelection<attachments, R> | undefined)>}),
    
/** update data of the table: "is_participant_online" */
update_is_participant_online: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (is_participant_online_set_input | null),
/** filter the rows which have to be updated */
where: is_participant_online_bool_exp}) => is_participant_online_mutation_responseObservableChain & {get: <R extends is_participant_online_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online_mutation_response, R> | undefined)) => Observable<(FieldsSelection<is_participant_online_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "is_participant_online" */
update_is_participant_online_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (is_participant_online_set_input | null),pk_columns: is_participant_online_pk_columns_input}) => is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Observable<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** update data of the table: "messages" */
update_messages: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (messages_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (messages_set_input | null),
/** filter the rows which have to be updated */
where: messages_bool_exp}) => messages_mutation_responseObservableChain & {get: <R extends messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<messages_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "messages" */
update_messages_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (messages_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (messages_set_input | null),pk_columns: messages_pk_columns_input}) => messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** update data of the table: "participant_room" */
update_participant_room: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participant_room_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participant_room_set_input | null),
/** filter the rows which have to be updated */
where: participant_room_bool_exp}) => participant_room_mutation_responseObservableChain & {get: <R extends participant_room_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_room_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participant_room" */
update_participant_room_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participant_room_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participant_room_set_input | null),pk_columns: participant_room_pk_columns_input}) => participant_roomObservableChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Observable<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** update data of the table: "participant_type" */
update_participant_type: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (participant_type_set_input | null),
/** filter the rows which have to be updated */
where: participant_type_bool_exp}) => participant_type_mutation_responseObservableChain & {get: <R extends participant_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participant_type_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participant_type" */
update_participant_type_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (participant_type_set_input | null),pk_columns: participant_type_pk_columns_input}) => participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Observable<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** update data of the table: "participants" */
update_participants: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participants_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participants_set_input | null),
/** filter the rows which have to be updated */
where: participants_bool_exp}) => participants_mutation_responseObservableChain & {get: <R extends participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<participants_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "participants" */
update_participants_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (participants_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (participants_set_input | null),pk_columns: participants_pk_columns_input}) => participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Observable<(FieldsSelection<participants, R> | undefined)>}),
    
/** update data of the table: "room_status" */
update_room_status: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_status_set_input | null),
/** filter the rows which have to be updated */
where: room_status_bool_exp}) => room_status_mutation_responseObservableChain & {get: <R extends room_status_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_status_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_status_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_status" */
update_room_status_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_status_set_input | null),pk_columns: room_status_pk_columns_input}) => room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Observable<(FieldsSelection<room_status, R> | undefined)>}),
    
/** update data of the table: "room_type" */
update_room_type: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_type_set_input | null),
/** filter the rows which have to be updated */
where: room_type_bool_exp}) => room_type_mutation_responseObservableChain & {get: <R extends room_type_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_type_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_type_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_type" */
update_room_type_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_type_set_input | null),pk_columns: room_type_pk_columns_input}) => room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Observable<(FieldsSelection<room_type, R> | undefined)>}),
    
/** update data of the table: "room_visibility" */
update_room_visibility: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_visibility_set_input | null),
/** filter the rows which have to be updated */
where: room_visibility_bool_exp}) => room_visibility_mutation_responseObservableChain & {get: <R extends room_visibility_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_mutation_response, R> | undefined)) => Observable<(FieldsSelection<room_visibility_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "room_visibility" */
update_room_visibility_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (room_visibility_set_input | null),pk_columns: room_visibility_pk_columns_input}) => room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Observable<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** update data of the table: "rooms" */
update_rooms: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (rooms_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (rooms_set_input | null),
/** filter the rows which have to be updated */
where: rooms_bool_exp}) => rooms_mutation_responseObservableChain & {get: <R extends rooms_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<rooms_mutation_response, R> | undefined)) => Observable<(FieldsSelection<rooms_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "rooms" */
update_rooms_by_pk: ((args: {
/** increments the numeric columns with given value of the filtered values */
_inc?: (rooms_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (rooms_set_input | null),pk_columns: rooms_pk_columns_input}) => roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Observable<(FieldsSelection<rooms, R> | undefined)>}),
    
/** update data of the table: "ticket_messages" */
update_ticket_messages: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_messages_set_input | null),
/** filter the rows which have to be updated */
where: ticket_messages_bool_exp}) => ticket_messages_mutation_responseObservableChain & {get: <R extends ticket_messages_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_messages" */
update_ticket_messages_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_messages_set_input | null),pk_columns: ticket_messages_pk_columns_input}) => ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** update data of the table: "ticket_participants" */
update_ticket_participants: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_participants_set_input | null),
/** filter the rows which have to be updated */
where: ticket_participants_bool_exp}) => ticket_participants_mutation_responseObservableChain & {get: <R extends ticket_participants_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_participants" */
update_ticket_participants_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_participants_set_input | null),pk_columns: ticket_participants_pk_columns_input}) => ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** update data of the table: "ticket_states" */
update_ticket_states: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_states_set_input | null),
/** filter the rows which have to be updated */
where: ticket_states_bool_exp}) => ticket_states_mutation_responseObservableChain & {get: <R extends ticket_states_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_mutation_response, R> | undefined)) => Observable<(FieldsSelection<ticket_states_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "ticket_states" */
update_ticket_states_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (ticket_states_set_input | null),pk_columns: ticket_states_pk_columns_input}) => ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Observable<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** update data of the table: "tickets" */
update_tickets: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (tickets_set_input | null),
/** filter the rows which have to be updated */
where: tickets_bool_exp}) => tickets_mutation_responseObservableChain & {get: <R extends tickets_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<tickets_mutation_response, R> | undefined)) => Observable<(FieldsSelection<tickets_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "tickets" */
update_tickets_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (tickets_set_input | null),pk_columns: tickets_pk_columns_input}) => ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Observable<(FieldsSelection<tickets, R> | undefined)>}),
    
/** update data of the table: "users" */
update_users: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),
/** filter the rows which have to be updated */
where: users_bool_exp}) => users_mutation_responseObservableChain & {get: <R extends users_mutation_responseRequest>(request: R, defaultValue?: (FieldsSelection<users_mutation_response, R> | undefined)) => Observable<(FieldsSelection<users_mutation_response, R> | undefined)>}),
    
/** update single row of the table: "users" */
update_users_by_pk: ((args: {
/** sets the columns of the filtered rows to the given values */
_set?: (users_set_input | null),pk_columns: users_pk_columns_input}) => usersObservableChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Observable<(FieldsSelection<users, R> | undefined)>})
}


/** columns and relationships of "participant_room" */
export interface participant_roomPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    is_room_owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** An object relationship */
message: (messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** An object relationship */
participant: (participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>) => Promise<FieldsSelection<participants, R>>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An object relationship */
room: (roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>) => Promise<FieldsSelection<rooms, R>>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "participant_room" */
export interface participant_roomObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    is_room_owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** An object relationship */
message: (messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** An object relationship */
participant: (participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>) => Observable<FieldsSelection<participants, R>>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An object relationship */
room: (roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>) => Observable<FieldsSelection<rooms, R>>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "participant_room" */
export interface participant_room_aggregatePromiseChain{
    aggregate: (participant_room_aggregate_fieldsPromiseChain & {get: <R extends participant_room_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})
}


/** aggregated selection of "participant_room" */
export interface participant_room_aggregateObservableChain{
    aggregate: (participant_room_aggregate_fieldsObservableChain & {get: <R extends participant_room_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})
}


/** aggregate fields of "participant_room" */
export interface participant_room_aggregate_fieldsPromiseChain{
    avg: (participant_room_avg_fieldsPromiseChain & {get: <R extends participant_room_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_avg_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (participant_room_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (participant_room_max_fieldsPromiseChain & {get: <R extends participant_room_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_max_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_max_fields, R> | undefined)>}),
    min: (participant_room_min_fieldsPromiseChain & {get: <R extends participant_room_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_min_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_min_fields, R> | undefined)>}),
    stddev: (participant_room_stddev_fieldsPromiseChain & {get: <R extends participant_room_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_stddev_fields, R> | undefined)>}),
    stddev_pop: (participant_room_stddev_pop_fieldsPromiseChain & {get: <R extends participant_room_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (participant_room_stddev_samp_fieldsPromiseChain & {get: <R extends participant_room_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_stddev_samp_fields, R> | undefined)>}),
    sum: (participant_room_sum_fieldsPromiseChain & {get: <R extends participant_room_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_sum_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_sum_fields, R> | undefined)>}),
    var_pop: (participant_room_var_pop_fieldsPromiseChain & {get: <R extends participant_room_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_var_pop_fields, R> | undefined)>}),
    var_samp: (participant_room_var_samp_fieldsPromiseChain & {get: <R extends participant_room_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_var_samp_fields, R> | undefined)>}),
    variance: (participant_room_variance_fieldsPromiseChain & {get: <R extends participant_room_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_variance_fields, R> | undefined)) => Promise<(FieldsSelection<participant_room_variance_fields, R> | undefined)>})
}


/** aggregate fields of "participant_room" */
export interface participant_room_aggregate_fieldsObservableChain{
    avg: (participant_room_avg_fieldsObservableChain & {get: <R extends participant_room_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_avg_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (participant_room_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (participant_room_max_fieldsObservableChain & {get: <R extends participant_room_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_max_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_max_fields, R> | undefined)>}),
    min: (participant_room_min_fieldsObservableChain & {get: <R extends participant_room_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_min_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_min_fields, R> | undefined)>}),
    stddev: (participant_room_stddev_fieldsObservableChain & {get: <R extends participant_room_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_stddev_fields, R> | undefined)>}),
    stddev_pop: (participant_room_stddev_pop_fieldsObservableChain & {get: <R extends participant_room_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (participant_room_stddev_samp_fieldsObservableChain & {get: <R extends participant_room_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_stddev_samp_fields, R> | undefined)>}),
    sum: (participant_room_sum_fieldsObservableChain & {get: <R extends participant_room_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_sum_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_sum_fields, R> | undefined)>}),
    var_pop: (participant_room_var_pop_fieldsObservableChain & {get: <R extends participant_room_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_var_pop_fields, R> | undefined)>}),
    var_samp: (participant_room_var_samp_fieldsObservableChain & {get: <R extends participant_room_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_var_samp_fields, R> | undefined)>}),
    variance: (participant_room_variance_fieldsObservableChain & {get: <R extends participant_room_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_room_variance_fields, R> | undefined)) => Observable<(FieldsSelection<participant_room_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface participant_room_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface participant_room_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface participant_room_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface participant_room_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface participant_room_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface participant_room_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "participant_room" */
export interface participant_room_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})
}


/** response of any mutation on the table "participant_room" */
export interface participant_room_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})
}


/** aggregate stddev on columns */
export interface participant_room_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface participant_room_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface participant_room_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface participant_room_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface participant_room_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface participant_room_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface participant_room_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface participant_room_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface participant_room_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface participant_room_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface participant_room_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface participant_room_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface participant_room_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface participant_room_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    room_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_count: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    unread_message_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** columns and relationships of "participant_type" */
export interface participant_typePromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>})&(participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "participant_type" */
export interface participant_typeObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>})&(participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "participant_type" */
export interface participant_type_aggregatePromiseChain{
    aggregate: (participant_type_aggregate_fieldsPromiseChain & {get: <R extends participant_type_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<participant_type_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>})
}


/** aggregated selection of "participant_type" */
export interface participant_type_aggregateObservableChain{
    aggregate: (participant_type_aggregate_fieldsObservableChain & {get: <R extends participant_type_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<participant_type_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>})
}


/** aggregate fields of "participant_type" */
export interface participant_type_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (participant_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (participant_type_max_fieldsPromiseChain & {get: <R extends participant_type_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_max_fields, R> | undefined)) => Promise<(FieldsSelection<participant_type_max_fields, R> | undefined)>}),
    min: (participant_type_min_fieldsPromiseChain & {get: <R extends participant_type_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_min_fields, R> | undefined)) => Promise<(FieldsSelection<participant_type_min_fields, R> | undefined)>})
}


/** aggregate fields of "participant_type" */
export interface participant_type_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (participant_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (participant_type_max_fieldsObservableChain & {get: <R extends participant_type_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_max_fields, R> | undefined)) => Observable<(FieldsSelection<participant_type_max_fields, R> | undefined)>}),
    min: (participant_type_min_fieldsObservableChain & {get: <R extends participant_type_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participant_type_min_fields, R> | undefined)) => Observable<(FieldsSelection<participant_type_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface participant_type_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface participant_type_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface participant_type_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface participant_type_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "participant_type" */
export interface participant_type_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>})
}


/** response of any mutation on the table "participant_type" */
export interface participant_type_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>})
}


/** columns and relationships of "participants" */
export interface participantsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An object relationship */
is_participant_online: (is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>) => Promise<FieldsSelection<is_participant_online, R>>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
participant_type: (participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>) => Promise<FieldsSelection<participant_type, R>>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "participants" */
export interface participantsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An object relationship */
is_participant_online: (is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>) => Observable<FieldsSelection<is_participant_online, R>>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
participant_type: (participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>) => Observable<FieldsSelection<participant_type, R>>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>})
}


/** aggregated selection of "participants" */
export interface participants_aggregatePromiseChain{
    aggregate: (participants_aggregate_fieldsPromiseChain & {get: <R extends participants_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<participants_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})
}


/** aggregated selection of "participants" */
export interface participants_aggregateObservableChain{
    aggregate: (participants_aggregate_fieldsObservableChain & {get: <R extends participants_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<participants_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})
}


/** aggregate fields of "participants" */
export interface participants_aggregate_fieldsPromiseChain{
    avg: (participants_avg_fieldsPromiseChain & {get: <R extends participants_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_avg_fields, R> | undefined)) => Promise<(FieldsSelection<participants_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (participants_max_fieldsPromiseChain & {get: <R extends participants_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_max_fields, R> | undefined)) => Promise<(FieldsSelection<participants_max_fields, R> | undefined)>}),
    min: (participants_min_fieldsPromiseChain & {get: <R extends participants_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_min_fields, R> | undefined)) => Promise<(FieldsSelection<participants_min_fields, R> | undefined)>}),
    stddev: (participants_stddev_fieldsPromiseChain & {get: <R extends participants_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<participants_stddev_fields, R> | undefined)>}),
    stddev_pop: (participants_stddev_pop_fieldsPromiseChain & {get: <R extends participants_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<participants_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (participants_stddev_samp_fieldsPromiseChain & {get: <R extends participants_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<participants_stddev_samp_fields, R> | undefined)>}),
    sum: (participants_sum_fieldsPromiseChain & {get: <R extends participants_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_sum_fields, R> | undefined)) => Promise<(FieldsSelection<participants_sum_fields, R> | undefined)>}),
    var_pop: (participants_var_pop_fieldsPromiseChain & {get: <R extends participants_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<participants_var_pop_fields, R> | undefined)>}),
    var_samp: (participants_var_samp_fieldsPromiseChain & {get: <R extends participants_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<participants_var_samp_fields, R> | undefined)>}),
    variance: (participants_variance_fieldsPromiseChain & {get: <R extends participants_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_variance_fields, R> | undefined)) => Promise<(FieldsSelection<participants_variance_fields, R> | undefined)>})
}


/** aggregate fields of "participants" */
export interface participants_aggregate_fieldsObservableChain{
    avg: (participants_avg_fieldsObservableChain & {get: <R extends participants_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_avg_fields, R> | undefined)) => Observable<(FieldsSelection<participants_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (participants_max_fieldsObservableChain & {get: <R extends participants_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_max_fields, R> | undefined)) => Observable<(FieldsSelection<participants_max_fields, R> | undefined)>}),
    min: (participants_min_fieldsObservableChain & {get: <R extends participants_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_min_fields, R> | undefined)) => Observable<(FieldsSelection<participants_min_fields, R> | undefined)>}),
    stddev: (participants_stddev_fieldsObservableChain & {get: <R extends participants_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<participants_stddev_fields, R> | undefined)>}),
    stddev_pop: (participants_stddev_pop_fieldsObservableChain & {get: <R extends participants_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<participants_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (participants_stddev_samp_fieldsObservableChain & {get: <R extends participants_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<participants_stddev_samp_fields, R> | undefined)>}),
    sum: (participants_sum_fieldsObservableChain & {get: <R extends participants_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_sum_fields, R> | undefined)) => Observable<(FieldsSelection<participants_sum_fields, R> | undefined)>}),
    var_pop: (participants_var_pop_fieldsObservableChain & {get: <R extends participants_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<participants_var_pop_fields, R> | undefined)>}),
    var_samp: (participants_var_samp_fieldsObservableChain & {get: <R extends participants_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<participants_var_samp_fields, R> | undefined)>}),
    variance: (participants_variance_fieldsObservableChain & {get: <R extends participants_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<participants_variance_fields, R> | undefined)) => Observable<(FieldsSelection<participants_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface participants_avg_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface participants_avg_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface participants_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface participants_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface participants_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface participants_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    customer_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    is_online: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    patient_token: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    user_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** response of any mutation on the table "participants" */
export interface participants_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})
}


/** response of any mutation on the table "participants" */
export interface participants_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})
}


/** aggregate stddev on columns */
export interface participants_stddev_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface participants_stddev_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface participants_stddev_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface participants_stddev_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface participants_stddev_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface participants_stddev_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface participants_sum_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface participants_sum_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface participants_var_pop_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface participants_var_pop_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface participants_var_samp_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface participants_var_samp_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface participants_variance_fieldsPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface participants_variance_fieldsObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface query_rootPromiseChain{
    
/** fetch data from the table: "attachment_extensions" */
attachment_extensions: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>})&({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>}),
    
/** fetch aggregated fields from the table: "attachment_extensions" */
attachment_extensions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => attachment_extensions_aggregatePromiseChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Promise<FieldsSelection<attachment_extensions_aggregate, R>>})&(attachment_extensions_aggregatePromiseChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Promise<FieldsSelection<attachment_extensions_aggregate, R>>}),
    
/** fetch data from the table: "attachment_extensions" using primary key columns */
attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>}),
    
/** fetch data from the table: "attachments" using primary key columns */
attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsPromiseChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Promise<(FieldsSelection<attachments, R> | undefined)>}),
    
/** fetch data from the table: "is_participant_online" */
is_participant_online: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>})&({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>}),
    
/** fetch aggregated fields from the table: "is_participant_online" */
is_participant_online_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => is_participant_online_aggregatePromiseChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Promise<FieldsSelection<is_participant_online_aggregate, R>>})&(is_participant_online_aggregatePromiseChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Promise<FieldsSelection<is_participant_online_aggregate, R>>}),
    
/** fetch data from the table: "is_participant_online" using primary key columns */
is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Promise<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>})&(messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>}),
    
/** fetch data from the table: "messages" using primary key columns */
messages_by_pk: ((args: {id: Scalars['Int']}) => messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** fetch data from the table: "participant_room" */
participant_room: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_room" */
participant_room_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>}),
    
/** fetch data from the table: "participant_room" using primary key columns */
participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomPromiseChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Promise<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** fetch data from the table: "participant_type" */
participant_type: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>})&({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_type" */
participant_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => participant_type_aggregatePromiseChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Promise<FieldsSelection<participant_type_aggregate, R>>})&(participant_type_aggregatePromiseChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Promise<FieldsSelection<participant_type_aggregate, R>>}),
    
/** fetch data from the table: "participant_type" using primary key columns */
participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Promise<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>})&(participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>}),
    
/** fetch data from the table: "participants" using primary key columns */
participants_by_pk: ((args: {id: Scalars['Int']}) => participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Promise<(FieldsSelection<participants, R> | undefined)>}),
    
/** fetch data from the table: "room_status" */
room_status: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>})&({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>}),
    
/** fetch aggregated fields from the table: "room_status" */
room_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => room_status_aggregatePromiseChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Promise<FieldsSelection<room_status_aggregate, R>>})&(room_status_aggregatePromiseChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Promise<FieldsSelection<room_status_aggregate, R>>}),
    
/** fetch data from the table: "room_status" using primary key columns */
room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Promise<(FieldsSelection<room_status, R> | undefined)>}),
    
/** fetch data from the table: "room_type" */
room_type: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>})&({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>}),
    
/** fetch aggregated fields from the table: "room_type" */
room_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => room_type_aggregatePromiseChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Promise<FieldsSelection<room_type_aggregate, R>>})&(room_type_aggregatePromiseChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Promise<FieldsSelection<room_type_aggregate, R>>}),
    
/** fetch data from the table: "room_type" using primary key columns */
room_type_by_pk: ((args: {type: Scalars['String']}) => room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Promise<(FieldsSelection<room_type, R> | undefined)>}),
    
/** fetch data from the table: "room_visibility" */
room_visibility: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>})&({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>}),
    
/** fetch aggregated fields from the table: "room_visibility" */
room_visibility_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => room_visibility_aggregatePromiseChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Promise<FieldsSelection<room_visibility_aggregate, R>>})&(room_visibility_aggregatePromiseChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Promise<FieldsSelection<room_visibility_aggregate, R>>}),
    
/** fetch data from the table: "room_visibility" using primary key columns */
room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Promise<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>}),
    
/** fetch data from the table: "rooms" using primary key columns */
rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Promise<(FieldsSelection<rooms, R> | undefined)>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** fetch data from the table: "ticket_messages" using primary key columns */
ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** fetch data from the table: "ticket_participants" using primary key columns */
ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** fetch data from the table: "ticket_states" */
ticket_states: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>})&({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>}),
    
/** fetch aggregated fields from the table: "ticket_states" */
ticket_states_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => ticket_states_aggregatePromiseChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Promise<FieldsSelection<ticket_states_aggregate, R>>})&(ticket_states_aggregatePromiseChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Promise<FieldsSelection<ticket_states_aggregate, R>>}),
    
/** fetch data from the table: "ticket_states" using primary key columns */
ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Promise<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>}),
    
/** fetch data from the table: "tickets" using primary key columns */
tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Promise<(FieldsSelection<tickets, R> | undefined)>}),
    
/** fetch data from the table: "users" */
users: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => {get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>})&({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>}),
    
/** fetch aggregated fields from the table: "users" */
users_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => users_aggregatePromiseChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Promise<FieldsSelection<users_aggregate, R>>})&(users_aggregatePromiseChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Promise<FieldsSelection<users_aggregate, R>>}),
    
/** fetch data from the table: "users" using primary key columns */
users_by_pk: ((args: {id: Scalars['uuid']}) => usersPromiseChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Promise<(FieldsSelection<users, R> | undefined)>})
}

export interface query_rootObservableChain{
    
/** fetch data from the table: "attachment_extensions" */
attachment_extensions: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>})&({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>}),
    
/** fetch aggregated fields from the table: "attachment_extensions" */
attachment_extensions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => attachment_extensions_aggregateObservableChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Observable<FieldsSelection<attachment_extensions_aggregate, R>>})&(attachment_extensions_aggregateObservableChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Observable<FieldsSelection<attachment_extensions_aggregate, R>>}),
    
/** fetch data from the table: "attachment_extensions" using primary key columns */
attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>}),
    
/** fetch data from the table: "attachments" using primary key columns */
attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsObservableChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Observable<(FieldsSelection<attachments, R> | undefined)>}),
    
/** fetch data from the table: "is_participant_online" */
is_participant_online: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>})&({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>}),
    
/** fetch aggregated fields from the table: "is_participant_online" */
is_participant_online_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => is_participant_online_aggregateObservableChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Observable<FieldsSelection<is_participant_online_aggregate, R>>})&(is_participant_online_aggregateObservableChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Observable<FieldsSelection<is_participant_online_aggregate, R>>}),
    
/** fetch data from the table: "is_participant_online" using primary key columns */
is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Observable<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>})&(messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>}),
    
/** fetch data from the table: "messages" using primary key columns */
messages_by_pk: ((args: {id: Scalars['Int']}) => messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** fetch data from the table: "participant_room" */
participant_room: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_room" */
participant_room_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>}),
    
/** fetch data from the table: "participant_room" using primary key columns */
participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomObservableChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Observable<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** fetch data from the table: "participant_type" */
participant_type: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>})&({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_type" */
participant_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => participant_type_aggregateObservableChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Observable<FieldsSelection<participant_type_aggregate, R>>})&(participant_type_aggregateObservableChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Observable<FieldsSelection<participant_type_aggregate, R>>}),
    
/** fetch data from the table: "participant_type" using primary key columns */
participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Observable<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>})&(participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>}),
    
/** fetch data from the table: "participants" using primary key columns */
participants_by_pk: ((args: {id: Scalars['Int']}) => participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Observable<(FieldsSelection<participants, R> | undefined)>}),
    
/** fetch data from the table: "room_status" */
room_status: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>})&({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>}),
    
/** fetch aggregated fields from the table: "room_status" */
room_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => room_status_aggregateObservableChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Observable<FieldsSelection<room_status_aggregate, R>>})&(room_status_aggregateObservableChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Observable<FieldsSelection<room_status_aggregate, R>>}),
    
/** fetch data from the table: "room_status" using primary key columns */
room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Observable<(FieldsSelection<room_status, R> | undefined)>}),
    
/** fetch data from the table: "room_type" */
room_type: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>})&({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>}),
    
/** fetch aggregated fields from the table: "room_type" */
room_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => room_type_aggregateObservableChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Observable<FieldsSelection<room_type_aggregate, R>>})&(room_type_aggregateObservableChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Observable<FieldsSelection<room_type_aggregate, R>>}),
    
/** fetch data from the table: "room_type" using primary key columns */
room_type_by_pk: ((args: {type: Scalars['String']}) => room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Observable<(FieldsSelection<room_type, R> | undefined)>}),
    
/** fetch data from the table: "room_visibility" */
room_visibility: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>})&({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>}),
    
/** fetch aggregated fields from the table: "room_visibility" */
room_visibility_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => room_visibility_aggregateObservableChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Observable<FieldsSelection<room_visibility_aggregate, R>>})&(room_visibility_aggregateObservableChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Observable<FieldsSelection<room_visibility_aggregate, R>>}),
    
/** fetch data from the table: "room_visibility" using primary key columns */
room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Observable<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>}),
    
/** fetch data from the table: "rooms" using primary key columns */
rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Observable<(FieldsSelection<rooms, R> | undefined)>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** fetch data from the table: "ticket_messages" using primary key columns */
ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** fetch data from the table: "ticket_participants" using primary key columns */
ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** fetch data from the table: "ticket_states" */
ticket_states: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>})&({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>}),
    
/** fetch aggregated fields from the table: "ticket_states" */
ticket_states_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => ticket_states_aggregateObservableChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Observable<FieldsSelection<ticket_states_aggregate, R>>})&(ticket_states_aggregateObservableChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Observable<FieldsSelection<ticket_states_aggregate, R>>}),
    
/** fetch data from the table: "ticket_states" using primary key columns */
ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Observable<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>}),
    
/** fetch data from the table: "tickets" using primary key columns */
tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Observable<(FieldsSelection<tickets, R> | undefined)>}),
    
/** fetch data from the table: "users" */
users: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => {get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>})&({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>}),
    
/** fetch aggregated fields from the table: "users" */
users_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => users_aggregateObservableChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Observable<FieldsSelection<users_aggregate, R>>})&(users_aggregateObservableChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Observable<FieldsSelection<users_aggregate, R>>}),
    
/** fetch data from the table: "users" using primary key columns */
users_by_pk: ((args: {id: Scalars['uuid']}) => usersObservableChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Observable<(FieldsSelection<users, R> | undefined)>})
}


/** columns and relationships of "room_status" */
export interface room_statusPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>}),
    status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "room_status" */
export interface room_statusObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>}),
    status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "room_status" */
export interface room_status_aggregatePromiseChain{
    aggregate: (room_status_aggregate_fieldsPromiseChain & {get: <R extends room_status_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<room_status_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>})
}


/** aggregated selection of "room_status" */
export interface room_status_aggregateObservableChain{
    aggregate: (room_status_aggregate_fieldsObservableChain & {get: <R extends room_status_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<room_status_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>})
}


/** aggregate fields of "room_status" */
export interface room_status_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (room_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (room_status_max_fieldsPromiseChain & {get: <R extends room_status_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_max_fields, R> | undefined)) => Promise<(FieldsSelection<room_status_max_fields, R> | undefined)>}),
    min: (room_status_min_fieldsPromiseChain & {get: <R extends room_status_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_min_fields, R> | undefined)) => Promise<(FieldsSelection<room_status_min_fields, R> | undefined)>})
}


/** aggregate fields of "room_status" */
export interface room_status_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (room_status_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (room_status_max_fieldsObservableChain & {get: <R extends room_status_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_max_fields, R> | undefined)) => Observable<(FieldsSelection<room_status_max_fields, R> | undefined)>}),
    min: (room_status_min_fieldsObservableChain & {get: <R extends room_status_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_status_min_fields, R> | undefined)) => Observable<(FieldsSelection<room_status_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface room_status_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface room_status_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_status_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_status_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "room_status" */
export interface room_status_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>})
}


/** response of any mutation on the table "room_status" */
export interface room_status_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>})
}


/** columns and relationships of "room_type" */
export interface room_typePromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "room_type" */
export interface room_typeObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "room_type" */
export interface room_type_aggregatePromiseChain{
    aggregate: (room_type_aggregate_fieldsPromiseChain & {get: <R extends room_type_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<room_type_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>})
}


/** aggregated selection of "room_type" */
export interface room_type_aggregateObservableChain{
    aggregate: (room_type_aggregate_fieldsObservableChain & {get: <R extends room_type_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<room_type_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>})
}


/** aggregate fields of "room_type" */
export interface room_type_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (room_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (room_type_max_fieldsPromiseChain & {get: <R extends room_type_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_max_fields, R> | undefined)) => Promise<(FieldsSelection<room_type_max_fields, R> | undefined)>}),
    min: (room_type_min_fieldsPromiseChain & {get: <R extends room_type_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_min_fields, R> | undefined)) => Promise<(FieldsSelection<room_type_min_fields, R> | undefined)>})
}


/** aggregate fields of "room_type" */
export interface room_type_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (room_type_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (room_type_max_fieldsObservableChain & {get: <R extends room_type_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_max_fields, R> | undefined)) => Observable<(FieldsSelection<room_type_max_fields, R> | undefined)>}),
    min: (room_type_min_fieldsObservableChain & {get: <R extends room_type_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_type_min_fields, R> | undefined)) => Observable<(FieldsSelection<room_type_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface room_type_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface room_type_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_type_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_type_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "room_type" */
export interface room_type_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>})
}


/** response of any mutation on the table "room_type" */
export interface room_type_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>})
}


/** columns and relationships of "room_visibility" */
export interface room_visibilityPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "room_visibility" */
export interface room_visibilityObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "room_visibility" */
export interface room_visibility_aggregatePromiseChain{
    aggregate: (room_visibility_aggregate_fieldsPromiseChain & {get: <R extends room_visibility_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<room_visibility_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>})
}


/** aggregated selection of "room_visibility" */
export interface room_visibility_aggregateObservableChain{
    aggregate: (room_visibility_aggregate_fieldsObservableChain & {get: <R extends room_visibility_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<room_visibility_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>})
}


/** aggregate fields of "room_visibility" */
export interface room_visibility_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (room_visibility_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (room_visibility_max_fieldsPromiseChain & {get: <R extends room_visibility_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_max_fields, R> | undefined)) => Promise<(FieldsSelection<room_visibility_max_fields, R> | undefined)>}),
    min: (room_visibility_min_fieldsPromiseChain & {get: <R extends room_visibility_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_min_fields, R> | undefined)) => Promise<(FieldsSelection<room_visibility_min_fields, R> | undefined)>})
}


/** aggregate fields of "room_visibility" */
export interface room_visibility_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (room_visibility_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (room_visibility_max_fieldsObservableChain & {get: <R extends room_visibility_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_max_fields, R> | undefined)) => Observable<(FieldsSelection<room_visibility_max_fields, R> | undefined)>}),
    min: (room_visibility_min_fieldsObservableChain & {get: <R extends room_visibility_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility_min_fields, R> | undefined)) => Observable<(FieldsSelection<room_visibility_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface room_visibility_max_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface room_visibility_max_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_visibility_min_fieldsPromiseChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface room_visibility_min_fieldsObservableChain{
    description: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "room_visibility" */
export interface room_visibility_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>})
}


/** response of any mutation on the table "room_visibility" */
export interface room_visibility_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>})
}


/** columns and relationships of "rooms" */
export interface roomsPromiseChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>})&(messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
room_status: (room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>) => Promise<FieldsSelection<room_status, R>>}),
    
/** An object relationship */
room_type: (room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>) => Promise<FieldsSelection<room_type, R>>}),
    
/** An object relationship */
room_visibility: (room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>) => Promise<FieldsSelection<room_visibility, R>>}),
    status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}


/** columns and relationships of "rooms" */
export interface roomsObservableChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>})&(messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
participant_rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>}),
    
/** An aggregate relationship */
participant_rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>}),
    
/** An object relationship */
room_status: (room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>) => Observable<FieldsSelection<room_status, R>>}),
    
/** An object relationship */
room_type: (room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>) => Observable<FieldsSelection<room_type, R>>}),
    
/** An object relationship */
room_visibility: (room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>) => Observable<FieldsSelection<room_visibility, R>>}),
    status: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}


/** aggregated selection of "rooms" */
export interface rooms_aggregatePromiseChain{
    aggregate: (rooms_aggregate_fieldsPromiseChain & {get: <R extends rooms_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})
}


/** aggregated selection of "rooms" */
export interface rooms_aggregateObservableChain{
    aggregate: (rooms_aggregate_fieldsObservableChain & {get: <R extends rooms_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})
}


/** aggregate fields of "rooms" */
export interface rooms_aggregate_fieldsPromiseChain{
    avg: (rooms_avg_fieldsPromiseChain & {get: <R extends rooms_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_avg_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (rooms_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (rooms_max_fieldsPromiseChain & {get: <R extends rooms_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_max_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_max_fields, R> | undefined)>}),
    min: (rooms_min_fieldsPromiseChain & {get: <R extends rooms_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_min_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_min_fields, R> | undefined)>}),
    stddev: (rooms_stddev_fieldsPromiseChain & {get: <R extends rooms_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_stddev_fields, R> | undefined)>}),
    stddev_pop: (rooms_stddev_pop_fieldsPromiseChain & {get: <R extends rooms_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_pop_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (rooms_stddev_samp_fieldsPromiseChain & {get: <R extends rooms_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_samp_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_stddev_samp_fields, R> | undefined)>}),
    sum: (rooms_sum_fieldsPromiseChain & {get: <R extends rooms_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_sum_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_sum_fields, R> | undefined)>}),
    var_pop: (rooms_var_pop_fieldsPromiseChain & {get: <R extends rooms_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_var_pop_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_var_pop_fields, R> | undefined)>}),
    var_samp: (rooms_var_samp_fieldsPromiseChain & {get: <R extends rooms_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_var_samp_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_var_samp_fields, R> | undefined)>}),
    variance: (rooms_variance_fieldsPromiseChain & {get: <R extends rooms_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_variance_fields, R> | undefined)) => Promise<(FieldsSelection<rooms_variance_fields, R> | undefined)>})
}


/** aggregate fields of "rooms" */
export interface rooms_aggregate_fieldsObservableChain{
    avg: (rooms_avg_fieldsObservableChain & {get: <R extends rooms_avg_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_avg_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_avg_fields, R> | undefined)>}),
    count: ((args?: {columns?: (rooms_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (rooms_max_fieldsObservableChain & {get: <R extends rooms_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_max_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_max_fields, R> | undefined)>}),
    min: (rooms_min_fieldsObservableChain & {get: <R extends rooms_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_min_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_min_fields, R> | undefined)>}),
    stddev: (rooms_stddev_fieldsObservableChain & {get: <R extends rooms_stddev_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_stddev_fields, R> | undefined)>}),
    stddev_pop: (rooms_stddev_pop_fieldsObservableChain & {get: <R extends rooms_stddev_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_pop_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_stddev_pop_fields, R> | undefined)>}),
    stddev_samp: (rooms_stddev_samp_fieldsObservableChain & {get: <R extends rooms_stddev_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_stddev_samp_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_stddev_samp_fields, R> | undefined)>}),
    sum: (rooms_sum_fieldsObservableChain & {get: <R extends rooms_sum_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_sum_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_sum_fields, R> | undefined)>}),
    var_pop: (rooms_var_pop_fieldsObservableChain & {get: <R extends rooms_var_pop_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_var_pop_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_var_pop_fields, R> | undefined)>}),
    var_samp: (rooms_var_samp_fieldsObservableChain & {get: <R extends rooms_var_samp_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_var_samp_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_var_samp_fields, R> | undefined)>}),
    variance: (rooms_variance_fieldsObservableChain & {get: <R extends rooms_variance_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<rooms_variance_fields, R> | undefined)) => Observable<(FieldsSelection<rooms_variance_fields, R> | undefined)>})
}


/** aggregate avg on columns */
export interface rooms_avg_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate avg on columns */
export interface rooms_avg_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate max on columns */
export interface rooms_max_fieldsPromiseChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface rooms_max_fieldsObservableChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface rooms_min_fieldsPromiseChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface rooms_min_fieldsObservableChain{
    access_code: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    creator_customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    direct_key: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    status: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    type: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    visibility: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "rooms" */
export interface rooms_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})
}


/** response of any mutation on the table "rooms" */
export interface rooms_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})
}


/** aggregate stddev on columns */
export interface rooms_stddev_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev on columns */
export interface rooms_stddev_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface rooms_stddev_pop_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_pop on columns */
export interface rooms_stddev_pop_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface rooms_stddev_samp_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate stddev_samp on columns */
export interface rooms_stddev_samp_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate sum on columns */
export interface rooms_sum_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Promise<(Scalars['Int'] | undefined)>})
}


/** aggregate sum on columns */
export interface rooms_sum_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Int'] | undefined)) => Observable<(Scalars['Int'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface rooms_var_pop_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_pop on columns */
export interface rooms_var_pop_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface rooms_var_samp_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate var_samp on columns */
export interface rooms_var_samp_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface rooms_variance_fieldsPromiseChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Promise<(Scalars['Float'] | undefined)>})
}


/** aggregate variance on columns */
export interface rooms_variance_fieldsObservableChain{
    creator_participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['Float'] | undefined)) => Observable<(Scalars['Float'] | undefined)>})
}

export interface subscription_rootPromiseChain{
    
/** fetch data from the table: "attachment_extensions" */
attachment_extensions: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>})&({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Promise<FieldsSelection<attachment_extensions, R>[]>}),
    
/** fetch aggregated fields from the table: "attachment_extensions" */
attachment_extensions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => attachment_extensions_aggregatePromiseChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Promise<FieldsSelection<attachment_extensions_aggregate, R>>})&(attachment_extensions_aggregatePromiseChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Promise<FieldsSelection<attachment_extensions_aggregate, R>>}),
    
/** fetch data from the table: "attachment_extensions" using primary key columns */
attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsPromiseChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Promise<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>}),
    
/** fetch data from the table: "attachments" using primary key columns */
attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsPromiseChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Promise<(FieldsSelection<attachments, R> | undefined)>}),
    
/** fetch data from the table: "is_participant_online" */
is_participant_online: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>})&({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Promise<FieldsSelection<is_participant_online, R>[]>}),
    
/** fetch aggregated fields from the table: "is_participant_online" */
is_participant_online_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => is_participant_online_aggregatePromiseChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Promise<FieldsSelection<is_participant_online_aggregate, R>>})&(is_participant_online_aggregatePromiseChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Promise<FieldsSelection<is_participant_online_aggregate, R>>}),
    
/** fetch data from the table: "is_participant_online" using primary key columns */
is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlinePromiseChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Promise<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Promise<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>})&(messages_aggregatePromiseChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Promise<FieldsSelection<messages_aggregate, R>>}),
    
/** fetch data from the table: "messages" using primary key columns */
messages_by_pk: ((args: {id: Scalars['Int']}) => messagesPromiseChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Promise<(FieldsSelection<messages, R> | undefined)>}),
    
/** fetch data from the table: "participant_room" */
participant_room: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Promise<FieldsSelection<participant_room, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_room" */
participant_room_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregatePromiseChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Promise<FieldsSelection<participant_room_aggregate, R>>}),
    
/** fetch data from the table: "participant_room" using primary key columns */
participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomPromiseChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Promise<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** fetch data from the table: "participant_type" */
participant_type: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>})&({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Promise<FieldsSelection<participant_type, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_type" */
participant_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => participant_type_aggregatePromiseChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Promise<FieldsSelection<participant_type_aggregate, R>>})&(participant_type_aggregatePromiseChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Promise<FieldsSelection<participant_type_aggregate, R>>}),
    
/** fetch data from the table: "participant_type" using primary key columns */
participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typePromiseChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Promise<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Promise<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>})&(participants_aggregatePromiseChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Promise<FieldsSelection<participants_aggregate, R>>}),
    
/** fetch data from the table: "participants" using primary key columns */
participants_by_pk: ((args: {id: Scalars['Int']}) => participantsPromiseChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Promise<(FieldsSelection<participants, R> | undefined)>}),
    
/** fetch data from the table: "room_status" */
room_status: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>})&({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Promise<FieldsSelection<room_status, R>[]>}),
    
/** fetch aggregated fields from the table: "room_status" */
room_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => room_status_aggregatePromiseChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Promise<FieldsSelection<room_status_aggregate, R>>})&(room_status_aggregatePromiseChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Promise<FieldsSelection<room_status_aggregate, R>>}),
    
/** fetch data from the table: "room_status" using primary key columns */
room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusPromiseChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Promise<(FieldsSelection<room_status, R> | undefined)>}),
    
/** fetch data from the table: "room_type" */
room_type: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>})&({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Promise<FieldsSelection<room_type, R>[]>}),
    
/** fetch aggregated fields from the table: "room_type" */
room_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => room_type_aggregatePromiseChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Promise<FieldsSelection<room_type_aggregate, R>>})&(room_type_aggregatePromiseChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Promise<FieldsSelection<room_type_aggregate, R>>}),
    
/** fetch data from the table: "room_type" using primary key columns */
room_type_by_pk: ((args: {type: Scalars['String']}) => room_typePromiseChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Promise<(FieldsSelection<room_type, R> | undefined)>}),
    
/** fetch data from the table: "room_visibility" */
room_visibility: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>})&({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Promise<FieldsSelection<room_visibility, R>[]>}),
    
/** fetch aggregated fields from the table: "room_visibility" */
room_visibility_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => room_visibility_aggregatePromiseChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Promise<FieldsSelection<room_visibility_aggregate, R>>})&(room_visibility_aggregatePromiseChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Promise<FieldsSelection<room_visibility_aggregate, R>>}),
    
/** fetch data from the table: "room_visibility" using primary key columns */
room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityPromiseChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Promise<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Promise<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregatePromiseChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Promise<FieldsSelection<rooms_aggregate, R>>}),
    
/** fetch data from the table: "rooms" using primary key columns */
rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsPromiseChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Promise<(FieldsSelection<rooms, R> | undefined)>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** fetch data from the table: "ticket_messages" using primary key columns */
ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesPromiseChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Promise<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** fetch data from the table: "ticket_participants" using primary key columns */
ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** fetch data from the table: "ticket_states" */
ticket_states: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>})&({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>}),
    
/** fetch aggregated fields from the table: "ticket_states" */
ticket_states_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => ticket_states_aggregatePromiseChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Promise<FieldsSelection<ticket_states_aggregate, R>>})&(ticket_states_aggregatePromiseChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Promise<FieldsSelection<ticket_states_aggregate, R>>}),
    
/** fetch data from the table: "ticket_states" using primary key columns */
ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Promise<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>}),
    
/** fetch data from the table: "tickets" using primary key columns */
tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Promise<(FieldsSelection<tickets, R> | undefined)>}),
    
/** fetch data from the table: "users" */
users: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => {get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>})&({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>}),
    
/** fetch aggregated fields from the table: "users" */
users_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => users_aggregatePromiseChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Promise<FieldsSelection<users_aggregate, R>>})&(users_aggregatePromiseChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Promise<FieldsSelection<users_aggregate, R>>}),
    
/** fetch data from the table: "users" using primary key columns */
users_by_pk: ((args: {id: Scalars['uuid']}) => usersPromiseChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Promise<(FieldsSelection<users, R> | undefined)>})
}

export interface subscription_rootObservableChain{
    
/** fetch data from the table: "attachment_extensions" */
attachment_extensions: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>})&({get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions, R>[]) => Observable<FieldsSelection<attachment_extensions, R>[]>}),
    
/** fetch aggregated fields from the table: "attachment_extensions" */
attachment_extensions_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachment_extensions_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachment_extensions_order_by[] | null),
/** filter the rows returned */
where?: (attachment_extensions_bool_exp | null)}) => attachment_extensions_aggregateObservableChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Observable<FieldsSelection<attachment_extensions_aggregate, R>>})&(attachment_extensions_aggregateObservableChain & {get: <R extends attachment_extensions_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachment_extensions_aggregate, R>) => Observable<FieldsSelection<attachment_extensions_aggregate, R>>}),
    
/** fetch data from the table: "attachment_extensions" using primary key columns */
attachment_extensions_by_pk: ((args: {name: Scalars['String']}) => attachment_extensionsObservableChain & {get: <R extends attachment_extensionsRequest>(request: R, defaultValue?: (FieldsSelection<attachment_extensions, R> | undefined)) => Observable<(FieldsSelection<attachment_extensions, R> | undefined)>}),
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>}),
    
/** fetch data from the table: "attachments" using primary key columns */
attachments_by_pk: ((args: {id: Scalars['uuid']}) => attachmentsObservableChain & {get: <R extends attachmentsRequest>(request: R, defaultValue?: (FieldsSelection<attachments, R> | undefined)) => Observable<(FieldsSelection<attachments, R> | undefined)>}),
    
/** fetch data from the table: "is_participant_online" */
is_participant_online: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>})&({get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online, R>[]) => Observable<FieldsSelection<is_participant_online, R>[]>}),
    
/** fetch aggregated fields from the table: "is_participant_online" */
is_participant_online_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (is_participant_online_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (is_participant_online_order_by[] | null),
/** filter the rows returned */
where?: (is_participant_online_bool_exp | null)}) => is_participant_online_aggregateObservableChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Observable<FieldsSelection<is_participant_online_aggregate, R>>})&(is_participant_online_aggregateObservableChain & {get: <R extends is_participant_online_aggregateRequest>(request: R, defaultValue?: FieldsSelection<is_participant_online_aggregate, R>) => Observable<FieldsSelection<is_participant_online_aggregate, R>>}),
    
/** fetch data from the table: "is_participant_online" using primary key columns */
is_participant_online_by_pk: ((args: {is_online: Scalars['String']}) => is_participant_onlineObservableChain & {get: <R extends is_participant_onlineRequest>(request: R, defaultValue?: (FieldsSelection<is_participant_online, R> | undefined)) => Observable<(FieldsSelection<is_participant_online, R> | undefined)>}),
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => {get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>})&({get: <R extends messagesRequest>(request: R, defaultValue?: FieldsSelection<messages, R>[]) => Observable<FieldsSelection<messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (messages_order_by[] | null),
/** filter the rows returned */
where?: (messages_bool_exp | null)}) => messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>})&(messages_aggregateObservableChain & {get: <R extends messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<messages_aggregate, R>) => Observable<FieldsSelection<messages_aggregate, R>>}),
    
/** fetch data from the table: "messages" using primary key columns */
messages_by_pk: ((args: {id: Scalars['Int']}) => messagesObservableChain & {get: <R extends messagesRequest>(request: R, defaultValue?: (FieldsSelection<messages, R> | undefined)) => Observable<(FieldsSelection<messages, R> | undefined)>}),
    
/** fetch data from the table: "participant_room" */
participant_room: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => {get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>})&({get: <R extends participant_roomRequest>(request: R, defaultValue?: FieldsSelection<participant_room, R>[]) => Observable<FieldsSelection<participant_room, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_room" */
participant_room_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_room_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_room_order_by[] | null),
/** filter the rows returned */
where?: (participant_room_bool_exp | null)}) => participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>})&(participant_room_aggregateObservableChain & {get: <R extends participant_room_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_room_aggregate, R>) => Observable<FieldsSelection<participant_room_aggregate, R>>}),
    
/** fetch data from the table: "participant_room" using primary key columns */
participant_room_by_pk: ((args: {id: Scalars['Int']}) => participant_roomObservableChain & {get: <R extends participant_roomRequest>(request: R, defaultValue?: (FieldsSelection<participant_room, R> | undefined)) => Observable<(FieldsSelection<participant_room, R> | undefined)>}),
    
/** fetch data from the table: "participant_type" */
participant_type: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => {get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>})&({get: <R extends participant_typeRequest>(request: R, defaultValue?: FieldsSelection<participant_type, R>[]) => Observable<FieldsSelection<participant_type, R>[]>}),
    
/** fetch aggregated fields from the table: "participant_type" */
participant_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participant_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participant_type_order_by[] | null),
/** filter the rows returned */
where?: (participant_type_bool_exp | null)}) => participant_type_aggregateObservableChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Observable<FieldsSelection<participant_type_aggregate, R>>})&(participant_type_aggregateObservableChain & {get: <R extends participant_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participant_type_aggregate, R>) => Observable<FieldsSelection<participant_type_aggregate, R>>}),
    
/** fetch data from the table: "participant_type" using primary key columns */
participant_type_by_pk: ((args: {type: Scalars['String']}) => participant_typeObservableChain & {get: <R extends participant_typeRequest>(request: R, defaultValue?: (FieldsSelection<participant_type, R> | undefined)) => Observable<(FieldsSelection<participant_type, R> | undefined)>}),
    
/** An array relationship */
participants: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => {get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>})&({get: <R extends participantsRequest>(request: R, defaultValue?: FieldsSelection<participants, R>[]) => Observable<FieldsSelection<participants, R>[]>}),
    
/** An aggregate relationship */
participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (participants_order_by[] | null),
/** filter the rows returned */
where?: (participants_bool_exp | null)}) => participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>})&(participants_aggregateObservableChain & {get: <R extends participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<participants_aggregate, R>) => Observable<FieldsSelection<participants_aggregate, R>>}),
    
/** fetch data from the table: "participants" using primary key columns */
participants_by_pk: ((args: {id: Scalars['Int']}) => participantsObservableChain & {get: <R extends participantsRequest>(request: R, defaultValue?: (FieldsSelection<participants, R> | undefined)) => Observable<(FieldsSelection<participants, R> | undefined)>}),
    
/** fetch data from the table: "room_status" */
room_status: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => {get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>})&({get: <R extends room_statusRequest>(request: R, defaultValue?: FieldsSelection<room_status, R>[]) => Observable<FieldsSelection<room_status, R>[]>}),
    
/** fetch aggregated fields from the table: "room_status" */
room_status_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_status_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_status_order_by[] | null),
/** filter the rows returned */
where?: (room_status_bool_exp | null)}) => room_status_aggregateObservableChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Observable<FieldsSelection<room_status_aggregate, R>>})&(room_status_aggregateObservableChain & {get: <R extends room_status_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_status_aggregate, R>) => Observable<FieldsSelection<room_status_aggregate, R>>}),
    
/** fetch data from the table: "room_status" using primary key columns */
room_status_by_pk: ((args: {status: Scalars['String']}) => room_statusObservableChain & {get: <R extends room_statusRequest>(request: R, defaultValue?: (FieldsSelection<room_status, R> | undefined)) => Observable<(FieldsSelection<room_status, R> | undefined)>}),
    
/** fetch data from the table: "room_type" */
room_type: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => {get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>})&({get: <R extends room_typeRequest>(request: R, defaultValue?: FieldsSelection<room_type, R>[]) => Observable<FieldsSelection<room_type, R>[]>}),
    
/** fetch aggregated fields from the table: "room_type" */
room_type_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_type_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_type_order_by[] | null),
/** filter the rows returned */
where?: (room_type_bool_exp | null)}) => room_type_aggregateObservableChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Observable<FieldsSelection<room_type_aggregate, R>>})&(room_type_aggregateObservableChain & {get: <R extends room_type_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_type_aggregate, R>) => Observable<FieldsSelection<room_type_aggregate, R>>}),
    
/** fetch data from the table: "room_type" using primary key columns */
room_type_by_pk: ((args: {type: Scalars['String']}) => room_typeObservableChain & {get: <R extends room_typeRequest>(request: R, defaultValue?: (FieldsSelection<room_type, R> | undefined)) => Observable<(FieldsSelection<room_type, R> | undefined)>}),
    
/** fetch data from the table: "room_visibility" */
room_visibility: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => {get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>})&({get: <R extends room_visibilityRequest>(request: R, defaultValue?: FieldsSelection<room_visibility, R>[]) => Observable<FieldsSelection<room_visibility, R>[]>}),
    
/** fetch aggregated fields from the table: "room_visibility" */
room_visibility_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (room_visibility_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (room_visibility_order_by[] | null),
/** filter the rows returned */
where?: (room_visibility_bool_exp | null)}) => room_visibility_aggregateObservableChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Observable<FieldsSelection<room_visibility_aggregate, R>>})&(room_visibility_aggregateObservableChain & {get: <R extends room_visibility_aggregateRequest>(request: R, defaultValue?: FieldsSelection<room_visibility_aggregate, R>) => Observable<FieldsSelection<room_visibility_aggregate, R>>}),
    
/** fetch data from the table: "room_visibility" using primary key columns */
room_visibility_by_pk: ((args: {visibility: Scalars['String']}) => room_visibilityObservableChain & {get: <R extends room_visibilityRequest>(request: R, defaultValue?: (FieldsSelection<room_visibility, R> | undefined)) => Observable<(FieldsSelection<room_visibility, R> | undefined)>}),
    
/** fetch data from the table: "rooms" */
rooms: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => {get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>})&({get: <R extends roomsRequest>(request: R, defaultValue?: FieldsSelection<rooms, R>[]) => Observable<FieldsSelection<rooms, R>[]>}),
    
/** An aggregate relationship */
rooms_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (rooms_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (rooms_order_by[] | null),
/** filter the rows returned */
where?: (rooms_bool_exp | null)}) => rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>})&(rooms_aggregateObservableChain & {get: <R extends rooms_aggregateRequest>(request: R, defaultValue?: FieldsSelection<rooms_aggregate, R>) => Observable<FieldsSelection<rooms_aggregate, R>>}),
    
/** fetch data from the table: "rooms" using primary key columns */
rooms_by_pk: ((args: {id: Scalars['Int']}) => roomsObservableChain & {get: <R extends roomsRequest>(request: R, defaultValue?: (FieldsSelection<rooms, R> | undefined)) => Observable<(FieldsSelection<rooms, R> | undefined)>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** fetch data from the table: "ticket_messages" using primary key columns */
ticket_messages_by_pk: ((args: {id: Scalars['uuid']}) => ticket_messagesObservableChain & {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages, R> | undefined)) => Observable<(FieldsSelection<ticket_messages, R> | undefined)>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** fetch data from the table: "ticket_participants" using primary key columns */
ticket_participants_by_pk: ((args: {participant_id: Scalars['uuid'],ticket_id: Scalars['uuid']}) => ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    
/** fetch data from the table: "ticket_states" */
ticket_states: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>})&({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>}),
    
/** fetch aggregated fields from the table: "ticket_states" */
ticket_states_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_states_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_states_order_by[] | null),
/** filter the rows returned */
where?: (ticket_states_bool_exp | null)}) => ticket_states_aggregateObservableChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Observable<FieldsSelection<ticket_states_aggregate, R>>})&(ticket_states_aggregateObservableChain & {get: <R extends ticket_states_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_states_aggregate, R>) => Observable<FieldsSelection<ticket_states_aggregate, R>>}),
    
/** fetch data from the table: "ticket_states" using primary key columns */
ticket_states_by_pk: ((args: {name: Scalars['String']}) => ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states, R> | undefined)) => Observable<(FieldsSelection<ticket_states, R> | undefined)>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>}),
    
/** fetch data from the table: "tickets" using primary key columns */
tickets_by_pk: ((args: {id: Scalars['uuid']}) => ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: (FieldsSelection<tickets, R> | undefined)) => Observable<(FieldsSelection<tickets, R> | undefined)>}),
    
/** fetch data from the table: "users" */
users: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => {get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>})&({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>}),
    
/** fetch aggregated fields from the table: "users" */
users_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (users_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (users_order_by[] | null),
/** filter the rows returned */
where?: (users_bool_exp | null)}) => users_aggregateObservableChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Observable<FieldsSelection<users_aggregate, R>>})&(users_aggregateObservableChain & {get: <R extends users_aggregateRequest>(request: R, defaultValue?: FieldsSelection<users_aggregate, R>) => Observable<FieldsSelection<users_aggregate, R>>}),
    
/** fetch data from the table: "users" using primary key columns */
users_by_pk: ((args: {id: Scalars['uuid']}) => usersObservableChain & {get: <R extends usersRequest>(request: R, defaultValue?: (FieldsSelection<users, R> | undefined)) => Observable<(FieldsSelection<users, R> | undefined)>})
}


/** columns and relationships of "ticket_messages" */
export interface ticket_messagesPromiseChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>}),
    
/** An object relationship */
author: (ticket_participantsPromiseChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Promise<(FieldsSelection<ticket_participants, R> | undefined)>}),
    author_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    
/** An object relationship */
ticket: (ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Promise<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>})
}


/** columns and relationships of "ticket_messages" */
export interface ticket_messagesObservableChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>}),
    
/** An object relationship */
author: (ticket_participantsObservableChain & {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants, R> | undefined)) => Observable<(FieldsSelection<ticket_participants, R> | undefined)>}),
    author_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    
/** An object relationship */
ticket: (ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Observable<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>})
}


/** aggregated selection of "ticket_messages" */
export interface ticket_messages_aggregatePromiseChain{
    aggregate: (ticket_messages_aggregate_fieldsPromiseChain & {get: <R extends ticket_messages_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})
}


/** aggregated selection of "ticket_messages" */
export interface ticket_messages_aggregateObservableChain{
    aggregate: (ticket_messages_aggregate_fieldsObservableChain & {get: <R extends ticket_messages_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})
}


/** aggregate fields of "ticket_messages" */
export interface ticket_messages_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (ticket_messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (ticket_messages_max_fieldsPromiseChain & {get: <R extends ticket_messages_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_max_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_max_fields, R> | undefined)>}),
    min: (ticket_messages_min_fieldsPromiseChain & {get: <R extends ticket_messages_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_min_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_messages_min_fields, R> | undefined)>})
}


/** aggregate fields of "ticket_messages" */
export interface ticket_messages_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (ticket_messages_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (ticket_messages_max_fieldsObservableChain & {get: <R extends ticket_messages_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_max_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_max_fields, R> | undefined)>}),
    min: (ticket_messages_min_fieldsObservableChain & {get: <R extends ticket_messages_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_messages_min_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_messages_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface ticket_messages_max_fieldsPromiseChain{
    author_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface ticket_messages_max_fieldsObservableChain{
    author_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_messages_min_fieldsPromiseChain{
    author_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_messages_min_fieldsObservableChain{
    author_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    content: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "ticket_messages" */
export interface ticket_messages_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})
}


/** response of any mutation on the table "ticket_messages" */
export interface ticket_messages_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})
}


/** columns and relationships of "ticket_participants" */
export interface ticket_participantsPromiseChain{
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    
/** An object relationship */
ticket: (ticketsPromiseChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Promise<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "ticket_participants" */
export interface ticket_participantsObservableChain{
    
/** An array relationship */
messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>}),
    owner: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    participant_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    
/** An object relationship */
ticket: (ticketsObservableChain & {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>) => Observable<FieldsSelection<tickets, R>>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>})
}


/** aggregated selection of "ticket_participants" */
export interface ticket_participants_aggregatePromiseChain{
    aggregate: (ticket_participants_aggregate_fieldsPromiseChain & {get: <R extends ticket_participants_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>})
}


/** aggregated selection of "ticket_participants" */
export interface ticket_participants_aggregateObservableChain{
    aggregate: (ticket_participants_aggregate_fieldsObservableChain & {get: <R extends ticket_participants_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>})
}


/** aggregate fields of "ticket_participants" */
export interface ticket_participants_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (ticket_participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (ticket_participants_max_fieldsPromiseChain & {get: <R extends ticket_participants_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_max_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_max_fields, R> | undefined)>}),
    min: (ticket_participants_min_fieldsPromiseChain & {get: <R extends ticket_participants_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_min_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_participants_min_fields, R> | undefined)>})
}


/** aggregate fields of "ticket_participants" */
export interface ticket_participants_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (ticket_participants_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (ticket_participants_max_fieldsObservableChain & {get: <R extends ticket_participants_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_max_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_max_fields, R> | undefined)>}),
    min: (ticket_participants_min_fieldsObservableChain & {get: <R extends ticket_participants_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_participants_min_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_participants_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface ticket_participants_max_fieldsPromiseChain{
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface ticket_participants_max_fieldsObservableChain{
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_participants_min_fieldsPromiseChain{
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_participants_min_fieldsObservableChain{
    participant_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    ticket_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** response of any mutation on the table "ticket_participants" */
export interface ticket_participants_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>})
}


/** response of any mutation on the table "ticket_participants" */
export interface ticket_participants_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>})
}


/** columns and relationships of "ticket_states" */
export interface ticket_statesPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregatePromiseChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Promise<FieldsSelection<tickets_aggregate, R>>})
}


/** columns and relationships of "ticket_states" */
export interface ticket_statesObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    
/** An array relationship */
tickets: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => {get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>})&({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>}),
    
/** An aggregate relationship */
tickets_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (tickets_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (tickets_order_by[] | null),
/** filter the rows returned */
where?: (tickets_bool_exp | null)}) => tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>})&(tickets_aggregateObservableChain & {get: <R extends tickets_aggregateRequest>(request: R, defaultValue?: FieldsSelection<tickets_aggregate, R>) => Observable<FieldsSelection<tickets_aggregate, R>>})
}


/** aggregated selection of "ticket_states" */
export interface ticket_states_aggregatePromiseChain{
    aggregate: (ticket_states_aggregate_fieldsPromiseChain & {get: <R extends ticket_states_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_states_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>})
}


/** aggregated selection of "ticket_states" */
export interface ticket_states_aggregateObservableChain{
    aggregate: (ticket_states_aggregate_fieldsObservableChain & {get: <R extends ticket_states_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_states_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>})
}


/** aggregate fields of "ticket_states" */
export interface ticket_states_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (ticket_states_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (ticket_states_max_fieldsPromiseChain & {get: <R extends ticket_states_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_max_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_states_max_fields, R> | undefined)>}),
    min: (ticket_states_min_fieldsPromiseChain & {get: <R extends ticket_states_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_min_fields, R> | undefined)) => Promise<(FieldsSelection<ticket_states_min_fields, R> | undefined)>})
}


/** aggregate fields of "ticket_states" */
export interface ticket_states_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (ticket_states_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (ticket_states_max_fieldsObservableChain & {get: <R extends ticket_states_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_max_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_states_max_fields, R> | undefined)>}),
    min: (ticket_states_min_fieldsObservableChain & {get: <R extends ticket_states_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<ticket_states_min_fields, R> | undefined)) => Observable<(FieldsSelection<ticket_states_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface ticket_states_max_fieldsPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate max on columns */
export interface ticket_states_max_fieldsObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_states_min_fieldsPromiseChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>})
}


/** aggregate min on columns */
export interface ticket_states_min_fieldsObservableChain{
    comment: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>})
}


/** response of any mutation on the table "ticket_states" */
export interface ticket_states_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Promise<FieldsSelection<ticket_states, R>[]>})
}


/** response of any mutation on the table "ticket_states" */
export interface ticket_states_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>[]) => Observable<FieldsSelection<ticket_states, R>[]>})
}


/** columns and relationships of "tickets" */
export interface ticketsPromiseChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Promise<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregatePromiseChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Promise<FieldsSelection<attachments_aggregate, R>>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Promise<Scalars['timestamptz']>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>}),
    state: ({get: (request?: boolean|number, defaultValue?: ticket_states_enum) => Promise<ticket_states_enum>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Promise<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregatePromiseChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Promise<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Promise<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregatePromiseChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Promise<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** An object relationship */
ticket_state: (ticket_statesPromiseChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>) => Promise<FieldsSelection<ticket_states, R>>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** columns and relationships of "tickets" */
export interface ticketsObservableChain{
    
/** An array relationship */
attachments: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => {get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>})&({get: <R extends attachmentsRequest>(request: R, defaultValue?: FieldsSelection<attachments, R>[]) => Observable<FieldsSelection<attachments, R>[]>}),
    
/** An aggregate relationship */
attachments_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (attachments_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (attachments_order_by[] | null),
/** filter the rows returned */
where?: (attachments_bool_exp | null)}) => attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>})&(attachments_aggregateObservableChain & {get: <R extends attachments_aggregateRequest>(request: R, defaultValue?: FieldsSelection<attachments_aggregate, R>) => Observable<FieldsSelection<attachments_aggregate, R>>}),
    created_at: ({get: (request?: boolean|number, defaultValue?: Scalars['timestamptz']) => Observable<Scalars['timestamptz']>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>}),
    state: ({get: (request?: boolean|number, defaultValue?: ticket_states_enum) => Observable<ticket_states_enum>}),
    
/** An array relationship */
ticket_messages: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => {get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>})&({get: <R extends ticket_messagesRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages, R>[]) => Observable<FieldsSelection<ticket_messages, R>[]>}),
    
/** An aggregate relationship */
ticket_messages_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_messages_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_messages_order_by[] | null),
/** filter the rows returned */
where?: (ticket_messages_bool_exp | null)}) => ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>})&(ticket_messages_aggregateObservableChain & {get: <R extends ticket_messages_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_messages_aggregate, R>) => Observable<FieldsSelection<ticket_messages_aggregate, R>>}),
    
/** An array relationship */
ticket_participants: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => {get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>})&({get: <R extends ticket_participantsRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants, R>[]) => Observable<FieldsSelection<ticket_participants, R>[]>}),
    
/** An aggregate relationship */
ticket_participants_aggregate: ((args?: {
/** distinct select on columns */
distinct_on?: (ticket_participants_select_column[] | null),
/** limit the number of rows returned */
limit?: (Scalars['Int'] | null),
/** skip the first n rows. Use only with order_by */
offset?: (Scalars['Int'] | null),
/** sort the rows by one or more columns */
order_by?: (ticket_participants_order_by[] | null),
/** filter the rows returned */
where?: (ticket_participants_bool_exp | null)}) => ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>})&(ticket_participants_aggregateObservableChain & {get: <R extends ticket_participants_aggregateRequest>(request: R, defaultValue?: FieldsSelection<ticket_participants_aggregate, R>) => Observable<FieldsSelection<ticket_participants_aggregate, R>>}),
    
/** An object relationship */
ticket_state: (ticket_statesObservableChain & {get: <R extends ticket_statesRequest>(request: R, defaultValue?: FieldsSelection<ticket_states, R>) => Observable<FieldsSelection<ticket_states, R>>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregated selection of "tickets" */
export interface tickets_aggregatePromiseChain{
    aggregate: (tickets_aggregate_fieldsPromiseChain & {get: <R extends tickets_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<tickets_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>})
}


/** aggregated selection of "tickets" */
export interface tickets_aggregateObservableChain{
    aggregate: (tickets_aggregate_fieldsObservableChain & {get: <R extends tickets_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<tickets_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>})
}


/** aggregate fields of "tickets" */
export interface tickets_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (tickets_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (tickets_max_fieldsPromiseChain & {get: <R extends tickets_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_max_fields, R> | undefined)) => Promise<(FieldsSelection<tickets_max_fields, R> | undefined)>}),
    min: (tickets_min_fieldsPromiseChain & {get: <R extends tickets_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_min_fields, R> | undefined)) => Promise<(FieldsSelection<tickets_min_fields, R> | undefined)>})
}


/** aggregate fields of "tickets" */
export interface tickets_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (tickets_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (tickets_max_fieldsObservableChain & {get: <R extends tickets_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_max_fields, R> | undefined)) => Observable<(FieldsSelection<tickets_max_fields, R> | undefined)>}),
    min: (tickets_min_fieldsObservableChain & {get: <R extends tickets_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<tickets_min_fields, R> | undefined)) => Observable<(FieldsSelection<tickets_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface tickets_max_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate max on columns */
export interface tickets_max_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface tickets_min_fieldsPromiseChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Promise<(Scalars['timestamptz'] | undefined)>})
}


/** aggregate min on columns */
export interface tickets_min_fieldsObservableChain{
    created_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    customer_id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    deleted_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>}),
    title: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    updated_at: ({get: (request?: boolean|number, defaultValue?: (Scalars['timestamptz'] | undefined)) => Observable<(Scalars['timestamptz'] | undefined)>})
}


/** response of any mutation on the table "tickets" */
export interface tickets_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Promise<FieldsSelection<tickets, R>[]>})
}


/** response of any mutation on the table "tickets" */
export interface tickets_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends ticketsRequest>(request: R, defaultValue?: FieldsSelection<tickets, R>[]) => Observable<FieldsSelection<tickets, R>[]>})
}


/** columns and relationships of "users" */
export interface usersPromiseChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Promise<Scalars['uuid']>})
}


/** columns and relationships of "users" */
export interface usersObservableChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['uuid']) => Observable<Scalars['uuid']>})
}


/** aggregated selection of "users" */
export interface users_aggregatePromiseChain{
    aggregate: (users_aggregate_fieldsPromiseChain & {get: <R extends users_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_aggregate_fields, R> | undefined)) => Promise<(FieldsSelection<users_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>})
}


/** aggregated selection of "users" */
export interface users_aggregateObservableChain{
    aggregate: (users_aggregate_fieldsObservableChain & {get: <R extends users_aggregate_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_aggregate_fields, R> | undefined)) => Observable<(FieldsSelection<users_aggregate_fields, R> | undefined)>}),
    nodes: ({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>})
}


/** aggregate fields of "users" */
export interface users_aggregate_fieldsPromiseChain{
    count: ((args?: {columns?: (users_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    max: (users_max_fieldsPromiseChain & {get: <R extends users_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_max_fields, R> | undefined)) => Promise<(FieldsSelection<users_max_fields, R> | undefined)>}),
    min: (users_min_fieldsPromiseChain & {get: <R extends users_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_min_fields, R> | undefined)) => Promise<(FieldsSelection<users_min_fields, R> | undefined)>})
}


/** aggregate fields of "users" */
export interface users_aggregate_fieldsObservableChain{
    count: ((args?: {columns?: (users_select_column[] | null),distinct?: (Scalars['Boolean'] | null)}) => {get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>})&({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    max: (users_max_fieldsObservableChain & {get: <R extends users_max_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_max_fields, R> | undefined)) => Observable<(FieldsSelection<users_max_fields, R> | undefined)>}),
    min: (users_min_fieldsObservableChain & {get: <R extends users_min_fieldsRequest>(request: R, defaultValue?: (FieldsSelection<users_min_fields, R> | undefined)) => Observable<(FieldsSelection<users_min_fields, R> | undefined)>})
}


/** aggregate max on columns */
export interface users_max_fieldsPromiseChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate max on columns */
export interface users_max_fieldsObservableChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface users_min_fieldsPromiseChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Promise<(Scalars['uuid'] | undefined)>})
}


/** aggregate min on columns */
export interface users_min_fieldsObservableChain{
    display_name: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    id: ({get: (request?: boolean|number, defaultValue?: (Scalars['uuid'] | undefined)) => Observable<(Scalars['uuid'] | undefined)>})
}


/** response of any mutation on the table "users" */
export interface users_mutation_responsePromiseChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Promise<FieldsSelection<users, R>[]>})
}


/** response of any mutation on the table "users" */
export interface users_mutation_responseObservableChain{
    
/** number of rows affected by the mutation */
affected_rows: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    
/** data from the rows affected by the mutation */
returning: ({get: <R extends usersRequest>(request: R, defaultValue?: FieldsSelection<users, R>[]) => Observable<FieldsSelection<users, R>[]>})
}
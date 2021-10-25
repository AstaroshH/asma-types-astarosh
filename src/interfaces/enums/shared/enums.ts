export enum ConsentsGroup {
    GENERAL = 'GENERAL',
    QUERY = 'QUERY',
    COMMNICATION = 'COMMUNICATION',
}

export enum ConsentsType {
    MANDATORY = 'MANDATORY',
    OPTIONAL = 'OPTIONAL',
}

export enum DocumentPatientSecurityLevel {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FOUR = '4',
}

export enum QueriesStatus {
    INBOUND = 'INBOUND',
    IN_PROGRESS = 'IN_PROGRESS',
    AWAITING_REPLY = 'AWAITING_REPLY',
    EXPIRED = 'EXPIRED',
    COMPLETED = 'COMPLETED',
    PROCESSED = 'PROCESSED',
    REJECTED = 'REJECTED',
}

export enum QueriesInitiator {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
    SELF_COMPLETABLE = 'SELF_COMPLETABLE',
}

export enum SmsTemplatesCategory {
    INFO = 'INFO',
    REJECT = 'REJECT',
}

export enum TemplatesContext {
    ADVOCA = 'ADVOCA',
    PORTAL = 'PORTAL',
    OUTLOOK = 'OUTLOOK',
}

export enum TemplatesAccessible {
    PATIENT = 'PATIENT',
    CUSTOMER = 'CUSTOMER',
}
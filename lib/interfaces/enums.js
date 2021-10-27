export var InitiatorTypes;
(function (InitiatorTypes) {
    InitiatorTypes["Customer"] = "customer";
    InitiatorTypes["Patient"] = "patient";
    InitiatorTypes["SelfCompletable"] = "self-completable";
})(InitiatorTypes || (InitiatorTypes = {}));
export var QnrContextTypes;
(function (QnrContextTypes) {
    QnrContextTypes["Advoca"] = "advoca";
    QnrContextTypes["Portal"] = "portal";
    QnrContextTypes["Outlook"] = "outlook";
})(QnrContextTypes || (QnrContextTypes = {}));
export var DocSignicatSignStatusTypes;
(function (DocSignicatSignStatusTypes) {
    DocSignicatSignStatusTypes["Complteted"] = "completed";
    DocSignicatSignStatusTypes["Rejected"] = "rejected";
    DocSignicatSignStatusTypes["Waiting"] = "waiting";
})(DocSignicatSignStatusTypes || (DocSignicatSignStatusTypes = {}));
export var DocProxyStatusTypes;
(function (DocProxyStatusTypes) {
    DocProxyStatusTypes["Signed"] = "signed";
    DocProxyStatusTypes["WaitingForSigning"] = "waiting_for_signing";
    DocProxyStatusTypes["OnlyForView"] = "only_for_view";
    /* download = 'download',
    uploaded = 'uploaded' */
})(DocProxyStatusTypes || (DocProxyStatusTypes = {}));
export var QuestionTypes;
(function (QuestionTypes) {
    QuestionTypes["BooleanQuestion"] = "BooleanQuestion";
    QuestionTypes["CheckBoxes"] = "CheckBoxes";
    QuestionTypes["CompositeQuestion"] = "CompositeQuestion";
    QuestionTypes["DateField"] = "DateField";
    QuestionTypes["Dropdown"] = "Dropdown";
    QuestionTypes["FormatNumber"] = "FormatNumber";
    QuestionTypes["LinearScale"] = "LinearScale";
    QuestionTypes["Link"] = "Link";
    QuestionTypes["RadioButtons"] = "RadioButtons";
    QuestionTypes["TextLong"] = "TextLong";
    QuestionTypes["TextShort"] = "TextShort";
    QuestionTypes["Emoticons"] = "Emoticons";
    QuestionTypes["DocumentUpload"] = "DocumentUpload";
})(QuestionTypes || (QuestionTypes = {}));
export var ActorTypes;
(function (ActorTypes) {
    ActorTypes["Mappable"] = "mappable";
    ActorTypes["Custom"] = "custom";
    ActorTypes["Complex"] = "complex";
})(ActorTypes || (ActorTypes = {}));
export var ConsentsGroup;
(function (ConsentsGroup) {
    ConsentsGroup["GENERAL"] = "GENERAL";
    ConsentsGroup["QUERY"] = "QUERY";
    ConsentsGroup["COMMUNICATION"] = "COMMUNICATION";
})(ConsentsGroup || (ConsentsGroup = {}));
export var ConsentsType;
(function (ConsentsType) {
    ConsentsType["MANDATORY"] = "MANDATORY";
    ConsentsType["OPTIONAL"] = "OPTIONAL";
})(ConsentsType || (ConsentsType = {}));
export var DocumentPatientSecurityLevel;
(function (DocumentPatientSecurityLevel) {
    DocumentPatientSecurityLevel["ONE"] = "1";
    DocumentPatientSecurityLevel["TWO"] = "2";
    DocumentPatientSecurityLevel["THREE"] = "3";
    DocumentPatientSecurityLevel["FOUR"] = "4";
})(DocumentPatientSecurityLevel || (DocumentPatientSecurityLevel = {}));
export var QueriesStatus;
(function (QueriesStatus) {
    QueriesStatus["INBOUND"] = "INBOUND";
    QueriesStatus["IN_PROGRESS"] = "IN_PROGRESS";
    QueriesStatus["AWAITING_REPLY"] = "AWAITING_REPLY";
    QueriesStatus["EXPIRED"] = "EXPIRED";
    QueriesStatus["COMPLETED"] = "COMPLETED";
    QueriesStatus["PROCESSED"] = "PROCESSED";
    QueriesStatus["REJECTED"] = "REJECTED";
})(QueriesStatus || (QueriesStatus = {}));
export var QueriesInitiator;
(function (QueriesInitiator) {
    QueriesInitiator["PATIENT"] = "PATIENT";
    QueriesInitiator["CUSTOMER"] = "CUSTOMER";
    QueriesInitiator["SELFCOMPLETABLE"] = "SELFCOMPLETABLE";
})(QueriesInitiator || (QueriesInitiator = {}));
export var SmsTemplatesCategory;
(function (SmsTemplatesCategory) {
    SmsTemplatesCategory["INFO"] = "INFO";
    SmsTemplatesCategory["REJECT"] = "REJECT";
})(SmsTemplatesCategory || (SmsTemplatesCategory = {}));
export var TemplatesContext;
(function (TemplatesContext) {
    TemplatesContext["ADVOCA"] = "ADVOCA";
    TemplatesContext["PORTAL"] = "PORTAL";
    TemplatesContext["OUTLOOK"] = "OUTLOOK";
})(TemplatesContext || (TemplatesContext = {}));
export var TemplatesAccessible;
(function (TemplatesAccessible) {
    TemplatesAccessible["PATIENT"] = "PATIENT";
    TemplatesAccessible["CUSTOMER"] = "CUSTOMER";
})(TemplatesAccessible || (TemplatesAccessible = {}));
//# sourceMappingURL=enums.js.map
const accessible_possibleTypes = ['accessible'];
export const isaccessible = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible"');
    return accessible_possibleTypes.includes(obj.__typename);
};
const accessible_aggregate_possibleTypes = ['accessible_aggregate'];
export const isaccessible_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible_aggregate"');
    return accessible_aggregate_possibleTypes.includes(obj.__typename);
};
const accessible_aggregate_fields_possibleTypes = ['accessible_aggregate_fields'];
export const isaccessible_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible_aggregate_fields"');
    return accessible_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const accessible_max_fields_possibleTypes = ['accessible_max_fields'];
export const isaccessible_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible_max_fields"');
    return accessible_max_fields_possibleTypes.includes(obj.__typename);
};
const accessible_min_fields_possibleTypes = ['accessible_min_fields'];
export const isaccessible_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible_min_fields"');
    return accessible_min_fields_possibleTypes.includes(obj.__typename);
};
const accessible_mutation_response_possibleTypes = ['accessible_mutation_response'];
export const isaccessible_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isaccessible_mutation_response"');
    return accessible_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_possibleTypes = ['anonymous_answers'];
export const isanonymous_answers = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers"');
    return anonymous_answers_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_aggregate_possibleTypes = ['anonymous_answers_aggregate'];
export const isanonymous_answers_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_aggregate"');
    return anonymous_answers_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_aggregate_fields_possibleTypes = ['anonymous_answers_aggregate_fields'];
export const isanonymous_answers_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_aggregate_fields"');
    return anonymous_answers_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_avg_fields_possibleTypes = ['anonymous_answers_avg_fields'];
export const isanonymous_answers_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_avg_fields"');
    return anonymous_answers_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_max_fields_possibleTypes = ['anonymous_answers_max_fields'];
export const isanonymous_answers_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_max_fields"');
    return anonymous_answers_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_min_fields_possibleTypes = ['anonymous_answers_min_fields'];
export const isanonymous_answers_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_min_fields"');
    return anonymous_answers_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_mutation_response_possibleTypes = ['anonymous_answers_mutation_response'];
export const isanonymous_answers_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_mutation_response"');
    return anonymous_answers_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_stddev_fields_possibleTypes = ['anonymous_answers_stddev_fields'];
export const isanonymous_answers_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_stddev_fields"');
    return anonymous_answers_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_stddev_pop_fields_possibleTypes = ['anonymous_answers_stddev_pop_fields'];
export const isanonymous_answers_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_stddev_pop_fields"');
    return anonymous_answers_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_stddev_samp_fields_possibleTypes = ['anonymous_answers_stddev_samp_fields'];
export const isanonymous_answers_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_stddev_samp_fields"');
    return anonymous_answers_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_sum_fields_possibleTypes = ['anonymous_answers_sum_fields'];
export const isanonymous_answers_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_sum_fields"');
    return anonymous_answers_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_var_pop_fields_possibleTypes = ['anonymous_answers_var_pop_fields'];
export const isanonymous_answers_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_var_pop_fields"');
    return anonymous_answers_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_var_samp_fields_possibleTypes = ['anonymous_answers_var_samp_fields'];
export const isanonymous_answers_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_var_samp_fields"');
    return anonymous_answers_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_answers_variance_fields_possibleTypes = ['anonymous_answers_variance_fields'];
export const isanonymous_answers_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_answers_variance_fields"');
    return anonymous_answers_variance_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_possibleTypes = ['anonymous_invitations'];
export const isanonymous_invitations = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations"');
    return anonymous_invitations_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_aggregate_possibleTypes = ['anonymous_invitations_aggregate'];
export const isanonymous_invitations_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_aggregate"');
    return anonymous_invitations_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_aggregate_fields_possibleTypes = ['anonymous_invitations_aggregate_fields'];
export const isanonymous_invitations_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_aggregate_fields"');
    return anonymous_invitations_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_avg_fields_possibleTypes = ['anonymous_invitations_avg_fields'];
export const isanonymous_invitations_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_avg_fields"');
    return anonymous_invitations_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_max_fields_possibleTypes = ['anonymous_invitations_max_fields'];
export const isanonymous_invitations_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_max_fields"');
    return anonymous_invitations_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_min_fields_possibleTypes = ['anonymous_invitations_min_fields'];
export const isanonymous_invitations_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_min_fields"');
    return anonymous_invitations_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_mutation_response_possibleTypes = ['anonymous_invitations_mutation_response'];
export const isanonymous_invitations_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_mutation_response"');
    return anonymous_invitations_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_stddev_fields_possibleTypes = ['anonymous_invitations_stddev_fields'];
export const isanonymous_invitations_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_stddev_fields"');
    return anonymous_invitations_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_stddev_pop_fields_possibleTypes = ['anonymous_invitations_stddev_pop_fields'];
export const isanonymous_invitations_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_stddev_pop_fields"');
    return anonymous_invitations_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_stddev_samp_fields_possibleTypes = ['anonymous_invitations_stddev_samp_fields'];
export const isanonymous_invitations_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_stddev_samp_fields"');
    return anonymous_invitations_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_sum_fields_possibleTypes = ['anonymous_invitations_sum_fields'];
export const isanonymous_invitations_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_sum_fields"');
    return anonymous_invitations_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_var_pop_fields_possibleTypes = ['anonymous_invitations_var_pop_fields'];
export const isanonymous_invitations_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_var_pop_fields"');
    return anonymous_invitations_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_var_samp_fields_possibleTypes = ['anonymous_invitations_var_samp_fields'];
export const isanonymous_invitations_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_var_samp_fields"');
    return anonymous_invitations_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_invitations_variance_fields_possibleTypes = ['anonymous_invitations_variance_fields'];
export const isanonymous_invitations_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_invitations_variance_fields"');
    return anonymous_invitations_variance_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_possibleTypes = ['anonymous_queries'];
export const isanonymous_queries = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries"');
    return anonymous_queries_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_aggregate_possibleTypes = ['anonymous_queries_aggregate'];
export const isanonymous_queries_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_aggregate"');
    return anonymous_queries_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_aggregate_fields_possibleTypes = ['anonymous_queries_aggregate_fields'];
export const isanonymous_queries_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_aggregate_fields"');
    return anonymous_queries_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_avg_fields_possibleTypes = ['anonymous_queries_avg_fields'];
export const isanonymous_queries_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_avg_fields"');
    return anonymous_queries_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_max_fields_possibleTypes = ['anonymous_queries_max_fields'];
export const isanonymous_queries_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_max_fields"');
    return anonymous_queries_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_min_fields_possibleTypes = ['anonymous_queries_min_fields'];
export const isanonymous_queries_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_min_fields"');
    return anonymous_queries_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_mutation_response_possibleTypes = ['anonymous_queries_mutation_response'];
export const isanonymous_queries_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_mutation_response"');
    return anonymous_queries_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_stddev_fields_possibleTypes = ['anonymous_queries_stddev_fields'];
export const isanonymous_queries_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_stddev_fields"');
    return anonymous_queries_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_stddev_pop_fields_possibleTypes = ['anonymous_queries_stddev_pop_fields'];
export const isanonymous_queries_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_stddev_pop_fields"');
    return anonymous_queries_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_stddev_samp_fields_possibleTypes = ['anonymous_queries_stddev_samp_fields'];
export const isanonymous_queries_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_stddev_samp_fields"');
    return anonymous_queries_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_sum_fields_possibleTypes = ['anonymous_queries_sum_fields'];
export const isanonymous_queries_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_sum_fields"');
    return anonymous_queries_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_var_pop_fields_possibleTypes = ['anonymous_queries_var_pop_fields'];
export const isanonymous_queries_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_var_pop_fields"');
    return anonymous_queries_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_var_samp_fields_possibleTypes = ['anonymous_queries_var_samp_fields'];
export const isanonymous_queries_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_var_samp_fields"');
    return anonymous_queries_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_queries_variance_fields_possibleTypes = ['anonymous_queries_variance_fields'];
export const isanonymous_queries_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_queries_variance_fields"');
    return anonymous_queries_variance_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_possibleTypes = ['anonymous_sms'];
export const isanonymous_sms = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms"');
    return anonymous_sms_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_aggregate_possibleTypes = ['anonymous_sms_aggregate'];
export const isanonymous_sms_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_aggregate"');
    return anonymous_sms_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_aggregate_fields_possibleTypes = ['anonymous_sms_aggregate_fields'];
export const isanonymous_sms_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_aggregate_fields"');
    return anonymous_sms_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_avg_fields_possibleTypes = ['anonymous_sms_avg_fields'];
export const isanonymous_sms_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_avg_fields"');
    return anonymous_sms_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_max_fields_possibleTypes = ['anonymous_sms_max_fields'];
export const isanonymous_sms_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_max_fields"');
    return anonymous_sms_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_min_fields_possibleTypes = ['anonymous_sms_min_fields'];
export const isanonymous_sms_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_min_fields"');
    return anonymous_sms_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_mutation_response_possibleTypes = ['anonymous_sms_mutation_response'];
export const isanonymous_sms_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_mutation_response"');
    return anonymous_sms_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_stddev_fields_possibleTypes = ['anonymous_sms_stddev_fields'];
export const isanonymous_sms_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_stddev_fields"');
    return anonymous_sms_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_stddev_pop_fields_possibleTypes = ['anonymous_sms_stddev_pop_fields'];
export const isanonymous_sms_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_stddev_pop_fields"');
    return anonymous_sms_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_stddev_samp_fields_possibleTypes = ['anonymous_sms_stddev_samp_fields'];
export const isanonymous_sms_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_stddev_samp_fields"');
    return anonymous_sms_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_sum_fields_possibleTypes = ['anonymous_sms_sum_fields'];
export const isanonymous_sms_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_sum_fields"');
    return anonymous_sms_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_var_pop_fields_possibleTypes = ['anonymous_sms_var_pop_fields'];
export const isanonymous_sms_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_var_pop_fields"');
    return anonymous_sms_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_var_samp_fields_possibleTypes = ['anonymous_sms_var_samp_fields'];
export const isanonymous_sms_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_var_samp_fields"');
    return anonymous_sms_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_sms_variance_fields_possibleTypes = ['anonymous_sms_variance_fields'];
export const isanonymous_sms_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_sms_variance_fields"');
    return anonymous_sms_variance_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_possibleTypes = ['anonymous_template_question'];
export const isanonymous_template_question = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question"');
    return anonymous_template_question_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_aggregate_possibleTypes = ['anonymous_template_question_aggregate'];
export const isanonymous_template_question_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_aggregate"');
    return anonymous_template_question_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_aggregate_fields_possibleTypes = ['anonymous_template_question_aggregate_fields'];
export const isanonymous_template_question_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_aggregate_fields"');
    return anonymous_template_question_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_avg_fields_possibleTypes = ['anonymous_template_question_avg_fields'];
export const isanonymous_template_question_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_avg_fields"');
    return anonymous_template_question_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_max_fields_possibleTypes = ['anonymous_template_question_max_fields'];
export const isanonymous_template_question_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_max_fields"');
    return anonymous_template_question_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_min_fields_possibleTypes = ['anonymous_template_question_min_fields'];
export const isanonymous_template_question_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_min_fields"');
    return anonymous_template_question_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_mutation_response_possibleTypes = ['anonymous_template_question_mutation_response'];
export const isanonymous_template_question_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_mutation_response"');
    return anonymous_template_question_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_stddev_fields_possibleTypes = ['anonymous_template_question_stddev_fields'];
export const isanonymous_template_question_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_stddev_fields"');
    return anonymous_template_question_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_stddev_pop_fields_possibleTypes = ['anonymous_template_question_stddev_pop_fields'];
export const isanonymous_template_question_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_stddev_pop_fields"');
    return anonymous_template_question_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_stddev_samp_fields_possibleTypes = ['anonymous_template_question_stddev_samp_fields'];
export const isanonymous_template_question_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_stddev_samp_fields"');
    return anonymous_template_question_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_sum_fields_possibleTypes = ['anonymous_template_question_sum_fields'];
export const isanonymous_template_question_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_sum_fields"');
    return anonymous_template_question_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_var_pop_fields_possibleTypes = ['anonymous_template_question_var_pop_fields'];
export const isanonymous_template_question_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_var_pop_fields"');
    return anonymous_template_question_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_var_samp_fields_possibleTypes = ['anonymous_template_question_var_samp_fields'];
export const isanonymous_template_question_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_var_samp_fields"');
    return anonymous_template_question_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_template_question_variance_fields_possibleTypes = ['anonymous_template_question_variance_fields'];
export const isanonymous_template_question_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_template_question_variance_fields"');
    return anonymous_template_question_variance_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_possibleTypes = ['anonymous_templates'];
export const isanonymous_templates = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates"');
    return anonymous_templates_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_aggregate_possibleTypes = ['anonymous_templates_aggregate'];
export const isanonymous_templates_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_aggregate"');
    return anonymous_templates_aggregate_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_aggregate_fields_possibleTypes = ['anonymous_templates_aggregate_fields'];
export const isanonymous_templates_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_aggregate_fields"');
    return anonymous_templates_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_avg_fields_possibleTypes = ['anonymous_templates_avg_fields'];
export const isanonymous_templates_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_avg_fields"');
    return anonymous_templates_avg_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_max_fields_possibleTypes = ['anonymous_templates_max_fields'];
export const isanonymous_templates_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_max_fields"');
    return anonymous_templates_max_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_min_fields_possibleTypes = ['anonymous_templates_min_fields'];
export const isanonymous_templates_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_min_fields"');
    return anonymous_templates_min_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_mutation_response_possibleTypes = ['anonymous_templates_mutation_response'];
export const isanonymous_templates_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_mutation_response"');
    return anonymous_templates_mutation_response_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_stddev_fields_possibleTypes = ['anonymous_templates_stddev_fields'];
export const isanonymous_templates_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_stddev_fields"');
    return anonymous_templates_stddev_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_stddev_pop_fields_possibleTypes = ['anonymous_templates_stddev_pop_fields'];
export const isanonymous_templates_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_stddev_pop_fields"');
    return anonymous_templates_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_stddev_samp_fields_possibleTypes = ['anonymous_templates_stddev_samp_fields'];
export const isanonymous_templates_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_stddev_samp_fields"');
    return anonymous_templates_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_sum_fields_possibleTypes = ['anonymous_templates_sum_fields'];
export const isanonymous_templates_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_sum_fields"');
    return anonymous_templates_sum_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_var_pop_fields_possibleTypes = ['anonymous_templates_var_pop_fields'];
export const isanonymous_templates_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_var_pop_fields"');
    return anonymous_templates_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_var_samp_fields_possibleTypes = ['anonymous_templates_var_samp_fields'];
export const isanonymous_templates_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_var_samp_fields"');
    return anonymous_templates_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const anonymous_templates_variance_fields_possibleTypes = ['anonymous_templates_variance_fields'];
export const isanonymous_templates_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isanonymous_templates_variance_fields"');
    return anonymous_templates_variance_fields_possibleTypes.includes(obj.__typename);
};
const categories_possibleTypes = ['categories'];
export const iscategories = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories"');
    return categories_possibleTypes.includes(obj.__typename);
};
const categories_aggregate_possibleTypes = ['categories_aggregate'];
export const iscategories_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories_aggregate"');
    return categories_aggregate_possibleTypes.includes(obj.__typename);
};
const categories_aggregate_fields_possibleTypes = ['categories_aggregate_fields'];
export const iscategories_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories_aggregate_fields"');
    return categories_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const categories_max_fields_possibleTypes = ['categories_max_fields'];
export const iscategories_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories_max_fields"');
    return categories_max_fields_possibleTypes.includes(obj.__typename);
};
const categories_min_fields_possibleTypes = ['categories_min_fields'];
export const iscategories_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories_min_fields"');
    return categories_min_fields_possibleTypes.includes(obj.__typename);
};
const categories_mutation_response_possibleTypes = ['categories_mutation_response'];
export const iscategories_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscategories_mutation_response"');
    return categories_mutation_response_possibleTypes.includes(obj.__typename);
};
const consent_patient_possibleTypes = ['consent_patient'];
export const isconsent_patient = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient"');
    return consent_patient_possibleTypes.includes(obj.__typename);
};
const consent_patient_aggregate_possibleTypes = ['consent_patient_aggregate'];
export const isconsent_patient_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_aggregate"');
    return consent_patient_aggregate_possibleTypes.includes(obj.__typename);
};
const consent_patient_aggregate_fields_possibleTypes = ['consent_patient_aggregate_fields'];
export const isconsent_patient_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_aggregate_fields"');
    return consent_patient_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_avg_fields_possibleTypes = ['consent_patient_avg_fields'];
export const isconsent_patient_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_avg_fields"');
    return consent_patient_avg_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_max_fields_possibleTypes = ['consent_patient_max_fields'];
export const isconsent_patient_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_max_fields"');
    return consent_patient_max_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_min_fields_possibleTypes = ['consent_patient_min_fields'];
export const isconsent_patient_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_min_fields"');
    return consent_patient_min_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_mutation_response_possibleTypes = ['consent_patient_mutation_response'];
export const isconsent_patient_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_mutation_response"');
    return consent_patient_mutation_response_possibleTypes.includes(obj.__typename);
};
const consent_patient_stddev_fields_possibleTypes = ['consent_patient_stddev_fields'];
export const isconsent_patient_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_stddev_fields"');
    return consent_patient_stddev_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_stddev_pop_fields_possibleTypes = ['consent_patient_stddev_pop_fields'];
export const isconsent_patient_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_stddev_pop_fields"');
    return consent_patient_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_stddev_samp_fields_possibleTypes = ['consent_patient_stddev_samp_fields'];
export const isconsent_patient_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_stddev_samp_fields"');
    return consent_patient_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_sum_fields_possibleTypes = ['consent_patient_sum_fields'];
export const isconsent_patient_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_sum_fields"');
    return consent_patient_sum_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_var_pop_fields_possibleTypes = ['consent_patient_var_pop_fields'];
export const isconsent_patient_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_var_pop_fields"');
    return consent_patient_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_var_samp_fields_possibleTypes = ['consent_patient_var_samp_fields'];
export const isconsent_patient_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_var_samp_fields"');
    return consent_patient_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_patient_variance_fields_possibleTypes = ['consent_patient_variance_fields'];
export const isconsent_patient_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_patient_variance_fields"');
    return consent_patient_variance_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_possibleTypes = ['consent_template_to_template'];
export const isconsent_template_to_template = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template"');
    return consent_template_to_template_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_aggregate_possibleTypes = ['consent_template_to_template_aggregate'];
export const isconsent_template_to_template_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_aggregate"');
    return consent_template_to_template_aggregate_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_aggregate_fields_possibleTypes = ['consent_template_to_template_aggregate_fields'];
export const isconsent_template_to_template_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_aggregate_fields"');
    return consent_template_to_template_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_avg_fields_possibleTypes = ['consent_template_to_template_avg_fields'];
export const isconsent_template_to_template_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_avg_fields"');
    return consent_template_to_template_avg_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_max_fields_possibleTypes = ['consent_template_to_template_max_fields'];
export const isconsent_template_to_template_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_max_fields"');
    return consent_template_to_template_max_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_min_fields_possibleTypes = ['consent_template_to_template_min_fields'];
export const isconsent_template_to_template_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_min_fields"');
    return consent_template_to_template_min_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_mutation_response_possibleTypes = ['consent_template_to_template_mutation_response'];
export const isconsent_template_to_template_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_mutation_response"');
    return consent_template_to_template_mutation_response_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_stddev_fields_possibleTypes = ['consent_template_to_template_stddev_fields'];
export const isconsent_template_to_template_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_stddev_fields"');
    return consent_template_to_template_stddev_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_stddev_pop_fields_possibleTypes = ['consent_template_to_template_stddev_pop_fields'];
export const isconsent_template_to_template_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_stddev_pop_fields"');
    return consent_template_to_template_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_stddev_samp_fields_possibleTypes = ['consent_template_to_template_stddev_samp_fields'];
export const isconsent_template_to_template_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_stddev_samp_fields"');
    return consent_template_to_template_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_sum_fields_possibleTypes = ['consent_template_to_template_sum_fields'];
export const isconsent_template_to_template_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_sum_fields"');
    return consent_template_to_template_sum_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_var_pop_fields_possibleTypes = ['consent_template_to_template_var_pop_fields'];
export const isconsent_template_to_template_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_var_pop_fields"');
    return consent_template_to_template_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_var_samp_fields_possibleTypes = ['consent_template_to_template_var_samp_fields'];
export const isconsent_template_to_template_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_var_samp_fields"');
    return consent_template_to_template_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_template_to_template_variance_fields_possibleTypes = ['consent_template_to_template_variance_fields'];
export const isconsent_template_to_template_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_template_to_template_variance_fields"');
    return consent_template_to_template_variance_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_possibleTypes = ['consent_templates'];
export const isconsent_templates = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates"');
    return consent_templates_possibleTypes.includes(obj.__typename);
};
const consent_templates_aggregate_possibleTypes = ['consent_templates_aggregate'];
export const isconsent_templates_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_aggregate"');
    return consent_templates_aggregate_possibleTypes.includes(obj.__typename);
};
const consent_templates_aggregate_fields_possibleTypes = ['consent_templates_aggregate_fields'];
export const isconsent_templates_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_aggregate_fields"');
    return consent_templates_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_avg_fields_possibleTypes = ['consent_templates_avg_fields'];
export const isconsent_templates_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_avg_fields"');
    return consent_templates_avg_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_max_fields_possibleTypes = ['consent_templates_max_fields'];
export const isconsent_templates_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_max_fields"');
    return consent_templates_max_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_min_fields_possibleTypes = ['consent_templates_min_fields'];
export const isconsent_templates_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_min_fields"');
    return consent_templates_min_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_mutation_response_possibleTypes = ['consent_templates_mutation_response'];
export const isconsent_templates_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_mutation_response"');
    return consent_templates_mutation_response_possibleTypes.includes(obj.__typename);
};
const consent_templates_stddev_fields_possibleTypes = ['consent_templates_stddev_fields'];
export const isconsent_templates_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_stddev_fields"');
    return consent_templates_stddev_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_stddev_pop_fields_possibleTypes = ['consent_templates_stddev_pop_fields'];
export const isconsent_templates_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_stddev_pop_fields"');
    return consent_templates_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_stddev_samp_fields_possibleTypes = ['consent_templates_stddev_samp_fields'];
export const isconsent_templates_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_stddev_samp_fields"');
    return consent_templates_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_sum_fields_possibleTypes = ['consent_templates_sum_fields'];
export const isconsent_templates_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_sum_fields"');
    return consent_templates_sum_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_var_pop_fields_possibleTypes = ['consent_templates_var_pop_fields'];
export const isconsent_templates_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_var_pop_fields"');
    return consent_templates_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_var_samp_fields_possibleTypes = ['consent_templates_var_samp_fields'];
export const isconsent_templates_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_var_samp_fields"');
    return consent_templates_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const consent_templates_variance_fields_possibleTypes = ['consent_templates_variance_fields'];
export const isconsent_templates_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsent_templates_variance_fields"');
    return consent_templates_variance_fields_possibleTypes.includes(obj.__typename);
};
const consents_possibleTypes = ['consents'];
export const isconsents = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents"');
    return consents_possibleTypes.includes(obj.__typename);
};
const consents_aggregate_possibleTypes = ['consents_aggregate'];
export const isconsents_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_aggregate"');
    return consents_aggregate_possibleTypes.includes(obj.__typename);
};
const consents_aggregate_fields_possibleTypes = ['consents_aggregate_fields'];
export const isconsents_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_aggregate_fields"');
    return consents_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const consents_avg_fields_possibleTypes = ['consents_avg_fields'];
export const isconsents_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_avg_fields"');
    return consents_avg_fields_possibleTypes.includes(obj.__typename);
};
const consents_max_fields_possibleTypes = ['consents_max_fields'];
export const isconsents_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_max_fields"');
    return consents_max_fields_possibleTypes.includes(obj.__typename);
};
const consents_min_fields_possibleTypes = ['consents_min_fields'];
export const isconsents_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_min_fields"');
    return consents_min_fields_possibleTypes.includes(obj.__typename);
};
const consents_mutation_response_possibleTypes = ['consents_mutation_response'];
export const isconsents_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_mutation_response"');
    return consents_mutation_response_possibleTypes.includes(obj.__typename);
};
const consents_stddev_fields_possibleTypes = ['consents_stddev_fields'];
export const isconsents_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_stddev_fields"');
    return consents_stddev_fields_possibleTypes.includes(obj.__typename);
};
const consents_stddev_pop_fields_possibleTypes = ['consents_stddev_pop_fields'];
export const isconsents_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_stddev_pop_fields"');
    return consents_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const consents_stddev_samp_fields_possibleTypes = ['consents_stddev_samp_fields'];
export const isconsents_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_stddev_samp_fields"');
    return consents_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const consents_sum_fields_possibleTypes = ['consents_sum_fields'];
export const isconsents_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_sum_fields"');
    return consents_sum_fields_possibleTypes.includes(obj.__typename);
};
const consents_var_pop_fields_possibleTypes = ['consents_var_pop_fields'];
export const isconsents_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_var_pop_fields"');
    return consents_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const consents_var_samp_fields_possibleTypes = ['consents_var_samp_fields'];
export const isconsents_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_var_samp_fields"');
    return consents_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const consents_variance_fields_possibleTypes = ['consents_variance_fields'];
export const isconsents_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isconsents_variance_fields"');
    return consents_variance_fields_possibleTypes.includes(obj.__typename);
};
const contexts_possibleTypes = ['contexts'];
export const iscontexts = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts"');
    return contexts_possibleTypes.includes(obj.__typename);
};
const contexts_aggregate_possibleTypes = ['contexts_aggregate'];
export const iscontexts_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts_aggregate"');
    return contexts_aggregate_possibleTypes.includes(obj.__typename);
};
const contexts_aggregate_fields_possibleTypes = ['contexts_aggregate_fields'];
export const iscontexts_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts_aggregate_fields"');
    return contexts_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const contexts_max_fields_possibleTypes = ['contexts_max_fields'];
export const iscontexts_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts_max_fields"');
    return contexts_max_fields_possibleTypes.includes(obj.__typename);
};
const contexts_min_fields_possibleTypes = ['contexts_min_fields'];
export const iscontexts_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts_min_fields"');
    return contexts_min_fields_possibleTypes.includes(obj.__typename);
};
const contexts_mutation_response_possibleTypes = ['contexts_mutation_response'];
export const iscontexts_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscontexts_mutation_response"');
    return contexts_mutation_response_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_possibleTypes = ['custom_db_nodes'];
export const iscustom_db_nodes = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes"');
    return custom_db_nodes_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_aggregate_possibleTypes = ['custom_db_nodes_aggregate'];
export const iscustom_db_nodes_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_aggregate"');
    return custom_db_nodes_aggregate_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_aggregate_fields_possibleTypes = ['custom_db_nodes_aggregate_fields'];
export const iscustom_db_nodes_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_aggregate_fields"');
    return custom_db_nodes_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_avg_fields_possibleTypes = ['custom_db_nodes_avg_fields'];
export const iscustom_db_nodes_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_avg_fields"');
    return custom_db_nodes_avg_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_max_fields_possibleTypes = ['custom_db_nodes_max_fields'];
export const iscustom_db_nodes_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_max_fields"');
    return custom_db_nodes_max_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_min_fields_possibleTypes = ['custom_db_nodes_min_fields'];
export const iscustom_db_nodes_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_min_fields"');
    return custom_db_nodes_min_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_mutation_response_possibleTypes = ['custom_db_nodes_mutation_response'];
export const iscustom_db_nodes_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_mutation_response"');
    return custom_db_nodes_mutation_response_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_stddev_fields_possibleTypes = ['custom_db_nodes_stddev_fields'];
export const iscustom_db_nodes_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_stddev_fields"');
    return custom_db_nodes_stddev_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_stddev_pop_fields_possibleTypes = ['custom_db_nodes_stddev_pop_fields'];
export const iscustom_db_nodes_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_stddev_pop_fields"');
    return custom_db_nodes_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_stddev_samp_fields_possibleTypes = ['custom_db_nodes_stddev_samp_fields'];
export const iscustom_db_nodes_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_stddev_samp_fields"');
    return custom_db_nodes_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_sum_fields_possibleTypes = ['custom_db_nodes_sum_fields'];
export const iscustom_db_nodes_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_sum_fields"');
    return custom_db_nodes_sum_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_var_pop_fields_possibleTypes = ['custom_db_nodes_var_pop_fields'];
export const iscustom_db_nodes_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_var_pop_fields"');
    return custom_db_nodes_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_var_samp_fields_possibleTypes = ['custom_db_nodes_var_samp_fields'];
export const iscustom_db_nodes_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_var_samp_fields"');
    return custom_db_nodes_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const custom_db_nodes_variance_fields_possibleTypes = ['custom_db_nodes_variance_fields'];
export const iscustom_db_nodes_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "iscustom_db_nodes_variance_fields"');
    return custom_db_nodes_variance_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_possibleTypes = ['document_patient'];
export const isdocument_patient = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient"');
    return document_patient_possibleTypes.includes(obj.__typename);
};
const document_patient_aggregate_possibleTypes = ['document_patient_aggregate'];
export const isdocument_patient_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_aggregate"');
    return document_patient_aggregate_possibleTypes.includes(obj.__typename);
};
const document_patient_aggregate_fields_possibleTypes = ['document_patient_aggregate_fields'];
export const isdocument_patient_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_aggregate_fields"');
    return document_patient_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_avg_fields_possibleTypes = ['document_patient_avg_fields'];
export const isdocument_patient_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_avg_fields"');
    return document_patient_avg_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_max_fields_possibleTypes = ['document_patient_max_fields'];
export const isdocument_patient_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_max_fields"');
    return document_patient_max_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_min_fields_possibleTypes = ['document_patient_min_fields'];
export const isdocument_patient_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_min_fields"');
    return document_patient_min_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_mutation_response_possibleTypes = ['document_patient_mutation_response'];
export const isdocument_patient_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_mutation_response"');
    return document_patient_mutation_response_possibleTypes.includes(obj.__typename);
};
const document_patient_stddev_fields_possibleTypes = ['document_patient_stddev_fields'];
export const isdocument_patient_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_stddev_fields"');
    return document_patient_stddev_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_stddev_pop_fields_possibleTypes = ['document_patient_stddev_pop_fields'];
export const isdocument_patient_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_stddev_pop_fields"');
    return document_patient_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_stddev_samp_fields_possibleTypes = ['document_patient_stddev_samp_fields'];
export const isdocument_patient_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_stddev_samp_fields"');
    return document_patient_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_sum_fields_possibleTypes = ['document_patient_sum_fields'];
export const isdocument_patient_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_sum_fields"');
    return document_patient_sum_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_var_pop_fields_possibleTypes = ['document_patient_var_pop_fields'];
export const isdocument_patient_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_var_pop_fields"');
    return document_patient_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_var_samp_fields_possibleTypes = ['document_patient_var_samp_fields'];
export const isdocument_patient_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_var_samp_fields"');
    return document_patient_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const document_patient_variance_fields_possibleTypes = ['document_patient_variance_fields'];
export const isdocument_patient_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_patient_variance_fields"');
    return document_patient_variance_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_possibleTypes = ['document_sms'];
export const isdocument_sms = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms"');
    return document_sms_possibleTypes.includes(obj.__typename);
};
const document_sms_aggregate_possibleTypes = ['document_sms_aggregate'];
export const isdocument_sms_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_aggregate"');
    return document_sms_aggregate_possibleTypes.includes(obj.__typename);
};
const document_sms_aggregate_fields_possibleTypes = ['document_sms_aggregate_fields'];
export const isdocument_sms_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_aggregate_fields"');
    return document_sms_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_avg_fields_possibleTypes = ['document_sms_avg_fields'];
export const isdocument_sms_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_avg_fields"');
    return document_sms_avg_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_max_fields_possibleTypes = ['document_sms_max_fields'];
export const isdocument_sms_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_max_fields"');
    return document_sms_max_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_min_fields_possibleTypes = ['document_sms_min_fields'];
export const isdocument_sms_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_min_fields"');
    return document_sms_min_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_mutation_response_possibleTypes = ['document_sms_mutation_response'];
export const isdocument_sms_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_mutation_response"');
    return document_sms_mutation_response_possibleTypes.includes(obj.__typename);
};
const document_sms_stddev_fields_possibleTypes = ['document_sms_stddev_fields'];
export const isdocument_sms_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_stddev_fields"');
    return document_sms_stddev_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_stddev_pop_fields_possibleTypes = ['document_sms_stddev_pop_fields'];
export const isdocument_sms_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_stddev_pop_fields"');
    return document_sms_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_stddev_samp_fields_possibleTypes = ['document_sms_stddev_samp_fields'];
export const isdocument_sms_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_stddev_samp_fields"');
    return document_sms_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_sum_fields_possibleTypes = ['document_sms_sum_fields'];
export const isdocument_sms_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_sum_fields"');
    return document_sms_sum_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_var_pop_fields_possibleTypes = ['document_sms_var_pop_fields'];
export const isdocument_sms_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_var_pop_fields"');
    return document_sms_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_var_samp_fields_possibleTypes = ['document_sms_var_samp_fields'];
export const isdocument_sms_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_var_samp_fields"');
    return document_sms_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const document_sms_variance_fields_possibleTypes = ['document_sms_variance_fields'];
export const isdocument_sms_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocument_sms_variance_fields"');
    return document_sms_variance_fields_possibleTypes.includes(obj.__typename);
};
const documents_possibleTypes = ['documents'];
export const isdocuments = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments"');
    return documents_possibleTypes.includes(obj.__typename);
};
const documents_aggregate_possibleTypes = ['documents_aggregate'];
export const isdocuments_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_aggregate"');
    return documents_aggregate_possibleTypes.includes(obj.__typename);
};
const documents_aggregate_fields_possibleTypes = ['documents_aggregate_fields'];
export const isdocuments_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_aggregate_fields"');
    return documents_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const documents_avg_fields_possibleTypes = ['documents_avg_fields'];
export const isdocuments_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_avg_fields"');
    return documents_avg_fields_possibleTypes.includes(obj.__typename);
};
const documents_max_fields_possibleTypes = ['documents_max_fields'];
export const isdocuments_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_max_fields"');
    return documents_max_fields_possibleTypes.includes(obj.__typename);
};
const documents_min_fields_possibleTypes = ['documents_min_fields'];
export const isdocuments_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_min_fields"');
    return documents_min_fields_possibleTypes.includes(obj.__typename);
};
const documents_mutation_response_possibleTypes = ['documents_mutation_response'];
export const isdocuments_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_mutation_response"');
    return documents_mutation_response_possibleTypes.includes(obj.__typename);
};
const documents_stddev_fields_possibleTypes = ['documents_stddev_fields'];
export const isdocuments_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_stddev_fields"');
    return documents_stddev_fields_possibleTypes.includes(obj.__typename);
};
const documents_stddev_pop_fields_possibleTypes = ['documents_stddev_pop_fields'];
export const isdocuments_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_stddev_pop_fields"');
    return documents_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const documents_stddev_samp_fields_possibleTypes = ['documents_stddev_samp_fields'];
export const isdocuments_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_stddev_samp_fields"');
    return documents_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const documents_sum_fields_possibleTypes = ['documents_sum_fields'];
export const isdocuments_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_sum_fields"');
    return documents_sum_fields_possibleTypes.includes(obj.__typename);
};
const documents_var_pop_fields_possibleTypes = ['documents_var_pop_fields'];
export const isdocuments_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_var_pop_fields"');
    return documents_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const documents_var_samp_fields_possibleTypes = ['documents_var_samp_fields'];
export const isdocuments_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_var_samp_fields"');
    return documents_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const documents_variance_fields_possibleTypes = ['documents_variance_fields'];
export const isdocuments_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isdocuments_variance_fields"');
    return documents_variance_fields_possibleTypes.includes(obj.__typename);
};
const groups_possibleTypes = ['groups'];
export const isgroups = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups"');
    return groups_possibleTypes.includes(obj.__typename);
};
const groups_aggregate_possibleTypes = ['groups_aggregate'];
export const isgroups_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups_aggregate"');
    return groups_aggregate_possibleTypes.includes(obj.__typename);
};
const groups_aggregate_fields_possibleTypes = ['groups_aggregate_fields'];
export const isgroups_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups_aggregate_fields"');
    return groups_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const groups_max_fields_possibleTypes = ['groups_max_fields'];
export const isgroups_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups_max_fields"');
    return groups_max_fields_possibleTypes.includes(obj.__typename);
};
const groups_min_fields_possibleTypes = ['groups_min_fields'];
export const isgroups_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups_min_fields"');
    return groups_min_fields_possibleTypes.includes(obj.__typename);
};
const groups_mutation_response_possibleTypes = ['groups_mutation_response'];
export const isgroups_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isgroups_mutation_response"');
    return groups_mutation_response_possibleTypes.includes(obj.__typename);
};
const initiators_possibleTypes = ['initiators'];
export const isinitiators = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators"');
    return initiators_possibleTypes.includes(obj.__typename);
};
const initiators_aggregate_possibleTypes = ['initiators_aggregate'];
export const isinitiators_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators_aggregate"');
    return initiators_aggregate_possibleTypes.includes(obj.__typename);
};
const initiators_aggregate_fields_possibleTypes = ['initiators_aggregate_fields'];
export const isinitiators_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators_aggregate_fields"');
    return initiators_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const initiators_max_fields_possibleTypes = ['initiators_max_fields'];
export const isinitiators_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators_max_fields"');
    return initiators_max_fields_possibleTypes.includes(obj.__typename);
};
const initiators_min_fields_possibleTypes = ['initiators_min_fields'];
export const isinitiators_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators_min_fields"');
    return initiators_min_fields_possibleTypes.includes(obj.__typename);
};
const initiators_mutation_response_possibleTypes = ['initiators_mutation_response'];
export const isinitiators_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isinitiators_mutation_response"');
    return initiators_mutation_response_possibleTypes.includes(obj.__typename);
};
const migrations_possibleTypes = ['migrations'];
export const ismigrations = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations"');
    return migrations_possibleTypes.includes(obj.__typename);
};
const migrations_aggregate_possibleTypes = ['migrations_aggregate'];
export const ismigrations_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_aggregate"');
    return migrations_aggregate_possibleTypes.includes(obj.__typename);
};
const migrations_aggregate_fields_possibleTypes = ['migrations_aggregate_fields'];
export const ismigrations_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_aggregate_fields"');
    return migrations_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const migrations_avg_fields_possibleTypes = ['migrations_avg_fields'];
export const ismigrations_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_avg_fields"');
    return migrations_avg_fields_possibleTypes.includes(obj.__typename);
};
const migrations_max_fields_possibleTypes = ['migrations_max_fields'];
export const ismigrations_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_max_fields"');
    return migrations_max_fields_possibleTypes.includes(obj.__typename);
};
const migrations_min_fields_possibleTypes = ['migrations_min_fields'];
export const ismigrations_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_min_fields"');
    return migrations_min_fields_possibleTypes.includes(obj.__typename);
};
const migrations_mutation_response_possibleTypes = ['migrations_mutation_response'];
export const ismigrations_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_mutation_response"');
    return migrations_mutation_response_possibleTypes.includes(obj.__typename);
};
const migrations_stddev_fields_possibleTypes = ['migrations_stddev_fields'];
export const ismigrations_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_stddev_fields"');
    return migrations_stddev_fields_possibleTypes.includes(obj.__typename);
};
const migrations_stddev_pop_fields_possibleTypes = ['migrations_stddev_pop_fields'];
export const ismigrations_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_stddev_pop_fields"');
    return migrations_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const migrations_stddev_samp_fields_possibleTypes = ['migrations_stddev_samp_fields'];
export const ismigrations_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_stddev_samp_fields"');
    return migrations_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const migrations_sum_fields_possibleTypes = ['migrations_sum_fields'];
export const ismigrations_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_sum_fields"');
    return migrations_sum_fields_possibleTypes.includes(obj.__typename);
};
const migrations_var_pop_fields_possibleTypes = ['migrations_var_pop_fields'];
export const ismigrations_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_var_pop_fields"');
    return migrations_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const migrations_var_samp_fields_possibleTypes = ['migrations_var_samp_fields'];
export const ismigrations_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_var_samp_fields"');
    return migrations_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const migrations_variance_fields_possibleTypes = ['migrations_variance_fields'];
export const ismigrations_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismigrations_variance_fields"');
    return migrations_variance_fields_possibleTypes.includes(obj.__typename);
};
const mutation_root_possibleTypes = ['mutation_root'];
export const ismutation_root = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "ismutation_root"');
    return mutation_root_possibleTypes.includes(obj.__typename);
};
const projects_possibleTypes = ['projects'];
export const isprojects = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects"');
    return projects_possibleTypes.includes(obj.__typename);
};
const projects_aggregate_possibleTypes = ['projects_aggregate'];
export const isprojects_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects_aggregate"');
    return projects_aggregate_possibleTypes.includes(obj.__typename);
};
const projects_aggregate_fields_possibleTypes = ['projects_aggregate_fields'];
export const isprojects_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects_aggregate_fields"');
    return projects_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const projects_max_fields_possibleTypes = ['projects_max_fields'];
export const isprojects_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects_max_fields"');
    return projects_max_fields_possibleTypes.includes(obj.__typename);
};
const projects_min_fields_possibleTypes = ['projects_min_fields'];
export const isprojects_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects_min_fields"');
    return projects_min_fields_possibleTypes.includes(obj.__typename);
};
const projects_mutation_response_possibleTypes = ['projects_mutation_response'];
export const isprojects_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isprojects_mutation_response"');
    return projects_mutation_response_possibleTypes.includes(obj.__typename);
};
const queries_possibleTypes = ['queries'];
export const isqueries = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries"');
    return queries_possibleTypes.includes(obj.__typename);
};
const queries_aggregate_possibleTypes = ['queries_aggregate'];
export const isqueries_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_aggregate"');
    return queries_aggregate_possibleTypes.includes(obj.__typename);
};
const queries_aggregate_fields_possibleTypes = ['queries_aggregate_fields'];
export const isqueries_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_aggregate_fields"');
    return queries_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const queries_avg_fields_possibleTypes = ['queries_avg_fields'];
export const isqueries_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_avg_fields"');
    return queries_avg_fields_possibleTypes.includes(obj.__typename);
};
const queries_max_fields_possibleTypes = ['queries_max_fields'];
export const isqueries_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_max_fields"');
    return queries_max_fields_possibleTypes.includes(obj.__typename);
};
const queries_min_fields_possibleTypes = ['queries_min_fields'];
export const isqueries_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_min_fields"');
    return queries_min_fields_possibleTypes.includes(obj.__typename);
};
const queries_mutation_response_possibleTypes = ['queries_mutation_response'];
export const isqueries_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_mutation_response"');
    return queries_mutation_response_possibleTypes.includes(obj.__typename);
};
const queries_stddev_fields_possibleTypes = ['queries_stddev_fields'];
export const isqueries_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_stddev_fields"');
    return queries_stddev_fields_possibleTypes.includes(obj.__typename);
};
const queries_stddev_pop_fields_possibleTypes = ['queries_stddev_pop_fields'];
export const isqueries_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_stddev_pop_fields"');
    return queries_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const queries_stddev_samp_fields_possibleTypes = ['queries_stddev_samp_fields'];
export const isqueries_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_stddev_samp_fields"');
    return queries_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const queries_sum_fields_possibleTypes = ['queries_sum_fields'];
export const isqueries_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_sum_fields"');
    return queries_sum_fields_possibleTypes.includes(obj.__typename);
};
const queries_var_pop_fields_possibleTypes = ['queries_var_pop_fields'];
export const isqueries_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_var_pop_fields"');
    return queries_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const queries_var_samp_fields_possibleTypes = ['queries_var_samp_fields'];
export const isqueries_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_var_samp_fields"');
    return queries_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const queries_variance_fields_possibleTypes = ['queries_variance_fields'];
export const isqueries_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isqueries_variance_fields"');
    return queries_variance_fields_possibleTypes.includes(obj.__typename);
};
const query_root_possibleTypes = ['query_root'];
export const isquery_root = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquery_root"');
    return query_root_possibleTypes.includes(obj.__typename);
};
const question_composite_question_possibleTypes = ['question_composite_question'];
export const isquestion_composite_question = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question"');
    return question_composite_question_possibleTypes.includes(obj.__typename);
};
const question_composite_question_aggregate_possibleTypes = ['question_composite_question_aggregate'];
export const isquestion_composite_question_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_aggregate"');
    return question_composite_question_aggregate_possibleTypes.includes(obj.__typename);
};
const question_composite_question_aggregate_fields_possibleTypes = ['question_composite_question_aggregate_fields'];
export const isquestion_composite_question_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_aggregate_fields"');
    return question_composite_question_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_avg_fields_possibleTypes = ['question_composite_question_avg_fields'];
export const isquestion_composite_question_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_avg_fields"');
    return question_composite_question_avg_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_max_fields_possibleTypes = ['question_composite_question_max_fields'];
export const isquestion_composite_question_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_max_fields"');
    return question_composite_question_max_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_min_fields_possibleTypes = ['question_composite_question_min_fields'];
export const isquestion_composite_question_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_min_fields"');
    return question_composite_question_min_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_mutation_response_possibleTypes = ['question_composite_question_mutation_response'];
export const isquestion_composite_question_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_mutation_response"');
    return question_composite_question_mutation_response_possibleTypes.includes(obj.__typename);
};
const question_composite_question_stddev_fields_possibleTypes = ['question_composite_question_stddev_fields'];
export const isquestion_composite_question_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_stddev_fields"');
    return question_composite_question_stddev_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_stddev_pop_fields_possibleTypes = ['question_composite_question_stddev_pop_fields'];
export const isquestion_composite_question_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_stddev_pop_fields"');
    return question_composite_question_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_stddev_samp_fields_possibleTypes = ['question_composite_question_stddev_samp_fields'];
export const isquestion_composite_question_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_stddev_samp_fields"');
    return question_composite_question_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_sum_fields_possibleTypes = ['question_composite_question_sum_fields'];
export const isquestion_composite_question_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_sum_fields"');
    return question_composite_question_sum_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_var_pop_fields_possibleTypes = ['question_composite_question_var_pop_fields'];
export const isquestion_composite_question_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_var_pop_fields"');
    return question_composite_question_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_var_samp_fields_possibleTypes = ['question_composite_question_var_samp_fields'];
export const isquestion_composite_question_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_var_samp_fields"');
    return question_composite_question_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const question_composite_question_variance_fields_possibleTypes = ['question_composite_question_variance_fields'];
export const isquestion_composite_question_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_composite_question_variance_fields"');
    return question_composite_question_variance_fields_possibleTypes.includes(obj.__typename);
};
const question_template_possibleTypes = ['question_template'];
export const isquestion_template = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template"');
    return question_template_possibleTypes.includes(obj.__typename);
};
const question_template_aggregate_possibleTypes = ['question_template_aggregate'];
export const isquestion_template_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_aggregate"');
    return question_template_aggregate_possibleTypes.includes(obj.__typename);
};
const question_template_aggregate_fields_possibleTypes = ['question_template_aggregate_fields'];
export const isquestion_template_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_aggregate_fields"');
    return question_template_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const question_template_avg_fields_possibleTypes = ['question_template_avg_fields'];
export const isquestion_template_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_avg_fields"');
    return question_template_avg_fields_possibleTypes.includes(obj.__typename);
};
const question_template_max_fields_possibleTypes = ['question_template_max_fields'];
export const isquestion_template_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_max_fields"');
    return question_template_max_fields_possibleTypes.includes(obj.__typename);
};
const question_template_min_fields_possibleTypes = ['question_template_min_fields'];
export const isquestion_template_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_min_fields"');
    return question_template_min_fields_possibleTypes.includes(obj.__typename);
};
const question_template_mutation_response_possibleTypes = ['question_template_mutation_response'];
export const isquestion_template_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_mutation_response"');
    return question_template_mutation_response_possibleTypes.includes(obj.__typename);
};
const question_template_stddev_fields_possibleTypes = ['question_template_stddev_fields'];
export const isquestion_template_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_stddev_fields"');
    return question_template_stddev_fields_possibleTypes.includes(obj.__typename);
};
const question_template_stddev_pop_fields_possibleTypes = ['question_template_stddev_pop_fields'];
export const isquestion_template_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_stddev_pop_fields"');
    return question_template_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const question_template_stddev_samp_fields_possibleTypes = ['question_template_stddev_samp_fields'];
export const isquestion_template_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_stddev_samp_fields"');
    return question_template_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const question_template_sum_fields_possibleTypes = ['question_template_sum_fields'];
export const isquestion_template_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_sum_fields"');
    return question_template_sum_fields_possibleTypes.includes(obj.__typename);
};
const question_template_var_pop_fields_possibleTypes = ['question_template_var_pop_fields'];
export const isquestion_template_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_var_pop_fields"');
    return question_template_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const question_template_var_samp_fields_possibleTypes = ['question_template_var_samp_fields'];
export const isquestion_template_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_var_samp_fields"');
    return question_template_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const question_template_variance_fields_possibleTypes = ['question_template_variance_fields'];
export const isquestion_template_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestion_template_variance_fields"');
    return question_template_variance_fields_possibleTypes.includes(obj.__typename);
};
const questions_possibleTypes = ['questions'];
export const isquestions = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions"');
    return questions_possibleTypes.includes(obj.__typename);
};
const questions_aggregate_possibleTypes = ['questions_aggregate'];
export const isquestions_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_aggregate"');
    return questions_aggregate_possibleTypes.includes(obj.__typename);
};
const questions_aggregate_fields_possibleTypes = ['questions_aggregate_fields'];
export const isquestions_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_aggregate_fields"');
    return questions_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const questions_avg_fields_possibleTypes = ['questions_avg_fields'];
export const isquestions_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_avg_fields"');
    return questions_avg_fields_possibleTypes.includes(obj.__typename);
};
const questions_max_fields_possibleTypes = ['questions_max_fields'];
export const isquestions_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_max_fields"');
    return questions_max_fields_possibleTypes.includes(obj.__typename);
};
const questions_min_fields_possibleTypes = ['questions_min_fields'];
export const isquestions_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_min_fields"');
    return questions_min_fields_possibleTypes.includes(obj.__typename);
};
const questions_mutation_response_possibleTypes = ['questions_mutation_response'];
export const isquestions_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_mutation_response"');
    return questions_mutation_response_possibleTypes.includes(obj.__typename);
};
const questions_stddev_fields_possibleTypes = ['questions_stddev_fields'];
export const isquestions_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_stddev_fields"');
    return questions_stddev_fields_possibleTypes.includes(obj.__typename);
};
const questions_stddev_pop_fields_possibleTypes = ['questions_stddev_pop_fields'];
export const isquestions_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_stddev_pop_fields"');
    return questions_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const questions_stddev_samp_fields_possibleTypes = ['questions_stddev_samp_fields'];
export const isquestions_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_stddev_samp_fields"');
    return questions_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const questions_sum_fields_possibleTypes = ['questions_sum_fields'];
export const isquestions_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_sum_fields"');
    return questions_sum_fields_possibleTypes.includes(obj.__typename);
};
const questions_var_pop_fields_possibleTypes = ['questions_var_pop_fields'];
export const isquestions_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_var_pop_fields"');
    return questions_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const questions_var_samp_fields_possibleTypes = ['questions_var_samp_fields'];
export const isquestions_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_var_samp_fields"');
    return questions_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const questions_variance_fields_possibleTypes = ['questions_variance_fields'];
export const isquestions_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isquestions_variance_fields"');
    return questions_variance_fields_possibleTypes.includes(obj.__typename);
};
const security_levels_possibleTypes = ['security_levels'];
export const issecurity_levels = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels"');
    return security_levels_possibleTypes.includes(obj.__typename);
};
const security_levels_aggregate_possibleTypes = ['security_levels_aggregate'];
export const issecurity_levels_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels_aggregate"');
    return security_levels_aggregate_possibleTypes.includes(obj.__typename);
};
const security_levels_aggregate_fields_possibleTypes = ['security_levels_aggregate_fields'];
export const issecurity_levels_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels_aggregate_fields"');
    return security_levels_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const security_levels_max_fields_possibleTypes = ['security_levels_max_fields'];
export const issecurity_levels_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels_max_fields"');
    return security_levels_max_fields_possibleTypes.includes(obj.__typename);
};
const security_levels_min_fields_possibleTypes = ['security_levels_min_fields'];
export const issecurity_levels_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels_min_fields"');
    return security_levels_min_fields_possibleTypes.includes(obj.__typename);
};
const security_levels_mutation_response_possibleTypes = ['security_levels_mutation_response'];
export const issecurity_levels_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issecurity_levels_mutation_response"');
    return security_levels_mutation_response_possibleTypes.includes(obj.__typename);
};
const settings_possibleTypes = ['settings'];
export const issettings = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings"');
    return settings_possibleTypes.includes(obj.__typename);
};
const settings_aggregate_possibleTypes = ['settings_aggregate'];
export const issettings_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_aggregate"');
    return settings_aggregate_possibleTypes.includes(obj.__typename);
};
const settings_aggregate_fields_possibleTypes = ['settings_aggregate_fields'];
export const issettings_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_aggregate_fields"');
    return settings_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const settings_avg_fields_possibleTypes = ['settings_avg_fields'];
export const issettings_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_avg_fields"');
    return settings_avg_fields_possibleTypes.includes(obj.__typename);
};
const settings_max_fields_possibleTypes = ['settings_max_fields'];
export const issettings_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_max_fields"');
    return settings_max_fields_possibleTypes.includes(obj.__typename);
};
const settings_min_fields_possibleTypes = ['settings_min_fields'];
export const issettings_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_min_fields"');
    return settings_min_fields_possibleTypes.includes(obj.__typename);
};
const settings_mutation_response_possibleTypes = ['settings_mutation_response'];
export const issettings_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_mutation_response"');
    return settings_mutation_response_possibleTypes.includes(obj.__typename);
};
const settings_stddev_fields_possibleTypes = ['settings_stddev_fields'];
export const issettings_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_stddev_fields"');
    return settings_stddev_fields_possibleTypes.includes(obj.__typename);
};
const settings_stddev_pop_fields_possibleTypes = ['settings_stddev_pop_fields'];
export const issettings_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_stddev_pop_fields"');
    return settings_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const settings_stddev_samp_fields_possibleTypes = ['settings_stddev_samp_fields'];
export const issettings_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_stddev_samp_fields"');
    return settings_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const settings_sum_fields_possibleTypes = ['settings_sum_fields'];
export const issettings_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_sum_fields"');
    return settings_sum_fields_possibleTypes.includes(obj.__typename);
};
const settings_var_pop_fields_possibleTypes = ['settings_var_pop_fields'];
export const issettings_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_var_pop_fields"');
    return settings_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const settings_var_samp_fields_possibleTypes = ['settings_var_samp_fields'];
export const issettings_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_var_samp_fields"');
    return settings_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const settings_variance_fields_possibleTypes = ['settings_variance_fields'];
export const issettings_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issettings_variance_fields"');
    return settings_variance_fields_possibleTypes.includes(obj.__typename);
};
const shortcuts_possibleTypes = ['shortcuts'];
export const isshortcuts = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts"');
    return shortcuts_possibleTypes.includes(obj.__typename);
};
const shortcuts_aggregate_possibleTypes = ['shortcuts_aggregate'];
export const isshortcuts_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts_aggregate"');
    return shortcuts_aggregate_possibleTypes.includes(obj.__typename);
};
const shortcuts_aggregate_fields_possibleTypes = ['shortcuts_aggregate_fields'];
export const isshortcuts_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts_aggregate_fields"');
    return shortcuts_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const shortcuts_max_fields_possibleTypes = ['shortcuts_max_fields'];
export const isshortcuts_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts_max_fields"');
    return shortcuts_max_fields_possibleTypes.includes(obj.__typename);
};
const shortcuts_min_fields_possibleTypes = ['shortcuts_min_fields'];
export const isshortcuts_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts_min_fields"');
    return shortcuts_min_fields_possibleTypes.includes(obj.__typename);
};
const shortcuts_mutation_response_possibleTypes = ['shortcuts_mutation_response'];
export const isshortcuts_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isshortcuts_mutation_response"');
    return shortcuts_mutation_response_possibleTypes.includes(obj.__typename);
};
const sms_possibleTypes = ['sms'];
export const issms = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms"');
    return sms_possibleTypes.includes(obj.__typename);
};
const sms_aggregate_possibleTypes = ['sms_aggregate'];
export const issms_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_aggregate"');
    return sms_aggregate_possibleTypes.includes(obj.__typename);
};
const sms_aggregate_fields_possibleTypes = ['sms_aggregate_fields'];
export const issms_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_aggregate_fields"');
    return sms_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const sms_avg_fields_possibleTypes = ['sms_avg_fields'];
export const issms_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_avg_fields"');
    return sms_avg_fields_possibleTypes.includes(obj.__typename);
};
const sms_max_fields_possibleTypes = ['sms_max_fields'];
export const issms_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_max_fields"');
    return sms_max_fields_possibleTypes.includes(obj.__typename);
};
const sms_min_fields_possibleTypes = ['sms_min_fields'];
export const issms_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_min_fields"');
    return sms_min_fields_possibleTypes.includes(obj.__typename);
};
const sms_mutation_response_possibleTypes = ['sms_mutation_response'];
export const issms_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_mutation_response"');
    return sms_mutation_response_possibleTypes.includes(obj.__typename);
};
const sms_stddev_fields_possibleTypes = ['sms_stddev_fields'];
export const issms_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_stddev_fields"');
    return sms_stddev_fields_possibleTypes.includes(obj.__typename);
};
const sms_stddev_pop_fields_possibleTypes = ['sms_stddev_pop_fields'];
export const issms_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_stddev_pop_fields"');
    return sms_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_stddev_samp_fields_possibleTypes = ['sms_stddev_samp_fields'];
export const issms_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_stddev_samp_fields"');
    return sms_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_sum_fields_possibleTypes = ['sms_sum_fields'];
export const issms_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_sum_fields"');
    return sms_sum_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_possibleTypes = ['sms_template_template'];
export const issms_template_template = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template"');
    return sms_template_template_possibleTypes.includes(obj.__typename);
};
const sms_template_template_aggregate_possibleTypes = ['sms_template_template_aggregate'];
export const issms_template_template_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_aggregate"');
    return sms_template_template_aggregate_possibleTypes.includes(obj.__typename);
};
const sms_template_template_aggregate_fields_possibleTypes = ['sms_template_template_aggregate_fields'];
export const issms_template_template_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_aggregate_fields"');
    return sms_template_template_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_avg_fields_possibleTypes = ['sms_template_template_avg_fields'];
export const issms_template_template_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_avg_fields"');
    return sms_template_template_avg_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_max_fields_possibleTypes = ['sms_template_template_max_fields'];
export const issms_template_template_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_max_fields"');
    return sms_template_template_max_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_min_fields_possibleTypes = ['sms_template_template_min_fields'];
export const issms_template_template_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_min_fields"');
    return sms_template_template_min_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_mutation_response_possibleTypes = ['sms_template_template_mutation_response'];
export const issms_template_template_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_mutation_response"');
    return sms_template_template_mutation_response_possibleTypes.includes(obj.__typename);
};
const sms_template_template_stddev_fields_possibleTypes = ['sms_template_template_stddev_fields'];
export const issms_template_template_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_stddev_fields"');
    return sms_template_template_stddev_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_stddev_pop_fields_possibleTypes = ['sms_template_template_stddev_pop_fields'];
export const issms_template_template_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_stddev_pop_fields"');
    return sms_template_template_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_stddev_samp_fields_possibleTypes = ['sms_template_template_stddev_samp_fields'];
export const issms_template_template_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_stddev_samp_fields"');
    return sms_template_template_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_sum_fields_possibleTypes = ['sms_template_template_sum_fields'];
export const issms_template_template_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_sum_fields"');
    return sms_template_template_sum_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_var_pop_fields_possibleTypes = ['sms_template_template_var_pop_fields'];
export const issms_template_template_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_var_pop_fields"');
    return sms_template_template_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_var_samp_fields_possibleTypes = ['sms_template_template_var_samp_fields'];
export const issms_template_template_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_var_samp_fields"');
    return sms_template_template_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_template_template_variance_fields_possibleTypes = ['sms_template_template_variance_fields'];
export const issms_template_template_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_template_template_variance_fields"');
    return sms_template_template_variance_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_possibleTypes = ['sms_templates'];
export const issms_templates = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates"');
    return sms_templates_possibleTypes.includes(obj.__typename);
};
const sms_templates_aggregate_possibleTypes = ['sms_templates_aggregate'];
export const issms_templates_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_aggregate"');
    return sms_templates_aggregate_possibleTypes.includes(obj.__typename);
};
const sms_templates_aggregate_fields_possibleTypes = ['sms_templates_aggregate_fields'];
export const issms_templates_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_aggregate_fields"');
    return sms_templates_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_avg_fields_possibleTypes = ['sms_templates_avg_fields'];
export const issms_templates_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_avg_fields"');
    return sms_templates_avg_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_max_fields_possibleTypes = ['sms_templates_max_fields'];
export const issms_templates_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_max_fields"');
    return sms_templates_max_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_min_fields_possibleTypes = ['sms_templates_min_fields'];
export const issms_templates_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_min_fields"');
    return sms_templates_min_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_mutation_response_possibleTypes = ['sms_templates_mutation_response'];
export const issms_templates_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_mutation_response"');
    return sms_templates_mutation_response_possibleTypes.includes(obj.__typename);
};
const sms_templates_stddev_fields_possibleTypes = ['sms_templates_stddev_fields'];
export const issms_templates_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_stddev_fields"');
    return sms_templates_stddev_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_stddev_pop_fields_possibleTypes = ['sms_templates_stddev_pop_fields'];
export const issms_templates_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_stddev_pop_fields"');
    return sms_templates_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_stddev_samp_fields_possibleTypes = ['sms_templates_stddev_samp_fields'];
export const issms_templates_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_stddev_samp_fields"');
    return sms_templates_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_sum_fields_possibleTypes = ['sms_templates_sum_fields'];
export const issms_templates_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_sum_fields"');
    return sms_templates_sum_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_var_pop_fields_possibleTypes = ['sms_templates_var_pop_fields'];
export const issms_templates_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_var_pop_fields"');
    return sms_templates_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_var_samp_fields_possibleTypes = ['sms_templates_var_samp_fields'];
export const issms_templates_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_var_samp_fields"');
    return sms_templates_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_templates_variance_fields_possibleTypes = ['sms_templates_variance_fields'];
export const issms_templates_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_templates_variance_fields"');
    return sms_templates_variance_fields_possibleTypes.includes(obj.__typename);
};
const sms_var_pop_fields_possibleTypes = ['sms_var_pop_fields'];
export const issms_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_var_pop_fields"');
    return sms_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const sms_var_samp_fields_possibleTypes = ['sms_var_samp_fields'];
export const issms_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_var_samp_fields"');
    return sms_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const sms_variance_fields_possibleTypes = ['sms_variance_fields'];
export const issms_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issms_variance_fields"');
    return sms_variance_fields_possibleTypes.includes(obj.__typename);
};
const status_possibleTypes = ['status'];
export const isstatus = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus"');
    return status_possibleTypes.includes(obj.__typename);
};
const status_aggregate_possibleTypes = ['status_aggregate'];
export const isstatus_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus_aggregate"');
    return status_aggregate_possibleTypes.includes(obj.__typename);
};
const status_aggregate_fields_possibleTypes = ['status_aggregate_fields'];
export const isstatus_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus_aggregate_fields"');
    return status_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const status_max_fields_possibleTypes = ['status_max_fields'];
export const isstatus_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus_max_fields"');
    return status_max_fields_possibleTypes.includes(obj.__typename);
};
const status_min_fields_possibleTypes = ['status_min_fields'];
export const isstatus_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus_min_fields"');
    return status_min_fields_possibleTypes.includes(obj.__typename);
};
const status_mutation_response_possibleTypes = ['status_mutation_response'];
export const isstatus_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isstatus_mutation_response"');
    return status_mutation_response_possibleTypes.includes(obj.__typename);
};
const subscription_root_possibleTypes = ['subscription_root'];
export const issubscription_root = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "issubscription_root"');
    return subscription_root_possibleTypes.includes(obj.__typename);
};
const templates_possibleTypes = ['templates'];
export const istemplates = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates"');
    return templates_possibleTypes.includes(obj.__typename);
};
const templates_aggregate_possibleTypes = ['templates_aggregate'];
export const istemplates_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_aggregate"');
    return templates_aggregate_possibleTypes.includes(obj.__typename);
};
const templates_aggregate_fields_possibleTypes = ['templates_aggregate_fields'];
export const istemplates_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_aggregate_fields"');
    return templates_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const templates_avg_fields_possibleTypes = ['templates_avg_fields'];
export const istemplates_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_avg_fields"');
    return templates_avg_fields_possibleTypes.includes(obj.__typename);
};
const templates_max_fields_possibleTypes = ['templates_max_fields'];
export const istemplates_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_max_fields"');
    return templates_max_fields_possibleTypes.includes(obj.__typename);
};
const templates_min_fields_possibleTypes = ['templates_min_fields'];
export const istemplates_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_min_fields"');
    return templates_min_fields_possibleTypes.includes(obj.__typename);
};
const templates_mutation_response_possibleTypes = ['templates_mutation_response'];
export const istemplates_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_mutation_response"');
    return templates_mutation_response_possibleTypes.includes(obj.__typename);
};
const templates_stddev_fields_possibleTypes = ['templates_stddev_fields'];
export const istemplates_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_stddev_fields"');
    return templates_stddev_fields_possibleTypes.includes(obj.__typename);
};
const templates_stddev_pop_fields_possibleTypes = ['templates_stddev_pop_fields'];
export const istemplates_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_stddev_pop_fields"');
    return templates_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const templates_stddev_samp_fields_possibleTypes = ['templates_stddev_samp_fields'];
export const istemplates_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_stddev_samp_fields"');
    return templates_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const templates_sum_fields_possibleTypes = ['templates_sum_fields'];
export const istemplates_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_sum_fields"');
    return templates_sum_fields_possibleTypes.includes(obj.__typename);
};
const templates_var_pop_fields_possibleTypes = ['templates_var_pop_fields'];
export const istemplates_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_var_pop_fields"');
    return templates_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const templates_var_samp_fields_possibleTypes = ['templates_var_samp_fields'];
export const istemplates_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_var_samp_fields"');
    return templates_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const templates_variance_fields_possibleTypes = ['templates_variance_fields'];
export const istemplates_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istemplates_variance_fields"');
    return templates_variance_fields_possibleTypes.includes(obj.__typename);
};
const types_possibleTypes = ['types'];
export const istypes = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes"');
    return types_possibleTypes.includes(obj.__typename);
};
const types_aggregate_possibleTypes = ['types_aggregate'];
export const istypes_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes_aggregate"');
    return types_aggregate_possibleTypes.includes(obj.__typename);
};
const types_aggregate_fields_possibleTypes = ['types_aggregate_fields'];
export const istypes_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes_aggregate_fields"');
    return types_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const types_max_fields_possibleTypes = ['types_max_fields'];
export const istypes_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes_max_fields"');
    return types_max_fields_possibleTypes.includes(obj.__typename);
};
const types_min_fields_possibleTypes = ['types_min_fields'];
export const istypes_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes_min_fields"');
    return types_min_fields_possibleTypes.includes(obj.__typename);
};
const types_mutation_response_possibleTypes = ['types_mutation_response'];
export const istypes_mutation_response = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "istypes_mutation_response"');
    return types_mutation_response_possibleTypes.includes(obj.__typename);
};
const unseen_documents_possibleTypes = ['unseen_documents'];
export const isunseen_documents = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents"');
    return unseen_documents_possibleTypes.includes(obj.__typename);
};
const unseen_documents_aggregate_possibleTypes = ['unseen_documents_aggregate'];
export const isunseen_documents_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_aggregate"');
    return unseen_documents_aggregate_possibleTypes.includes(obj.__typename);
};
const unseen_documents_aggregate_fields_possibleTypes = ['unseen_documents_aggregate_fields'];
export const isunseen_documents_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_aggregate_fields"');
    return unseen_documents_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_avg_fields_possibleTypes = ['unseen_documents_avg_fields'];
export const isunseen_documents_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_avg_fields"');
    return unseen_documents_avg_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_max_fields_possibleTypes = ['unseen_documents_max_fields'];
export const isunseen_documents_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_max_fields"');
    return unseen_documents_max_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_min_fields_possibleTypes = ['unseen_documents_min_fields'];
export const isunseen_documents_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_min_fields"');
    return unseen_documents_min_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_stddev_fields_possibleTypes = ['unseen_documents_stddev_fields'];
export const isunseen_documents_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_stddev_fields"');
    return unseen_documents_stddev_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_stddev_pop_fields_possibleTypes = ['unseen_documents_stddev_pop_fields'];
export const isunseen_documents_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_stddev_pop_fields"');
    return unseen_documents_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_stddev_samp_fields_possibleTypes = ['unseen_documents_stddev_samp_fields'];
export const isunseen_documents_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_stddev_samp_fields"');
    return unseen_documents_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_sum_fields_possibleTypes = ['unseen_documents_sum_fields'];
export const isunseen_documents_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_sum_fields"');
    return unseen_documents_sum_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_var_pop_fields_possibleTypes = ['unseen_documents_var_pop_fields'];
export const isunseen_documents_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_var_pop_fields"');
    return unseen_documents_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_var_samp_fields_possibleTypes = ['unseen_documents_var_samp_fields'];
export const isunseen_documents_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_var_samp_fields"');
    return unseen_documents_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const unseen_documents_variance_fields_possibleTypes = ['unseen_documents_variance_fields'];
export const isunseen_documents_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_documents_variance_fields"');
    return unseen_documents_variance_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_possibleTypes = ['unseen_queries'];
export const isunseen_queries = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries"');
    return unseen_queries_possibleTypes.includes(obj.__typename);
};
const unseen_queries_aggregate_possibleTypes = ['unseen_queries_aggregate'];
export const isunseen_queries_aggregate = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_aggregate"');
    return unseen_queries_aggregate_possibleTypes.includes(obj.__typename);
};
const unseen_queries_aggregate_fields_possibleTypes = ['unseen_queries_aggregate_fields'];
export const isunseen_queries_aggregate_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_aggregate_fields"');
    return unseen_queries_aggregate_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_avg_fields_possibleTypes = ['unseen_queries_avg_fields'];
export const isunseen_queries_avg_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_avg_fields"');
    return unseen_queries_avg_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_max_fields_possibleTypes = ['unseen_queries_max_fields'];
export const isunseen_queries_max_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_max_fields"');
    return unseen_queries_max_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_min_fields_possibleTypes = ['unseen_queries_min_fields'];
export const isunseen_queries_min_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_min_fields"');
    return unseen_queries_min_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_stddev_fields_possibleTypes = ['unseen_queries_stddev_fields'];
export const isunseen_queries_stddev_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_stddev_fields"');
    return unseen_queries_stddev_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_stddev_pop_fields_possibleTypes = ['unseen_queries_stddev_pop_fields'];
export const isunseen_queries_stddev_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_stddev_pop_fields"');
    return unseen_queries_stddev_pop_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_stddev_samp_fields_possibleTypes = ['unseen_queries_stddev_samp_fields'];
export const isunseen_queries_stddev_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_stddev_samp_fields"');
    return unseen_queries_stddev_samp_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_sum_fields_possibleTypes = ['unseen_queries_sum_fields'];
export const isunseen_queries_sum_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_sum_fields"');
    return unseen_queries_sum_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_var_pop_fields_possibleTypes = ['unseen_queries_var_pop_fields'];
export const isunseen_queries_var_pop_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_var_pop_fields"');
    return unseen_queries_var_pop_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_var_samp_fields_possibleTypes = ['unseen_queries_var_samp_fields'];
export const isunseen_queries_var_samp_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_var_samp_fields"');
    return unseen_queries_var_samp_fields_possibleTypes.includes(obj.__typename);
};
const unseen_queries_variance_fields_possibleTypes = ['unseen_queries_variance_fields'];
export const isunseen_queries_variance_fields = (obj) => {
    if (!(obj === null || obj === void 0 ? void 0 : obj.__typename))
        throw new Error('__typename is missing in "isunseen_queries_variance_fields"');
    return unseen_queries_variance_fields_possibleTypes.includes(obj.__typename);
};
//# sourceMappingURL=schema.js.map
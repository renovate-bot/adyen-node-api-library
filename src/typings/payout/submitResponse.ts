/**
 * Adyen Payout Service
 * A set of API endpoints that allow you to store payout details, confirm, or decline a payout.  For more information, refer to [Third-party payouts](https://docs.adyen.com/features/third-party-payouts).
 *
 * OpenAPI spec version: 30
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface SubmitResponse { 
    /**
     * This field contains additional data, which may be returned in a particular response.
     */
    additionalData?: any;
    /**
     * A new reference to uniquely identify this request.
     */
    pspReference: string;
    /**
     * In case of refusal, an informational message for the reason.
     */
    refusalReason?: string;
    /**
     * The response: * In case of success, it is `payout-submit-received`. * In case of an error, an informational message is returned.
     */
    resultCode: string;
}
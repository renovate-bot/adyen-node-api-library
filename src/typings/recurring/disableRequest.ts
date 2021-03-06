/**
 * Adyen Recurring Service
 * The Recurring APIs allow you to manage and remove your tokens or saved payment details. Tokens should be created with validation during a payment request.  For more information, refer to our [Tokenization documentation](https://docs.adyen.com/features/tokenization). ## Authentication To connect to the Recurring API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Recurring API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Recurring/v30/disable ```
 *
 * OpenAPI spec version: 30
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface DisableRequest { 
    /**
     * Specify the contract if you only want to disable a specific use.  This field can be set to one of the following values, or to their combination (comma-separated): * ONECLICK * RECURRING * PAYOUT
     */
    contract?: string;
    /**
     * The merchant account identifier with which you want to process the transaction.
     */
    merchantAccount: string;
    /**
     * The ID that uniquely identifies the recurring detail reference.  If it is not provided, the whole recurring contract of the `shopperReference` will be disabled, which includes all recurring details.
     */
    recurringDetailReference?: string;
    /**
     * The ID that uniquely identifies the shopper.  This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
     */
    shopperReference: string;
}
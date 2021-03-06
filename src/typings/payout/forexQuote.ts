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
 */import { Amount } from './amount';


export interface ForexQuote { 
    /**
     * The account name.
     */
    account?: string;
    /**
     * The account type.
     */
    accountType?: string;
    baseAmount?: Amount;
    /**
     * The base points.
     */
    basePoints: number;
    buy?: Amount;
    interbank?: Amount;
    /**
     * The reference assigned to the forex quote request.
     */
    reference?: string;
    sell?: Amount;
    /**
     * The signature to validate the integrity.
     */
    signature?: string;
    /**
     * The source of the forex quote.
     */
    source?: string;
    /**
     * The type of forex.
     */
    type?: string;
    /**
     * The date until which the forex quote is valid.
     */
    validTill: Date;
}
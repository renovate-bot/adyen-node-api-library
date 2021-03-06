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
 */import { FraudCheckResult } from './fraudCheckResult';


export interface FraudResult { 
    /**
     * The total fraud score generated by the risk checks.
     */
    accountScore: number;
    /**
     * The result of the individual risk checks.
     */
    results?: Array<FraudCheckResult>;
}
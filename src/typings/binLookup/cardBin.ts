/**
 * Adyen BinLookup Service
 * The BIN Lookup API provides endpoints for retrieving information, such as [cost estimates](https://docs.adyen.com/features/cost-estimation), and 3D Secure supported version based on a given [BIN](https://docs.adyen.com/payments-basics/payment-glossary#bankidentificationnumberbin).
 *
 * OpenAPI spec version: 40
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface CardBin { 
    /**
     * The first 6 digit of the card number. Enable this field via merchant account settings.
     */
    bin?: string;
    /**
     * If true, it indicates a commercial card. Enable this field via merchant account settings.
     */
    commercial?: boolean;
    /**
     * The card funding source. Valid values are: * CREDIT * DEBIT * PREPAID * PREPAID_RELOADABLE * DEFERRED_DEBIT * CHARGED > Enable this field via merchant account settings.
     */
    fundingSource?: string;
    /**
     * Indicates availability of funds.  Visa: * \"I\" (fast funds are supported) * \"N\" (otherwise)  Mastercard: * \"I\" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list) * \"N\" (otherwise) > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from \"N\" or \"U\".
     */
    fundsAvailability?: string;
    /**
     * The issuing bank of the card.
     */
    issuingBank?: string;
    /**
     * The country where the card was issued from.
     */
    issuingCountry?: string;
    /**
     * The currency of the card.
     */
    issuingCurrency?: string;
    /**
     * The payment method associated with the card (e.g. visa, mc, or amex).
     */
    paymentMethod?: string;
    /**
     * Indicates whether a payout is eligible or not for this card.  Visa: * \"Y\" * \"N\"  Mastercard: * \"Y\" (domestic and cross-border) * \"D\" (only domestic) * \"N\" (no MoneySend) * \"U\" (unknown) > Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from \"N\" or \"U\".
     */
    payoutEligible?: string;
    /**
     * The last four digits of the card number.
     */
    summary?: string;
}
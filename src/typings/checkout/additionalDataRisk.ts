/**
 * Adyen Checkout API
 * Adyen Checkout API provides a simple and flexible way to initiate and authorise online payments. You can use the same integration for payments made with cards (including One-Click and 3D Secure), mobile wallets, and local payment methods (e.g. iDEAL and Sofort).  This API reference provides information on available endpoints and how to interact with them. To learn more about the API, visit [Checkout documentation](https://docs.adyen.com/checkout).  ## Authentication Each request to the Checkout API must be signed with an API key. For this, obtain an API Key from your Customer Area, as described in [How to get the API key](https://docs.adyen.com/user-management/how-to-get-the-api-key). Then set this key to the `X-API-Key` header value, for example:  ``` curl -H \"Content-Type: application/json\" \\ -H \"X-API-Key: Your_Checkout_API_key\" \\ ... ``` Note that when going live, you need to generate a new API Key to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Checkout API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://checkout-test.adyen.com/v51/payments ```
 *
 * The version of the OpenAPI document: 51
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class AdditionalDataRisk {
    /**
    * The method to deliver the goods to the shopper.  Used in [Delivery Method](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#delivery-method) check.
    */
    'riskdataDeliveryMethod'?: string;
    /**
    * The creation date of a shopper account on the merchant\'s platform. * Format: `yyyy-MM-dd HH:mm:ss` Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules). 
    */
    'riskdataAccountCreationDate'?: string;
    /**
    * This specifies the date when the shopper\'s account was created. * Format: `yyyy-MM-dd HH:mm:ss.sssZ`  Used in [Shopper Account Age check](https://docs.adyen.com/risk-management/configure-standard-risk-rules/consistency-rules#shopper-account-age).
    */
    'riskdataShopperAccountCreationDate'?: string;
    /**
    * A risk score coming from a system external to Adyen. * Format: Numeric (when used in custom risk checks)  Used in [External Risk Score check](https://docs.adyen.com/risk-management/configure-standard-risk-rules/external-risk-rules#external-risk-score-generic).  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataExternalRiskScore'?: string;
    /**
    * Usually a boolean representing the fraud risk assessment coming from a system external to Adyen.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataExternalSuspectedFraud'?: string;
    /**
    * A code corresponding to a telecom network operator  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataOperatorCode'?: string;
    /**
    * Country corresponding to the telecom network operator. Usually a two letter country code.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataOperatorCountry'?: object;
    /**
    * Name of a telecom network operator e.g. Vodafone, Orange etc.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataOperatorName'?: string;
    /**
    * Product code of a telecom product.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataOperatorProductCode'?: string;
    /**
    * Represents the payment method as it is understood by the merchant. Does not necessarily have to coincide with the payment method determined by Adyen.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).  For visacheckout, masterpass, and paywithgoogle, use `riskdata.paymentDataSource` instead.
    */
    'riskdataPaymentMethod'?: string;
    /**
    * Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules) for visacheckout, masterpass, and paywithgoogle.
    */
    'riskdataPaymentDataSource'?: string;
    /**
    * The number of previous non-fraudulent orders made by a shopper. * Format: Numeric  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataPreviousSuccessfulOrders'?: string;
    /**
    * The referral method/reason for joining the merchant\'s platform.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataReferralMethod'?: string;
    /**
    * The user name of a member who referred somebody to the merchant\'s platform.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataReferrerUserName'?: string;
    /**
    * The id of the risk profile to use instead of the merchant account\'s currently set risk profile.
    */
    'riskdataRiskProfileId'?: string;
    /**
    * A secondary phone number for a user of the merchant\'s platform.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataSecondaryPhoneNumber'?: object;
    /**
    * Name of the shipping method.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataShippingMethod'?: string;
    /**
    * The shopper country as determined by the merchant, usually as a 2 letter country code. Does not have to coincide with the Adyen determined shopper country.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataShopperCountry'?: string;
    /**
    * Usually a SIM distribution company name e.g. Core, Elite, GK Tel etc.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataSimDistributor'?: string;
    /**
    * User name of an account on the merchant\'s platform.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataUserName'?: string;
    /**
    * Usually a user\'s loyalty status e.g. Gold, Silver etc.  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataUserStatus'?: string;
    /**
    * Name of the browser language used by the shopper. Usually a two letter country code (e.g. NL, FR, US etc.)  Used in [Custom risk checks](https://docs.adyen.com/risk-management/configure-custom-risk-rules).
    */
    'riskdataBrowserLanguage'?: string;
    /**
    * ID of the item.
    */
    'riskdataBasketItemItemNrItemID'?: string;
    /**
    * A text description of the product the invoice line refers to.
    */
    'riskdataBasketItemItemNrProductTitle'?: string;
    /**
    * The price of item in the basket, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'riskdataBasketItemItemNrAmountPerItem'?: string;
    /**
    * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
    */
    'riskdataBasketItemItemNrCurrency'?: string;
    /**
    * [Universal Product Code](https://en.wikipedia.org/wiki/Universal_Product_Code).
    */
    'riskdataBasketItemItemNrUpc'?: string;
    /**
    * [Stock keeping unit](https://en.wikipedia.org/wiki/Stock_keeping_unit).
    */
    'riskdataBasketItemItemNrSku'?: string;
    /**
    * Brand of the item.
    */
    'riskdataBasketItemItemNrBrand'?: string;
    /**
    * Manufacturer of the item.
    */
    'riskdataBasketItemItemNrManufacturer'?: string;
    /**
    * Category of the item.
    */
    'riskdataBasketItemItemNrCategory'?: string;
    /**
    * Color of the item.
    */
    'riskdataBasketItemItemNrColor'?: string;
    /**
    * Size of the item.
    */
    'riskdataBasketItemItemNrSize'?: string;
    /**
    * Quantity of the item purchased.
    */
    'riskdataBasketItemItemNrQuantity'?: string;
    /**
    * Email associated with the given product in the basket (usually in electronic gift cards).
    */
    'riskdataBasketItemItemNrReceiverEmail'?: string;
    /**
    * Code of the promotion.
    */
    'riskdataPromotionsPromotionItemNrPromotionCode'?: string;
    /**
    * Name of the promotion.
    */
    'riskdataPromotionsPromotionItemNrPromotionName'?: string;
    /**
    * The discount amount of the promotion, represented in [minor units](https://docs.adyen.com/development-resources/currency-codes).
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountAmount'?: string;
    /**
    * The three-character [ISO currency code](https://en.wikipedia.org/wiki/ISO_4217).
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountCurrency'?: string;
    /**
    * Promotion\'s percentage discount. It is represented in percentage value and there is no need to include the \'%\' sign.  e.g. for a promotion discount of 30%, the value of the field should be 30.
    */
    'riskdataPromotionsPromotionItemNrPromotionDiscountPercentage'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "riskdataDeliveryMethod",
            "baseName": "riskdata.deliveryMethod",
            "type": "string"
        },
        {
            "name": "riskdataAccountCreationDate",
            "baseName": "riskdata.accountCreationDate",
            "type": "string"
        },
        {
            "name": "riskdataShopperAccountCreationDate",
            "baseName": "riskdata.shopperAccountCreationDate",
            "type": "string"
        },
        {
            "name": "riskdataExternalRiskScore",
            "baseName": "riskdata.externalRiskScore",
            "type": "string"
        },
        {
            "name": "riskdataExternalSuspectedFraud",
            "baseName": "riskdata.externalSuspectedFraud",
            "type": "string"
        },
        {
            "name": "riskdataOperatorCode",
            "baseName": "riskdata.operatorCode",
            "type": "string"
        },
        {
            "name": "riskdataOperatorCountry",
            "baseName": "riskdata.operatorCountry",
            "type": "object"
        },
        {
            "name": "riskdataOperatorName",
            "baseName": "riskdata.operatorName",
            "type": "string"
        },
        {
            "name": "riskdataOperatorProductCode",
            "baseName": "riskdata.operatorProductCode",
            "type": "string"
        },
        {
            "name": "riskdataPaymentMethod",
            "baseName": "riskdata.paymentMethod",
            "type": "string"
        },
        {
            "name": "riskdataPaymentDataSource",
            "baseName": "riskdata.paymentDataSource",
            "type": "string"
        },
        {
            "name": "riskdataPreviousSuccessfulOrders",
            "baseName": "riskdata.previousSuccessfulOrders",
            "type": "string"
        },
        {
            "name": "riskdataReferralMethod",
            "baseName": "riskdata.referralMethod",
            "type": "string"
        },
        {
            "name": "riskdataReferrerUserName",
            "baseName": "riskdata.referrerUserName",
            "type": "string"
        },
        {
            "name": "riskdataRiskProfileId",
            "baseName": "riskdata.riskProfileId",
            "type": "string"
        },
        {
            "name": "riskdataSecondaryPhoneNumber",
            "baseName": "riskdata.secondaryPhoneNumber",
            "type": "object"
        },
        {
            "name": "riskdataShippingMethod",
            "baseName": "riskdata.shippingMethod",
            "type": "string"
        },
        {
            "name": "riskdataShopperCountry",
            "baseName": "riskdata.shopperCountry",
            "type": "string"
        },
        {
            "name": "riskdataSimDistributor",
            "baseName": "riskdata.simDistributor",
            "type": "string"
        },
        {
            "name": "riskdataUserName",
            "baseName": "riskdata.userName",
            "type": "string"
        },
        {
            "name": "riskdataUserStatus",
            "baseName": "riskdata.userStatus",
            "type": "string"
        },
        {
            "name": "riskdataBrowserLanguage",
            "baseName": "riskdata.browserLanguage",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrItemID",
            "baseName": "riskdata.basket.item[itemNr].itemID",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrProductTitle",
            "baseName": "riskdata.basket.item[itemNr].productTitle",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrAmountPerItem",
            "baseName": "riskdata.basket.item[itemNr].amountPerItem",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrCurrency",
            "baseName": "riskdata.basket.item[itemNr].currency",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrUpc",
            "baseName": "riskdata.basket.item[itemNr].upc",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrSku",
            "baseName": "riskdata.basket.item[itemNr].sku",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrBrand",
            "baseName": "riskdata.basket.item[itemNr].brand",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrManufacturer",
            "baseName": "riskdata.basket.item[itemNr].manufacturer",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrCategory",
            "baseName": "riskdata.basket.item[itemNr].category",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrColor",
            "baseName": "riskdata.basket.item[itemNr].color",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrSize",
            "baseName": "riskdata.basket.item[itemNr].size",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrQuantity",
            "baseName": "riskdata.basket.item[itemNr].quantity",
            "type": "string"
        },
        {
            "name": "riskdataBasketItemItemNrReceiverEmail",
            "baseName": "riskdata.basket.item[itemNr].receiverEmail",
            "type": "string"
        },
        {
            "name": "riskdataPromotionsPromotionItemNrPromotionCode",
            "baseName": "riskdata.promotions.promotion[itemNr].promotionCode",
            "type": "string"
        },
        {
            "name": "riskdataPromotionsPromotionItemNrPromotionName",
            "baseName": "riskdata.promotions.promotion[itemNr].promotionName",
            "type": "string"
        },
        {
            "name": "riskdataPromotionsPromotionItemNrPromotionDiscountAmount",
            "baseName": "riskdata.promotions.promotion[itemNr].promotionDiscountAmount",
            "type": "string"
        },
        {
            "name": "riskdataPromotionsPromotionItemNrPromotionDiscountCurrency",
            "baseName": "riskdata.promotions.promotion[itemNr].promotionDiscountCurrency",
            "type": "string"
        },
        {
            "name": "riskdataPromotionsPromotionItemNrPromotionDiscountPercentage",
            "baseName": "riskdata.promotions.promotion[itemNr].promotionDiscountPercentage",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AdditionalDataRisk.attributeTypeMap;
    }
}

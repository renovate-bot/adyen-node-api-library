/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DisplayOutput } from './displayOutput';

export class CardReaderInitRequest {
    'displayOutput'?: DisplayOutput;
    'forceEntryMode'?: Array<Array<CardReaderInitRequest.ForceEntryModeEnum>>;
    'leaveCardFlag'?: boolean;
    'maxWaitingTime'?: number;
    'warmResetFlag'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "forceEntryMode",
            "baseName": "ForceEntryMode",
            "type": "Array<Array<CardReaderInitRequest.ForceEntryModeEnum>>"
        },
        {
            "name": "leaveCardFlag",
            "baseName": "LeaveCardFlag",
            "type": "boolean"
        },
        {
            "name": "maxWaitingTime",
            "baseName": "MaxWaitingTime",
            "type": "number"
        },
        {
            "name": "warmResetFlag",
            "baseName": "WarmResetFlag",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return CardReaderInitRequest.attributeTypeMap;
    }
}

export namespace CardReaderInitRequest {
    export enum ForceEntryModeEnum {
        CheckReader = <any> 'CheckReader',
        Contactless = <any> 'Contactless',
        File = <any> 'File',
        ICC = <any> 'ICC',
        Keyed = <any> 'Keyed',
        MagStripe = <any> 'MagStripe',
        Manual = <any> 'Manual',
        RFID = <any> 'RFID',
        Scanned = <any> 'Scanned',
        SynchronousICC = <any> 'SynchronousICC',
        Tapped = <any> 'Tapped'
    }
}
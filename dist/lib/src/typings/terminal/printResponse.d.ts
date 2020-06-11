import { DocumentQualifierType } from './documentQualifierType';
import { Response } from './response';
export declare class PrintResponse {
    'documentQualifier': DocumentQualifierType;
    'response': Response;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
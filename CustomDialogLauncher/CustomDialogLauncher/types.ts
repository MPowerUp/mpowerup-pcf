export type DialogPageType =
    | "entityrecord"
    | "entitylist"
    | "webresource"
    | "custom";

export interface EntityRecordPageInput {
    pageType: "entityrecord";
    entityName: string;
    entityId?: string;
}

export interface EntityListPageInput {
    pageType: "entitylist";
    entityName: string;
}

export interface WebResourcePageInput {
    pageType: "webresource";
    webresourceName: string;
}

export interface CustomPageInput {
    pageType: "custom";
    name: string;
    entityName: string;
    recordId?: string;
}

export type DialogPageInput =
    | EntityRecordPageInput
    | EntityListPageInput
    | WebResourcePageInput
    | CustomPageInput;



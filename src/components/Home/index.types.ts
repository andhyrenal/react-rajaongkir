export type Meta = {
    message: string;
    code: number;
    status: string;
}

export type DestinationData = {
    [key: string]: unknown;
    id: number;
    label: string;
    province_name: string;
    city_name: string;
    district_name: string;
    subdistrict_name: string;
    zip_code: string;
}

export type DestinationResponse = {
    meta: Meta;
    data: DestinationData[]
}
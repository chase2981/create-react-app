export interface LeadCard {

    communicationTypeId: number;
    communityId: number;
    adSourceId: number;
    bedrooms: number | string;
    email: string;
    firstName: string;
    lastName: string;
    moveDate: string;

    phoneNumber: string;
    phaseGroupId: number;

    /* represents taskId */
    id?: string | number;
    apptDate?: string;
    apptTime?: string;
    taskId?: string;
    ianaName?: string;

    switchValue?: boolean;
    note: string;
    preferredCommunicationTypeId: number;
    leadId?: number;

    occupants?: number;
    animals?: number;
    bathrooms?: number | string;
    leaseLength?: number | string;
}

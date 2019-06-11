export interface ChatConversation {
    // sid: string;
    agentFirstName: string;
    agentLastName: string;
    attributes: string;
    clientId: number;
    clientName?: string;
    communityGroupId?: number;
    communityId?: number;
    createdOnUtc: string;
    id: number;
    incomingMessages: number;
    lastMsgIncoming?: boolean;
    leadId: number;
    personFirstName?: string;
    personId?: number;
    personLastName?: string;
    residentId?: number;
    totalMessages: number;
    twilioChannelSid: string;
    twilioCreatedUtc: string;
    twilioTaskSid: string;

    createdOnMst?: string;
    phaseGroupId?: number;
    phaseGroupName?: string;
    userId?: number;
    isLastMessageIncoming?: boolean;
    duration?: number;
    adSourceId?: number;
    userFirstName?: string;
    userLastName?: string;
    ianaName?: string;
}

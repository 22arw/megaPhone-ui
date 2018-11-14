export interface Organization {
    id: number;
    orgName: string;
    orgOwner: string;
    baseId: number;
    subscriptionCode: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

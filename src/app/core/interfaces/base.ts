import { Organization } from './organization';
import { BaseManager } from './base-manager';

export interface Base {
    id: number;
    basePhoneNumber: string;
    baseName: string;
    bandwidthUserId: string;
    bandwidthApiToken: string;
    bandwidthApiSecret: string;
    createdAt?: Date;
    updatedAt?: Date;
    orgs?: Organization;
    managers?: BaseManager;
}

import { Base } from './base';

export interface User {
    email: string;
    isAdmin: boolean;
    bases?: Base;
}

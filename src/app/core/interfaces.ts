export interface Base {
  id: number; // user is at least an org manager under this base
  basePhoneNumber: string; // user is at least an org manager under this base
  baseName: string; // user is at least an org manager under this base
  bandwidthUserId?: string; // user is at least a base manager
  bandwidthApiToken?: string; // user is at least a base manager
  bandwidthApiSecret?: string; // user is at least a base manager
  createdAt?: string; // (Date) user is at least a base manager
  updatedAt?: string; // (Date) user is at least a base manager
}

export interface LoginReturns {
  token: string;
  needsPasswordChange: boolean;
  role: number; // corresponds to a level of access.
}

export interface StandardResponse {
  token: string;
  success: boolean;
  error?: string;
}

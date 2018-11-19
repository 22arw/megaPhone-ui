import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Base } from '../core/interfaces/base';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const bases = [
      {
        id: 1,
        baseName: 'McConnell AFB',
        isActive: false,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 2,
        baseName: 'Edwards AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 3,
        baseName: 'Sheppard AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 4,
        baseName: 'Los Angeles AFB',
        isActive: false,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 5,
        baseName: 'Tinker AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 6,
        baseName: 'Offutt AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 7,
        baseName: 'Shaw AFB',
        isActive: false,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 8,
        baseName: 'Charleston AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 9,
        baseName: 'Pope AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 10,
        baseName: 'Patrick AFB',
        isActive: false,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 11,
        baseName: 'Little Rock AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        id: 12,
        baseName: 'Maxwell AFB',
        isActive: true,
        bandWidthUserId: 'McConnell_User_ID',
        bandwidthApiToken: 't_klkjkljlk098()*)(5675765%',
        bandwidthApiSecret: 'SomeSecret_12345679',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },

    ];
    return { bases };
  }

  // Overrides the genId method to ensure that a base always has an id.
  // If the bases array is empty,
  // the method below returns the initial number (11).
  // if the bases array is not empty, the method below returns the highest
  // base id + 1.
  genId(bases: Base[]): number {
    return bases.length > 0 ? Math.max(...bases.map(base => base.id)) + 1 : 11;
  }

}

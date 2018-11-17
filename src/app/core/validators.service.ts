import { Injectable } from '@angular/core';
import * as i from './interfaces';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor(private api: ApiService) {}

  isEmailValid(email: string): boolean {
    if (email.length === 0) {
      return false;
    }

    email = email.trim().toLowerCase();

    if (email.split(' ').length > 1) {
      return false;
    }

    const validDomainsArray = ['mil', 'gov', 'com'];
    const validDomains = validDomainsArray.join('|');
    // tslint:disable-next-line:max-line-length
    const regex = `[a-z0-9!#$%&'*+/=?^_\`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(${validDomains})$`;
    const pattern = new RegExp(regex, 'gm');

    return pattern.test(email);
  }

  isPhoneNumberValid(phoneNumber: string) {
    if (phoneNumber.length === 0) {
      return false;
    }

    phoneNumber = phoneNumber.trim();

    if (phoneNumber.split(' ').length > 1) {
      return false;
    }

    const pattern = new RegExp(/^\+[0-9]{11}$/, 'g');

    return pattern.test(phoneNumber);
  }
}

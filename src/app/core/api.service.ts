import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import * as i from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * Constants
   */
  API_BASE_URL = 'https://megaphone-test.herokuapp.com';

  /**
   * Observable data stores.
   */
  private _Bases = new BehaviorSubject<i.Base[]>([]);
  Bases: Observable<i.Base[]> = this._Bases.asObservable();

  private _Orgs = new BehaviorSubject<i.Organization[]>([]);
  Orgs: Observable<i.Organization[]> = this._Orgs.asObservable();

  /**
   * Constructor
   */
  constructor(private http: HttpClient, private router: Router) {}

  /**
   * @param error Handles error responses from the server.
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else if (error.status === 401) {
      console.log('You are not authorized. Please log in.');
    } else {
      console.error(
        `API returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
  }

  /**
   * @description handles displaying error messages to the user if the server provides one otherwise displays success message.
   * @param res response from server.
   */
  private handleStandardResponse(
    res: i.StandardResponse | i.LoginReturns,
    successMessage?: string
  ) {
    localStorage.setItem('x-access-token', res.token);

    if (!(<i.StandardResponse>res).success) {
      // send feedback to user.
    } else if (successMessage) {
      console.log(successMessage);
      // handle success message
    } else {
      console.log('Success! No success message provided.');
    }
  }

  /**
   * @description Creates a base and updates the store. Subscribe to Bases for changes.
   * @param basePhoneNumber Base Phone Number provided by bandwidth. Format: '+11231231234'
   * @param baseName This is the base's name.
   * @param bandwidthUserId Bandwidth User Id
   * @param bandwidthApiToken Bandwidth API Token
   * @param bandwidthApiSecret Bandwidth API Secret
   */
  createBase(
    basePhoneNumber: string,
    baseName: string,
    bandwidthUserId: string,
    bandwidthApiToken: string,
    bandwidthApiSecret: string
  ): void {
    console.log('Creating Base... ');
    this.http
      .post<i.CreateBaseReturns>(this.API_BASE_URL + '/api/base/createBase', {
        basePhoneNumber,
        baseName,
        bandwidthUserId,
        bandwidthApiToken,
        bandwidthApiSecret
      })
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res, 'Base created successfully.');
          this.getBases();
        },
        err => {
          this.handleError(err);
        }
      );
  }

  /**
   * @description checks if an email is unique, returns false if the email is already in use OR it is not a valid email.
   * To check only for valid email, see validators.service.ts for isEmailValid();
   * @param email The email address being checked.
   */
  async isEmailUnique(email: string): Promise<boolean> {
    return await this.http
      .post<i.IsEmailUniqueReturns>(
        this.API_BASE_URL + '/api/user/isEmailUnique',
        { email }
      )
      .toPromise()
      .then(res => {
        return res.isEmailUnique;
      });
  }

  /**
   * @description Logs in the user and if successful, navigates them to /home
   * @param email Email used to login. Be sure it is validated.
   * @param password Password used to login.
   */
  login(email: string, password: string): void {
    console.log('Logging in...');
    this.http
      .post<i.LoginReturns>(this.API_BASE_URL + '/api/auth/login', {
        email,
        password
      })
      .toPromise()
      .then(
        res => {
          localStorage.setItem(
            'needsPasswordChange',
            `${res.needsPasswordChange}`
          );
          localStorage.setItem('role', res.role.toString());
          this.handleStandardResponse(res, 'hey');
          console.log('logged in!');
          this.router.navigate(['bases']);
        },
        err => {
          this.handleError(err);
        }
      );
  }

  /**
   * @description Logs out the user by clearing everything in the localStorage and navigating to the login page.
   */
  logout(): void {
    localStorage.clear();
    this.router.navigate(['']);
  }

  /**
   * @description queries the api to get a list of bases available for the user. Updates the Bases observable datastore.
   */
  getBases() {
    // const headers = new HttpHeaders({'x-access-token': localStorage.getItem('x-access-token')});
    this.http
      .get<i.GetAllBasesReturns>(this.API_BASE_URL + '/api/base/getAllBases')
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res);
          this._Bases.next(res.bases);
        },
        err => {
          this.handleError(err);
        }
      );
  }

  /**
   * @description Retrieves all messages sent under the org.
   * @param orgId The orgId to retrieve all of the messages under.
   * @returns An array of objects representing the message.
   */
  getAllMessagesSentByOrg(orgId: number): Promise<i.Message[]> {
    return this.http
      .post<i.GetAllMessagesSentByOrgReturns>(
        this.API_BASE_URL + '/api/organization/getAllMessagesSentByOrg',
        { orgId }
      )
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res);
          return res.messages;
        },
        err => {
          this.handleError(err);
          return [];
        }
      );
  }

  getNumberOfSubscribers(orgId: number): Promise<number> {
    return this.http
      .post<i.GetNumberOfSubscribersReturns>(
        this.API_BASE_URL + '/api/organization/getNumberOfSubscribers',
        { orgId }
      )
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res);
          return res.numberOfSubscribers;
        },
        err => {
          this.handleError(err);
          return 0;
        }
      );
  }

  /**
   * @description Gets all of the orgs for the user and updates the orgs observable datastore.
   * Be sure to subscribe to the Orgs datastore for updates.
   */
  getOrgs(): void {
    this.http
      .get<i.GetOrgsReturns>(this.API_BASE_URL + '/api/organization')
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res);
          this._Orgs.next(res.orgs);
        },
        err => {
          this.handleError(err);
        }
      );
  }

  getUserInfo(): Promise<i.UserData> {
    return this.http.get<i.GetUserDataReturns>(this.API_BASE_URL + '/api/user').toPromise().then(res => {
      this.handleStandardResponse(res);
      return res.user;
    }, err => {
      this.handleError(err);
      return err;
    });
  }

  /**
   * @description Sends the message to subscribers of the organization.
   * @param orgId The orgId to send the message from
   * @param message The message to send to the subscribers of the org.
   */
  sendMessage(orgId: number, message: string): void {
    this.http
      .post<i.StandardResponse>(this.API_BASE_URL + 'api/message/send', {
        orgId,
        message
      })
      .toPromise()
      .then(
        res => {
          this.handleStandardResponse(res, 'Message sent successfully!');
        },
        err => {
          this.handleError(err);
        }
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CurrentUser } from 'src/app/shared/types/current-user';
import { RegisterRequest } from '../types/register-request';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/auth-reponse';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponse>(url, data)
      .pipe(map((response: AuthResponse) => response.user));
  }
}

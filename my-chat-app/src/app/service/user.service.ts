import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/model/user.model';

@Injectable({
	providedIn : 'root'
})
export class UserService {
	constructor(
		private http: HttpClient
	){}

	login(pseudo:string): Observable<User>{
		return this.http.get<User>(`${pseudo}`);

	}
}
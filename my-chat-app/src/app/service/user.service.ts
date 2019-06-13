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

	getAll(): Observable<User[]>{
		return this.http.get<User[]>('/user/all');
	}
	login(pseudo:string): Observable<User>{
		return this.http.get<User>(`/profil/${pseudo}`);
	}

	getUserByPseudo(pseudo: string): Observable<User> {
		return this.http.get<User>(`/friends/${pseudo}`);
	}

	signIn(newUser: User): Observable<User>{
		return this.http.post<User>('/create' ,newUser);
	}
}
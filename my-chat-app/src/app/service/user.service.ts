import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../common/model/user.model';

@Injectable({
	providedIn : 'root'
})
export class UserService {
	apiURL = 'http://localhost:3000/';
	constructor(
		private http: HttpClient
	){}

	getAll(): Observable<User[]>{
		return this.http.get<User[]>(`${this.apiURL}user/all`);
	}

	login(pseudo:string): Observable<any>{
		return this.http.get<any>(`${this.apiURL}user/${pseudo}`); //, {name:pseudo});
	}

	getUserByPseudo(pseudo: string): Observable<User> {
		return this.http.get<User>(`/friends/${pseudo}`);
	}

	signIn(newUser: User): Observable<User>{
		return this.http.post<User>(`${this.apiURL}user/create` ,newUser);
	}

	getNewAnonyme(){
		return this.http.get<User>('/user/anonyme');
	}

	addFriend(user:User): Observable<User>{
		const connected =  localStorage.getItem('user')
		return this.http.post<User>(`${this.apiURL}user/add/friend/`, {name:connected, friend: user.name} );
	}
}
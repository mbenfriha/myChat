import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Conversation } from './model/conversation.model';

export class ConversationService{

	constructor(
		private http: HttpClient,
		){}
		
	getAll(): Observable<Conversation[]>{
		return this.http.get<Conversation[]>('');
	}
}
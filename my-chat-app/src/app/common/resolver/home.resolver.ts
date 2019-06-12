import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Conversation } from '../model/conversation.model';
import { ConversationService } from '../conversation.service';
import { Observable } from 'rxjs';

@Injectable()
export class HomeResolver implements Resolve<Conversation[]>{

	constructor(
		private router: Router,
		//private conversationServ : ConversationService,
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Conversation[]> | Promise<Conversation[]> | Conversation[] {
        return null; //this.conversationServ.getMyConversation();
    }
}
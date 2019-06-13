import { Injectable } from "@angular/core";
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Conversation } from '../model/conversation.model';
import { ConversationService } from '../conversation.service';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { UserService } from 'src/app/service/user.service';

@Injectable()
export class SearchPersonResolver implements Resolve<User[]>{

	constructor(
		private router: Router,
		private userServ: UserService
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> | Promise<User[]> | User[] {
        return this.userServ.getAll();
    }
}
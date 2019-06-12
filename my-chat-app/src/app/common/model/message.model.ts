import { User } from './user.model';

export class Message{
	user: User;
	content: string;
	date: Date;

	constructor(user: User,content: string){
		this.user = user;
		this.content = content;
		this.date = new Date();
	}
}
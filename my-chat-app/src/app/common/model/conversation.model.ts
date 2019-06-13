import { User } from './user.model';
import { Message } from './message.model';

export class Conversation{
	nom: string;
	users: User[];
	messages: Message[];
	public: boolean;	
}
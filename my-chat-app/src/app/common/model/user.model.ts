export class User{
	name: string;
	password: string;
	avatar: string;
	online: boolean;
	friends: string[]; // pseudo uniquement
	request: FriendRequest[]

	constructor(user?:string){
		if(user){
		let pers:User = JSON.parse(user);
		this.name = pers.name;
		this.password = pers.password;
		this.avatar = pers.avatar;
		this.friends = pers.friends;
		}
	}
}

export class FriendRequest{
	sender: string; //pseudo
	response: any;
	
}
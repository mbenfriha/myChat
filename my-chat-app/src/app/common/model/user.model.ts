export class User{
	name: string;
	password: string;
	avatar: ImageBitmap;
	online: boolean;
	friends: string[]; // pseudo uniquement
	request: FriendRequest[]
}

export class FriendRequest{
	sender: string; //pseudo
	response: any;
	
}
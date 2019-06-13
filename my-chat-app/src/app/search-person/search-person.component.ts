import { Component, OnInit } from '@angular/core';
import { User } from '../common/model/user.model';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-search-person',
  templateUrl: './search-person.component.html',
  styleUrls: ['./search-person.component.scss']
})
export class SearchPersonComponent implements OnInit {
  users = new BehaviorSubject<User[]>([]);
  recherche = new FormControl('');



  constructor(
    public userServ: UserService
  ) {

    this.recherche.valueChanges.pipe(
      map(value => typeof value === 'string' ? value : null ),
      map(v => this._filterSearch(v))
  ).subscribe((users: User[]) => {
      this.users.next(users);
  });
   }

  ngOnInit() {
  }

  _filterSearch(str:string): User[]{
      const filteredValue = str.toLowerCase();
      return this.users.value.filter(user => {
          return user.name.toLowerCase().includes(filteredValue);
      });
  }

  search(){
this.userServ.getAll().subscribe((users: User[])=>{
  users.filter((user)=>{
    if(user.name.includes(this.recherche.value)){
      return user;
    }
  });
  this.users.next(users);
})
  }

  sendRequest(user: User){
    const username = new User(localStorage.getItem('user'));
    this.userServ.addFriend(user).subscribe(()=>{
      this.userServ.login(username.name);
    });
  }
}

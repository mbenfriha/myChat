import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  readonly classes = this.theme.addStyleSheet(STYLES);
  isLogin: boolean;
  title = 'Friends With Interest';
  opened: boolean;

  constructor(
    public router :Router,
    private theme: LyTheme2) {
console.log(localStorage);
    this.isLogin = localStorage.length != 0
   }

   ngOnInit(){
     this.isLogin = false
   }

}

import { Component } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { Router } from '@angular/router';

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
export class AppComponent {
  readonly classes = this.theme.addStyleSheet(STYLES);
onLogin: boolean = false
  title = 'Friends With Interest';
  opened: boolean;
  constructor(
    public router :Router,
    private theme: LyTheme2) {
    if(router.url.includes('login')){
      this.onLogin = true;
    }
   }

}

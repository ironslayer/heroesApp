import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: false
})
export class AppComponent {
  title = 'heroesApp';

  constructor(

    private authService:AuthService,
  ){}
}

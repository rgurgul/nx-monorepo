import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainComponent } from './components/main/main.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-app';
}

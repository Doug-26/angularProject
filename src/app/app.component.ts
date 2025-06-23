import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PetDashboardComponent } from './components/pet-dashboard/pet-dashboard.component';

@Component({
  selector: 'app-root',
  imports: [PetDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularProject';
}

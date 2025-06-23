import { Component } from '@angular/core';
import { Pet } from '../../model/ptet.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pet-dashboard',
  imports: [FormsModule],
  templateUrl: './pet-dashboard.component.html',
  styleUrl: './pet-dashboard.component.css'
})
export class PetDashboardComponent {

  pets: Pet[] = [];
  newPetName: string = '';

  addPet(): void {
    if (this.newPetName.trim()){
      this.pets.push({
        name: this.newPetName.trim(), status: 'listed'
      });
      this.newPetName = '';
    }

    console.log('Pet added:', this.pets);
  }

  nextStatus(pet: Pet): void {
    if (pet.status === 'listed') {
      pet.status = 'examining';
    } else if (pet.status === 'examining') {
      pet.status = 'finally_back_to_hooman';
    }
    console.log('Pet status updated:', pet);
  }

  getPetsByStatus(status: string): Pet[] {
    return this.pets.filter(pet => pet.status === status);
  }

}

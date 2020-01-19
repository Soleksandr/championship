import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-championship-form',
  templateUrl: './championship-form.component.html',
  styleUrls: ['./championship-form.component.scss'],
})
export class ChampionshipFormComponent implements OnInit {
  championshipForm: FormGroup;

  championshipTypes = [{ value: 'league', viewValue: 'League' }, { value: 'cup', viewValue: 'Cup' }];

  createParticipantsTeamsItem = () => {
    return this.fb.group({ name: '' });
  };

  validateEmail = (control: AbstractControl) => {
    if (!control.value) {
      return { email: 'Email is required' };
    }
    return null;
  };

  validatePassword = (control: AbstractControl) => {
    if (!control.value) {
      return { password: 'Password is required' };
    }
    return null;
  };

  // newChampionshipForm = this.fb.group({
  //   championshipName: ['', this.validateEmail],
  //   championshipType: [this.championshipTypes[0].value, this.validatePassword],
  //   participantsTeams: ['', this.validatePassword],
  // });

  onSubmit() {
    console.log('- submit - ', this.championshipForm.value);
  }
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.championshipForm = this.fb.group({
      championshipName: ['', this.validateEmail],
      championshipType: [this.championshipTypes[0].value, this.validatePassword],
      participantsTeams: this.fb.array([this.createParticipantsTeamsItem(), this.createParticipantsTeamsItem()]),
    });
  }
}

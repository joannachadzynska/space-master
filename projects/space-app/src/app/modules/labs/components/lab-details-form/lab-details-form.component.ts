import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lab-details-form',
  templateUrl: './lab-details-form.component.html',
  styleUrls: ['./lab-details-form.component.css']
})
export class LabDetailsFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

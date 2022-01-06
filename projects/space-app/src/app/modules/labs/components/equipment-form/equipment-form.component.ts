import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-equipment-form',
    templateUrl: './equipment-form.component.html',
    styleUrls: ['./equipment-form.component.css'],
})
export class EquipmentFormComponent implements OnInit {
    @Input() formGroup!: FormGroup;

    constructor() {}

    ngOnInit(): void {}
}

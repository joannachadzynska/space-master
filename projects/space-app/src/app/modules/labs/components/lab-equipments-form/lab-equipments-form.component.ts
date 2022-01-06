import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EquipmentTypes } from 'projects/space-api/types';


@Component({
    selector: 'app-lab-equipments-form',
    templateUrl: './lab-equipments-form.component.html',
    styleUrls: ['./lab-equipments-form.component.css'],
})
export class LabEquipmentsFormComponent implements OnInit {
    @Input() formArray!: FormArray;
    @Output() equipmentAdd = new EventEmitter<EquipmentTypes>();
    @Output() equipmentRemove = new EventEmitter<number>();
    EquipmentTypes = EquipmentTypes;
    selectedEquipmentType = new FormControl(EquipmentTypes.Computer);

    get equipmentFormGroups(): FormGroup[] {
        return this.formArray.controls as FormGroup[];
    }

    constructor() {}

    ngOnInit(): void {}

    addEquipment(): void {
        this.equipmentAdd.emit(this.selectedEquipmentType.value);
    }

    removeEquipment(index: number): void {
        this.equipmentRemove.emit(index);
    }
}

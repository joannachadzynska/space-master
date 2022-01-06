import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Lab, LabDetails, Equipment, EquipmentTypes } from 'space-api/types';

@Injectable({providedIn: 'root'})
export class LabFormService {
  readonly specificControls = {
    [EquipmentTypes.Computer]: (equipment: any) => ({
      producer: new FormControl(equipment.producer),
      os: new FormControl(equipment.os),
    }),
    [EquipmentTypes.Detector]: (equipment: any) => ({
      precision: new FormControl(equipment.precision),
      productionYear: new FormControl(equipment.productionYear),
    }),
    // add new types here
  };

  formToLab(form: FormGroup): Lab {
    return {equipments: [], ...form.value};
  }

  addEquipment(form: FormGroup, type: EquipmentTypes): void {
    // TODO zaimplementuj
  }

  removeEquipment(form: FormGroup, index: number): void {
    // TODO zaimplementuj
  }

  buildForm(lab: Lab): FormGroup {
    const form = new FormGroup({
      id: new FormControl(lab.id),
      details: this.buildDetails(lab.details),
      equipments: this.buildEquipmentList(lab.equipments)
    });
    this.observeEnableTags(form);
    this.observeAutonomous(form);
    return form;
  }

  private buildDetails(details: LabDetails): FormGroup {
    return new FormGroup({
      name: new FormControl(details.name, {validators: [Validators.required]}),
      moonId: new FormControl(details.moonId, {validators: [Validators.required]}),
      autonomous: new FormControl(details.autonomous),
      enableTags: new FormControl(details.enableTags)
    });
  }

  private buildEquipmentList(equipments: Equipment[]): FormArray {
    return new FormArray(equipments.map(item => this.buildEquipment(item)));
  }

  private buildEquipment(equipment: Equipment): FormGroup {
    return new FormGroup({
      name: new FormControl(equipment.name, {validators: [Validators.required]}),
      tag: new FormControl(equipment.tag, {validators: [Validators.required]}),
      type: new FormControl(equipment.type, {validators: [Validators.required]}),
      ...this.specificControls[equipment.type](equipment)
    });
  }

  private observeAutonomous(form: FormGroup): void {
    // TODO zaimplementuj
  }

  private observeEnableTags(form: FormGroup): void {
    // TODO zaimplementuj
  }

  private setEquipmentValidators(equipmentFormGroup: FormGroup, enableTags: boolean): void {
    // TODO zaimplementuj
  }
}

import { EquipmentCommon } from './equipment-common';
import { EquipmentTypes } from './equipment-types';

export interface EquipmentComputer extends EquipmentCommon {
  type: EquipmentTypes.Computer;
  os: string;
  producer: string;
}

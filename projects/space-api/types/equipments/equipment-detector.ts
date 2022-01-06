import { EquipmentCommon } from './equipment-common';
import { EquipmentTypes } from './equipment-types';

export interface EquipmentDetector extends EquipmentCommon {
  type: EquipmentTypes.Detector;
  precision: number;
  productionYear: number;
}

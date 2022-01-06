import { LabDetails } from './lab-details';
import { Equipment } from './equipments';

export interface Lab {
  id: number;
  details: LabDetails;
  equipments: Equipment[];
}

export type NewLab = Omit<Lab, 'id'>;

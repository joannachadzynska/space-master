import { Equipment } from './equipments';
import { LabDetails } from './lab-details';

export interface Lab {
  id: number;
  details: LabDetails;
  equipments: Equipment[];
}

export type NewLab = Omit<Lab, 'id'>;

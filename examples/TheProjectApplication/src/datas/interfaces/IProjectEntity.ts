import {IMoleculeEntity} from "./IMoleculeEntity";

export interface IProjectEntity {
  id:number|string;
  code:string;
  name:string;
  description?:string;
  molecules: IMoleculeEntity[];
}

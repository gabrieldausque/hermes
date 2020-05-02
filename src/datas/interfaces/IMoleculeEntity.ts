export interface IMoleculeEntity {
  moleculeId:string;
  description:string;
  name:string;
  otherProperties:any[];
  addProperty(otherProperty:any):void;
}

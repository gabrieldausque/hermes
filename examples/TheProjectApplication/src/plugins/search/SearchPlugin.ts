export interface SearchPlugin {
  search(query:string):Promise<string[]>;
}

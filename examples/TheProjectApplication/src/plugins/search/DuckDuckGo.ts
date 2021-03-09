import { SearchPlugin } from './SearchPlugin';
import { duckIt } from 'node-duckduckgo';

export class DuckDuckGo implements SearchPlugin {
  public static metadata:any[] = [
    {
      contractType:'SearchPlugin',
      contractName:'duckduckgo',
      isShared:true
    }
  ];
  async search(query: string): Promise<string[]> {
    console.debug(`Duckduck will search "${query}"`);
    const result = await duckIt(query, {format:'json', noHtml:true, skipDisambig:true});
    return [result.data.AbstractText];
  }
}

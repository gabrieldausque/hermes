import { SearchPlugin } from './SearchPlugin';

export class Qwant implements SearchPlugin {
  public static metadata:any[] = [
    {
      contractType:'SearchPlugin',
      contractName:'qwant',
      isShared:true
    }
  ];

  async search(query: string): Promise<string[]> {
    console.debug(`Qwant will search with query ${query}`);
    const qwant = require('qwant-api');
    const result = [];
    await new Promise((resolve, reject) => {
      qwant.search('web', {
        query,
        count:5,
        language:'french'
      }, (err,data) => {
        if(err) {
          reject(err);
        } else {
          for(const r of data){
            result.push(r.title + ' - ' + r.desc);
          }
          resolve();
        }
      })
    })
    return result;
  }
}

export class Filter {
  static match(filter:any, toTest:any) {
    if(!filter ||
      typeof filter === 'number' ||
      typeof filter === 'string'
    ){
      return filter === toTest
    }

    if(typeof filter === 'object') {
      if(!toTest)
        return false;
      for(const propertyName in filter) {
        if(filter.hasOwnProperty(propertyName)) {
          if(!toTest.hasOwnProperty(propertyName))
            return false;
          if(!Filter.match(filter[propertyName], toTest[propertyName]))
            return false;
        }
      }
      return true;
    }

    return false
  }
}

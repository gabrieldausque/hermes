import {disallowMethod} from '../helpers';

export default {
  before: {
    all: [],
    find: [],
    get: [
      disallowMethod,
      (ctx:any) => { return }
    ],
    create: [
      disallowMethod,
      (ctx:any) => { return }
      ],
    update: [
      disallowMethod,
      (ctx:any) => { return }
      ],
    patch: [
      disallowMethod,
      (ctx:any) => { return }
      ],
    remove: [
      disallowMethod,
      (ctx:any) => { return }
      ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

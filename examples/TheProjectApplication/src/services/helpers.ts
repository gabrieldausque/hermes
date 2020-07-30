import {MethodNotAllowed} from "@feathersjs/errors";

export function disallowMethod(context:any) {
  throw new MethodNotAllowed(`The method ${context.method} is not allowed for service ${context.path}`);
}

export default function disableConsole() {
  if(process.env.NODE_ENV === 'test'){
    console.warn = () => { return };
    console.debug = () => { return };
    console.log = () => { return };
    console.error = () => { return };
  }
}

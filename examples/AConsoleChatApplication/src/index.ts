import {Command} from 'commander';
import {UriBuilder} from "uribuilder";
import {ChatServer} from "./ChatServer";

const command = new Command();
command
  .option('-s, --server', 'Server instance', false)
  .option( '-p, --port <port>', 'the port to be used', '6666')
  .option('-c, --client', 'Client instance', true)
  .option('-cs, --chatserver <chatserver>', 'Chat server host with http/https set to connect to', 'http://localhost');

command.parse(process.argv);
if(command.server){
  const uriBuilder = UriBuilder.parse(command.chatserver + ":" + command.port);
  const chatServer = new ChatServer(parseInt(command.port));
} else {
  const uriBuilder = UriBuilder.parse(command.chatserver + ":" + command.port);
  console.log(`Starting client, connecting to ${uriBuilder.toString()}`)
}


import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "ofline";
    allowNewServer: boolean = false;
    type serverCreationStatus = "No server was created!" | "Server was created";
    
    constructor() {
        setTimeout(() => {this.allowNewServer = true}, 5000);
        //console.log("fires off")
    }
    getServerStatus = () => {
        return this.serverStatus;
    }

    onCreateServer = () => {
        this.serverCreationStatus = !this.serverCreationStatus
    }
    //You can also use function like the one above to resolve string interpolation.
}


// const ServerComponent = () => { //This will not work - This is React Syntax

// };

// export default ServerComponent;
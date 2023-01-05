import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = "ofline";
    getServerStatus = () => {
        return this.serverStatus;
    }
    //You can also use function like the one above to resolve string interpolation.
}


// const ServerComponent = () => { //This will not work - This is React Syntax

// };

// export default ServerComponent;
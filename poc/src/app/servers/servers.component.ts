import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `<h5>Servers...</h5>`,
  // styleUrls: ['./servers.component.css']
  styles: [`
    h5{
      color: lightblue;
    }
    .online {
      color: pink;
    }
  `]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  obj = {'name':'name','title':'title'};
  serverName = "";
  serverCreationStatus = "";
  serverStatus = "offline";
  servers = ['server1','server2'];
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {

  }

  onCreateServer() {
    this.serverStatus = "online";
    this.serverCreationStatus = "Server was Created " + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    
    console.log(event);
    this.serverName = event.target.value;
  }

  getColor(){
    if(this.serverCreationStatus === ""){
      return "red";
    }else{
      return "green";
    }
    
  }
}

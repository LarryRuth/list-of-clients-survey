import { Component } from '@angular/core';

export class Client {
  id: number;
  name: string;
}

const CLIENTS: Client[] = [
    {id:2, name: 'Bobs Burger Barn'},
    {id:3, name: 'Tims Tacos'},
    {id:4, name: 'Real Estate by John'}


];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .clients {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .clients li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .clients li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .clients li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .clients .text {
    position: relative;
    top: -3px;
  }
  .clients .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})
export class AppComponent {
  title = 'List of Clients';
  clients = CLIENTS;
  selectedClient: Client;

  onSelect(client: Client): void {
    this.selectedClient = client;
  }
}

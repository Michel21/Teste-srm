import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  ListaItens: Array<any> = [
    {nome:'conta1'},
    {nome:'conta2'},
    {nome:'conta3'},
    {nome:'conta4'},
    {nome:'conta5'},
    {nome:'conta6'},
  ];
}




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ListaContatos: Array<any> = [
    {id:1, nome:'Michel', email: 'michelangelis'},
    {id:2, nome: "caroline", email:'cah@gmail.com'},
    {id:3, nome: "maria", email:'maria@gmail.com'},
    {id:4, nome: "osnice", email:'osnice@gmail.com'}

  ];
}

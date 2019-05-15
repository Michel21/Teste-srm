import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  clicked(){
    console.log(`Clicados ${this.items}`);
    alert("teste");
  }

}

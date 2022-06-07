import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventes',
  templateUrl: './ventes.component.html',
  styleUrls: ['./ventes.component.css']
})
export class VentesComponent implements OnInit {
  clickedItem: string="commandes";

  constructor() { }

  ngOnInit(): void {
  }

  change(event: any) {
    this.clickedItem=event;
  }
}

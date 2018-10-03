import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzisquare';
  places:any = [
  	{plan: "pagado",	nearness: 1, distance: 1, 	active: true,name:"Floreria La Gardenia"},
  	{plan: "gratuito",	nearness: 1, distance: 1.8,	active: true,name:"Donas La Pasadita"},
  	{plan: "gratuito",	nearness: 2, distance: 5,	active: true,name:"Veterinaria Huellas Felices"},
  	{plan: "gratuito",	nearness: 3, distance: 10,	active: false,name:"Sushi Roll"},
  	{plan: "pagado",	nearness: 3, distance: 35,	active: true,name:"Hotel La Gracia"},
  	{plan: "gratuito",	nearness: 3, distance: 120,	active: false,name:"Zapateria El Clavo"},
  ]

  lat:number = 10.2357194;
  lng:number = -67.965496;
}

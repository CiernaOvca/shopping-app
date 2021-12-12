import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public numberOfItems: number = 0;
  public sumOfProducts: number = 0;

  public menuItems = [
    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '' },
  ];
}

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { BehaviorSubject } from 'rxjs';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

import { CartStateService } from '../../common/services/cartData.service';
import { DataService } from '../../common/services/dataService.mock';

import { ProductsOverviewComponent } from './products-overview.component';


const productData = {
  "items":
  [
      {
          "id":1,
          "name":"Philips hue bulb",
          "brand":"Philips",
          "price":"500",
          "available":true,
          "weight":0.2,
          "icon": "philips.jpeg",
          "tags": [ "house appliances", "smart home"],
          "options":[
              {
                  "color":"white",
                  "power":[
                  6.5,
                  9.5
                  ],
                  "quantity":3
              },
              {
                  "color":"red",
                  "power":[
                  6.5,
                  9.5
                  ],
                  "quantity":7
              }
          ]
      },
      {
          "id":2,
          "name":"Trådfria Lampor",
          "brand":"IKEA",
          "price":"300",
          "available":true,
          "weight":0.2,
          "icon": "tradfria.jpeg",
          "tags": [ "house appliances", "smart home"],
          "options":[
              {
                  "color":"white",
                  "power":[
                      6.5,
                      9.5
                  ],
                  "quantity":3
              },
              {
                  "color":"red",
                  "power":[
                      6.5,
                      9.5
                  ],
                  "quantity":7
              },
              {
                  "color":"green",
                  "power":[
                      6.5
                  ],
                  "quantity":0
              }
          ]
      },
      {
          "id":3,
          "name":"Playstation 4",
          "brand":"Sony",
          "price":"5000",
          "available":true,
          "weight":2.1,
          "icon": "ps_4.jpeg",
          "tags": [ "electronics", "gaming console", "entertainment"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "storage":[
                      "250",
                      "500",
                      "1000"
                  ],
                  "quantity":10
              },
              {
                  "color":[
                      "white"
                      ],
                  "storage":[
                      "250",
                      "500"
                  ],
                  "quantity":3
              }
          ]
      },
      {
          "id":4,
          "name":"Nintendo switch",
          "brand":"Nintendo",
          "price":"4500",
          "available":true,
          "weight":1.6,
          "icon": "nintendo.jpeg",
          "tags": [ "electronics", "gaming console", "entertainment"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "storage":[
                      "250",
                      "500"
                  ],
                  "quantity":0
              },
              {
                  "color":[
                      "white"
                  ],
                  "storage":[
                      "250",
                      "500"
                  ],
                  "quantity":12
              },
              {
                  "color":[
                      "red"
                  ],
                  "storage":[
                      "500"
                  ],
                  "quantity":5
              }
          ]
      },
      {
          "id":5,
          "name":"Bluetooth speaker",
          "brand":"JBL",
          "price":"800",
          "available":false,
          "weight":0.5,
          "icon": "jbl.jpg",
          "tags": [ "electronics", "speaker", "entertainment", "music"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "quantity":15
              },
              {
                  "color":[
                      "white"
                  ],
                  "quantity":0
              },
              {
                  "color":[
                      "red"
                  ],
                  "quantity":1
              }
          ]
      },
      {
          "id":6,
          "name":"Bluetooth speaker",
          "brand":"Marshall",
          "price":"950",
          "available":true,
          "weight":0.5,
          "icon": "marshall.jpeg",
          "tags": [ "electronics", "speaker", "entertainment", "music"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "quantity":1
              },
              {
                  "color":[
                      "white"
                  ],
                  "quantity":11
              },
              {
                  "color":[
                      "orange"
                  ],
                  "quantity":2
              }
          ]
      },
      {
          "id":7,
          "name":"Electrical toothbrush",
          "brand":"BRAUN",
          "price":"950",
          "available":false,
          "weight":0.4,
          "icon": "braun.jpg",
          "tags": [ "electronics", "toothbrush", "health"],
          "options":[
              {
                  "color":[
                      "green"
                  ],
                  "quantity":0
              },
              {
                  "color":[
                      "white"
                  ],
                  "quantity":0
              }
          ]
      },
      {
          "id":8,
          "name":"Samsung 40 UHD Smart TV",
          "brand":"SAMSUNG",
          "price":"3200",
          "available":true,
          "weight":8.2,
          "icon": "tv.jpeg",
          "tags": [ "electronics", "tv", "entertainment"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "quantity":19
              }
          ]
      },
      {
          "id":9,
          "name":"BenQ GW2765HE Eye-Care",
          "brand":"BenQ",
          "price":"2700",
          "available":false,
          "weight":3.9,
          "icon": "benq.jpeg",
          "tags": [ "electronics", "monitor", "entertainment", "work"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "quantity":3
              }
          ]
      },
      {
          "id":10,
          "name":"Corsair HS60 gaming headset",
          "brand":"Corsair",
          "price":"1200",
          "available":true,
          "weight":0.8,
          "icon": "headset.jpeg",
          "tags": [ "electronics", "headset", "entertainment", "work", "music"],
          "options":[
              {
                  "color":[
                      "black"
                  ],
                  "quantity":3
              },
              {
                  "color":[
                      "red"
                  ],
                  "quantity":9
              }
          ]
      }
  ]
}

const dummyDataService = { 
  getDataForDataView() {
    return new BehaviorSubject(productData.items);;
  }
}


describe('ProductsOverviewComponent', () => {
  let component: ProductsOverviewComponent;
  let fixture: ComponentFixture<ProductsOverviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,

        ReactiveFormsModule,
        FormsModule,

        ButtonModule,
        TableModule,
        CardModule,
        TagModule,

        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ 
        ProductsOverviewComponent,
      ],
      providers: [
        { provide: DialogService, useValue: {} },
        { provide: DynamicDialogRef, useValue: {} },
        { provide: CartStateService, useValue: {}},
        { provide: DataService, useValue: dummyDataService }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create ProductsOverviewComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return \'in\' when quantity of any option is > 10', () => {
    const product = {
      "id":10,
      "name":"Corsair HS60 gaming headset",
      "brand":"Corsair",
      "price":"1200",
      "available":true,
      "weight":0.8,
      "icon": "headset.jpeg",
      "tags": [ "electronics", "headset", "entertainment", "work", "music"],
      "options":[
          {
              "color":[
                  "black"
              ],
              "quantity": 3
          },
          {
              "color":[
                  "red"
              ],
              "quantity": 20
          }
      ]
    }

    const result = component.getStockAvailability(product);

    expect(result).toBe('in');
  })
});
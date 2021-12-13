# Shopping app

Application is divided into three main parts:
- common - contains services, models and pipes, which are used throughout the application
- core - the base module, which contains core modules
- modules - contains individual components


First page contains an overview of the procucts, where user can browse and see name of the product, picture, price and current stock status of it. The actions of every product are as follows: 
**Detail** - will show modal with more information about product, such as options (color, storage/power)
**Add to cart** - will show modal with options for the product. User can choose a specific options and if the product is available (quantity of it is > 0), user can add it to the cart. This will trigger the properties showed in right upper corner and will update the number of products and the sum of the products in the cart.

## Implemented features

- Products overview (with information about name, price and stock)
- Detail of a product
- Adding a specific product to the cart
- Displaying current number of products and the sum of the products in the cart
- TBD: 
  - Shopping cart overview - checkout view
  - Removing item from the cart (action available in shopping cart overview)
  - Covering solution with unit tests

## Tech
Angular CLI: 11.2.15
Node: 16.13.1
OS: darwin x64

Angular: 11.2.14
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         | Version
@angular-devkit/architect       | 0.1102.15
@angular-devkit/build-angular   | 0.1102.15
@angular-devkit/core            | 11.2.15
@angular-devkit/schematics      | 11.2.15
@angular/cli                    | 11.2.15
@schematics/angular             | 11.2.15
@schematics/update              | 0.1102.15
rxjs                            | 6.6.7
typescript                      | 4.1.6

Application uses primeng as component library.

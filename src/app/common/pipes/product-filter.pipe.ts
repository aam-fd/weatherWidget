import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  public transform(products: IProduct[], searchTerm: string): IProduct[] {
    if (!searchTerm) {
      return products;
    }
    return products.filter((product: IProduct) => {
      return `${product.type}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

  }
}

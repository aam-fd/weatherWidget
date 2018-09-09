import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  public transform(phone: string): string {

      let arrPhone: string[] = phone.split(``);

      arrPhone.splice(1, 0, `(`);
      arrPhone.splice(5, 0, `)`);
      arrPhone.splice(9, 0, `-`);

      return phone = arrPhone.join(``);

  }
}

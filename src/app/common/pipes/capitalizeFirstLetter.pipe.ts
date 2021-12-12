import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizeFirstLetter'})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(word: any): string {
    return String(word).charAt(0).toUpperCase() + word.slice(1);
  }
}
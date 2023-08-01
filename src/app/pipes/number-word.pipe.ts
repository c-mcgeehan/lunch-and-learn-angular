import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberWord',
})
export class NumberWordPipe implements PipeTransform {
  private readonly ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  private readonly teens = [
    '',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  private readonly tens = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  private readonly thousands = [
    '',
    'thousand',
    'million',
    'billion',
    'trillion',
  ];

  transform(value: number): string {
    if (value === 0) {
      return 'zero';
    } else {
      return this.convertNumberToWords(value);
    }
  }

  private convertNumberToWords(num: number): string {
    if (num < 10) {
      return this.ones[num];
    } else if (num < 20) {
      return this.teens[num - 10];
    } else if (num < 100) {
      return (
        this.tens[Math.floor(num / 10)] +
        (num % 10 !== 0 ? '-' + this.ones[num % 10] : '')
      );
    } else if (num < 1000) {
      return (
        this.ones[Math.floor(num / 100)] +
        ' hundred' +
        (num % 100 !== 0 ? ' ' + this.convertNumberToWords(num % 100) : '')
      );
    } else {
      for (let i = 0; i < this.thousands.length; i++) {
        const magnitude = Math.pow(1000, i);
        if (num < magnitude * 1000) {
          return (
            this.convertNumberToWords(Math.floor(num / magnitude)) +
            ' ' +
            this.thousands[i] +
            (num % magnitude !== 0
              ? ' ' + this.convertNumberToWords(num % magnitude)
              : '')
          );
        }
      }
    }
    return '';
  }
}

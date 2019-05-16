import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multi',
  pure: false
})
export class MultiPipe implements PipeTransform {

  //num: number = 5;
  transform(value: string, num?: number): string {
    let val= "" ;
    for(let i= 0 ; i < num ; i++){
      val += value+" ";
    }
    return val.trim();
  }

}

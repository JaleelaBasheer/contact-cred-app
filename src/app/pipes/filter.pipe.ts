import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any,searchKey:string,key:string): any[] {
    const result:any=[]
     if(!allcontacts || searchKey=="" || key==""){
      return allcontacts
     }

     allcontacts.forEach((item:any)=>{
      if(item[key].trim().toLowerCase().includes(searchKey.trim().toLowerCase())
      ){
result.push(item)
      }
     })

    return result;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'con'
})

export class AddSpace implements PipeTransform{
    transform(sName: string,replaceString: string): string{
        return sName.replace('-',replaceString) ;
    }

}
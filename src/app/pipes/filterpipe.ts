import { Pipe, PipeTransform } from '@angular/core';

//Pipe to filter list of Pokemon by search term
@Pipe({
    name: 'PokemonFilter',
    pure: false
})
export class PokemonFilter implements PipeTransform {
    transform(list: any[], searchTerm: string){
        if (list && list.length){
            return list.filter(item =>{
                if (searchTerm && item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1){
                    return false;
                }
                return true;
           })
        }
        else{
            return list;
        }
    }
}
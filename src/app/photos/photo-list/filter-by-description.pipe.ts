import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";
import { Photo } from "../photo/photo";

@Pipe({ name: 'filterByDescription'})

export class filterByDescription implements PipeTransform{
    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery){
            return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
        }else{
            return photos;
        }
    }
}
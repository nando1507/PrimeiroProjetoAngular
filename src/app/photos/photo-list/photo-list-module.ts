import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "../photo/photo.component";
import { PhotoModule } from "../photo/photo.module";
import { filterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";
import { CardModule } from "./shared/components/card/card.module";
import { DarkenOnHoverModule } from "./shared/components/directives/darken-on-hover/darken-on-hover.module";

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],
    imports: [ 
        CommonModule,
        PhotoModule,
        CardModule, 
        DarkenOnHoverModule
    ]
})

export class PhotoListModule{}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.router';
import { SharedModule } from '../shared/shared.module';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    Angular2ImageGalleryModule,
    routing
  ],
  declarations: [
    GalleryComponent
  ],
  bootstrap: [
    GalleryComponent
  ]
})
export class GalleryModule {}

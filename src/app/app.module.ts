import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from './image-cropper/image-cropper.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { MatDialogModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ImageCropperModule, MatDialogModule, 
    BrowserAnimationsModule, MatGridListModule ],
  declarations: [ AppComponent, ModalComponent ],
  entryComponents: [ModalComponent],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }

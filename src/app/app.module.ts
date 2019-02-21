import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatDialogModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2ImgCropperComponent } from './ng2-img-cropper/ng2-img-cropper.component';
import { Ng2ImgCropperModule } from './ng2-img-cropper/ng2-img-cropper.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatDialogModule, 
  BrowserAnimationsModule, MatGridListModule, Ng2ImgCropperModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }

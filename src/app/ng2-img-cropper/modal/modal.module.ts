import { ImageCropperModule } from './../image-cropper/image-cropper.module';
import { NgModule } from '@angular/core';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatDialogModule } from '@angular/material';
@NgModule({
  declarations: [
    ModalComponent
],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports : [ModalComponent],
  entryComponents: [ModalComponent]
})
export class ModalModule { }

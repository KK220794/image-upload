import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2ImgCropperComponent } from './ng2-img-cropper.component';
import { ImageCropperModule } from './image-cropper/image-cropper.module';
import { ModalComponent } from './modal/modal.component';
import { MatGridListModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [Ng2ImgCropperComponent,
    ModalComponent],
  imports: [
    CommonModule,
    ImageCropperModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports : [Ng2ImgCropperComponent],
  entryComponents:[ModalComponent]
})
export class Ng2ImgCropperModule { }

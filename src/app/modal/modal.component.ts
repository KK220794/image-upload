import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ImageCroppedEvent } from '../image-cropper/interfaces';
import { ImageCropperComponent } from '../image-cropper/component/image-cropper.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;
  selected = {
    image : false,
    template: false
  };

  @ViewChild(ImageCropperComponent) imageCropper: ImageCropperComponent;

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
      this.selected.image = true;
      this.selected.template = false;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event);
  }
  imageLoaded() {
    this.showCropper = true;
     console.log('Image loaded')
  }
  cropperReady() {
    console.log('Cropper ready')
  }
  loadImageFailed () {
    console.log('Load failed');
  }
  rotateLeft() {
    this.imageCropper.rotateLeft();
  }
  rotateRight() {
    this.imageCropper.rotateRight();
  }
  flipHorizontal() {
    this.imageCropper.flipHorizontal();
  }
  flipVertical() {
    this.imageCropper.flipVertical();
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log(this.data);
    
  }
  onTemplateChange(i) {
    this.croppedImage = this.data[i].url;
    this.selected.template= true;
    
  }

  ngOnInit() {
  }

}

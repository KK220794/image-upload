import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-ng2-img-cropper',
  templateUrl: './ng2-img-cropper.component.html',
  styleUrls: ['./ng2-img-cropper.component.css']
})
export class Ng2ImgCropperComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  @Input() image ;
  @Input() widthOfCropper ;
  @Input() heightOfCropper ;
  @Output() croppedImage = new EventEmitter();

  openDialog(){
    
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: {image: this.image,
        width: this.widthOfCropper,
        height: this.heightOfCropper }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.croppedImage.emit(result);
    });
  }

  print(e){
    console.log(e);
    console.log("aa");
    
  }
}

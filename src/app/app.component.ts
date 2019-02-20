import { Component, ViewChild } from '@angular/core';
import { ImageCroppedEvent } from './image-cropper/interfaces/image-cropped-event.interface';
import { ImageCropperComponent } from './image-cropper/component/image-cropper.component';
import { MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(public dialog: MatDialog) {}
  image = [
    {url:'https://img2.cliparto.com/pic/xl/186706/4060771-synthetic-rattan-texture-weaving-background.jpg'},
    {url:'http://www.styled247.com/wp-content/uploads/2013/11/seasonal-color-analysis-base.png'},
    {url:'https://i.pinimg.com/originals/20/52/a4/2052a452468fe0db7b17ce66d7885ac0.jpg'},
  ];

  openDialog(){
    
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
      data: this.image
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  }


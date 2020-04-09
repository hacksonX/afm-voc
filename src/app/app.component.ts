import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afm-voc';
  images20200405: Array<object> = [
    {
      image: 'assets/20200405/Slide1.jpg',
      thumbImage: 'assets/20200405/Slide1.jpg',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/20200405/Slide2.jpg',
      thumbImage: 'assets/20200405/Slide2.jpg',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/20200405/Slide3.jpg',
      thumbImage: 'assets/20200405/Slide3.jpg',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/20200405/Slide4.jpg',
      thumbImage: 'assets/20200405/Slide4.jpg',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/20200405/Slide5.jpg',
      thumbImage: 'assets/20200405/Slide5.jpg',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/20200405/Slide6.jpg',
      thumbImage: 'assets/20200405/Slide6.jpg',
      alt: 'No image',
      title: 'Slide 6'
    }
  ];
  images20200323: Array<object> = [
    {
      image: 'assets/TheLordIsWithYou20200329/Slide1.JPG',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide1.JPG',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide2.JPG',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide2.JPG',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide3.JPG',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide3.JPG',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide4.JPG',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide4.JPG',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide5.JPG',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide5.JPG',
      alt: 'No image',
      title: 'Slide 5'
    }
  ] 


  constructor(public dialog: MatDialog) {
    if(!sessionStorage.getItem('showMessage')) {
      this.openDialog();
      sessionStorage.setItem('showMessage','No');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '80%',
      height: '80%',
      data: {name: 'this.name', animal: 'this.animal'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'podcast.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
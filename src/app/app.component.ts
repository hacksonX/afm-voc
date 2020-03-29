import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'afm-voc';
  imageSrc: Array<object> = [
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


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
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
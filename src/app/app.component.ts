import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'afm-voc';
  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  images20200410: Array<object> = [
    {
      image: 'assets/TheMockingOfJesus20200410/Slide1.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide2.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide3.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide4.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide5.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/TheMockingOfJesus20200410/Slide6.webp',
      thumbImage: 'assets/TheMockingOfJesus20200410/Slide6.webp',
      alt: 'No image',
      title: 'Slide 6'
    }
  ]
  images20200405: Array<object> = [
    {
      image: 'assets/20200405/Slide1.webp',
      thumbImage: 'assets/20200405/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/20200405/Slide2.webp',
      thumbImage: 'assets/20200405/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/20200405/Slide3.webp',
      thumbImage: 'assets/20200405/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/20200405/Slide4.webp',
      thumbImage: 'assets/20200405/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/20200405/Slide5.webp',
      thumbImage: 'assets/20200405/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    },
    {
      image: 'assets/20200405/Slide6.webp',
      thumbImage: 'assets/20200405/Slide6.webp',
      alt: 'No image',
      title: 'Slide 6'
    }
  ];
  images20200323: Array<object> = [
    {
      image: 'assets/TheLordIsWithYou20200329/Slide1.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide1.webp',
      alt: 'No image',
      title: 'Slide 1'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide2.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide2.webp',
      alt: 'No image',
      title: 'Slide 2'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide3.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide3.webp',
      alt: 'No image',
      title: 'Slide 3'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide4.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide4.webp',
      alt: 'No image',
      title: 'Slide 4'
    },
    {
      image: 'assets/TheLordIsWithYou20200329/Slide5.webp',
      thumbImage: 'assets/TheLordIsWithYou20200329/Slide5.webp',
      alt: 'No image',
      title: 'Slide 5'
    }
  ]


  constructor(public dialog: MatDialog, public breakpointObserver: BreakpointObserver) {
    if (!sessionStorage.getItem('showMessage')) {
      this.openDialog();
      sessionStorage.setItem('showMessage', 'No');
    }
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          console.log('Viewport is 500px or over!');
        } else {
          console.log('Viewport is getting smaller!');
        }
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '100%',
      height: '80%',
      data: { name: 'this.name', animal: 'this.animal' }
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
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
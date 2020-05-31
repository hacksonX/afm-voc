import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.css']
})
export class PodcastComponent implements OnInit {

  imageSliderSize: object = {
    width: '100%',
    height: '300px',
    space: 3
  };

  
  



  constructor(public dialog: MatDialog, public breakpointObserver: BreakpointObserver) {
    // Reuse if need banner
    // if (!sessionStorage.getItem('showMessage')) {
    //   this.openDialog();
    //   sessionStorage.setItem('showMessage', 'No');
    // }
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

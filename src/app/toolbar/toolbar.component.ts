import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPipeComponent } from '../dialogs/dialog-add-pipe/dialog-add-pipe.component';
import { CustomPipe } from '../../models/pipe.class';
import { CommonModule } from '@angular/common';
import { DialogAddDealComponent } from '../dialogs/dialog-add-deal/dialog-add-deal.component';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  dealActive = false;
  @ViewChild('toolbar') toolbar = ElementRef;
  showFiller = false;
  firestore = inject(FirestoreService);
  pipeLine: CustomPipe[] = [];

  constructor(private router: Router, public dialog: MatDialog) {
    this.dealActive = this.firestore.dealActive;
    this.pipeLine = this.firestore.pipeLine;
  }


  checkRoute() {
    if (this.router.url === '/pipeline') {
      this.dealActive = true
    }else{
      this.dealActive = false
    }
  }


  openNewPipeDialog() {
    this.dialog.open(DialogAddPipeComponent);
  }


  openNewDealDialog() {
    this.dialog.open(DialogAddDealComponent);
  }
}

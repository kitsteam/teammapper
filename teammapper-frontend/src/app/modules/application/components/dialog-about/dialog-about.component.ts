import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import {
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { ShortcutListComponent } from '../shortcut-list/shortcut-list.component';

@Component({
  selector: 'teammapper-dialog-about',
  templateUrl: 'dialog-about.component.html',
  styleUrls: ['./dialog-about.component.scss'],
  imports: [
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    ShortcutListComponent,
    TranslatePipe,
  ],
})
export class DialogAboutComponent {}

import { Component, OnInit, inject } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { CachedAdminMapEntry } from 'src/app/shared/models/cached-map.model';
import { Router } from '@angular/router';
import { MapListComponent } from './map-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'teammapper-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  imports: [
    MapListComponent,
    MatGridListModule,
    MatListModule,
    MatButton,
    CommonModule,
    TranslatePipe,
  ],
})
export class StartComponent implements OnInit {
  private settingsService = inject(SettingsService);
  private router = inject(Router);

  public projectName: string;
  public faGithub = faGithub;
  public breakpoint: number;
  public height: number;
  public cachedAdminMapEntries: CachedAdminMapEntry[];

  constructor() {
    this.breakpoint = 1;
    this.cachedAdminMapEntries = [];
  }

  async ngOnInit() {
    this.breakpoint = window.innerWidth <= 990 ? 1 : 2;
    this.height = window.innerHeight;
    this.cachedAdminMapEntries = (
      await this.settingsService.getCachedAdminMapEntries()
    ).splice(0, 3);
  }

  public getMapUrl(entry: CachedAdminMapEntry): string {
    return this.router
      .createUrlTree([`/map/${entry.id}`], {
        fragment: entry.cachedAdminMapValue.modificationSecret,
      })
      .toString();
  }

  public getMapTitle(entry: CachedAdminMapEntry): string {
    return entry.cachedAdminMapValue.rootName || entry.id;
  }

  onResize(event: Event) {
    this.breakpoint = (event.target as Window).innerWidth <= 990 ? 1 : 2;
    this.height = window.innerHeight;
  }
}

import { Component, OnInit, inject } from '@angular/core';
import { SettingsService } from 'src/app/core/services/settings/settings.service';
import { CachedAdminMapEntry } from 'src/app/shared/models/cached-map.model';
import { Router } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'teammapper-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss'],
  imports: [MatListModule, CommonModule],
})
export class MapListComponent implements OnInit {
  private settingsService = inject(SettingsService);
  private router = inject(Router);

  public cachedAdminMapEntries: CachedAdminMapEntry[];

  constructor() {
    this.cachedAdminMapEntries = [];
  }

  async ngOnInit() {
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
}

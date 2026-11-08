import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ShortcutsService } from 'src/app/core/services/shortcuts/shortcuts.service';
import { DialogAboutComponent } from './dialog-about.component';

describe('DialogAboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), DialogAboutComponent],
      providers: [
        { provide: ShortcutsService, useValue: { getHotKeys: () => [] } },
      ],
    }).compileComponents();
  });

  it('shows the kits repository, imprint and privacy links', () => {
    const fixture = TestBed.createComponent(DialogAboutComponent);
    fixture.detectChanges();

    const hrefs = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll(
        'a[target="_blank"]'
      )
    ).map(link => link.getAttribute('href'));

    expect(hrefs).toEqual([
      'https://github.com/kitsteam/teammapper',
      'https://kits.blog/impressum/',
      'https://kits.blog/datenschutz/#teammapper',
    ]);
  });
});

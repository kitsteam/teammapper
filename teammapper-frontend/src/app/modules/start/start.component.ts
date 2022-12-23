import {Component} from '@angular/core'
import {faGithub} from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'teammapper-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  public projectName: string
  public faGithub = faGithub
  public breakpoint: number

  constructor () {
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 600) ? 1 : 2;
  }

  onResize(event: Event) {
    this.breakpoint = ((event.target as Window).innerWidth <= 600) ? 1 : 2;
  }
}

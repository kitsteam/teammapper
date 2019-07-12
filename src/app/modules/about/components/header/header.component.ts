import {Component, OnInit} from '@angular/core'
import {UtilsService} from '../../../../core/services/utils/utils.service'
import * as packageJson from '../../../../../../package.json'

@Component({
    selector: 'mindmapp-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    public projectName: string
    public projectRepositoryUrl: string

    constructor () {
    }

    ngOnInit () {
        this.projectName = UtilsService.capitalizeWord(packageJson.name)
        this.projectRepositoryUrl = packageJson.repository.url
    }

    public slide (selector: string, event: Event) {
        if (selector) {
            event.preventDefault()

            window.document.querySelector(selector).scrollIntoView({
                behavior: 'smooth'
            })
        }
    }

}

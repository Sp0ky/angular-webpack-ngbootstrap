import {Component} from '@angular/core';

import { EmailService } from '../../services/email/email.service';

@Component({
    selector: 'gabi-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css'],
})
export class EmailComponent {

    objet: string;
    corps: string;
    editUnactivated: boolean;

    constructor(private service: EmailService) {
        this.editUnactivated = true;
    }

    public getObjet() {
        return this.objet;
    }

    public setObjet(objet: string) {
        this.objet=objet;
    }

    public getCorps() {
        return this.corps;
    }

    public setCorps(corps: string) {
        this.corps=corps;
    }

    activateEditMode() {
        this.editUnactivated = false;
    }

    desactivateEditMode() {
        this.editUnactivated = true;
    }


    sendEmail(event: any) {
        console.log('sendEmailComponent FIRED');
        this.service.sendEmail(this.objet, this.corps);
    }
}
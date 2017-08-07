

import { Component } from '@angular/core';
import { EmailService } from '../../services/email/email.service';

@Component({
    selector: 'email-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css'],
})
export class EditorComponent {
    
    private ckeditorContent: string;
    
        objet: string;
    corps: string;
    editUnactivated: boolean;


    constructor(private service: EmailService) {
        this.ckeditorContent = ``;
        this.editUnactivated = true;
    }
    
    onChange(event: any) {
    }

    onReady(event: any) {
    }
    onFocus(event: any) {
    }

    onBlur(event: any) {
    }

    public getCkeditorContent() {
        return this.ckeditorContent;
    }

    public setCkeditorContent(ckeditorContent: string) {
        this.ckeditorContent=ckeditorContent;
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


    sendEmailHTML(event: any) {
        console.log('sendEmailComponent FIRED');
        this.service.sendEmailHTML(this.objet, this.ckeditorContent);
    }



}
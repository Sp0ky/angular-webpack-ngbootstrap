
import { Jsonp, Http, Response, RequestOptions, Headers, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Inject, Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class EmailService {

    constructor(private http: Http, private jsonp: Jsonp) {}

    sendEmail(objet: string, corps: string) {
        console.log('sendEmailService FIRED');
        const apiUrl='http://localhost:8080/bat-ws/services/email/send';



        let xmlToSend = '<?xml version="1.0" encoding="UTF-8"?><Email><subject>' + objet + '</subject><content>' + corps + '</content></Email>'
        console.log('XML : '+xmlToSend);

        // let headers: any = {'ContentType': 'text/plain'};
        let headers: Headers = new Headers();
        headers.append('ContentType', 'text/plain')
        let options:RequestOptions = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: xmlToSend
        });
        console.log('Before returning : ' + apiUrl);
        return this.http.request(apiUrl, options).subscribe(r => {});
            

        // return this.http.post(apiUrl, xmlToSend).map(
        //     res =>  {
        //         return res;
        //     });
    }
}
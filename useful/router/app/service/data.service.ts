import { Injectable } from '@angular/core';
import { Pack } from '../pack/interface.pack';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    items:Pack[];
    path: string = "assets/backpacks.json";

    constructor(private http: Http) {}

    makeRequest() : Observable<Pack[]> {
		return this.http.get(this.path).map((r:Response) => r.json())
	}

}

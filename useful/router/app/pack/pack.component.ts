import { Component, OnInit } from '@angular/core';
import { Pack } from './interface.pack';
import { DataService } from "../service/data.service";

@Component({
	selector: 'app-pack',
	templateUrl: './pack.component.html',
	styleUrls: ['./pack.component.css']
})

export class PackComponent implements OnInit {

    packs: Pack[];
	id: string;

	constructor( private dataService: DataService) {}

	ngOnInit() {
		this.dataService
            .makeRequest()
            .subscribe( packs => this.packs = packs )
	}

}

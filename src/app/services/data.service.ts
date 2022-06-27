import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private httpClient: HttpClient) {
    }

    getData(): any {
        return this.httpClient.get('https://api.bluelytics.com.ar/v2/latest');
    }

    
}
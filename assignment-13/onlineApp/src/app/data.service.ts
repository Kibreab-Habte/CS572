import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})

export class DataService {

    constructor(public http: HttpClient){}

    getOnlineData() {
        return this.http.get('https://randomuser.me/api/?results=10');
    }

    getCachedData(){
        return JSON.parse(localStorage.userData)
    }
}
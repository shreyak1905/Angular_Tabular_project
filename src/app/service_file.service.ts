import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map} from 'rxjs/operators';
@Injectable({providedIn: 'root'})
export class ServiceFile{
    constructor(private http: HttpClient) {}
    fetchData(){
        return this.http.get<{}>('https://reqres.in/api/users').pipe(
            map(responseData=>{
                return responseData['data'];
                
            })
        )
    }
}
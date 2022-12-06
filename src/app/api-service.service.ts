import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  addCourse=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend);
  }

  viewCourse=()=>
  {
    return this.http.get("http://localhost:8080/view")
  }
}

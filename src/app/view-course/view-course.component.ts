import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css']
})
export class ViewCourseComponent {

  constructor(private api:ApiServiceService){

    api.viewCourse().subscribe(

      (response)=>
      {
        this.courses=response
      }
    )

  }

  courses:any=[]

}

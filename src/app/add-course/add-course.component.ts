import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  courseDescription=""
  courseDuration=""
  courseDate=""
  courseVenue=""

  constructor(private api:ApiServiceService){}

  readCourse=()=>
  {
    let data:any={"courseTitle":this.courseTitle,"courseDescription":this.courseDescription,"courseVenue":this.courseVenue,"courseDuration":this.courseDuration,"courseDate":this.courseDate}

    console.log(data)

    this.api.addCourse(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.status == "success")
        {
            alert("course added successfully");
            this.courseTitle=""
            this.courseDescription=""
            this.courseDuration=""
            this.courseDate=""
            this.courseVenue=""

        }
        else
        {
            alert("something went wrong")
        }
      }

    )



  }

  

}

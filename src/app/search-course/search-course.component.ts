import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  courseTitle=""

  constructor(private api:ApiServiceService){}

  searchData:any=[]

  search=()=>
  {
    let data:any={"courseTitle":this.courseTitle}
    console.log(data)

    this.api.searchCourse(data).subscribe(

      (response:any)=>
      {
        console.log(response)

        if(response.length == 0)
        {
          alert("Invalid course title")
        }
        else
        {
          this.searchData=response
        }
      }
    )
  }

}

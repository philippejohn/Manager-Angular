import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-List',
    templateUrl: './course-list.component.html'
})
 
export class CourseListComponent implements OnInit {
 
     courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
        {
            id: 1,
            name: 'Angular: Forms',
            imageUrl: '',
            price: 99.99,
            code: 'XPS-8796',
            dutation: 120,
            rating: 5.4,
            releaseDate: '23/03/2022'
        },
        {
            id: 2,
            name: 'Angular2: Forms',
            imageUrl: '',
            price: 99.99,
            code: 'XPS-8797',
            dutation: 120,
            rating: 5.5,
            releaseDate: '23/03/2022'
        }
    ]
    }
}
import { Component, OnInit } from '@angular/core'
import { Course } from './course'
import { CourseService } from './course.service';

@Component({
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit{

  filteredCourses: Course[] = [];

  courses: Course[] = [];

  _filterBy!: string;

  constructor( private courseService: CourseService ) {}

  ngOnInit(): void {
//    this.courses = this.courseService.retrieveAll();
//    this.filteredCourses = this.courses

    this.retrieveAll()
  }

  retrieveAll(): void {
    this.courseService.retrieveAllfromServer().subscribe({
      next: data => {
        this.courses = data;
        this.filteredCourses = this.courses;
      },
      error: err => console.log('ERROR', err)
    })
  }

  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this.courses.filter((c: Course) => c.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }
  get filter(){
    return this._filterBy;
  }
}

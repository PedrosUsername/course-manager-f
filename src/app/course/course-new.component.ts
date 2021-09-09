import { Component, OnInit } from "@angular/core";
import { Course } from './course';
import { CourseService } from './course.service';
import { Router } from '@angular/router';

@Component({
    templateUrl: './course-new.component.html'
})
export class CourseNewComponent implements OnInit{
    course!: Course;

    constructor(
        private courseService: CourseService,
        private router: Router
    ){}

    ngOnInit(): void{
        this.course = new Course();
    }

    save(): void{
        this.courseService.addCourse(this.course).subscribe({
            next: () => console.log("created"),
            error: err => console.log("ERROR", err)
        });
        this.gotoList()
    }

    gotoList() {
        this.router.navigate(['/courses']);
    }

}
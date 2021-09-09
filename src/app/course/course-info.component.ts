import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{
    course!: Course;

    constructor(
        private activatedRoute: ActivatedRoute,
        private courseService: CourseService
    ){}

    ngOnInit(): void{
        let course = this.activatedRoute.snapshot.paramMap;

        //this.course = this.courseService.retrieveById( +course.get('id')! );
        this.retrieveById()
    }

    retrieveById(): void {
        let course = this.activatedRoute.snapshot.paramMap;

        this.courseService.retrieveByIdFromServer( +course.get('id')! ).subscribe({
            next: c    => this.course = c,
            error: err => console.log(err)
        })
    }

    save(): void{
        this.courseService.save(this.course)
    }
    updateOnServer(): void {
        this.courseService.updateOnServer(this.course).subscribe({
            next: c => console.log('updated', c),
            error: err => console.log('ERROR', err)
        });
    }

}
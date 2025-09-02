import { CurrencyPipe, DatePipe} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
 @Input() course: any;
 @Output() courseBooked = new EventEmitter<any>();
 @Output() addCourse = new EventEmitter<any>();


 onCourseBooked(): void {
  this.courseBooked.emit(this.course);
 }

 onAddCourse(): void {
  this.addCourse.emit(this.course);
 }
}


import { CurrencyPipe, DatePipe} from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {
 @Input() course: any;

viewDetails(title: string): void{
    alert(`Vendo detalhes para ${title}`)
  }
}


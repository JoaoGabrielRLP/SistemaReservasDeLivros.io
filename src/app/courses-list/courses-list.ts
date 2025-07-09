import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList {
  title: string = "Cursos disponíveis"
  courses = [
    {id: 1, title: 'Introdução a Angular', description: 'Aprenda Angular com esse curso', price: 49, date: '02-01-2025', soldOut: false},
    {id: 2, title: 'Angular avançado', description: 'Leve suas habilidades para o próximo nível', price: 100, date: '02-01-2025', soldOut: true}
  ]
}

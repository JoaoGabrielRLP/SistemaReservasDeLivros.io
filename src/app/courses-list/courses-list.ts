import { Component, OnInit } from '@angular/core';
import { CourseCard } from '../course-card/course-card';

@Component({
  selector: 'app-courses-list',
  imports: [CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
  title: string = "Cursos disponíveis"
  courses = [
    {id: 1, title: 'Introdução a Angular', description: 'Aprenda Angular com esse curso', price: 49, date: '02-01-2025', soldOut: false, img: 'angular-logo.png', onSale: false},
    {id: 2, title: 'Angular avançado', description: 'Leve suas habilidades para o próximo nível', price: 100, date: '02-01-2025', soldOut: true, img: 'angular-logo.png', onSale: true},
    {id: 3, title: 'RxJS', description: 'Fluxo de dados assincronos', price: 45, date: '02-01-2025', soldOut: true, img: 'rxjs-1.svg', onSale: true}
  ];
  /*Importando o ngOnInit*/
  ngOnInit(): void {
    console.log("CoursesList inicializado")
  }


}

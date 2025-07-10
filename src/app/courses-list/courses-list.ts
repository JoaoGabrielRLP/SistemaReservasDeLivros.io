import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  imports: [NgStyle],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css'
})
export class CoursesList implements OnInit {
  title: string = "Cursos disponíveis"
  courses = [
    {id: 1, title: 'Introdução a Angular', description: 'Aprenda Angular com esse curso', price: 49, date: '02-01-2025', soldOut: false, img: 'angular-logo.png'},
    {id: 2, title: 'Angular avançado', description: 'Leve suas habilidades para o próximo nível', price: 100, date: '02-01-2025', soldOut: true, img: 'angular-logo.png'},
    {id: 3, title: 'RxJS', description: 'Fluxo de dados assincronos', price: 45, date: '02-01-2025', soldOut: true, img: 'rxjs-1.svg'}
  ];
  /*Importando o ngOnInit*/
  ngOnInit(): void {
    console.log("CoursesList inicializado")
  }

  viewDetails(title: string): void{
    alert(`Vendo detalhes para ${title}`)
  }
}

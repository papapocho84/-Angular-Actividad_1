import { Component } from '@angular/core';

@Component({
  selector: 'app-automovil',
  templateUrl: './automovil.component.html',
  styleUrl: './automovil.component.css'
})
export class AutomovilComponent {
  marca = 'Bugatti'
  modelo = 'Veyron '
  ano = 2023
  tipo = 'Super Car'
  version = 16.4
  paisDeOrigen = 'Italia'
  descripcion = 'The heart and soul of the Veyron is the 8.0-liter W16 engine with four turbochargers, which initially generated 1,001 PS, and an incredible 1,200 PS in later models. The 16-cylinder mid-engine is 710 mm in length, no longer than a conventional V12 engine, and weighs just 490 kg due to its lightweight construction.'
  ulImagen = 'https://www.thesupercarblog.com/wp-content/uploads/2021/01/Used-2014-Bugatti-Veyron-164-Grand-Sport-Vitesse-1.jpg'

}
 
export interface Automovil {
  marca: string
  modelo: string
  ano: number
  tipo: string
  version: number
  paisDeOrigen: string
  descripcion: string
  ulImage: string
}

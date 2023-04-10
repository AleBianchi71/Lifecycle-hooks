import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-pagina1",
  templateUrl: "./pagina1.component.html",
})
export class Pagina1Component
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  nombre: string = "Ale";
  segundos: number = 0;
  timerSuscription!: Subscription

  constructor() {
    console.log("constructor");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges"); //Un enlace de ciclo de vida que se llama cuando cambia cualquier propiedad enlazada a datos de una directiva.
  }
  ngDoCheck(): void {
    console.log("ngDoCheck"); //detección de cambios predeterminado busca diferencias comparando los valores de propiedades enlazadas por referencia en las ejecuciones de detección de cambios.
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit"); //Un enlace de ciclo de vida que se llama después de que Angular haya inicializado completamente todo el contenido de una directiva.
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit"); //Un enlace de ciclo de vida que se llama después de que Angular haya inicializado completamente la vista de un componente.
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked"); //Un enlace de ciclo de vida que se llama después de que el detector de cambios predeterminado haya completado la comprobación de cambios en la vista de un componente.
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy"); //Un enlace de ciclo de vida que se llama cuando se destruye una directiva, canalización o servicio. Utilícelo para cualquier limpieza personalizada que deba realizarse cuando se destruya la instancia.
    this.timerSuscription.unsubscribe();
    console.log('timer limpiado');
    
  }

  ngOnInit(): void {
    console.log("ngOnInit"); //Un enlace de ciclo de vida que se llama después de que Angular haya inicializado todas las propiedades vinculadas a datos de una directiva
    this.timerSuscription = interval(1000).subscribe((i) => {
      this.segundos = i
    });
  }

  guardar() {}
}

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html'
  
})
export class MuestraNombreComponent implements OnInit, OnChanges {
  ngOnInit(): void {
   
  }
  @Input() nombre!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    
  }

}

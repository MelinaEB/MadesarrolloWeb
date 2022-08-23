import { Component, OnInit } from '@angular/core';
import { MensajeService } from 'src/app/servicios/mensaje.service';

@Component({
  selector: 'app-formcontacto',
  templateUrl: './formcontacto.component.html',
  styleUrls: ['./formcontacto.component.css']
})
export class FormcontactoComponent implements OnInit {

  constructor(private _Mesaje:MensajeService) 
  { 
    _Mesaje.Carga(["enviado"])
  }

  ngOnInit(): void {
  }

}

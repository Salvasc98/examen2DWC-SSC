import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Portero } from 'src/app/interfaces/portero';
import { PorterosService } from 'src/app/services/porteros.service';

@Component({
  selector: 'app-aniadir-porteros',
  templateUrl: './aniadir-porteros.component.html',
  styleUrls: ['./aniadir-porteros.component.css']
})
export class AniadirPorterosComponent implements OnInit {
  formPortero = this.fb.group({
    nombreApellidos: [''],
    ciudad: [''],
    telefono: [''],
    email: [''],
    mesDisponible: ['']
  });
  documentId: string = '';
  porteros: any;


  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private porterosService: PorterosService) { }

  ngOnInit(): void {

  }

}

import { Component, OnInit } from '@angular/core';
import { Portero } from 'src/app/interfaces/portero';
import { PorterosService } from '../../services/porteros.service';

@Component({
  selector: 'app-lista-porteros',
  templateUrl: './lista-porteros.component.html',
  styleUrls: ['./lista-porteros.component.css']
})
export class ListaPorterosComponent implements OnInit {

  porteros: any[] = [];

  constructor(private porterosService: PorterosService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.porterosService.getAll().subscribe( (porterosSnapshot: any) =>{
      this.porteros = [];
      porterosSnapshot.forEach((porteroData: any) => {
        console.log(porteroData);
        this.porteros.push({
          id: porteroData.payload.doc.id,
          data: porteroData.payload.doc.data()
        })
      });
    })
  }

}

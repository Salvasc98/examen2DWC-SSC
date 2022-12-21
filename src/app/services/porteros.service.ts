import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { Portero } from '../interfaces/portero';

@Injectable({
  providedIn: 'root'
})
export class PorterosService {

  private miColeccion = 'porteros';

  constructor(private firebase: AngularFirestore) { }

  getPortero(id: string) {
    return this.firebase.collection(this.miColeccion).doc(id).snapshotChanges();
  }

  getAll() {
    return this.firebase.collection(this.miColeccion).snapshotChanges();
  }

  newPortero(portero: Portero) {
    return this.firebase.collection(this.miColeccion).add(portero);
  }

  updatePortero(documentId: string, portero: Portero) {
    return this.firebase.collection(this.miColeccion).doc(documentId).update(portero);
  }

  delete(documentId: string) {
    return this.firebase.collection(this.miColeccion).doc(documentId).delete();
  }

}

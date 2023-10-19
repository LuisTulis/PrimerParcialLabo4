import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, query, where, onSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore) { }

  traerDato<T>(path : string, campoABuscar : string, datoABuscar : any)
  {
    const referencia = collection(this.firestore,path);
    const QUERY = query(referencia,where(campoABuscar,'==',datoABuscar));
    return collectionData(QUERY) as Observable<T[]>;
  }

  public traerDatos(path : string): Observable<any[]> {
    const messageCollection = collection(this.firestore, path);
    const q = query(messageCollection);

    return new Observable<any[]>((observer) => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => doc.data());
        observer.next(messages);
      });

      return () => unsubscribe();
    });
  }

  async agregarDato(path : string, dato : Object)
  {
    const referencia = collection(this.firestore,path);

    await addDoc(referencia,dato);
  }
}

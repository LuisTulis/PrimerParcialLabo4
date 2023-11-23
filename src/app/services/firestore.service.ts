import { Injectable } from '@angular/core';
import { DocumentReference, Firestore, addDoc, arrayUnion, collection, collectionData, deleteDoc, doc, getDocs, onSnapshot, query, updateDoc, where } from '@angular/fire/firestore';

import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore : Firestore){}

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

  public traerDatosQ(path : string, campo : string, dato : any): Observable<any[]> 
  {
    const Collection = collection(this.firestore, path);
    const q = query(Collection, where(campo, '==', dato))
  
    return new Observable<any[]>((observer) => {
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => doc.data());
        observer.next(messages);
      });

      return () => unsubscribe();
    });
  }

  public traerDatosQM(path : string, campo : string, dato : any): Observable<any[]> 
  {
    const Collection = collection(this.firestore, path);
    const q = query(Collection, where(campo, '>', dato))
  
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

    let docRef = await addDoc(referencia,dato);

    this.setearID(docRef)
  }

  async setearID(docRef : DocumentReference)
  {
    await updateDoc(docRef,{id : docRef.id});
  }

  eliminarDato(path : string, id : string)
  {
    const docRef = doc(this.firestore, path + '/' + id)
    deleteDoc(docRef);
  }

  updateDocument(id : string, data : object, path : string)
  {
    const docRef = doc(this.firestore, path + '/' + id);
    updateDoc(docRef,data);
  }


}

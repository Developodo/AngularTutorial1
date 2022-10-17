import { Injectable } from '@angular/core';
import { INote } from '../model/INote';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private dbPath = '/notes';
  notesRef!: AngularFirestoreCollection<any>;


  public notes:INote[] = [
  ];
  constructor(private db: AngularFirestore) {
    this.notesRef = db.collection(this.dbPath);

    //Cargar todas las notas del servidor
    this.notesRef.get().subscribe(d=>{
      let docs = d.docs;
      /*docs.forEach(d=>{
        let newd = {id:d.id,...d.data()}; 
        this.notes.push(newd);
      });*/
      this.notes = docs.map(d=>{
        return {id:d.id,...d.data()};
      });
  
    })
   }

  public async createNote(newNote:INote){
    /**
     * Conectar firebase
     */
    try{
      let {id,...newNoteWithoutID} = newNote;
    let dRef:DocumentReference<any> = await this.notesRef.add({...newNoteWithoutID});
      newNote.id=dRef.id;
      this.notes.push(newNote);
    }catch(err){
      console.error(err);
    }
    
  }

  public createNoteWithKey(key:string,newNote:INote){
    return this.notesRef.doc(key).set(newNote, {merge: true}); //merge -> create if not exists, update if exists
  }

  public removeNote(id:any):Promise<void>{
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
    return this.notesRef.doc(id).delete();  
  }
  public getNotes():INote[]{
    return this.notes;
  }
  public updateNote(note:INote):Promise<void>{
    let idtobeupdated:any;
    let data:any;
    this.notes.forEach(n=>{
      if(n.id==note.id){
        n.title=note.title;
        n.description=note.description;
        let {id,...newData} = note;
        idtobeupdated=id;
        data=newData;
      }
    });
    if(idtobeupdated){
      return this.notesRef.doc(idtobeupdated as string).update(data);
    }else{
      return Promise.resolve();
    }
  }

  public customQuery(){
    const q = this.notesRef.ref.where("title","==","Hello").get()
    .then((querySnapshot)=>{
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
    }).catch((error) => {
      console.log("Error getting documents: ", error);
  });

  }
}

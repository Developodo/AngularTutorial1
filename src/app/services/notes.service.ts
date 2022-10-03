import { Injectable } from '@angular/core';
import { INote } from '../model/INote';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  public notes:INote[] = [
    {id:1,title:'Nota1',description:"Hola Mundo"},
    {id:2,title:'Nota2',description:"Hello World"},
  ];
  constructor() { }

  public createNote(newNote:INote){
    /**
     * Base de datos -> clave primar id
     */
    let id=Math.floor(Math.random()*1000)+1;
    newNote.id=id;
    this.notes.push(newNote);
  }
  public removeNote(id:any){
    let newNotes = this.notes.filter((n)=>{
      return n.id!=id;
    });
    this.notes = newNotes;
  }
  public getNotes():INote[]{
    return this.notes;
  }
}

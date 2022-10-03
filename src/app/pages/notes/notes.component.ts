import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { INote } from '../../model/INote';
import { SharedModule } from '../../components/SharedModule';
import { HighlightDirective } from '../../directives/highlight.directive';
import { NotesService } from '../../services/notes.service';
import { FormNoteComponent } from '../../components/form-note/form-note.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule,FormsModule,SharedModule,HighlightDirective,
  FormNoteComponent],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public _editingNote!:INote;


  constructor(public notesS:NotesService) { }

  ngOnInit(): void {
  }

  public removingNote($event:INote){
    console.log("Elminando Nota");
    this.notesS.removeNote($event.id)
  }
  public editingNote($event:INote){
    console.log("Editando Nota");
    this._editingNote=$event;
    console.log(this._editingNote)
    document.getElementById("launchModal")?.click();
  }
  trackByNotes(index:number,item:INote){
    return item.id;
  }

  updateNote($event:any){
    this.notesS.updateNote($event);  //<-new
    document.getElementById("closeModal")?.click();
  }

}

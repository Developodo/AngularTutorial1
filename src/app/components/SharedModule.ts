import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ NoteComponent ],
 exports:      [ NoteComponent/*, FormsModule */]
})
export class SharedModule { }
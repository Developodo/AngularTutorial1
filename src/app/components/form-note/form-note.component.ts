import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { INote } from '../../model/INote';

@Component({
  selector: 'app-form-note',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-note.component.html',
  styleUrls: ['./form-note.component.css']
})
export class FormNoteComponent implements OnInit {

  @Input() note!:INote;
  @Output() onsubmit = new EventEmitter<INote>();
  public form:FormGroup;
  /*@ViewChild('title') title!:ElementRef;
  public description!:string;*/

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      title: ['',[Validators.required,Validators.minLength(4)]],
      description:[''],
      id:['']
    })
   }
  ngOnChanges($changes:any){
    if($changes.note && $changes.note.currentValue){
      this.form.setValue($changes.note.currentValue);
    }
  }
  ngOnInit(): void {
    if(this.note && this.note.title){
      this.form.setValue(this.note);

      /*this.form.patchValue({
        id: this.note.id, 
      });*/
    }
  }

  submit(){
    //VALID
    let newNote:INote = {
      id:this.form.value.id,// <<-- new
      title: this.form.value.title,
      description: this.form.value.description
    }
    this.onsubmit.emit(newNote);
    //this.form.reset();
  }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from "../tarefa";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {  
  @Input() tarefa: Tarefa = new Tarefa("", false);
  @Output() tarefaRemover: EventEmitter<Tarefa> = new EventEmitter();
  @Output() modificaTarefa = new EventEmitter();
  emEdicao = false;

  submitTarefa(value:string):void {
    this.tarefa.descricao=value; 
    this.emEdicao = false;
    this.modificaTarefa.emit()
  }
  
  removeTarefa(tarefa:Tarefa):void {
    this.tarefaRemover.emit(tarefa);       

  }

}


import { Component, inject } from '@angular/core';
import { FirestoreService } from '../firestore.service';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';
import { aW } from '@fullcalendar/core/internal-common';
import { CustomPipe } from '../../models/pipe.class';


@Component({
  selector: 'app-pipeline',
  standalone: true,
  imports: [
    CdkDropList, 
    CdkDrag
  ],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss'
})
export class PipelineComponent {
firestore = inject(FirestoreService);
pipeline = this.firestore.pipeLine;
  constructor() {
    this.firestore.getPipeline();
  }
  
  ngDoCheck() {
    this.pipeline = this.firestore.pipeLine
    
  }
  drop(event: CdkDragDrop<CustomPipe[]>) {
    moveItemInArray(this.firestore.pipeLine, event.previousIndex, event.currentIndex);
    this.setIndex();
  }

   setIndex(){
    this.firestore.pipeLine.forEach((pipe: CustomPipe) => {
      pipe.index = this.pipeline.indexOf(pipe);
      this.firestore.updatePipe(pipe.id, "index", pipe.index)
      this.firestore.pipeLine = this.pipeline;
    })
  }
}

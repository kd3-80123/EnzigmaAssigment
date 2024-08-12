import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Detail from '../../types/detail';
import { DetailService } from '../../service/detail.service';
import { Router } from 'express';
@Component({
  selector: 'app-detail-form',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule],
  templateUrl: './detail-form.component.html',
  styleUrl: './detail-form.component.css'
})
export class DetailFormComponent {
 fromBuilder = inject(FormBuilder);
 userFrom :FormGroup = this.fromBuilder.group({
  assingedTo:[''],
  progressstatus:[''],
  dueDate:[''],
  priority:[''],
  comments:['']
 })
detailService = inject(DetailService);
router = inject(Router);
 addDetail()
 {
  
  const model : Detail = this.userFrom.value
  this.detailService.addDetail(model).subscribe(result =>{
    alert("Task Added Successfully")
    this.router.navigateByUrl("/details")
  })
 }
}

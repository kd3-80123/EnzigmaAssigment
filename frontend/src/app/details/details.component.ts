import { Component, inject } from '@angular/core';
import detail from '../types/detail';
import { DetailService } from '../service/detail.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  details:detail[] = [];
  detailService = inject(DetailService);

  ngOnInit()
  {
    this.detailService.getDetails().subscribe((result) => {
        this.details = result ;
        console.log(this.details);
    })
  }

}

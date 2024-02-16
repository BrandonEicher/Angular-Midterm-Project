import { Component } from '@angular/core';
import { JobServiceService } from '../services/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {

  id: number = 0;
  title: string = '';
  description: string = '';
  duration: string = '';
  employer: string = '';

  constructor(private jobServiceService: JobServiceService, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.actRoute.snapshot.paramMap);
    const idString: string = this.actRoute.snapshot.paramMap.get('id') ?? "";
    this.id = parseInt(idString);
    this.jobServiceService.getJobs(this.id).subscribe(foundMeaning =>{
      this.id = foundMeaning;
    });
  }
  
}

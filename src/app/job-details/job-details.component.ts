import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../services/job-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent implements OnInit {

  job: any;

  constructor(private route: ActivatedRoute, private jobServiceService: JobServiceService) { }

  ngOnInit(): void {
    const jobId = Number(this.route.snapshot.paramMap.get('jobId') || '');
    this.jobServiceService.getJob(jobId).subscribe(job => {
      this.job = job;
    });
  }
}

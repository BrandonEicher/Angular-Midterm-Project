import { Component, OnInit} from '@angular/core';
import { JobServiceService } from '../services/job-service.service';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {

  jobs: any[] = [];

  constructor(private jobServiceService: JobServiceService) { }

  ngOnInit(): void {
    this.jobServiceService.getJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  lookUp(word: string) {
    this.router.navigateByUrl(`/job-details/${word}`)
  }

}

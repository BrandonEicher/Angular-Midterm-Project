import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {
  pastJobs: any[] = [
    {
      id: 1,
      title: "Detassle Corn",
      description: "Walking through corn fields all day long",
      duration: "2 summers",
      employer: "Levi somebody in Sturgis Michigan"
    },
    {
      id: 2,
      title: "Excavation",
      description: "I was operating dozers or bobcats all day long",
      duration: "9 years",
      employer: "Eicher Excavating"
    }
  ]
  //Observable
  getJobs(id: number): Observable<any>{
    const foundJob = this.pastJobs.find(job => job.id === id)
      return of(this.pastJobs);
  }
  //gets job based on id
  getJob(job: string): Observable<any>{
      let description: string = "";
      this.pastJobs.forEach(w => {
        if (w.job === job){
          description = w.meaning;
        }
      });
      return of(description);
  }

  constructor() { }
}

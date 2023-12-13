import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
      this.fetchBudget();
  }

public dataSource:any = {
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#ffcd56",
           "#ff6384",
           "#36a2eb",
           "#fd6b19",
           "#83FF33",
           "#F633FF",
           "#FF3333"
        ],
      },
    ],
    labels: [],
  };

isEmpty(val:any){
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}
fetchBudget() {

  // Check if the data in the dataSource is empty (both data and labels).
  if (this.isEmpty(this.dataSource.datasets[0].data) || this.isEmpty(this.dataSource.labels)) {
    // If the data is empty, make an HTTP GET request to the backend to fetch budget data.
    this.httpClient.get('http://localhost:3000' + '/budget').subscribe((res: any) => {
      console.log('server res', res);
      for (let i = 0; i < res.length; i++) {
        this.dataSource.datasets[0].data[i] = res[i].budget;
        this.dataSource.labels[i] = res[i].title;
      }
    });
  }
}
}

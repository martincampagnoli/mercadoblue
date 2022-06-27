import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mercadoblue';
  data: any | undefined;


  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.dataService.getData()
      .subscribe((r: any[] | undefined) =>  this.data = r); 
  }
}

import { Component } from '@angular/core';
import { ServiceFile } from '../service_file.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  userData : Array<{}>
  constructor(private servicefile:ServiceFile) {
    this.servicefile.fetchData().subscribe(data=>{
      this.userData=data
      console.log(this.userData)
    })
  }
}

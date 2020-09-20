import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:any;
  constructor(private coronaData : DataService){}

  ngOnInIt(){
  this.coronaData.getData().subscribe((result)=>{
    console.log("result",result)
    this.data=result
  })
}
  
} 

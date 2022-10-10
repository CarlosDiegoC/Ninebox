import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const ADVICE_ENDPOINT = 'https://api.adviceslip.com/advice';

type Slip = {
  id?: number,
  advice?: string
};

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
  styleUrls: ['./advices.component.css']
})
export class AdvicesComponent implements OnInit {

  advice!: Slip;

  constructor( private http: HttpClient ) { }

  ngOnInit() {
    this.getAdvice();
  }

  getAdvice() {
    this.http.get(ADVICE_ENDPOINT)
      .subscribe(advice => {
        this.advice = Object.values(advice)[0];
      });
  }

}

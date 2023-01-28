import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheadSharkApiService {
  sharkUrl: string = `https://www.cheapshark.com/api/1.0`;
  constructor(private http: HttpClient) { }

  // https://www.cheapshark.com/api/1.0/deals?onSale=1
  
  
  getOnSaleFeatured() {
    const url = `${this.sharkUrl}/deals?onSale=1&pageSize=1`;
    return this.http.get(url);
  };
}

const theURL = (term: string, base: string) => {
  let params = new HttpParams()
    .append('format', 'json');
  return `${base}?${params.toString()}`;
};

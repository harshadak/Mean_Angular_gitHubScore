import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // <— Imported

@Injectable()
export class TaskService {

  userData = [];
  postID: string;

  constructor(private _http: Http) { }
  retrieveTasks(id, callback,errorback) {
    this._http.get('https://jsonplaceholder.typicode.com/posts/'+id).subscribe( 
      (response) => { 
        // console.log(response.json());
        this.userData = response.json();
        callback(this.userData);
        // console.log(this.userData);
       }, // <— first method
      (error) => { 
        errorback();
        // console.log(error);
       } // <— second method
      
    );
  }


}

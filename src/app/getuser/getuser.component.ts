import { Component, OnInit  } from '@angular/core';
import { TaskService } from './../task.service';

@Component({
  selector: 'app-getuser',
  templateUrl: './getuser.component.html',
  styleUrls: ['./getuser.component.css']
})
export class GetuserComponent implements OnInit {

  userData = [];
  title: string;
  postID: string;
  postExists: boolean;

  constructor(private _taskService: TaskService) {  // <-- Step 2 & 3
   }

  ngOnInit() {
    console.log('getuser1',this.postExists)
  }

  onSubmit() {
        this._taskService.postID = this.postID;
        // this.score = 12;
        this._taskService.retrieveTasks(this.postID, (userData) => { //callback is here
          this.postExists = false;
          this.userData = userData;
          this.title = userData["title"];
        },() => { //errorback function this is the second parameter of retrieveTasks
          this.postExists = true;
        });
  }




  calcScore() {
    
  }

}

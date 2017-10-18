import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetuserComponent } from './getuser/getuser.component';
import { ShowscoreComponent } from './showscore/showscore.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { TaskService } from './task.service'; // <-- Imported

@NgModule({
  declarations: [
    AppComponent,
    GetuserComponent,
    ShowscoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
		HttpModule // <-- Include module in our AppModules
  ],
  providers: [TaskService],//<-- put this in here
  bootstrap: [AppComponent]
})
export class AppModule { }

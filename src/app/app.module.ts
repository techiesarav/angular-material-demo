import { MdComponentsModule } from "./md-components.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
// To make the animations work we have to import this module
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { EditCourseComponent } from "./edit-course/edit-course.component";

@NgModule({
  declarations: [AppComponent, EditCourseComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MdComponentsModule,
  ],
  entryComponents: [EditCourseComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

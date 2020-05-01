import { EditCourseComponent } from "./edit-course/edit-course.component";
import { Component } from "@angular/core";
import { Observable, timer } from "rxjs";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "angular-demo";
  isChecked = false;
  progress = 0;
  isLoading = true;
  timer;
  colorSelect = 2;

  colors = [
    { id: 1, name: "Green" },
    { id: 2, name: "Red" },
    { id: 3, name: "Yellow" },
    { id: 4, name: "Pink" },
  ];

  onChange(event) {
    console.log(event);
  }

  //
  myDateFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  selectColor(color) {
    this.colors
      .filter((c) => c !== color)
      .forEach((element) => {
        element["selected"] = false;
      });
    color.selected = !color.selected;
  }

  constructor(private matDialog: MatDialog) {
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress === 100) clearInterval(this.timer);
    }, 20);
    this.getCourses().subscribe((x) => {
      this.isLoading = false;
    });
  }

  getCourses() {
    return timer(2000);
  }

  openDialog() {
    this.matDialog
      .open(EditCourseComponent, {
        data: {
          courseId: 1,
        },
      })
      .afterClosed()
      .subscribe((result) => console.log(result));
  }
}

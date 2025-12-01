import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-directives',
  imports: [FormsModule],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  isStaticNoteVisible: boolean = true;
  isNoteVisible: boolean = true;
  isParagraphVisible: boolean = true;

  showNote() {
    this.isNoteVisible = true;
  }

  hideNote() {
    this.isNoteVisible = false;
  }

  toggleNote() {
    this.isParagraphVisible = !this.isParagraphVisible;
  }

  monthNameStatic: string = "Mar";
  monthNameDynamic: string = "Mar";

  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  studentList: any[] = [{drivername: 'M Verstappen', team: 'Oracle Redbull Racing', isActive:true},
                        {drivername: 'L Hamilton', team: 'Scuderia Ferrari HP', isActive:true},
                        {drivername: 'A Senna', team: 'McLaren', isActive:false},
                        {drivername: 'K Antonelli', team: 'Mercedes AMG', isActive:true}];
}

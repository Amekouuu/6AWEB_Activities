import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  title='Hello there';
  imageUrl = 'serasera.jpeg';
  w = 200;h = 200;
  message= 'Teemo reporting for duty';
  description = 'Jexilog';
  textColor="pink";
  isHighlighted=true;

  yourName='';

  count = 0;
  increment(){
    this.count++;
  }
  decrement(){
    this.count--;
  }

  // Interpolation
  studentName = 'Micko Alberto';
  score=69;

  // Property binding
  imageUrl2 = "kert.jpg";
  isDisabled = true;

  // Attribute binding
  colSpanValue = 3;

  // Class binding
  isPassing = true;

  // Style binding
  boxColor = "purple";
  boxSize = "150px";
}

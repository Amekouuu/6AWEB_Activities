import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name = "Test";
  email = "test@example.com";
  title = "Test Ticle";
  description = "This is a test description.";
  imgUrl = "mqa.jpg";

}

import { Component } from '@angular/core';
import { HomeComComponent } from '../../components/home-com/home-com.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

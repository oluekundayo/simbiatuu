import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { AnimatedTypingComponent } from "../../components/animated-typing/animated-typing.component";

@Component({
  selector: 'app-index',
  imports: [HeaderComponent, AnimatedTypingComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

}

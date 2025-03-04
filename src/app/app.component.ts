import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomUpdateComponent } from './solutions/custom-update/custom-update.component';
import { SolutionsModule } from './solutions/solutions.module';
import { SinglePostComponent } from './solutions/single-update/single-post.component';
// Angular Components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


export class AppModule {}
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SolutionsModule,
    CustomUpdateComponent,
    SinglePostComponent,
    MatToolbarModule,
    MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularT';
  
}

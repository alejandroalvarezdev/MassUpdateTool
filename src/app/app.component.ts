import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomUpdateComponent } from './solutions/custom-update/custom-update.component';
import { SolutionsModule } from './solutions/solutions.module';
import { SingleUpdateComponent } from './solutions/single-update/single-update.component';


export class AppModule {}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SolutionsModule, CustomUpdateComponent,SingleUpdateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularT';
  
}

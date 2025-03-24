import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomUpdateComponent } from './solutions/custom-update/custom-update.component';
import { SolutionsModule } from './solutions/solutions.module';
import { SinglePostComponent } from './solutions/single-update/single-post.component';
// Angular Components
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from "./pages/home/home.component";  // Asegúrate de importar este módulo



export class AppModule {}
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    SolutionsModule,
    // CustomUpdateComponent,
    // SinglePostComponent,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    // HomeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularT';
  
}

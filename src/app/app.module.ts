import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { MatSelectModule,MatCheckboxModule } from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsComponent } from './components/planets/planets.component';
import { FavouritesComponent } from './components/favourites/favourites.component';

const appRoutes: Routes = [
  { path: 'planets', component: PlanetsComponent },
  { path: 'favourites', component: FavouritesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatTabsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



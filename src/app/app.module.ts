import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { MatToolbarModule, MatListModule, MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesCreateComponent } from './heroes/heroes-create/heroes-create.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroesCreateComponent,
    HeroesListComponent
  ],
  imports: [
    BrowserModule, 
    MatToolbarModule,MatListModule,MatCardModule,MatExpansionModule, MatFormFieldModule, MatInputModule,
    BrowserAnimationsModule, 
    FormsModule, 
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

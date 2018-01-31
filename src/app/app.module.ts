import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { MatInputModule,MatSlideToggleModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { HttpModule } from '@angular/http';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { DataService } from './services/data.service';
import { AuthGuardService } from './services/auth-guard.service';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatListModule,
    MatSlideToggleModule,
    HttpModule,
    MatRadioModule,
    MatDividerModule,
   ToastModule.forRoot()
  ],
  providers: [DataService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

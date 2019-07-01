import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './component/account/account.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './service/user.service';
import { FlatService } from './service/flat.service';
import { FlatComponent } from './component/flat/flat.component';
import { EditFlatComponent } from './component/edit-flat/edit-flat.component';
import { FlatDetailsComponent } from './component/flat-details/flat-details.component';
import { FlatManagementComponent } from './component/flat-management/flat-management.component';
import { FlatSummaryComponent } from './component/flat-summary/flat-summary.component';
import { CalendarManagementComponent } from './component/calendar-management/calendar-management.component';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'flat', component: FlatComponent },
  { path: 'editFlat/:flatId', component: FlatComponent },
  { path: 'account', component: AccountComponent },
  { path: 'flat-management', component: FlatManagementComponent },

  {path:'**',redirectTo:''}
//   ,
];
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    FlatComponent,
    EditFlatComponent,
    CalendarManagementComponent,
    FlatDetailsComponent,
    FlatManagementComponent,
    FlatSummaryComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
  RouterModule.forRoot(routes)
  ],
  providers: [UserService,FlatService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class AppModule { }
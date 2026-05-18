import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PublicModule } from './public/public.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user/user.reducer';
import { UserEffects } from './user/user.effects';
import { RoleModule } from './role/role.module';
import { roleReducer } from './role/role.reducer';
import { roleEffects } from './role/role.effects';
import { TestModule } from './test/test.module';
import { testReducer } from './test/test.reducer';
import { testEffects } from './test/test.effects';
import { AppointmentModule } from './appointment/appointment.module';
import { appointmentReducer } from './appointment/appointment.reducer';
import { appointmentEffects } from './appointment/appointment.effects';
import { AppointmentTestModule } from './appointment-test/appointment-test.module';
import { appointmentTestReducer } from './appointment-test/appointment-test.reducer';
import { AppointmentTestEffects } from './appointment-test/appointment-test.effects';
import { reportReducer } from './reports/report-list/report.reducer';
import { reportEffects } from './reports/report-list/report.effects';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PublicModule,
    UserModule,
    RoleModule,
    TestModule,
    AppointmentModule,
    AppointmentTestModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({users:userReducer, roles:roleReducer,tests:testReducer,appointments:appointmentReducer,appointmentTests:appointmentTestReducer,reports:reportReducer}, {}),
    EffectsModule.forRoot([UserEffects,roleEffects,testEffects,appointmentEffects,AppointmentTestEffects,reportEffects])
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

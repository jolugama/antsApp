import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { ReduxModule } from './redux/redux.module';


import { AppComponent } from './app.component';
import { SharedModule } from '@shared/shared.module';





// export const PAGES = [
//   EncyclopediaPageComponent
// ];

@NgModule({
  declarations: [
    AppComponent,
    // ...PAGES
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReduxModule,
    SharedModule,
    IonicModule.forRoot({
      mode: 'md'
    }),
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  // exports: [
  //   IonicModule
  // ]

})
export class AppModule { }

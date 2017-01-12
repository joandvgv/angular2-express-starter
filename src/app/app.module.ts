import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.router';
import { effects, store, instrumentation } from './store';
import { SharedModule } from './shared/shared.module';





 console.log(AppComponent);
 console.log(routing);
 console.log(effects, store, instrumentation);
 console.log(SharedModule);
 console.log(HttpModule);
 console.log(BrowserModule);
 console.log(FormsModule);




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpModule,
    store,
    effects,
    routing,
    instrumentation
  ],
   bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

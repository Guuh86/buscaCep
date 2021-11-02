import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CepPageComponent } from './cep-page/cep-page.component';
import { BuscaCepService } from './services/busca-cep.service';
import { CepsService } from './ceps.service';
import { CepMapComponent } from './cep-map/cep-map.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    CepPageComponent,
    CepMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDpzzsAUi3UQNsUV7tEHs3Nlj0sCRVdoNc'
    })
  ],
  providers: [BuscaCepService, CepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

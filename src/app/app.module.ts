import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { FormcontactoComponent } from './componentes/formcontacto/formcontacto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DestacadoComponent } from './componentes/destacado/destacado.component';
import { AcercanosotrosComponent } from './componentes/acercanosotros/acercanosotros.component';
import { WhatsappComponent } from './componentes/whatsapp/whatsapp.component';

//Inicio servicio mensaje

import { MensajeService } from './servicios/mensaje.service';

//Fin servicio

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FormcontactoComponent,
    ProyectosComponent,
    FooterComponent,
    DestacadoComponent,
    AcercanosotrosComponent,
    WhatsappComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MensajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

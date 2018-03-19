import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MyDatePickerModule } from 'mydatepicker';
import { FormsModule }   from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AppConfig } from './app.config';

import { AppComponent } from './app.component';
import { LivroComponent } from './_components/livro/livro.component';
import { AutorComponent } from './_components/autor/autor.component';
import { EditoraComponent } from './_components/editora/editora.component';
import { ExemplarComponent } from './_components/exemplar/exemplar.component';
import { AreaConhecimentoComponent } from './_components/area-conhecimento/area-conhecimento.component';
import { EmprestimoComponent } from './_components/emprestimo/emprestimo.component';
import { UsuarioComponent } from './_components/usuario/usuario.component';
import { MenuComponent } from './_components/menu/menu.component';

import { AutorService } from './_services/autor/autor.service';
import { AreaConhecimentoService } from './_services/area-conhecimento/area-conhecimento.service';
import { EditoraService } from './_services/editora/editora.service';
import { EmprestimoService } from './_services/emprestimo/emprestimo.service';
import { ExemplarService } from './_services/exemplar/exemplar.service';
import { LivroService } from './_services/livro/livro.service';
import { UsuarioService } from './_services/usuario/usuario.service';


export const routes: Routes = 
[
    {
        path: '',
        redirectTo: 'livros',    
        pathMatch: 'full'
    },
    {
        path: 'livros',
        component: LivroComponent
    },
    {
        path: 'autores',
        component: AutorComponent
    },
    {
        path: 'editoras',
        component: EditoraComponent
    },
    {
        path: 'exemplares',
        component: ExemplarComponent
    },
    {
        path: 'areas-conhecimento',
        component: AreaConhecimentoComponent
    },
    {
        path: 'emprestimo',
        component: EmprestimoComponent
    },
    {
        path: 'usuarios',
        component: UsuarioComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    LivroComponent,
    AutorComponent,
    EditoraComponent,
    ExemplarComponent,
    AreaConhecimentoComponent,
    EmprestimoComponent,
    UsuarioComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    MyDatePickerModule,
    HttpModule,
    FormsModule,
    TextMaskModule
  ],
  exports: [RouterModule],
  providers: [
    AppConfig,
    AutorService,
    AreaConhecimentoService,
    EditoraService,
    EmprestimoService,
    ExemplarService,
    LivroService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

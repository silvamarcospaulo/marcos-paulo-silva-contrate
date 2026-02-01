import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";
import { Header } from "../../reutilizaveis/header/header";
import { Footer } from "../../reutilizaveis/footer/footer";
import { Servicos } from "./sections/servicos/servicos";
import { Projetos } from "./sections/projetos/projetos";
import { Sobre } from "./sections/sobre/sobre";
import { Contatos } from "./sections/contatos/contatos";

@Component({
  selector: 'app-home',
  imports: [Hero, Header, Footer, Servicos, Projetos, Sobre, Contatos],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})

export class Home {

}
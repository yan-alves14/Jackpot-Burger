import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-comp-promocoes',
  templateUrl: './comp-promocoes.component.html',
  styleUrls: ['./comp-promocoes.component.css']
})

export class CompPromocoesComponent implements OnInit {
  //dados

  pedidos: any = {};
  select1: any = {};
  burger: any = {};
  jogo: any = '';
  
  erroList: string = '';
  displayErro: any = 'removeDisplay';
  displayPromo: any = '';
  displayPedido: any = 'removeDisplay';

  promo = [
    {
        id: 1,
        name: "Queen burguer",
        preco:"R$22.00" ,
        detalhes:'Hambúrguer de pão macio acompanhado com carne de frago temperada, molho especial, maionese e queijo',
        img: 'https://www.minhareceita.com.br/app/uploads/2020/08/hamburguer-frango-mel-bacon_mobile.jpg'
    },
    {
        id: 2,  	    
        name: "King burger",
        preco:"R$25.00" ,
        detalhes:'Pão crocante com 2 carnes bovinas, molho especial, bacon, queijo, queijo cheddar e cebola caramelizada',
        img: 'https://blog.duogourmet.com.br/wp-content/uploads/2020/01/All_in_burguer.jpg'
    },
    {
        id: 3,
        name: "Jack burger",
        preco:"R$25.00" ,
        detalhes:'Pão crocante com 1 carne suina, acompanhado com molho picante, cebola, bacon e queijo',
        img: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-hamburguer-fit-0.jpg'
    }
  ];

  jogos = [
    'Selecione',
    'Poker',
    'Truco',
    'Roleta Russa Burguer',
    'Blackjack',
    'Caça Níquel Burguer',
    'Uno',
    'Banco Imobiliario'
  ]
  
  //metodos

  ngOnInit(): void {
    this.select1 = 'Selecione';
  }

  onChange(){
    
    this.jogo = this.jogos.filter((x) => x == this.select1);
    
  }

  clickEscolhaProd(id: number){
    this.displayPromo = "promoSelect";
    this.burger = this.promo.filter((val) => val.id == id)[0];
    console.log(this.burger);
  }
  carregaPedido () {
    
    if(this.burger.name != null && this.jogo.length > 0){
      this.erroList = "";
      this.displayPedido = 'showDisplay'
      this.displayErro = 'removeDisplay';
      this.pedidos = { nome: this.burger.name, jogo: this.jogo, preco: this.burger.preco ,mesa: (Math.floor(Math.random() * 20) + 1)}
    }
    else
    { 
      if(this.burger.name == null )
      {
        this.displayErro = 'showDisplay';
        this.erroList = "Erro: O Hambúrguer da promoção não foi selecionado";
      }
      else
      {
        this.displayErro = 'showDisplay';
        this.erroList = "Erro: O Jogo não foi selecionado";
      }

    }
  }

  
}

var hamburgao;


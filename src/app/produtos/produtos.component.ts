import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { HttpRequestsService } from '../services/http-requests.service';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent implements OnInit{
  constructor(private httpService: HttpRequestsService) {}
  data:any ;
  ngOnInit(): void {
    this.getProdutos();
  }
  getProdutos() {
    this.httpService.getData("Produtos").subscribe((response) => {
      this.data = response;
      console.log(this.data);
    },err => {console.log(err)});
  };
  testeevento(number: number) {
    console.log("teste de evento " + number);
  }
}

import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product.interface';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../components/card/card.component';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  products: Product[] = [];

  ProductsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit() {
    this.ProductsService.getAll().subscribe((products) => {
      this.products = products;
    })
  }

  onEdit(product: Product) {
    this.router.navigate(['/edit-product', product.id]);
  }
}

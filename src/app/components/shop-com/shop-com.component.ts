import { Component, inject } from '@angular/core';
import { IProducts } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { ICategories } from '../../models/category';
import { BrandService } from '../../services/brand.service';
import { SizeService } from '../../services/size.service';
import { IBrands } from '../../models/brand';
import { ISize } from '../../models/size';

@Component({
  selector: 'app-shop-com',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-com.component.html',
})
export class ShopComComponent {
  productServices = inject(ProductService);
  categoryServices = inject(CategoryService);
  brandServices = inject(BrandService);
  sizeServices = inject(SizeService);

  products: IProducts[] = [];
  categories: ICategories[] = [];
  brands: IBrands[] = [];
  sizes: ISize[] = [];

  categoryAccrodion = false;
  brandAccordion = false;
  sizeAccordion = false;
  filterAccordion = false;

  async ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllBrands();
    this.getAllSize();
  }

  handleCategoryAccordion = () => {
    this.categoryAccrodion = !this.categoryAccrodion;
  };

  handleBrandAccordion = () => {
    this.brandAccordion = !this.brandAccordion;
  };

  handleFilterAccordion = () => {
    this.filterAccordion = !this.filterAccordion;
  };

  handleSizeAccordion = () => {
    this.sizeAccordion = !this.sizeAccordion;
  };

  getAllProducts = async () => {
    this.productServices.getAllProducts().subscribe((res) => {
      this.products = res;
    });
  };

  getAllCategories = async () => {
    this.categoryServices.getAllCategories().subscribe((res) => {
      this.categories = res;
    });
  };

  getAllBrands() {
    this.brandServices.getAllBrands().subscribe((res) => {
      this.brands = res;
    });
  }

  getAllSize() {
    this.sizeServices.getAllSizes().subscribe((res) => {
      this.sizes = res;
    });
  }
}

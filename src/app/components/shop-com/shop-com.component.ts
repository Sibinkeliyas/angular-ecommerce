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
import { ICartItemsProps } from '../../models/cart';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { PaginatorModule } from 'primeng/paginator';
import { CartService } from '../../services/cart.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { increaseCartCount } from '../../state/cart/cart.actions';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-shop-com',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PaginatorModule],
  templateUrl: './shop-com.component.html',
})
export class ShopComComponent {
  private search: Subject<string> = new Subject();

  constructor(private store: Store<AppState>) {
    this.search.pipe(debounceTime(300)).subscribe((res) => {
      this.getSearchedProducts(res);
    });
  }

  limit: number = 0;
  first: number = 0;
  perPage: number = 10;
  totalProducts: number = 0;

  productServices = inject(ProductService);
  categoryServices = inject(CategoryService);
  brandServices = inject(BrandService);
  sizeServices = inject(SizeService);
  cartService = inject(CartService);

  products: IProducts[] = [];
  categories: ICategories[] = [];
  brands: IBrands[] = [];
  sizes: ISize[] = [];
  cartItems: ICartItemsProps[] = [];

  searchValue: string = '';
  sortType = 1;
  filterObj: { [key: string]: string[] } = {
    categories: [],
    brands: [],
    sizes: [],
  };

  categoryAccrodion = false;
  brandAccordion = false;
  sizeAccordion = false;
  filterAccordion = false;

  ngOnInit() {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllBrands();
    this.getAllSize();
  }

  onPageChange(event: any) {
    this.first = Number(event.first);
    this.limit = event.page;
    this.perPage = Number(event.rows);
    this.getFilteredProducts();
  }

  handleSearch(event: string) {
    this.search.next(event as any);
  }

  getSearchedProducts(value: string) {
    this.getFilteredProducts();
  }

  handleAddToCart(id: string) {
    this.store.dispatch(increaseCartCount());
    const isItemAdded = this.cartItems.find((cart) => cart.productId === id);
    if (isItemAdded) isItemAdded.quantity++;
    else this.cartItems.push({ productId: id, quantity: 1 });
    this.cartService
      .addToCart({ productId: id, quantity: 1 })
      .subscribe((res) => {
        console.log(res);
      });
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

  getUrl(): string {
    let url = `?sort=${this.sortType}&limit=${this.limit}&perPage=${this.perPage}`;
    url = this.searchValue ? `${url}&search=${this.searchValue}` : url;
    for (const value in this.filterObj) {
      if (this.filterObj[value].length) {
        if (url) url = url + `&${value}=${this.filterObj[value].join(',')}`;
        else url = `?${value}=${this.filterObj[value].join(',')}`;
      }
    }
    return url || '';
  }

  onSort(event: Event) {
    this.sortType = Number((event.target as HTMLInputElement).value);
    this.getFilteredProducts();
  }

  handleFilter = async (key: string, value: string, event: Event) => {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) this.filterObj[key].push(value);
    else
      this.filterObj[key] = this.filterObj[key].filter((obj) => obj !== value);
    this.getFilteredProducts();
  };

  handleSelectSize = (id: string) => {
    const isSelected = this.filterObj['sizes'].find((size) => size === id);
    if (isSelected)
      this.filterObj['sizes'] = this.filterObj['sizes'].filter(
        (size) => size !== id
      );
    else this.filterObj['sizes'].push(id);
    this.getFilteredProducts();
  };

  getFilteredProducts() {
    const url = this.getUrl();
    this.productServices.getFilteredProducts(url).subscribe((res) => {
      this.products = res.products;
      this.totalProducts = res.totalProducts;
    });
  }

  getAllProducts = async () => {
    this.productServices.getAllProducts().subscribe((res) => {
      this.products = res.products;
      this.totalProducts = res.totalProducts;
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

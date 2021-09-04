import {Component, OnDestroy, OnInit} from "@angular/core";
import { IProduct } from "./product";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponet implements OnInit, OnDestroy{


  constructor(private productService: ProductService) {
  }


    pageTitle: string = 'Product List of Ronny';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string = '';
    sub!:  Subscription;

    private _listFilter: string = '';

  //live cicle hook
  ngOnInit(): void {

    this.sub= this.productService.getProducts().subscribe({
      next : products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });


    //this._listFilter='cart';
  }

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value: string){
        this._listFilter= value;
        console.log('in setter:', value );
        this.filteredProducts = this.performFilter(value);
    }

    filteredProducts: IProduct[] = [];

    products: IProduct[] = [];

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct )=>
            product.productName.toLowerCase().includes(filterBy)
        );
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    onRatingClicked(message : string): void{
      this.pageTitle = 'Product List: ' + message;
    }

  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }
}

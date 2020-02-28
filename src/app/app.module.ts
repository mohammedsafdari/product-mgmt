import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './pipe/convert-to-spaces.pipe';
import { ProductStarRatingComponent } from './product-star-rating/product-star-rating.component';
import { ProductDataService } from './services/product-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { InterceptorService } from './services/interceptor.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from './product-detail/product-detail.component';
 export function productServiceFactory(_productService: ProductDataService) {
   return () => _productService.appServiceInit();
 }
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductStarRatingComponent,
    WelcomePageComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     RouterModule,
    RouterModule.forRoot([

      { path: 'welcome', component: WelcomePageComponent },
      
      {
        path: 'products',
        component: ProductListComponent

      },
      { path: 'product/:id', component: ProductDetailComponent },
      { path: '', component: WelcomePageComponent },
      { path: '**', component: WelcomePageComponent }

    ])
   ],
  providers: [
    ProductDataService,
    {
      provide: APP_INITIALIZER,
      useFactory: productServiceFactory,
      multi: true,
      deps: [ProductDataService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

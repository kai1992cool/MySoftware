import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { CustomerService } from '../../../service/customer-service';
import { Customer, Representative } from '../../../model/customer';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../service/product-service';
import { Product } from '../../../model/product';
import { RouterLinkActive, ActivatedRoute, RouterModule, RouterLink, Router, RouterOutlet } from '@angular/router';
import { AppService } from '../../../service/app.service';
import { JobService } from 'src/service/job.service';

@Component({
  selector: 'app-job-applied-for',
  standalone: true,
  imports: [TableModule, InputTextModule, TagModule, 
    DropdownModule, MultiSelectModule, ProgressBarModule, ToastModule, ButtonModule, 
    SliderModule,  FormsModule,FormsModule, RouterModule],
    providers: [CustomerService, ProductService, AppService, JobService, TableModule,CommonModule,
      RouterLinkActive,RouterLink, RouterOutlet],
  templateUrl: './job-applied-for.component.html',
  styleUrl: './job-applied-for.component.scss'
})

export class JobAppliedForComponent {
    products!: Product[];
    public _appService?: AppService; 
    public _jobService?: JobService; 
    public _router: any;
    public _routerLink: any;
    @Output() isHiddensChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
    constructor(@Inject(ActivatedRoute) activatedRoute: ActivatedRoute, @Inject(Router) router: Router,
      private productService: ProductService, public appService: AppService, 
      jobService?: JobService, @Inject(RouterLink) routerLink?: RouterLink) {
        this._appService = appService;
        this._jobService = jobService;
        this._router = router;
        this._routerLink = routerLink;
      }

    ngOnInit() {
        this.productService.getProducts().then((data) => {
            this.products = data;
        });
    }

    goToDetailPage(id: string) {
      this._router.navigate(['/app-job-details']);
      console.log(id);
    }   
 
}


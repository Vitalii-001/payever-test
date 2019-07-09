import { Injectable,  } from '@angular/core';
import { PaginationApiService } from '../../core/services';
import { ActivatedRoute } from '@angular/router';

@Injectable()
export class PaginationResolver {

  constructor(private paginationApiService: PaginationApiService,
              private activatedRoute: ActivatedRoute) {}

  resolve() {
    this.activatedRoute.queryParams.subscribe(params => {
      const currentPage = params['page'];
      if (currentPage) {
        return this.paginationApiService.fetchPaginationInfo(currentPage);
      }
    });
    // return this.paginationApiService.fetchPaginationInfo();
  }

}

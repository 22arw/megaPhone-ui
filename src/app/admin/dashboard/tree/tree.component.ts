import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { Base } from 'src/app/core/interfaces/base';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  @Input() node: string;
  base$: Observable<Base[]>;
  loading: boolean;

  constructor(public baseService: BaseService) { }

  ngOnInit() {
    this.loading = true;
    // this.baseService.getAllBases()
    // .subscribe(
    //   res => {
    //     console.log(res);
    //     this.base$ = res['bases'];
    //   }
    // );
    // this.baseService.getAllBases()
    // .pipe(
    //   flatMap(res => {
    //     console.log(res);
    //   })
    // );
  }

}

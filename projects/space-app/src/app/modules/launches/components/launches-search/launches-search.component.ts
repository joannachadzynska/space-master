import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LaunchesQueryParams } from './../../../../../../../space-api/types/launches-query-params';

@Component({
  selector: 'app-launches-search',
  templateUrl: './launches-search.component.html',
  styleUrls: ['./launches-search.component.scss'],
})
export class LaunchesSearchComponent {
  form = new FormGroup({
    sort: new FormControl(),
    order: new FormControl(),
    query: new FormControl(),
  });

  @Input() set params(params: LaunchesQueryParams) {
    this.form.patchValue(params);
  }

  @Output() paramsChange = new EventEmitter<LaunchesQueryParams>();

  search(): void {
    this.paramsChange.emit(this.form.value);
  }
}

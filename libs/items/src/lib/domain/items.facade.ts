import { Api } from '@nx-monorepo/shared-utils';
import { State } from '@nx-monorepo/shared-utils';
import { inject, Injectable } from '@angular/core';
import { ActionModel } from 'libs/shared/utils/src/lib/shared-utils/types/store.models';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ItemsFacadeService extends State<any[]> {
  http = inject(HttpClient);
  constructor() {
    super([1, 2, 3]);
    this.http.get(Api.ITEMS_END_POINT).subscribe((resp:any)=>{
        this.setState(resp.data);
    });
  }
  override dispatch({ payload, type }: ActionModel<any>): void {
    this.setState(payload);
  }
}

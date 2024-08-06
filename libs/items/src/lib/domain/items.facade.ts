import { State } from '@nx-monorepo/shared-utils';
import { Injectable } from '@angular/core';
import { ActionModel } from 'libs/shared/utils/src/lib/shared-utils/types/store.models';

@Injectable({ providedIn: 'root' })
export class ItemsFacadeService extends State<any[]> {
  constructor() {
    super([1, 2, 3]);
  }
  override dispatch({ payload, type }: ActionModel<any>): void {
    this.setState(payload);
  }
}

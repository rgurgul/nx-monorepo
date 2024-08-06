import { State } from '@nx-monorepo/shared-utils';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartFacadeService extends State<any[]> {
  constructor() {
    super([]);
  }

  override dispatch({ payload, type }: any): void {
    this.setState(payload);
  }
}

import { inject, customElement, bindingMode, bindable, containerless } from 'aurelia-framework';
import * as $ from 'jquery';

@containerless()
@customElement('abt-listgroup')
export class ListGroupCustomElement {
  @bindable({ defaultBindingMode: bindingMode.oneTime }) public id: string;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) public style: string = '';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public class: string;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) public flush: boolean | string = false;


  private listGroupTemplate: Element;
  private listGroup: Element;

  private afterAttached() {
    this.flush = Boolean(this.flush);

    let isFlush = this.flush || this.listGroupTemplate.hasAttribute('flush');

    if (isFlush) {
      this.listGroup.classList.add('list-group-flush');
    }
  }

}

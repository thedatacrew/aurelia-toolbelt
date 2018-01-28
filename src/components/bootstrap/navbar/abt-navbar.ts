import { DOM, containerless, inject, bindingMode, bindable, children } from 'aurelia-framework';
import { customElement } from 'aurelia-templating';

export type ExpandSize = '' | 'sm' | 'md' | 'lg';
export type NavbarColorType = 'light' | 'dark';
export type Placement = '' | 'fixed-top' | 'fixed-bottom' | 'sticky-top';
export type BackgroundColorType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

@inject(Element)
@customElement('abt-navbar')
export class BootstrapNavBar {
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public class: string;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public style: string;

  @bindable({ defaultBindingMode: bindingMode.oneWay }) public navbarColorType: NavbarColorType = 'light';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public backgroundColorType: BackgroundColorType = 'light';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public expandSize: ExpandSize = 'lg';
  @bindable({ defaultBindingMode: bindingMode.oneWay }) public placement: Placement = '';

  private navbar: Element;
  private navbarCollapse: Element;

  private afterAttached() {
    this.navbar.classList.add(`navbar-${this.navbarColorType}`);
    this.navbar.classList.add(`bg-${this.backgroundColorType}`);

    if (this.expandSize !== '') {
      this.navbar.classList.add(`navbar-expand-${this.expandSize}`);
    }

    let navbarToggler = <HTMLButtonElement>this.navbar.querySelector('.abt-navbar-toggler');
    let navbarCollapser = <HTMLDivElement>this.navbar.querySelector('.abt-navbar-collapser');
    if (navbarToggler && navbarCollapser) {
      navbarToggler.setAttribute('data-target', `#${navbarCollapser.id}`);
      navbarToggler.setAttribute('aria-controls', `${navbarCollapser.id}`);
    }
  }
}

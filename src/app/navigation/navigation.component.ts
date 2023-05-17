import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isNavOpen = false;

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }

  openNav() {
    const mobileNav = document.getElementById("mobileNav") as HTMLElement;
    mobileNav.style.width = "100%";
  }

  closeNav(): void {
    const mobileNav = document.getElementById("mobileNav") as HTMLElement;
    mobileNav.style.width = "0%";
    this.isNavOpen = false;
  }
}

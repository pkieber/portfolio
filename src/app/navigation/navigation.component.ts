import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  openNav(): void {
    const mobileNav = document.getElementById("mobileNav") as HTMLElement;
    mobileNav.style.width = "100%";
  }

  closeNav(): void {
    const mobileNav = document.getElementById("mobileNav") as HTMLElement;
    mobileNav.style.width = "0%";
  }
}

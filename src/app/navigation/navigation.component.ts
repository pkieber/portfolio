import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  currentSection: string | null = null;
  isNavOpen = false;

  ngOnInit(): void {
    this.onScroll();
  }


  /**
   * Handles the scroll event and updates the current active section.
   * @param target The target element for scrolling. Defaults to `document.documentElement`.
   */
  @HostListener('window:scroll', ['$event.target'])
  onScroll(target: HTMLElement = document.documentElement) {
    const sections = target.querySelectorAll('section');
    const scrollPosition = target.scrollTop || window.pageYOffset || target.scrollTop || 0;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      const sectionId = section.getAttribute('id');
      const sectionOffset = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
        this.currentSection = sectionId;
        break;
      }
    }
  }


  /**
   * Sets the active section.
   * @param sectionId The ID of the section to set as active.
   */
  setActiveSection(sectionId: string): void {
    this.currentSection = sectionId;
  }


  /**
   * Toggles the navigation menu.
   */
  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      this.openNav();
    } else {
      this.closeNav();
    }
  }


  /**
   * Opens the navigation menu when in mobile mode.
   * Sets the width of the mobile navigation menu to 100%.
   */
  openNav(): void {
    const mobileNav = document.getElementById('mobileNav') as HTMLElement;
    mobileNav.style.width = '100%';
  }


  /**
   * Closes the navigation menu.
   * Sets the width of the mobile navigation menu to 0% and resets the `isNavOpen` flag.
   */
  closeNav(): void {
    const mobileNav = document.getElementById('mobileNav') as HTMLElement;
    mobileNav.style.width = '0%';
    this.isNavOpen = false;
  }
}

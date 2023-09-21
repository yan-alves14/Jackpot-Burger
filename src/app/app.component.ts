import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FantasyBurger';
  constructor(private el: ElementRef) {}

  scrollToSection(secao: string) {
    const section = this.el.nativeElement.querySelector(('#'+secao));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Rola suavemente até a seção alvo
    }
  }

  scrollToEnd(){
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}

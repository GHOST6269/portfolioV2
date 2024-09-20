import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = '../assets/Mamisoa Rakotomamonjy.pdf'; // Chemin vers le fichier PDF
    link.download = 'Mamisoa Rakotomamonjy.pdf'; // Nom du fichier téléchargé
    link.click();
  }
}

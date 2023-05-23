import { Component } from '@angular/core';

/**
 * Represents a project with its details.
 */
interface Project {
  title: string;
  intro: string;
  info: string;
  githubLink: string;
  liveTestLink: string;
  imageSrc: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /**
   * Array of projects.
   * Project info can be changed/added here.
   * @type {Project[]}
   */
  projects: Project[] = [
    {
      title: 'El Pollo Loco',
      intro: 'A jump and run game to showcase object-oriented programming and the use of Canvas API for drawing 2D graphics.',
      info: 'JavaScript | HTML | CSS',
      githubLink: 'https://github.com/pkieber/pollo-loco',
      liveTestLink: 'https://patrick-kieber.developerakademie.net/pollo-loco/',
      imageSrc: 'assets/img/project-polloloco.png'
    },
    {
      title: 'Join - Kanbas Tool',
      intro: 'This project management tool offers a user login, a kanban board with drag and drop, a contact list and a summary page.',
      info: 'JavaScript | HTML | CSS',
      githubLink: 'https://github.com/pkieber/kanban',
      liveTestLink: 'https://patrick-kieber.developerakademie.net/join-kanban/index.html',
      imageSrc: 'assets/img/project-kanban.png'
    },
    {
      title: 'Pokedex',
      intro: 'This website fetches Pokemon stats from the Poke API. Large amounts of data are sorted and presented in a clear structure.',
      info: 'JavaScript | HTML | CSS | Rest API',
      githubLink: 'https://github.com/pkieber/pokedex',
      liveTestLink: 'https://patrick-kieber.developerakademie.net/pokedex/index.html',
      imageSrc: 'assets/img/project-pokedex.png'
    },
    {
      title: 'Ring of Fire',
      intro: 'A card game which is integrated with Google\'s Firestore database to allow sharing data among different parties in real-time.',
      info: 'Angular | TypeScript | HTML | SCSS | Firebase',
      githubLink: 'https://github.com/pkieber/ringoffire',
      liveTestLink: 'https://ring-of-fire-aedc9.web.app',
      imageSrc: 'assets/img/project-ringoffire.png'
    }
  ];
}

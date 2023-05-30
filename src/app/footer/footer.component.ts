import { Component } from '@angular/core';

interface Developers {
  name: string,
  github: string
  linkedIn: string,
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  developers: Developers[] = [
    {
      name: 'Edgar Zambrana',
      github: 'https://github.com/EdgarJoell',
      linkedIn: 'https://www.linkedin.com/in/edgar-j-zambrana-0b11a31b2/',
    },
    {
      name: 'Jaime Padilla',
      github: 'https://github.com/Jaypad07',
      linkedIn: 'https://www.linkedin.com/in/jaypad07/',
    },
    {
      name: 'Kevin Barrios',
      github: 'https://github.com/dayjyun',
      linkedIn: 'https://www.linkedin.com/in/kevinbarrios12/',
    },
  ];
}

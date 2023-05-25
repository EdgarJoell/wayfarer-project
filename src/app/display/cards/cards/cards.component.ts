import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
    cards: any = [
      {
        header: "Adventure",
        description: "Brace yourself for heart-pounding moments and soul-stirring encounters that will leave an indelible mark. Join us on an extraordinary adventure of a lifetime and let your dreams come alive!",
      },
      {
        header: "Exploration",
        description: "Explore uncharted territories, embrace the untamed beauty of the world, and discover transformative experiences. Let your wanderlust soar as you embark on a thrilling adventure that pushes boundaries and fuels your sense of wonder!",
      },
      {
        header: "Excitement",
        description: "Prepare to be captivated by thrilling experiences that will leave you with cherished memories and a renewed outlook for life. Let us be your guide to extraordinary moments like no other!",
      },

    ]
}

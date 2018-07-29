import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animes = [
      { id: 11, name: 'Angeal Beats', rating: 75},
      { id: 12, name: 'My Youth Romantic Comedy Is Wrong, As I Expected', rating: 85 },
      { id: 13, name: 'HYOUKA', rating: 82 },
      { id: 14, name: 'NEET TEEN STORY', rating: 60},
      { id: 15, name: 'Dragon Ball', rating: 70},
      { id: 16, name: 'NEET TEEN STORY', rating: 60}
    ];
    return {animes};
  }
}

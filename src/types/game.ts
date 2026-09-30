export interface GameID {
  id: string;
  gameName: string;
  shortDescription: string;
  price: number;
  status: 'Available' | 'Sold Out';
  imageUrl: string;
  code: string;
}

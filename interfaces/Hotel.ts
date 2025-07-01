import { RoomType } from "./Room";

export interface HotelType {
  id: string;
  name: string;
  description?: string;
  location: string;
  address: string;
  rating: number;
  photos: string[];
  pricePerNight: number;
  createdAt: Date;
  updatedAt: Date;
  rooms: RoomType[];
}

export interface RoomType {
  id: string;
  hotelId: string;
    hotel: {
        id: string;
        name: string;
    };
    type: string;
    price: number;
    amenities: string[];
    photos: string[];
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
}
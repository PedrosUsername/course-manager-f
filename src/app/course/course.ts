export class Course {
  id!: number;
  name!: string;
  imageUrl!: string;
  price!: number;
  code!: string;
  duration!: number;
  rating!: number;
  description: string | undefined | null;
  releaseDate!: string;
}

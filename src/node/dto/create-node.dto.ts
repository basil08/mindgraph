import { Link } from 'src/schemas/link.schema';

export class CreateNodeDto {
  title: string;
  text: string;
  images: string[];
  tags: string[];
  links: Link[];
  type: number;
  nodes: Node[];
}
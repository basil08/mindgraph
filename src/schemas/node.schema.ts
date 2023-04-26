import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Link } from './link.schema';

@Schema()
export class Node {
  @Prop({ required: false })
  title: string;

  @Prop({ required: true, default: '' })
  text: string;

  @Prop({ type: [String], required: true })
  images: string[];

  @Prop({ type: [String], required: true })
  tags: string;

  @Prop({ type: [mongoose.Types.ObjectId], required: true })
  links: Link[];

  @Prop({ required: false, default: 1 })
  type: number;

  @Prop({ required: false, default: [] })
  nodes: Node[];

  @Prop({ required: true, default: Date.now() })
  created: Date;

  @Prop({ required: false, default: false })
  lastEdited: Date;

}

export type NodeDocument = Node & Document;
export const NodeSchema = SchemaFactory.createForClass(Node);

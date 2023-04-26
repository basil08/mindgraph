import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateNodeDto } from './dto/create-node.dto';
import { UpdateNodeDto } from './dto/update-node.dto';
import { Node, NodeDocument } from 'src/schemas/node.schema';

@Injectable()
export class NodeService {
  constructor(
    @InjectModel(Node.name)
    private nodeModel: Model<NodeDocument>,
  ) {}

  create(createNodeDto: CreateNodeDto) {
    const newNode = new this.nodeModel(createNodeDto);
    return newNode.save();
  }

  async findAll() {
    return await this.nodeModel.find();
  }

  async findOne(id: string) {
    return await this.nodeModel.findById(id);
  }

  async update(id: string, updateNodeDto: UpdateNodeDto) {
    return await this.nodeModel.findByIdAndUpdate(id, updateNodeDto);
  }

  async remove(id: number) {
    return await this.nodeModel.findByIdAndRemove(id);
  }
}

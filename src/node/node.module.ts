import { Module } from '@nestjs/common';
import { NodeService } from './node.service';
import { NodeController } from './node.controller';
import { MongooseModule } from '@nestjs/mongoose';

import { Node, NodeSchema } from '../schemas/node.schema';
import { Link, LinkSchema } from '../schemas/link.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Node.name, schema: NodeSchema },
      { name: Link.name, schema: LinkSchema },
    ]),
  ],
  controllers: [NodeController],
  providers: [NodeService],
})
export class NodeModule {}

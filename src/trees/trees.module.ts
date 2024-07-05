// src/trees/trees.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreesService } from './trees.service';
import { TreesController } from './trees.controller';
import { Tree, TreeSchema } from './schemas/tree.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Tree.name, schema: TreeSchema }])],
  providers: [TreesService],
  controllers: [TreesController],
})
export class TreesModule {}

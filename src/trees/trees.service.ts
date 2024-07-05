// src/trees/trees.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tree } from './schemas/tree.schema';

@Injectable()
export class TreesService {
  constructor(@InjectModel(Tree.name) private treeModel: Model<Tree>) {}

  async saveTree(username: string, treeData: string): Promise<Tree> {
    const existingTree = await this.treeModel.findOne({ username }).exec();
    if (existingTree) {
      existingTree.treeData = treeData;
      return existingTree.save();
    }
    const newTree = new this.treeModel({ username, treeData });
    return newTree.save();
  }

  async getTree(username: string): Promise<Tree> {
    return this.treeModel.findOne({ username }).exec();
  }
}

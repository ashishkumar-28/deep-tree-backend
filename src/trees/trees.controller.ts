// src/trees/trees.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TreesService } from './trees.service';

@Controller('trees')
export class TreesController {
  constructor(private readonly treesService: TreesService) {}

  @Post()
  async saveTree(@Body('username') username: string, @Body('treeData') treeData: string) {
    return this.treesService.saveTree(username, treeData);
  }

  @Get(':username')
  async getTree(@Param('username') username: string) {
    return this.treesService.getTree(username);
  }
}

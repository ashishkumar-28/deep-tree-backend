// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TreesModule } from './trees/trees.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/deep_tree_db'), // MongoDB connection string
    TreesModule,
    UsersModule,
  ],
})
export class AppModule {}
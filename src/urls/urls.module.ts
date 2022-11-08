import { Module } from '@nestjs/common';
import { UrlsService } from './urls.service';
import { UrlsController } from './urls.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Urls, urlSchema } from 'src/schema/urls.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Urls.name, schema: urlSchema }])
  ],
  controllers: [UrlsController],
  providers: [UrlsService]
})
export class UrlsModule {}

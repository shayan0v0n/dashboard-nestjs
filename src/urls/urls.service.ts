import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Urls, UrlsDocument } from 'src/schema/urls.schema';
import { CreateUrlDto, UpdateUrlDto } from './urls.dto';

@Injectable()
export class UrlsService {
  constructor(
    @InjectModel(Urls.name)
    private urls: Model<UrlsDocument>
  ){}

  create(createUrlDto: CreateUrlDto) {
    const selectClass = this.urls
    const createdUrl = new selectClass(createUrlDto)
    createdUrl.save()
    return createdUrl
  }

  async findAll() {
    const urls = await this.urls.find({})
    return urls
  }

  async findOne(id: string) {
    const url = await this.urls.findById(id)
    return url
  }

  async update(id: string, updateUrlDto: UpdateUrlDto) {
    const updatedUrl = await this.urls.findByIdAndUpdate(id, updateUrlDto)
    return updatedUrl
  }
  
  async remove(id: string) {
    const updatedUrl = await this.urls.findByIdAndDelete(id)
    return updatedUrl
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NoteList, noteListDocument } from 'src/schema/notesList.schema';
import { CreateNoteDto, UpdateNoteDto } from './notes.dto';
@Injectable()
export class NotesService {
  constructor(
    @InjectModel(NoteList.name)
    private noteList: Model<noteListDocument>
  ) {}

  create(createNoteDto: CreateNoteDto) {
    const selectClass = this.noteList
    const createdNote = new selectClass(createNoteDto)
    createdNote.save()
    return createdNote
  }

  async findAll() {
    const notesList = await this.noteList.find({})
    return notesList
  }
  
  async findOne(id: string) {
    const note = await this.noteList.findById(id)
    return note
  }

  async update(id: string, updateUrlDto: UpdateNoteDto) {
    const updatedNote = await this.noteList.findByIdAndUpdate(id, updateUrlDto)
    return updatedNote
  }
  
  async remove(id: string) {
    const deletedNote = await this.noteList.findByIdAndDelete(id)
    return deletedNote
  }
}

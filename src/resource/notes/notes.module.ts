import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { NoteList, noteListSchema } from 'src/schema/notesList.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: NoteList.name, schema: noteListSchema }])
  ],
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}

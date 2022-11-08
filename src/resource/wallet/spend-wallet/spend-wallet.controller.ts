import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateSpendWalletDto, UpdateSpendWalletDto } from './spend-wallet.dto';
import { SpendWalletService } from './spend-wallet.service';

@Controller('api/spendWallet')
export class SpendWalletController {
  constructor(private readonly spendWalletService: SpendWalletService) {}

  @Post()
  create(@Body() createSpendWalletDto: CreateSpendWalletDto) {
    return this.spendWalletService.create(createSpendWalletDto);
  }

  @Get()
  findAll() {
    return this.spendWalletService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spendWalletService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpendWalletDto: UpdateSpendWalletDto) {
    return this.spendWalletService.update(id, updateSpendWalletDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spendWalletService.remove(id);
  }
}

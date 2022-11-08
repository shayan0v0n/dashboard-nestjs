import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncomeWalletService } from './income-wallet.service';
import { CreateIncomeWalletDto, UpdateIncomeWalletDto } from './income-wallet.dto';

@Controller('api/incomeWallet')
export class IncomeWalletController {
  constructor(private readonly incomeWalletService: IncomeWalletService) {}

  @Post()
  create(@Body() createUrlDto: CreateIncomeWalletDto) {
    return this.incomeWalletService.create(createUrlDto);
  }

  @Get()
  findAll() {
    return this.incomeWalletService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incomeWalletService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUrlDto: UpdateIncomeWalletDto) {
    return this.incomeWalletService.update(id, updateUrlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.incomeWalletService.remove(id);
  }
}

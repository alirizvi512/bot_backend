import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import Binance from 'binance-api-node'

@Injectable()
export class SignalsService {
  private binanceClient;
  private symbols: string[] = []
  private readonly logger = new Logger(SignalsService.name);
  constructor() {
    this.binanceClient = Binance();
    this.getSymbols();
  }

  @Cron('5 * * * * *')
  async handleCron() {
    this.logger.debug('Called when the current second is 45');
  }

  async getSymbols() {
    const exchangeInfoObj = await this.binanceClient.exchangeInfo();
    const filteredSymbols = exchangeInfoObj.symbols.filter(x => x.symbol.includes('USDT'));
    this.symbols = filteredSymbols.map((obj) => { return obj.symbol });
    console.log(this.symbols.length, this.symbols);
  }
}
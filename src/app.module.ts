import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SummarizeController } from './summarize/summarize.controller';
import { HuggingfaceService } from './huggingface/huggingface.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [SummarizeController],
  providers: [HuggingfaceService],
})
export class AppModule {}

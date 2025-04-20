import { Controller, Post, Body } from '@nestjs/common';
import { HuggingfaceService } from '../huggingface/huggingface.service';

@Controller('summarize')
export class SummarizeController {
  constructor(private readonly huggingfaceService: HuggingfaceService) {}

  @Post()
  async summarize(@Body('text') text: string): Promise<{ summary: string }> {
    const summary = await this.huggingfaceService.summarizeText(text);
    return { summary };
  }
}

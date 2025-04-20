import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HuggingfaceService {
  constructor(private configService: ConfigService) {}

  async summarizeText(text: string): Promise<string> {
    const hfToken = this.configService.get<string>('HF_API_TOKEN');

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/facebook/bart-large-cnn',
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${hfToken}`,
        },
      },
    );

    const summary = response.data[0]?.summary_text;
    return summary || 'Summary not available';
  }
}

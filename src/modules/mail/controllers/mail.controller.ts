import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { NestResponseBuilder } from 'src/core/http/nest-response.builder';
import { CreateMailDto } from '../dto/create-mail.dto';
import { CreateMailService } from '../services/create-mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly createMailService: CreateMailService) { }

  @Post()
  async createMail(@Body() data: CreateMailDto[]) {
    try {
      const result = await this.createMailService.create(data)
      if (result) {
        return new NestResponseBuilder()
          .withStatus(HttpStatus.OK)
          .withBody({
            statusCode: HttpStatus.OK,
            message: "Emails successfully sent"
          })
          .build();
      }
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody({
          message:
            "Failed to send email"
        })
        .build();
    } catch (error) {
      return new NestResponseBuilder()
        .withStatus(HttpStatus.BAD_REQUEST)
        .withBody(error)
        .build();
    }
  }
}
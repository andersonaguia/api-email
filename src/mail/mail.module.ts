import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { CreateMailService } from './services/create-mail.service';
import { SendMailService } from './services/send-mail.service';
import { MailController } from './controllers/mail.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
            isGlobal: true
        }),
        MailerModule.forRoot({
            transport: `smtps://${process.env.USER_EMAIL}:${process.env.PASSWORD}@${process.env.SERVER_EMAIL}`,
            defaults: {
                from: `"Solar Tambaú" <${process.env.USER_EMAIL}>`,
            },
            preview: false,
            template: {
                dir: process.cwd() + '/template/',
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
    ],
    providers: [
        CreateMailService,
        SendMailService
    ],
    controllers: [MailController]
})
export class EmailModule { }
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class SendMailService {
    constructor(private readonly mailerService: MailerService) { }

    public async sendEmail(emailBody): Promise<boolean> {
        const { body } = emailBody;
        const { addresses, subject, text } = body;

        const mailSent = await this.mailerService
            .sendMail({
                to: addresses,
                subject: subject,
                text: text,
                html: `${text}`,
            })
            .then((res) => {
                return true;
            })
            .catch((err) => {
                console.log(err)
                return false;
            });
        return mailSent;
    }
}
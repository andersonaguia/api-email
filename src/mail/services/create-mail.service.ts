import { Injectable } from '@nestjs/common';
import { CreateMailDto } from '../dto/create-mail.dto';
import { SendMailService } from './send-mail.service';

@Injectable()
export class CreateMailService {

    constructor(
        private sendEmailService: SendMailService,
    ) { }

    async create(mailData: CreateMailDto[]): Promise<any> {
        const arrayLength = mailData.length;
        return new Promise(async (resolve, reject) => {
            try {
                let aux:number = 0;

                mailData.map(async (data, i) => {
                    const body = {
                        body: {
                            addresses: [data.addresses],
                            subject: data.subject,
                            text: data.text
                        }
                    }
                    const mailToSent = await this.sendEmailService.sendEmail(body);

                    if (!mailToSent) {
                        aux = 0;
                        resolve(false);
                    }else{
                        aux = i + 1;
                    }
                    if(aux === arrayLength){
                        resolve(true);
                    }
                })                
            } catch (error: any) {
                reject(error)
            }
        })
    }
}
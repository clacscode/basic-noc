import { CheckServices } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {
    public static start() {
        console.log('Server started...');

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url: string = 'https://www.google.com';
                new CheckServices(
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(url);
            }
        );

    }
}



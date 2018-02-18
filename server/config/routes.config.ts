import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as fs from 'fs';
export class RoutesConf{
  static init(application: express.Application, mediaBaseDir: string){
    let mediaDirectory = mediaBaseDir;
    let mediaTempDirectory = path.join(mediaDirectory, 'kittens');
    fs.existsSync(mediaDirectory) || fs.mkdirSync(mediaDirectory);
    fs.existsSync(mediaTempDirectory) || fs.mkdirSync(mediaTempDirectory);
    application.use('/api',express.static('undefined/kittens'));
    application.use(bodyParser.urlencoded({ extended: false, limit: 10000000 }));
    application.use(bodyParser.json({ limit: '1000mb' }));

  }
}

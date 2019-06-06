import { Injectable } from '@angular/core';

import * as signalR from '@aspnet/signalr';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

   api = 'localhost';
  constructor() { }

  connection(): void {
    const connection = new signalR.HubConnectionBuilder()
      .configureLogging(signalR.LogLevel.Information)
      .withUrl(this.api)
      .build();

    connection.start().then(() => {
      console.log('Connected!');
    }).catch( (err) => {
      return console.error(err.toString());
    });

    connection.on('BroadcastMessage', (type: string, payload: string) => {
    });
  }
}

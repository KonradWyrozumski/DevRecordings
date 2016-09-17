import { inject } from 'aurelia-framework';
import { NotificationState } from './notification-state';

@inject(NotificationState)

export class MyList {
    notificationState: NotificationState;
    
    address = '';

    constructor(notificationState) {
        this.notificationState = notificationState;
        this.notificationState.message = 'some message';
    }

    addNewRecording() {
        this.address = '';
    }
}
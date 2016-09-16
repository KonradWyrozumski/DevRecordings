//import {computedFrom} from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { NotificationState } from './notification-state';

@inject(NotificationState)

export class MyList {
    notificationState: NotificationState;
    constructor(notificationState) {
        this.notificationState = notificationState;
        this.notificationState.message = 'some message';
    }
}
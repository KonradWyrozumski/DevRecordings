import { inject } from "aurelia-framework";
import { NotificationState } from "./notification-state";

@inject(NotificationState)
export class Notification {

    notificationState: NotificationState;

    constructor(notificationState) {
        this.notificationState = notificationState;
    }
}
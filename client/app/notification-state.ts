import * as toastr from "toastr";

export class NotificationState {
    message = "";

    notify(type, message) {
        toastr[type](message);
    }
}
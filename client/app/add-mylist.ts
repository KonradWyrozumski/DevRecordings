import { inject } from "aurelia-framework";
import { AuthService } from "aurelia-auth";
import { NotificationState } from "./notification-state";
import { RecordingsApi } from "./services/RecordingsApi";
import { EventAggregator } from "aurelia-event-aggregator";
import * as $ from "jquery";
import { Spinner } from "./spinner";

@inject(NotificationState, RecordingsApi, AuthService, EventAggregator, Spinner)
export class AddMyList {
    private recordingsApi: RecordingsApi;
    private authService: AuthService;
    private notificationState: NotificationState;
    private eventAggregator: EventAggregator;
    private address: string;
    private spinner: Spinner;

    constructor(notificationState: NotificationState, recordingsApi: RecordingsApi, authService: AuthService, eventAggregator: EventAggregator, spinner: Spinner) {
        this.notificationState = notificationState;
        this.authService = authService;
        this.recordingsApi = recordingsApi;
        this.eventAggregator = eventAggregator;
        this.spinner = spinner;
    }

    activate(address) {
        this.address = address;
    }

    addNewRecording() {
        if (!this.authService.isAuthenticated()) {
            this.notificationState.notify("error", "You need to be authenticated to add.");

            return;
        }
        this.spinner.on();
        this.recordingsApi.execute("", { address: this.address },
            response => {
                if (response.ok) {
                    this.notificationState.notify("success", "Added");
                }
                else {
                    this.notificationState.notify("error", "Something went wrong");
                }
            },
            result => {
                this.address = "";
                this.eventAggregator.publish("myListItemAdded", result.data);
                this.spinner.off();
            });
    }
}
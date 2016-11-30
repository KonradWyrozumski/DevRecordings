import { inject } from "aurelia-framework";
import { AuthService } from "aurelia-auth";
import { NotificationState } from "./notification-state";
import { RecordingsApi } from "./services/RecordingsApi";
import { EventAggregator } from "aurelia-event-aggregator";

@inject(NotificationState, RecordingsApi, AuthService, EventAggregator)
export class AddMyList {
    private recordingsApi: RecordingsApi;
    private authService: AuthService;
    private notificationState: NotificationState;
    private eventAggregator: EventAggregator;
    private address: string;

    constructor(notificationState: NotificationState, recordingsApi: RecordingsApi, authService: AuthService, eventAggregator: EventAggregator) {
        this.notificationState = notificationState;
        this.authService = authService;
        this.recordingsApi = recordingsApi;
        this.eventAggregator = eventAggregator;
    }

    activate(address) {
        this.address = address;
    }

    addNewRecording() {
        if (!this.authService.isAuthenticated()) {
            this.notificationState.notify("error", "You need to be authenticated to add.");

            return;
        }
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
            });
    }
}
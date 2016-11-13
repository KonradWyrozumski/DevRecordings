import { inject } from 'aurelia-framework';
import { AuthService } from 'aurelia-auth';
import { NotificationState } from './notification-state';
import { PostService } from './services/PostService';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(NotificationState, PostService, AuthService, EventAggregator)
export class AddMyList {
    private postService: PostService;
    private authService: AuthService;
    private notificationState: NotificationState;
    private eventAggregator: EventAggregator;
    private address: string;

    constructor(notificationState: NotificationState, postService: PostService, authService: AuthService, eventAggregator: EventAggregator) {
        this.notificationState = notificationState;
        this.authService = authService;
        this.postService = postService;
        this.eventAggregator = eventAggregator;
    }

    activate(address) {
        this.address = address;
    }

    addNewRecording() {
        if (!this.authService.isAuthenticated()) {
            this.notificationState.notify('error', 'You need to be authenticated to add.');

            return;
        }

        this.postService.postNewAddress(this.address)
            .then(response => {
                if (response.ok) {
                    this.notificationState.notify('success', 'Added');
                }
                else {
                    this.notificationState.notify('error', 'Something went wrong');
                }
                return response.json()
            })
            .then(data => {
                this.address = '';
                this.eventAggregator.publish('myListItemAdded', data.model)
            });
    }
}
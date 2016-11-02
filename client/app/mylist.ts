import { inject } from 'aurelia-framework';
import { NotificationState } from './notification-state';
import { PostService } from './services/PostService';
import { FetchService } from './services/FetchService';
import { AuthService } from 'aurelia-auth';

@inject(NotificationState, PostService, FetchService, AuthService)
export class MyList {
    private notificationState: NotificationState;
    private postService: PostService;
    private fetchService: FetchService;
    private authService: AuthService;

    address = '';
    recordings = [];

    constructor(notificationState: NotificationState, postService: PostService, fetchService: FetchService, authService: AuthService) {
        this.notificationState = notificationState;
        this.postService = postService;
        this.fetchService = fetchService;
        this.authService = authService;
        this.getAllRecordings();
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
                    this.updateRecordings();
                }
                else {
                    this.notificationState.notify('error', 'Something went wrong');
                }
            });
    }

    getAllRecordings() {
        this.fetchService.getAllRecordings()
            .then(response => response.json())
            .then(data => {
                this.recordings = data;
            });
    }

    updateRecordings() {
        this.recordings.push({ address: this.address });
        this.address = '';
    }
}
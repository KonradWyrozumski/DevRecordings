import { inject } from 'aurelia-framework';
import { NotificationState } from './notification-state';
import { PostService } from './services/PostService';
import { FetchService } from './services/FetchService';

@inject(NotificationState, PostService, FetchService)
export class MyList {
    private notificationState: NotificationState;
    private postService: PostService;
    private fetchService: FetchService;

    address = '';
    recordings = [];

    constructor(notificationState: NotificationState, postService: PostService, fetchService: FetchService) {
        this.notificationState = notificationState;
        this.postService = postService;
        this.fetchService = fetchService;
        this.getAllRecordings();
    }

    addNewRecording() {
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
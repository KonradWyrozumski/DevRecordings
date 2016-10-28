import { inject } from 'aurelia-framework';
import { NotificationState } from './notification-state';
import { PostService } from './services/PostService';

@inject(NotificationState, PostService)
export class MyList {
    private notificationState: NotificationState;
    private postService: PostService;

    address = '';

    constructor(notificationState: NotificationState, postService: PostService) {
        this.notificationState = notificationState;
        this.postService = postService;
    }

    addNewRecording() {
        this.postService.postNewAddress(this.address)
            .then(response => {
                if(response.ok) {
                    this.notificationState.notify('success', 'Added');
                }
                else {
                    this.notificationState.notify('error', 'Something went wrong');
                }
            });
    }
}
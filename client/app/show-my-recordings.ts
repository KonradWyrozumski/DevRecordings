import { inject } from 'aurelia-framework';
import { RecordingsApi } from './services/RecordingsApi';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Recordings } from './Recordings';
import * as $ from 'jquery';
import { AuthService } from 'aurelia-auth';

@inject(RecordingsApi, EventAggregator, AuthService)
export class ShowMyRecordings extends Recordings {
    private eventAggregator: EventAggregator;
    private authService: AuthService;
    private recordingsApi: RecordingsApi;

    constructor(recordingsApi: RecordingsApi, eventAggregator: EventAggregator, authService: AuthService) {
        super();
        this.eventAggregator = eventAggregator;
        this.authService = authService;
        this.recordingsApi = recordingsApi;
        this.eventAggregator.subscribe('myListItemAdded', (model) => { this.updateRecordings(model) });
        this.getRecordings();
    }

    getRecordings() {
        this.authService.getMe().then(data => {
            this.recordingsApi.query('', result => { this.recordings = result }, { 'createdById': data._id })
        });
    }

    updateRecordings(model) {
        this.recordings.push(model);
    }
}
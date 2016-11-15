import { inject } from 'aurelia-framework';
import { RecordingsApi } from './services/RecordingsApi';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Recordings } from './Recordings';
import * as $ from 'jquery';

@inject(RecordingsApi, EventAggregator)
export class ShowAllRecordings extends Recordings {
    private eventAggregator: EventAggregator;
    private recordingsApi: RecordingsApi;

    constructor(recordingsApi: RecordingsApi, eventAggregator: EventAggregator) {
        super();
        this.eventAggregator = eventAggregator;
        this.recordingsApi = recordingsApi;
        this.eventAggregator.subscribe('myListItemAdded', (model) => { this.updateRecordings(model) });
        this.getRecordings();
    }

    getRecordings() {
        this.recordingsApi.query('', result => { this.recordings = result }, null);
    }

    updateRecordings(model) {
        console.log(model);
        this.recordings.push(model);
    }
}
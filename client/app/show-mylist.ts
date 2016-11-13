import { inject } from 'aurelia-framework';
import { FetchService } from './services/FetchService';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as $ from 'jquery';

@inject(FetchService, EventAggregator)
export class ShowMyList {
    private fetchService: FetchService;
    private eventAggregator: EventAggregator;

    recordings = [];

    constructor(fetchService: FetchService, eventAggregator: EventAggregator) {
        this.fetchService = fetchService;
        this.eventAggregator = eventAggregator;
        this.getAllRecordings();

        this.eventAggregator.subscribe('myListItemAdded', (model) => { this.updateRecordings(model) });
    }

    getAllRecordings() {
        this.fetchService.getAllRecordings()
            .then(response => response.json())
            .then(data => {
                this.recordings = data;
            });
    }

    updateRecordings(model) {
        this.recordings.push(model);
    }

    collapseBox() {
        var ibox = $(event.srcElement).closest('div.ibox');
        var iboxHeader = ibox.find('div.ibox-header');
        var iboxWidth = ibox.width();
        var button = $(event.srcElement).find('i');
        var content = ibox.find('div.ibox-content');
        content.slideToggle(200, function () {
            ibox.width(iboxWidth);
        });
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
    }
}
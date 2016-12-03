import * as $ from "jquery";

export abstract class Recordings {
    recordings = [];

    get groupedRecordings() {
        let result = [];
        let itemsPerRow = 4;
        let group = [];
        for (let index = 0, length = this.recordings.length; index < length; index++) {
            if (index % itemsPerRow === 0) {
                group = [];
                result.push(group);
            }

            group.push(this.recordings[index]);
        }

        return result;
    }

    collapseBox() {
        let ibox = $(event.srcElement).closest("div.ibox");
        let iboxHeader = ibox.find("div.ibox-header");
        let iboxWidth = ibox.width();
        let button = $(event.srcElement).find("i");
        let content = ibox.find("div.ibox-content");
        content.slideToggle(200, function () {
            ibox.width(iboxWidth);
        });
        button.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down");
        ibox.toggleClass("").toggleClass("border-bottom");
    }
}

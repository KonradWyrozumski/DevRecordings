import * as $ from 'jquery';

export abstract class Recordings {
    recordings = [];

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

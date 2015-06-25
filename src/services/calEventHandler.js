dynamicCal.factory('calEventHandler', ['$rootScope', function ($rootScope) {
    return {
        event: null,
        destDayElem: null,
        srcDayElem: null,
        eventElem: null,
        isChanging: false,
        originElem: null,
        originStart: null,
        originEnd: null,

        dateChange: function (event, eventElem, srcElem, dstElem) {
            console.log("DATE CHANGE!");
            this.event = event;
            this.srcDayElem = srcElem;
            this.eventElem = eventElem;
            this.destDayElem = dstElem;
            $rootScope.$broadcast("CAL-DATE-CHANGE");
        },
        start: function (event, elem) {
            console.log("START!");
            this.originElem = elem;
            this.originStart = new Date(event.start);
            this.originEnd = new Date(event.end);
            this.event = event;
        },
        done: function () {
            console.log("DONE!");
            this.event = null;
            this.destDayElem = null;
            this.srcDayElem = null;
            this.eventElem = null;
            this.isChanging = false;
        }
    }
}])

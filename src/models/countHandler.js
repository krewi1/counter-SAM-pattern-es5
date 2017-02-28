(function (p) {
    ultramega.CountHandler = function () {
    };

    p = ultramega.CountHandler.prototype;

    p.handle = function (updateModelAction, data) {
        if (updateModelAction.type === "UPDATECOUNTER") {
            if (data.counter.count !== updateModelAction.payload.count) {
                data.counter.count = updateModelAction.payload.count;
                data.counter.changed = true;
            } else {
                data.counter.changed = false;
            }
        } else {
            data.counter.changed = false;
        }
        return data
    }
})();
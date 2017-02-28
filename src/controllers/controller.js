(function (p) {
    ultramega.Actions = function (present) {
    };

    // tady se muze dit async
    p = ultramega.Actions.prototype;
    p.init = function(present){
        this.present = present;
    };

    p.changeCounter = function (data) {
        this.present({
            type: "UPDATECOUNTER",
            payload: {
                count: data
            }
        });
    };

})();
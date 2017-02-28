(function (p) {
    ultramega.State = function () {
    };

    p = ultramega.State.prototype;

    p.init = function(view){
        this.view = view;
    };

    p.render = function (model) {
        var representation = this.view.representation(model);
        this.view.display(representation);
    }
})();
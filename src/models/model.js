(function (p) {
    ultramega.Model = function () {
        this.state = {};
        this.data = {
            counter:{}
        };
        this.actionListeners = []
    };
    p = ultramega.Model.prototype;

    p.init = function(state){
        this.state = state;
        this.actionListeners.push(new ultramega.CountHandler());
    };

    p.present = function (updateModelAction) {
        this.data = updateData.call(this, updateModelAction, this.data);
        this.state.render(this.data)
    };

    function updateData(updateModelAction, data) {
        var dataClone = Object.assign({}, data);
        this.actionListeners.forEach(function (actionListener) {
            dataClone = actionListener.handle(updateModelAction, dataClone);
        })
        return dataClone;
    }
})();
(function (p) {
    ultramega.View = function () {
        this.actions = {};
        this.element = {};
        this.theme = ultramega.theme;
    };

    p = ultramega.View.prototype;


    p.init = function (actions, element) {
        this.actions = actions;
        this.element = element;
    };

    p.renderButtons = function (data) {
        var increment = data + 1;
        var decrement = data - 1;
        var buttons = [];
        buttons.push(this.theme.button("increment", this.actions.changeCounter.bind(this.actions, increment)));
        buttons.push(this.theme.button("decrement", this.actions.changeCounter.bind(this.actions, decrement)));
        return buttons;
    };

    p.representation = function (model) {
        return {
            counter: model.counter.changed ? this.theme.counter(model.counter.count) : null,
            buttons: model.counter.changed ? this.renderButtons(model.counter.count) : null
        }
    };

    p.display = function (representation) {
        if (representation.counter) {
            var element = this.element
            element.innerHTML = '';
            element.appendChild(representation.counter);
            representation.buttons.forEach(function (button) {
                element.appendChild(button);
            });
        }
    }
})();
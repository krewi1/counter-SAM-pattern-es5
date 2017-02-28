(function () {
    ultramega.theme = function () {
    };
    ultramega.theme.button = function (name, action) {
        var button = document.createElement("button");
        button.textContent = name;
        button.onclick = action;
        return button;
    };

    ultramega.theme.counter = function (data) {
        var span = document.createElement("span");
        span.textContent = data;
        return span;
    }
})();
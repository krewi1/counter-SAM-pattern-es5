
(function () {
    var model = new ultramega.Model(),
        state = new ultramega.State(),
        view = new ultramega.View(),
        actions = new ultramega.Actions();

    state.init(view);
    model.init(state);
    actions.init(model.present.bind(model));
    view.init(actions, document.querySelector("#app"));

    model.present({
        type: "UPDATECOUNTER",
        payload: {
            count: 0
        }
    })
})();
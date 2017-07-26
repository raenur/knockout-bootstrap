var options = [
    "option 1",
    "option 2",
    "option 3",
    "option 4"
];

function FormViewModel() {
    this.select1 = ko.observable("option 2");
    this.options = ko.observableArray(options);
}

ko.applyBindings(FormViewModel);
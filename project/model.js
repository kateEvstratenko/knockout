viewModel.total = ko.computed(function () {
    var result = 0;
    var array = viewModel.dishes;

    for (var i = 0; i < array.length; i++) {
       var dish = array[i];
       result += Number(dish.isChecked() ? dish.price()*dish.count() : 0);
    }
    return result;
}, viewModel);

ko.bindingHandlers.isSelected = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();

        var valueUnwrapped = ko.unwrap(value);

        if (valueUnwrapped == true)
            $(element).addClass('selectedItem');
        else {
            $(element).removeClass('selectedItem');
        }
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();

        var valueUnwrapped = ko.unwrap(value);

        if (valueUnwrapped == true)
            $(element).addClass('selectedItem');
        else {
            $(element).removeClass('selectedItem');
        }
    }
};

ko.applyBindings(viewModel);

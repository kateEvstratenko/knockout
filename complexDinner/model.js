(function () {
    'use strict';

    viewModel.total = ko.computed(function () {
    var result = 0;
    var array = viewModel.dishes;

    for (var i = 0; i < array.length; i++) {
       var dish = array[i];
       result += Number(dish.isChecked() ? dish.price()*dish.count() : 0);
    }
    return result;
}, viewModel);


var uncheckAllDishes = function (viewModel) {
    var array = viewModel.dishes;

    for (var i = 0; i < array.length; i++) {
        var dish = array[i];
        dish.isChecked(false);
    }
}

viewModel.confirmation = ko.observable(function () {
    if (viewModel.total() > 0) {
        $('#basic-modal-content').modal({
            containerCss: {
                height: 150,
                width: 250
            },
            onClose: function() {
                uncheckAllDishes(viewModel);
                $.modal.close();
            }
        });
    }
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

ko.bindingHandlers.isVisible = {
    init: function (element, valueAccessor) {
        var value = valueAccessor();

        var valueUnwrapped = ko.unwrap(value);

        if (valueUnwrapped == true)
            $(element).css({
                'visibility': 'visible'
            });
        else {
            $(element).css({
                'visibility': 'hidden'
            });
        }
    },
    update: function (element, valueAccessor) {
        var value = valueAccessor();

        var valueUnwrapped = ko.unwrap(value);

        if (valueUnwrapped == true)
            $(element).css({
                'visibility': 'visible'
            });
        else {
            $(element).css({
                'visibility': 'hidden'
            });
        }
    }
};

ko.applyBindings(viewModel);
})();

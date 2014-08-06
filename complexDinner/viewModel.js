var dishes = [new Dish('pizza', '5', 'img/VealChop.jpg'), new Dish('Veal chop', '10', 'img/VealChop.jpg')];

var viewModel = {
    dishes: (function(){
        var extendedModel = [];
        for (var i = 0; i < dishes.length; i++)
        {
            extendedModel.push({
                dishName: dishes[i].dishName,
                price: ko.observable(dishes[i].price),
                photo: dishes[i].photo,
                isChecked: ko.observable(false),
                count: ko.observable(1)
            });
        }
        return extendedModel;
    })()
};

/**
 * Created by Student 1 on 8/5/2014.
 */

var model = [new Dish('pizza', '5', 'images/VealChop.jpg'), new Dish('Veal chop', '10', 'images/VealChop.jpg')];

var viewModel = {
    dishes: (function(){
        var extendedModel = [];
        for(var i = 0; i < model.length; i++)
        {
            extendedModel.push({
                dishName: model[i].dishName,
                price: ko.observable(model[i].price),
                photo: model[i].photo,
                isChecked: ko.observable(false),
                count: ko.observable(1)
            });
        }
        return extendedModel;
    })()
};

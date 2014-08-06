var dishes = [
    new Dish('dish1', '5', 'img/VealChop.jpg'),
    new Dish('dish2', '21', 'img/VealChop.jpg'),
    new Dish('dish3', '14', 'img/VealChop.jpg'),
    new Dish('dish4', '2', 'img/VealChop.jpg'),
    new Dish('dish5', '19', 'img/VealChop.jpg'),
    new Dish('dish6', '45', 'img/VealChop.jpg'),
    new Dish('dish7', '51', 'img/VealChop.jpg'),
    new Dish('dish8', '10', 'img/VealChop.jpg'),
    new Dish('dish9', '54', 'img/VealChop.jpg'),
    new Dish('dish10', '33', 'img/VealChop.jpg'),
    new Dish('dish11', '24', 'img/VealChop.jpg'),
    new Dish('dish12', '17', 'img/VealChop.jpg'),
    new Dish('dish13', '27', 'img/VealChop.jpg'),
    new Dish('dish14', '22', 'img/VealChop.jpg'),
    new Dish('dish15', '50', 'img/VealChop.jpg')
];

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

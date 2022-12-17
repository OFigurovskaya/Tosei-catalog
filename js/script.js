ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [43.09819857451089, 131.9688485],
        zoom: 14
    });
}

var myPlacemark = new ymaps.Placemark([43.09819857451089,131.9688485], {}, {
    preset: 'islands#redIcon'
});


// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
     
     
     const elements = document.querySelectorAll('.select__elem');
        elements.forEach(function(element) {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        }); })
        console.log(choices);





        

   
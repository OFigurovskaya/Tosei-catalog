ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [43.09923508933172,131.97197355342897],
        zoom: 17
    });


var myPlacemark = new ymaps.Placemark([43.09923508933172,131.97197355342897], {}, {
    preset: 'islands#redIcon'
});


// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark);
  }   
     
     const elements = document.querySelectorAll('.select__elem');
        elements.forEach(function(element) {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        }); })
        console.log(choices);

        const elements1 = document.querySelector('.main-contacts__feedback__form-wrapper');
        elements1.forEach(function(element1) {
        const choices = new Choices(element1, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        }); })
        console.log(choices);





        

   
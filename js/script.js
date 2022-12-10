     const elements = document.querySelectorAll('.select__elem');
        elements.forEach(function(element) {
        const choices = new Choices(element, {
            searchEnabled: false,
            itemSelectText: '',
            shouldSort: false,
            position: 'bottom'
        }); })
        console.log(choices);



ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [43.09819857451089, 131.9688485],
                zoom: 14
            });
        }

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [43.09819857451089, 131.9688485] // координаты точки
            }
        });
        
        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myGeoObject);

        

   
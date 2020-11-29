ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Moscow',
            balloonContent: 'GEO'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/marker.png',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
            hintContent: 'BALL',
            balloonContent: 'GOAAAAL',
            iconContent: '12'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'images/i.webp',
            // Размеры метки.
            iconImageSize: [48, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        // Cоздаем геообъект с типом геометрии "прямоугольник".
    myGeoObject = new ymaps.GeoObject({
        // Геометрия = тип геометрии + координаты геообъекта.
        geometry: {
            // Тип геометрии - прямоугольник.
            type: 'Rectangle',
            // Координаты.
            coordinates: [
                [55.665, 37.66],
                [55.64, 37.53]
            ]
        },
        // Свойства.
        properties: {
            hintContent: 'Перетащи меня!',
            balloonContent: 'Прямоугольник 2'
        }
    }, {
        // Опции.
        // Объект можно перетаскивать.
        draggable: true,
        // Цвет и прозрачность заливки.
        fillColor: '#ffff0022',
        // Цвет и прозрачность границ.
        strokeColor: '#3caa3c88',
        // Ширина линии.
        strokeWidth: 7
    });
    // Создаем ломаную с помощью вспомогательного класса Polyline.
    var myPolyline = new ymaps.Polyline([
            // Указываем координаты вершин ломаной.
            [55.80, 37.50],
            [55.80, 37.40],
            [55.75, 37.45],
            [55.80, 37.50]
        ], {
            // Описываем свойства геообъекта.
            // Содержимое балуна.
            balloonContent: "Ломаная линия"
        }, {
            // Задаем опции геообъекта.
            // Отключаем кнопку закрытия балуна.
            balloonCloseButton: false,
            // Цвет линии.
            strokeColor: "#DEF106",
            // Ширина линии.
            strokeWidth: 4,
            // Коэффициент прозрачности.
            strokeOpacity: 0.5
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myGeoObject)
        .add(myPolyline)
        .add(myPlacemarkWithContent);
});
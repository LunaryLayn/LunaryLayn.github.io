function generarCarouselItems(rutasDeImagenes) {
    var resultado = '';

    // Iterar sobre el array de rutas de imágenes
    for (var i = 0; i < rutasDeImagenes.length; i++) {
        var claseActiva = i === 0 ? ' active' : '';  // Agregar 'active' solo al primer elemento

        // Construir el string para cada elemento del carousel
        resultado += '<div class="carousel-item' + claseActiva + '">\n';
        resultado += '  <img src="' + rutasDeImagenes[i] + '" class="d-block w-100" alt="Slide ' + (i + 1) + '">\n';
        resultado += '</div>\n';
    }

    return resultado;
}

$(document).ready(function () {
    var portfolioListEs = [
        {
            name: 'Padmi',
            category: 'Proyecto laboral - Padmi',
            images: ['img/portfolio/padmi/padmi1.jpg', 'img/portfolio/padmi/padmi2.jpg', 'img/portfolio/padmi/padmi3.jpg', 'img/portfolio/padmi/padmi4.jpg', 'img/portfolio/padmi/padmi5.jpg', 'img/portfolio/padmi/padmi6.jpg'],
            description: 'Padmi es una aplicación innovadora que ayuda a los jugadores de padel a llegar al siguiente nivel. A traves de un sistema de IA, la aplicación analiza los partidos de los usuarios, y les brinda información sobre sus puntos fuertes y debiles, y como mejorarlos. En este proyecto, he trabajado como líder del desarrollo.',
        },
        {
            name: 'Recipe Pro',
            category: 'Proyecto personal',
            images: ['img/portfolio/recipepro/recipepro1.jpg', 'img/portfolio/recipepro/recipepro2.jpg', 'img/portfolio/recipepro/recipepro3.jpg', 'img/portfolio/recipepro/recipepro4.jpg', 'img/portfolio/recipepro/recipepro5.jpg', 'img/portfolio/recipepro/recipepro6.jpg'],
            description: 'Aplicación Android desarrollada en Kotlin con Jetpack Compose para la gestion de recetas de cocina. Permite crear, editar, y eliminar recetas, importarlas (parse) desde paginas web que sigan las convenciones de scheme.org, compartirlas con otros usuarios en distintas redes sociales, y desde la propia aplicación, a traves de archivos con una extension propia. También cuenta con implementaciones de analíticas y de publicidad, la cual genera ingresos a traves de AdMob.',
            url: "https://play.google.com/store/apps/details?id=com.betteryou.recipepro"
        },
        {
            name: 'Filmic Pro',
            category: 'Proyecto laboral - Filmic Inc',
            images: ['img/portfolio/filmicpro/filmic1.jpg', 'img/portfolio/filmicpro/filmic2.jpg', 'img/portfolio/filmicpro/filmic3.jpg', 'img/portfolio/filmicpro/filmic4.jpg'],
            description: "Filmic Pro es una aplicacion de grabación de video profesional con mas de +1 millón de descargas en la Play Store, con una infinidad de funcionalidades y posibilidades de configuración. En este proyecto, he trabajado como uno de los desarrolladores, agregando nuevas features, solucionando bugs, migrando codigo, y tareas similares.",
            url: "https://play.google.com/store/apps/details?id=com.filmic.filmicpro"
        },
        {
            name: 'Blockfolio',
            category: 'Proyecto de Portfolio',
            images: ['img/portfolio/blockfolio/login.jpg', 'img/portfolio/blockfolio/register.jpg', 'img/portfolio/blockfolio/main1.jpg', 'img/portfolio/blockfolio/addstuff.jpg', 'img/portfolio/blockfolio/main2.jpg', 'img/portfolio/blockfolio/searchbar.jpg', 'img/portfolio/blockfolio/main3.jpg'],
            description: "Aplicación Android desarrollada en Kotlin como proyecto de portfolio para la gestión de una cartera de criptomonedas. La aplicación cuenta con funcionalidades como autenticación de usuarios con Firebase, obtención de datos de APIs con Retrofit de <a href=\"https://www.coingecko.com\">CoinGecko</a>, almacenamiento de datos en una base de datos local con Room, diseño responsivo con Compose, notificaciones, y más.",
            video: "https://www.youtube.com/embed/qy3IU5JCwYU"
        },
        
        {
            name: 'FirstLight',
            category: 'Proyecto laboral - Filmic Inc',
            images: ['img/portfolio/firstlight/firstlight1.jpg', 'img/portfolio/firstlight/firstlight2.jpg'],
            description: 'FirstLight es una aplicación diseñada para los amantes de la fotografía que buscan llevar sus habilidades al siguiente nivel. En este proyecto, he formado parte del equipo de desarrollo de FirstLight de forma ocasional, contribuyendo a mejorar la aplicación, agregando funcionalidades, solucionando bugs, migrando codigo, y tareas similares.',
            url: "https://play.google.com/store/apps/details?id=com.filmic.firstlight"
        },
        
        

    ];

    for (var i = 0; i < portfolioListEs.length; i++) {
        var portfolioItem = portfolioListEs[i];

        var carouselHtml = generarCarouselItems(portfolioItem.images);

        var portfolioItemHtml =
            '<div class="row" style="padding-top: 50px">' +
            '    <div class="col-lg-4">' +
            '        <div id="carouselExampleControls'+i+'" class="carousel slide" data-ride="carousel">' +
            '            <div class="carousel-inner">' +
            carouselHtml +
            '            </div>' +
            '            <a class="carousel-control-prev" href="#carouselExampleControls'+i+'" role="button" data-slide="prev">' +
            '                <span class="carousel-control-prev-icon" aria-hidden="true"></span>' +
            '                <span class="sr-only">Previous</span>' +
            '            </a>' +
            '            <a class="carousel-control-next" href="#carouselExampleControls'+i+'" role="button" data-slide="next">' +
            '                <span class="carousel-control-next-icon" aria-hidden="true"></span>' +
            '                <span class="sr-only">Next</span>' +
            '            </a>' +
            '        </div>' +
            '    </div>' +
            '    <div class="col-lg-8 portfolio-info" style="padding-left: 5%;">' +
            '        <h3>' + portfolioItem.name + '</h3>' +
            '        <br>' +
            '        <ul>' +
            '            <li><strong>Categoria</strong>: ' + portfolioItem.category + '</li>'
        if (portfolioItem.url) {
            portfolioItemHtml += '<li><strong>Url de Play Store</strong>: <a href="' + portfolioItem.url + '">' + portfolioItem.url + '</a></li>'
        }
        portfolioItemHtml+='        </ul>' +
            '        <br>' +
            '        <p>' + portfolioItem.description + '</p>' +
            '        <br>'
        if (portfolioItem.video) {
            portfolioItemHtml += '        <iframe width="100%" height="315" src="' + portfolioItem.video + '" frameborder="0" allowfullscreen></iframe>'
        }
        portfolioItemHtml += '    </div>' +
            '</div>';

        $('#portfolioContainer').append(portfolioItemHtml);
    }
});

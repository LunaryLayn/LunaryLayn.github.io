const translations = {
    'home': {
        'en': 'Home',
        'es': 'Inicio',
    },
    'skills': {
        'en': 'Technical skills',
        'es': 'Habilidades técnicas',
    },
    'portfolio': {
        'en': 'Portfolio',
        'es': 'Portafolio',
    },
    'contact': {
        'en': 'Contact',
        'es': 'Contacto',
    },
    'developer': {
        'en': 'Android Developer',
        'es': 'Desarrollador Android',
    },
    'about': {
        'en': 'About:',
        'es': 'Acerca de:'
    },
    'work': {
        'en': 'How do I work?',
        'es': '¿Como trabajo?'
    },
    'idea': {
        'en': 'If you have an idea, contact me, so we can plan your project. No commitment.<br> <br> I am also open to hearing job offers.',
        'es': 'Si tienes una idea, escribeme para que podamos plantear tu proyecto. Sin compromiso.<br> <br> También estoy abierto a escuchar ofertas laborales.'
    },
    'contact-me': {
        'en': 'Contact me',
        'es': 'Contactame'
    },
    'see-portfolio': {
        'en': 'See portfolio',
        'es': 'Ver portafolio'
    },
    'last-tech': {
        'en': 'Last technologies',
        'es': 'Últimas tecnologías'
    },
    'last-tech-desc': {
        'en': 'Always updated, we apply the latest technologies available to maximize the quality and performance of your applications.',
        'es': 'Siempre actualizados, aplicamos las ultimas tecnologías disponibles para maximizar la calidad y el rendimiento de tus aplicaciones.'
    },
    'user-experience': {
        'en': 'Experience and design (UI/UX)',
        'es': 'Diseño y experiencia (UI/UX)'
    },
    'user-experience-desc': {
        'en': 'We take care of the presentation and the user experience of your applications to make sure to satisfy your users.',
        'es': 'Mimamos y cuidamos la presentación y la experiencia de uso de tus aplicaciones para asegurarnos de satifacer a tus usuarios.'
    },
    'monetize': {
        'en': 'Monetization and analytics',
        'es': 'Monetización y analíticas'
        
    },
    'monetize-desc': {
        'en': 'Data is important. We will include analytics, so you can know how your users use their time in your application. In addition, we can include different monetization models so you can benefit from your application.',
        'es': 'Los datos son importantes. Incluiremos analíticas, para que puedas saber como tus usuarios utilizan su tiempo en tu aplicación. Ademas, podemos incluir distintos modelos de monetización para que puedas obtener beneficios de tu aplicación.'
    },
    'store': {
        'es': 'Publicación en las Stores',
        'en': 'Publication on the Stores'
    },
    'store-desc': {
        'en': 'We will manage the publication of your application so you do not have to worry about the production of your project.',
        'es': 'Gestionaremos la publicación de tu aplicación para que no tengas que preocuparte por la puesta en producción de tu proyecto.'
    },
    'programming-languages': {
        'en': 'Programming languages',
        'es': 'Lenguajes de programación'
    },
    'design-development': {
        'en': 'Design development',
        'es': 'Desarrollo del diseño'
    },
    'databases': {
        'en': 'Databases',
        'es': 'Bases de datos'
    },
    'api': {
        'en': 'APIs usage',
        'es': 'Conexión a APIs'
    },
    'category': { 
        'en': 'Category',
        'es': 'Categoría'
    },
    'architecture': {
        'en': 'Architecture patterns',
        'es': 'Patrones de arquitectura'
    },
    'dependency': {
        'en': 'Dependency injection',
        'es': 'Inyección de dependencias'
    },
    'testing': {
        'en': 'Testing',
        'es': 'Testing'
    },
    'other-tools': {
        'en': 'General technologies',
        'es': 'Tecnologías generales'
    },
    'version-control': {
        'en': 'Version control - CD/CI',
        'es': 'Control de versiones y CD/CI'
    },
    'channel': {
        'en': 'My channel',
        'es': 'Mi canal'
    },
}

var portfolioListEs = [
    {
        name: 'Padmi',
        category: 'Proyecto laboral - Padmi',
        images: ['img/portfolio/padmi/padmi1.jpg', 'img/portfolio/padmi/padmi2.png', 'img/portfolio/padmi/padmi3.jpg', 'img/portfolio/padmi/padmi4.jpg', 'img/portfolio/padmi/padmi5.jpg', 'img/portfolio/padmi/padmi6.jpg', 'img/portfolio/padmi/padmi7.jpg'],
        description: 'Padmi es una aplicación innovadora que ayuda a los jugadores de padel a llegar al siguiente nivel. A traves de un sistema de IA, la aplicación analiza los partidos de los usuarios, y les brinda información sobre sus puntos fuertes y debiles, y como mejorarlos. En este proyecto, he trabajado como líder del desarrollo.',
    },
    {
        name: 'CryptoWatcher',
        category: 'Proyecto de Portfolio (Código abierto)',
        images: ['img/portfolio/cryptowatcher/cw1.jpg','img/portfolio/cryptowatcher/cw2.jpg','img/portfolio/cryptowatcher/cw3.jpg','img/portfolio/cryptowatcher/cw4.jpg','img/portfolio/cryptowatcher/cw5.jpg'],
        description: '⚡ CÓDIGO ABIERTO DISPONIBLE EN EL LINK. CryptoWatcher es una aplicación Android desarrollada en Kotlin con Jetpack Compose que obtiene y muestra pares de criptomonedas siempre contra USD desde la API de Bitfinex. Sigue el patrón MVVM con Clean Architecture e incluye pruebas unitarias para la lógica de negocio central. Funcionalidades clave: actualización automática cada 5 segundos, barra de búsqueda para filtrar pares, conciencia de conectividad, soporte para modo oscuro/claro y pruebas unitarias con JUnit y Mockito. 💡 Para un showcase diferente con GraphQL, MVI y animaciones Lottie, revisa mi otro proyecto PokeApp.',
        url: "https://github.com/LunaryLayn/CryptoWatcher",
        video: "https://youtube.com/embed/pbxu8t8XeaQ"
    },
    {
        name: 'PokeApp',
        category: 'Proyecto de Portfolio (Código abierto)',
        images: ['img/portfolio/pokeapp/poke1.jpg','img/portfolio/pokeapp/poke2.jpg','img/portfolio/pokeapp/poke3.jpg','img/portfolio/pokeapp/poke4.jpg','img/portfolio/pokeapp/poke5.jpg','img/portfolio/pokeapp/poke6.jpg','img/portfolio/pokeapp/poke7.jpg'],
        description: '⚡ CÓDIGO ABIERTO DISPONIBLE EN EL LINK. PokeApp es una aplicación Android en Kotlin que permite explorar una lista de Pokémon desde una API GraphQL, filtrarlos por nombre o tipo y ver detalles. Está desarrollada con Jetpack Compose, arquitectura limpia y patrón MVI. Además, soporta paginación y animaciones con Lottie. ⚠️ A diferencia de CryptoWatcher, este proyecto no incluye pruebas unitarias ni MVVM con REST, ya que esos aspectos están cubiertos allí.',
        url: "https://github.com/LunaryLayn/PokeApp",
        video: "https://www.youtube.com/embed/O6MGXBF_QCE"
    },
    {
        name: 'Blockfolio',
        category: 'Proyecto Personal',
        images: ['img/portfolio/blockfolio/login.jpg', 'img/portfolio/blockfolio/register.jpg', 'img/portfolio/blockfolio/main1.jpg', 'img/portfolio/blockfolio/addstuff.jpg', 'img/portfolio/blockfolio/main2.jpg', 'img/portfolio/blockfolio/searchbar.jpg', 'img/portfolio/blockfolio/main3.jpg'],
        description: "Aplicación Android desarrollada en Kotlin como proyecto personal para la gestión de una cartera de criptomonedas. La aplicación cuenta con funcionalidades como autenticación de usuarios con Firebase, obtención de datos de APIs con Retrofit de <a href=\"https://www.coingecko.com\">CoinGecko</a>, almacenamiento de datos en una base de datos local con Room, diseño responsivo con Compose, notificaciones, y más.",
        video: "https://www.youtube.com/embed/ijznqQRvOww"
    },
    {
        name: 'Filmic Pro',
        category: 'Proyecto laboral - Filmic Inc',
        images: ['img/portfolio/filmicpro/filmic1.jpg', 'img/portfolio/filmicpro/filmic2.jpg', 'img/portfolio/filmicpro/filmic3.jpg', 'img/portfolio/filmicpro/filmic4.jpg'],
        description: "Filmic Pro es una aplicacion de grabación de video profesional con mas de +1 millón de descargas en la Play Store, con una infinidad de funcionalidades y posibilidades de configuración. En este proyecto, he trabajado como uno de los desarrolladores, agregando nuevas features, solucionando bugs, migrando codigo, y tareas similares.",
        url: "https://play.google.com/store/apps/details?id=com.filmic.filmicpro"
    },
    {
        name: 'Recipe Pro',
        category: 'Proyecto personal',
        images: ['img/portfolio/recipepro/recipepro1.jpg', 'img/portfolio/recipepro/recipepro2.jpg', 'img/portfolio/recipepro/recipepro3.jpg', 'img/portfolio/recipepro/recipepro4.jpg', 'img/portfolio/recipepro/recipepro5.jpg', 'img/portfolio/recipepro/recipepro6.jpg'],
        description: 'Aplicación Android desarrollada en Kotlin con Jetpack Compose para la gestion de recetas de cocina. Permite crear, editar, y eliminar recetas, importarlas (parse) desde paginas web que sigan las convenciones de scheme.org, compartirlas con otros usuarios en distintas redes sociales, y desde la propia aplicación, a traves de archivos con una extension propia. También cuenta con implementaciones de analíticas y de publicidad, la cual genera ingresos a traves de AdMob.',
        url: "https://play.google.com/store/apps/details?id=com.betteryou.recipepro"
    },
    {
        name: 'FirstLight',
        category: 'Proyecto laboral - Filmic Inc',
        images: ['img/portfolio/firstlight/firstlight1.jpg', 'img/portfolio/firstlight/firstlight2.jpg'],
        description: 'FirstLight es una aplicación diseñada para los amantes de la fotografía que buscan llevar sus habilidades al siguiente nivel. En este proyecto, he formado parte del equipo de desarrollo de FirstLight de forma ocasional, contribuyendo a mejorar la aplicación, agregando funcionalidades, solucionando bugs, migrando codigo, y tareas similares.',
        url: "https://play.google.com/store/apps/details?id=com.filmic.firstlight"
    },
];

var portfolioListEn = [
    {
        name: 'Padmi',
        category: 'Job Project - Padmi',
        images: ['img/portfolio/padmi/padmi1.jpg', 'img/portfolio/padmi/padmi2.png', 'img/portfolio/padmi/padmi3.jpg', 'img/portfolio/padmi/padmi4.jpg', 'img/portfolio/padmi/padmi5.jpg', 'img/portfolio/padmi/padmi6.jpg', 'img/portfolio/padmi/padmi7.jpg'],
        description: 'Padmi is an innovative application that helps paddle tennis players reach the next level. Through an AI system, the app analyzes users\' matches, providing them with information about their strengths and weaknesses, and how to improve them. In this project, I have worked as the lead developer.',
    },
    {
        name: 'CryptoWatcher',
        category: 'Portfolio Project (Open Source)',
        images: ['img/portfolio/cryptowatcher/cw1.jpg','img/portfolio/cryptowatcher/cw2.jpg','img/portfolio/cryptowatcher/cw3.jpg','img/portfolio/cryptowatcher/cw4.jpg','img/portfolio/cryptowatcher/cw5.jpg'],
        description: '⚡ OPEN SOURCE CODE AVAILABLE AT THE LINK. CryptoWatcher is an Android application built in Kotlin with Jetpack Compose, fetching and displaying cryptocurrency trading pairs (always against USD) using the Bitfinex API. It follows the MVVM pattern with Clean Architecture and includes unit tests for the core business logic. Key features: automatic updates every 5 seconds, search bar filter, connectivity awareness, dark/light theme support, and unit testing with JUnit + Mockito. 💡 For another showcase with GraphQL, MVI, and Lottie animations, check out my PokeApp project.',
        url: "https://github.com/LunaryLayn/CryptoWatcher",
        video: "https://youtube.com/embed/pbxu8t8XeaQ"
    },
    {
        name: 'PokeApp',
        category: 'Portfolio Project (Open Source)',
        images: ['img/portfolio/pokeapp/poke1.jpg','img/portfolio/pokeapp/poke2.jpg','img/portfolio/pokeapp/poke3.jpg','img/portfolio/pokeapp/poke4.jpg','img/portfolio/pokeapp/poke5.jpg','img/portfolio/pokeapp/poke6.jpg','img/portfolio/pokeapp/poke7.jpg'],
        description: '⚡ OPEN SOURCE CODE AVAILABLE AT THE LINK. PokeApp is an Android application in Kotlin that lets users explore a list of Pokémon from a GraphQL API, filter them by name or type, and view details. Built with Jetpack Compose, Clean Architecture, and the MVI pattern, it also supports pagination and Lottie animations. ⚠️ Unlike CryptoWatcher, this project does not include unit tests or MVVM with REST, as those aspects are demonstrated there.',
        url: "https://github.com/LunaryLayn/PokeApp",
        video: "https://www.youtube.com/embed/O6MGXBF_QCE"
    },
    {
        name: 'Blockfolio',
        category: 'Personal Project',
        images: ['img/portfolio/blockfolio/login.jpg', 'img/portfolio/blockfolio/register.jpg', 'img/portfolio/blockfolio/main1.jpg', 'img/portfolio/blockfolio/addstuff.jpg', 'img/portfolio/blockfolio/main2.jpg', 'img/portfolio/blockfolio/searchbar.jpg', 'img/portfolio/blockfolio/main3.jpg'],
        description: "Android application developed in Kotlin as a portfolio project for managing a cryptocurrency portfolio. The application features user authentication with Firebase, fetching data from APIs with Retrofit from <a href=\"https://www.coingecko.com\">CoinGecko</a>, local data storage with Room, responsive design with Compose, notifications, and more.",
        video: "https://www.youtube.com/embed/ijznqQRvOww"
    },
    {
        name: 'Filmic Pro',
        category: 'Job Project - Filmic Inc',
        images: ['img/portfolio/filmicpro/filmic1.jpg', 'img/portfolio/filmicpro/filmic2.jpg', 'img/portfolio/filmicpro/filmic3.jpg', 'img/portfolio/filmicpro/filmic4.jpg'],
        description: "Filmic Pro is a professional video recording application with over +1 million downloads on the Play Store, offering a multitude of features and configuration possibilities. In this project, I worked as one of the developers, adding new features, fixing bugs, migrating code, and similar tasks.",
        url: "https://play.google.com/store/apps/details?id=com.filmic.filmicpro"
    },
    {
        name: 'Recipe Pro',
        category: 'Personal Project',
        images: ['img/portfolio/recipepro/recipepro1.jpg', 'img/portfolio/recipepro/recipepro2.jpg', 'img/portfolio/recipepro/recipepro3.jpg', 'img/portfolio/recipepro/recipepro4.jpg', 'img/portfolio/recipepro/recipepro5.jpg', 'img/portfolio/recipepro/recipepro6.jpg'],
        description: 'Android application developed in Kotlin with Jetpack Compose for managing cooking recipes. It allows users to create, edit, and delete recipes, import them (parse) from web pages following the scheme.org conventions, share them with other users on various social networks, and from the app itself through files with a custom extension. It also includes implementations of analytics and advertising, generating revenue through AdMob.',
        url: "https://play.google.com/store/apps/details?id=com.betteryou.recipepro"
    },
    {
        name: 'FirstLight',
        category: 'Job Project - Filmic Inc',
        images: ['img/portfolio/firstlight/firstlight1.jpg', 'img/portfolio/firstlight/firstlight2.jpg'],
        description: 'FirstLight is an application designed for photography enthusiasts looking to take their skills to the next level. In this project, I have occasionally been part of the FirstLight development team, contributing to improving the application, adding features, fixing bugs, migrating code, and similar tasks.',
        url: "https://play.google.com/store/apps/details?id=com.filmic.firstlight"
    },
];

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

    loadLanguage();

    $('#btnLanguage').click(changeLanguage);

    
});

function changeLanguage() {
    const currentLang = localStorage.getItem('language') || 'es';
    const newLang = currentLang === 'es' ? 'en' : 'es';

    localStorage.setItem('language', newLang);

    loadText(newLang);
    loadPortfolio(newLang);
}

function loadLanguage() {
    const currentLang = localStorage.getItem('language') || 'es';

    loadText(currentLang);
    loadPortfolio(currentLang);
 }

function loadPortfolio(lang) {

    $('#portfolioContainer').empty();

    var portfolioList = lang === 'es' ? portfolioListEs : portfolioListEn;
    var category = translate('category', lang);


    for (var i = 0; i < portfolioList.length; i++) {
        var portfolioItem = portfolioList[i];

        var carouselHtml = generarCarouselItems(portfolioItem.images);

        var portfolioItemHtml =
            '<div class="row" style="padding-top: 50px">' +
            '    <div class="col-lg-4">' +
            '        <div id="carouselExampleControls'+i+'" class="carousel slide" data-ride="carousel" data-interval="2000">' +
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
            '            <li><strong>'+category+'</strong>: ' + portfolioItem.category + '</li>'
        if (portfolioItem.url) {
            portfolioItemHtml += '<li><strong>Url Play Store</strong>: <a href="' + portfolioItem.url + '">' + portfolioItem.url + '</a></li>'
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
 }

function loadText(newLang) {

    if(newLang === 'es') {
        $('#btnLanguage').attr('src', 'img/icons/enflag.jpg')
    } else {
        $('#btnLanguage').attr('src', 'img/icons/esflag.png')
    }
    

    $('#developer').text(translate('developer', newLang));
    $('#home').text(translate('home', newLang));
    $('#home2').text(translate('home', newLang));
    $('#skills').text(translate('skills', newLang));
    $('#skills2').text(translate('skills', newLang));
    $('#skills3').text(translate('skills', newLang));
    $('#portfolio').text(translate('portfolio', newLang));
    $('#portfolio2').text(translate('portfolio', newLang));
    $('#portfolio3').text(translate('portfolio', newLang));
    $('#contact').text(translate('contact', newLang));
    $('#contact2').text(translate('contact', newLang));
    $('#contact3').text(translate('contact', newLang));
    $('#about').text(translate('about', newLang));
    $('#work').text(translate('work', newLang));
    $('#idea').html(translate('idea', newLang));
    $('#contact-me').text(translate('contact-me', newLang));
    $('#see-portfolio').text(translate('see-portfolio', newLang));
    $('#last-tech').text(translate('last-tech', newLang));
    $('#last-tech-desc').text(translate('last-tech-desc', newLang));
    $('#user-experience').text(translate('user-experience', newLang));
    $('#user-experience-desc').text(translate('user-experience-desc', newLang));
    $('#monetize').text(translate('monetize', newLang));
    $('#monetize-desc').text(translate('monetize-desc', newLang));
    $('#store').text(translate('store', newLang));
    $('#store-desc').text(translate('store-desc', newLang));
    $('#programming-languages').text(translate('programming-languages', newLang));
    $('#design-development').text(translate('design-development', newLang));
    $('#databases').text(translate('databases', newLang));
    $('#api').text(translate('api', newLang));
    $('#architecture').text(translate('architecture', newLang));
    $('#dependency').text(translate('dependency', newLang));
    $('#testing').text(translate('testing', newLang));
    $('#other-tools').text(translate('other-tools', newLang));
    $('#version-control').text(translate('version-control', newLang));
    $('#channel').text(translate('channel', newLang));
    
}

function translate(key, language) {
    // Verifica si la clave de traducción existe
    if (translations[key]) {
      // Verifica si la traducción para el idioma especificado existe
      if (translations[key][language]) {
        return translations[key][language];
      }
    }
  
    // Si no se encuentra una traducción, devuelve la clave original
    return key;
  }
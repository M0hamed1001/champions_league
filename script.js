
var nav = document.querySelector('.nav');
window.onscroll = ch;

function ch() {
    if (window.scrollY >= 350) {
        nav.style.background = 'linear-gradient(14.4deg, #03168d 15.36%, #07133a 74.97%)'
        nav.style.height = 70 + 'px'
        nav.style.width = 100 + '%'
        nav.style.left = 0 + 'px'
        navsub.style.paddingTop = 2 + 'px'
        imag.style.height = 67 + 'px'
        imag.style.opacity = 1
        imag.style.filter = "drop-shadow(2px 4px 6px blue)"

    } else {
        nav.style.background = 'none'
        nav.style.height = 100 + 'px'
        nav.style.width = 90 + '%'
        nav.style.left = 5 + 'vw'
        imag.style.height = 100 + 'px'
        imag.style.opacity = 0.1
        imag.style.filter = "invert()"
    }
}


var images = [
    'image/chmp.jpg',
    'image/champ2.jpg',
    'image/champ3.jpg',
    'image/champ4.jpg',
]

count = 0
duration = 4000
function slideshow() {
    document.getElementById('champimg').src = images[count]
    count++;
    if (count == images.length) {
        count = 0
    }
    setTimeout(slideshow, duration)
}
slideshow()




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    freeMode: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        450: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const swiper1 = new Swiper('.swiper', {
    // Default parameters
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        450: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 20
        }
    }
})


container = document.querySelector('.swiper-wrapper')
var request = new XMLHttpRequest();
request.open("GET", "https://www.scorebat.com/video-api/v3/");
request.send();
request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        productsResponse = JSON.parse(request.responseText);
        for (i = 0; i < productsResponse['response'].length; i++) {
            if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group A") {
                container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


            }
        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group B") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group C") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group D") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`



        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group E") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group F") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group G") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


        }
        if (productsResponse['response'][i].competition == "CHAMPIONS LEAGUE: Group stage, Group H") {
            container.innerHTML += `<div class="swiper-slide">
                                        <h2>${productsResponse['response'][i].videos['0'].embed} </h2>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`
        }

    }
};


container2 = document.querySelector('.row')
var highrequest = new XMLHttpRequest();
highrequest.open("GET", "https://www.scorebat.com/video-api/v3/");
highrequest.send();
highrequest.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
        productsResponse = JSON.parse(highrequest.responseText);
        for (i = 0; i < productsResponse['response'].length; i++) {
            if (productsResponse['response'][i].competition == "SPAIN: La Liga") {
                container2.innerHTML += `<div >
                                        <div class="col" style="background-image: url(image/ucl.jpg); color:white;">
                                        <h3>${productsResponse['response'][i].videos['0'].embed} </h3>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


            }
        }
        for (i = 0; i < productsResponse['response'].length; i++) {
            if (productsResponse['response'][i].competition == "ENGLAND: Premier League") {
                container2.innerHTML += `<div >
                                        <div class="col" style="background-image: url(image/ucl.jpg); color:white;">
                                        <h3>${productsResponse['response'][i].videos['0'].embed} </h3>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>`


            }
        }
        for (i = 0; i < productsResponse['response'].length; i++) {
            if (productsResponse['response'][i].competition == "ITALY: Serie A") {
                container2.innerHTML += `<div >
                                        <div class="col" style="background-image: url(image/ucl.jpg); color:white;">
                                        <h3>${productsResponse['response'][i].videos['0'].embed} </h3>
                                        <h3>${productsResponse['response'][i].title}</h3>
                                        <p>${productsResponse['response'][i].competition}</p>
                                    </div>
                                    </div>`


            }
        }
    }
}







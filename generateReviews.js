// Single Star SVG; formatted
// <svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>

(function generateReviews(){
    let reviewList = document.querySelector('.review-list');

    let reviewObjs = [
        {
            store: "Frenchy",
            stars: "4s",
            price: "$$",
            flavor: "umami",
            reviewPreview: "A light umami taste that leaves you feeling refreshed.",
            imgSrc: "https://i.postimg.cc/RZ6kKLqS/Frenchy2.avif",
            altText: "A light green, smooth matcha with some ice.",
            reviewLink: "reviews/Frenchy_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.789854",
            lat: "-73.948267"
        },
        {
            store: "Matcha House",
            stars: "5s",
            price: "$$$",
            flavor: "umami",
            reviewPreview: "A refreshing nutty, umami taste.",
            imgSrc: "assets2/MatchaHouse3.jpg",
            altText: "A smooth dark green matcha.",
            reviewLink: "reviews/MatchaHouse_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.727852",
            lat: "-73.982224"
        },
        {
            store: "The Monkey Cup",
            stars: "5s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "A light and subtle sweet taste.",
            imgSrc: "",
            altText: "",
            reviewLink: "reviews/TheMonkeyCup_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.804732",
            lat: "-73.951249"
        },
        {
            store: "The Coffee Potter",
            stars: "5s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "A sweet taste that will capture the hearts of sweet matcha enjoyers.",
            imgSrc: "https://i.postimg.cc/kMhBFM8s/Coffee-Potter1.avif",
            altText: "A light green matcha latte with some ice. The matcha has dark green flecks that become more concetrated towards the bottom of the cup.",
            reviewLink: "reviews/CoffeePotter_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.787010",
            lat: "-74.780380"
        },
        {
            store: "The Turtle Gut",
            stars: "1s",
            price: "$$",
            flavor: "bitter",
            reviewPreview: "Poor taste. Milk and matcha taste separated. There is no synergy in this flavor.",
            imgSrc: "https://i.postimg.cc/wjcpTFQc/Turtle-Gut.avif",
            altText: "A dark, murky green matcha latte with some ice.",
            reviewLink: "reviews/TurtleGut_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "38.970557",
            lat: "-74.842637"
        },
        {
            store: "Crest Coffee Company",
            stars: "3s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "A light, refreshing taste with a hint of sweetness, but watered down.",
            imgSrc: "assets2/CrestCoffeeCompany2.jpg",
            altText: "A light green matcha, half drank, with minimal ice.",
            reviewLink: "reviews/CrestCoffeeCompany_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "38.977747",
            lat: "-74.832046"
        },
        {
            store: "Cha Cha Matcha",
            stars: "1s",
            price: "$$$",
            flavor: "bitter",
            reviewPreview: "Terrible, bitter, chalky, chunky, and grainy. Akin to drinking sand.",
            imgSrc: "assets2/ChaChaMatcha2.jpg",
            altText: "A light green matcha latte with many dark matcha grains speckled throughout the drink. Beneath the drink is a pink napkin that says 'I love you so Matcha!'",
            reviewLink: "reviews/ChaChaMatcha_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.744621",
            lat: "-73.988701"
        },
        {
            store: "Flander's Bagels",
            stars: "1s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "Not a latte... This is a saccharine milkshake.",
            imgSrc: "assets2/Flagels3.jpg",
            altText: "A very pale green, thick matcha with a sugary foam on its surface.",
            reviewLink: "reviews/Flagels_review.html",
            starsSVG: "<svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.831252",
            lat: "-74.708947"
        },
        {
            store: "Stuey's",
            stars: "1s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "This is a vanilla ice cream milkshake, not a matcha latte...",
            imgSrc: "assets2/Stuey_s1.jpg",
            altText: "A very pale green matcha.",
            reviewLink: "reviews/Stueys_review.html",
            starsSVG: "<svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "38.978187",
            lat: "-74.822405"
        },
        {
            store: "Cream & Sugar",
            stars: "4s",
            price: "$",
            flavor: "umami",
            reviewPreview: "A subtle earthy, umami taste.",
            imgSrc: "assets2/Cream&Sugar1.jpg",
            altText: "A dark green to white gradient of matcha to milk.",
            reviewLink: "reviews/Cream&Sugar_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.827071",
            lat: "-74.582861"
        },
        {
            store: "White Noise",
            stars: "3s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "A heavy, sweet taste. Chalky and low quality, but decent.",
            imgSrc: "assets2/WhiteNoise1.jpg",
            altText: "A lighter green matcha color. The bottom of the cup is a bit darker green where the matcha has settled. There's a lot of ice.",
            reviewLink: "reviews/WhiteNoise_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.770149",
            lat: "-73.991928"
        },
        {
            store: "Yanni's Coffee",
            stars: "2s",
            price: "$$$",
            flavor: "mild",
            reviewPreview: "The milk is prominent in the taste, but the quality of the matcha itself seems fine.",
            imgSrc: "assets2/Yanni_s1.jpg",
            altText: "A smooth green matcha with ice.",
            reviewLink: "reviews/Yannis_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.739793",
            lat: "-73.999015"
        },
        {
            store: "Isshiki",
            stars: "5s",
            price: "$$$",
            flavor: "umami",
            reviewPreview: "High quality matcha with a rich umami flavor.",
            imgSrc: "assets2/Isshiki1.jpg",
            altText: "A rich green to white, matcha to milk gradient with little bits of ice floating near the top of the drink.",
            reviewLink: "reviews/Isshiki_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.742603",
            lat: "-74.000038"
        },
        {
            store: "Paris Baguette",
            stars: "1s",
            price: "$$",
            flavor: "sweet",
            reviewPreview: "A saccharine milkshake masquerading as matcha...",
            imgSrc: "assets2/ParisBaguette5.jpg",
            altText: "A pale green matcha with a sugary frothiness to the top.",
            reviewLink: "reviews/ParisBaguette_review.html",
            starsSVG: "<svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.767053",
            lat: "-73.982867"
        },
        {
            store: "Ground Central Coffee Company",
            stars: "3s",
            price: "$$",
            flavor: "umami mild",
            reviewPreview: "Decent, with a very mild umami flavor. The matcha taste isn't very strong.",
            imgSrc: "assets2/GroundCentral1.jpg",
            altText: "A smooth, medium green matcha.",
            reviewLink: "reviews/GroundCentral_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.763593",
            lat: "-73.984866"
        },
        {
            store: "Ruhani",
            stars: "3s",
            price: "$$",
            flavor: "mild",
            reviewPreview: "Thick and mild matcha taste.",
            imgSrc: "assets2/Ruhani1.jpg",
            altText: "A smooth, pale green matcha with ice floating at the top.",
            reviewLink: "reviews/Ruhani_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.685408",
            lat: "-73.980281"
        },
        {
            store: "Setsugekka",
            stars: "3s",
            price: "$$$",
            flavor: "nutty umami",
            reviewPreview: "Watered down, but umami with a hint of nuttiness.",
            imgSrc: "assets2/Setsugekka.jpg",
            altText: "A deep green, but slightly cloudy, matcha. The top of the drink is slightly frothy.",
            reviewLink: "reviews/Setsugekka_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.727234",
            lat: "-73.986649"
        },
        {
            store: "Thē Soirēe",
            stars: "3s",
            price: "$$$",
            flavor: "umami",
            reviewPreview: "Umami with a hint of bitterness.",
            imgSrc: "assets2/TheSoire1Uji.jpg",
            altText: "A rich green matcha latte with a beautiful ombre, darkest at the top.",
            reviewLink: "reviews/TheSoire_review.html",
            starsSVG: "<svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"24px\" height=\"24px\"><use href=\"#svg-star\"></use></svg><svg width=\"12px\" height=\"24px\"><use href=\"#svg-star\"></use></svg>",
            long: "40.765098",
            lat: "-73.987358"
        }
    ];

    let reviewItems = "";
    for(let review of reviewObjs){
        //console.log(review.store);
        reviewItems += "<div class=\"review-container " + review.stars + " " + review.price + " " + review.flavor + " \"><div class=\"review-img\"><img src=\"" + review.imgSrc + "\" alt=\"" + review.altText + "\"/></div><div class=\"review-text\"><h3>" + review.store + "</h3><h3>" + review.starsSVG + "</h3><p>" + review.reviewPreview + "</p><a href=\"" + review.reviewLink + "\">Read Full Review ➜</a></div></div>"
    }

    reviewList.innerHTML = reviewItems;
})();
jQuery(document).ready(function($) { 
    let toggle = document.getElementById('toggle-check')
    let usaLabel = document.getElementById('usa-label')
    let japanLabel = document.getElementById('japan-label')
    let planeIcon = document.getElementById('plane-icon');


    $('#wedding-banner-img').fadeIn(2000)
    $("#usa-label").fadeIn(3000);  
    $("#plane-icon").fadeIn(3500);  
    $("#toggle-box").fadeIn(4000);  
    $("#japan-label").fadeIn(3000);  
    $("#map").fadeIn(4000);

    let heartLoader = document.getElementById('heart');
    let mapBox = document.getElementById('mapbox-container');

    let isFirstLoad = true;

listLocations = [
    // Maine/USA Locations
    {
        name: 'Acadia National Park',
        lat: 44.338974,
        lng: -68.273430,
        date: "July 2026",
        featuredImg: "./Resources/maine/acadia-cover-image.png",
        locationDescription: "Our trip together to Acadia and Bar Harbor! I really wanted Yuki to experience coastal Maine. The drive was so long, but it was so much fun, the weather was beautiful and we could drive with the roof off on the Jeep. Our hotel was beautiful and right by the water. We drove up Cadillac Mountain and saw a wonderful view. After the mountain, we had the best tasting lobster bisque and blueberry ice cream. I almost didn't order it, but Yuki could read my face and she saw I really wanted ice cream, so luckily she convinced me to order some! ",
        locationImages: 
        [
            './Resources/maine/acadia-scenery.png',
            './Resources/maine/bar_harbour_aisu.png',
            './Resources/maine/bar_harbour_lobsterbisque.png',
        ]
    },
    {
        name: "Peaks Island",
        lat: "43.665",
        lng: "-70.194",
        date: "July 2026",
        featuredImg: "./Resources/maine/yuki_peaks_looking.png",
        locationDescription: "Our Peak's island adventure! We got to explore Peak's island together. We started off with a wonderful boat ride to the island. However, Filip forgot to warn Yuki that we would be cycling, we cycled around the whole island, LOTS of exercise. Unfortunately, Yuki got a stain on her pants. But because she is so talented and elegant, she was able to get the tough grease stain off her pants. We explored the entire island, and we even saw a cool old fort, although it was a little creepy. When we returned we were starving, so we had a delicious Hawaiian pizza at a local restaurant. Super Oishii.",
        locationImages: 
        [
            './Resources/maine/peaks_bat_steele.png',
            './Resources/maine/peaks_island_docks.png',
            './Resources/maine/flatbread_pizza_peaks.png'
        ]
    },
    {
        name: "Macworth Island",
        lat: "43.6900",
        lng: "-70.2350",
        date: "July 2026",
        featuredImg: "./Resources/maine/macworth-island-selfie.png",
        locationDescription: "We spent a beautiful evening on macworth island to have dinner while we watched the sunset. Macworth island is one of my favorite spots, and I was really excited to show Yuki! We got some delicous sushi and fried chicken, and we enjoyed the sunset while we ate. We definitely want to go back there and spend more time there.",
        locationImages: 
        [
           "./Resources/maine/macworth-island-sushi.png",
        ]
    },
     {
        name: "Y%F Coffee",
        lat: "43.6537211",
        lng: "-70.2631465",
        date: "August 2026",
        featuredImg: "./Resources/maine/YFcoffee-selfie.png",
        locationDescription: "Our coffee spot in Portland! By conincidence, a new coffee shop opened up called Y and F coffee. What a coincidence that it's our initials and that it just opened when Yuki came to America. I think it was a sign for the universe. The cafe was beautiful, and the staff even us stickers of the logo because it had our initials!",
        locationImages: 
        [
           "./Resources/maine/YFCoffeecups.png",
        ]
    },
    {
        name: "Sebago Lake",
        lat: "43.989129",
        lng: "-70.5700",
        date: "July 2026",
        featuredImg: "./Resources/maine/sebago_lake_selfie.png",
        locationDescription: "We spent many days at Sebago lake during our first summer together as newlyweds. Unfortuately, the water was still too cold to swim! But we still had a great time relaxing on the beach. Yuki even drove the Jeep around one day as we were leaving, she did great! We listened to a lot of Japanese music on the long drives from Portland to Sebago. We will definitely return for more lake days in the future.",
        locationImages: 
        [
            './Resources/maine/sebago_lake_scenery.png',
        ]
    },
    {
        name: "Back Cove (Our proposal)",
        lat: "43.6641",
        lng: "-70.26695",
        date: "March 2026",
        featuredImg: "./Resources/maine/backcove-pic1.png",
        locationDescription: "The most special place in both Maine and the USA to Yuki and I. This is the spot where I proposed to Yuki, and she became my fiancee. We had just gotten back from our trip to New York City and were driving home. I couldn't wait any longer. I knew right away that I wanted to marry Yuki, I had already made my decision. Yuki and I propsosed by two swan art statues. Swans are very special to us. I was so nervous when I asked! But luckily, Yuki said yes! She was so happy, that she started jumping! Jumping Yuki is not very common, so this was special. This was the happiest night of my life, the night Yuki said yes to spending forever with me.",
        locationImages: 
        [
            "./Resources/maine/backcove-pic2.png",
        ]
    },
    //NH, Boston, NYC
    {
        name: "Portsmouth",
        lat: "43.0715",
        lng: "-70.7622",
        date: "April 2026",
        featuredImg: "./Resources/nhbos/portsmouth-selfie.png",
        locationDescription: "I wanted to show Yuki Portsmouth! We had a wonderful day there. We walked around Portsmouth and we got a delicious seafood dinner with clam chowder and calamari. Super tasty!",
        locationImages: 
        [
           "./Resources/nhbos/portsmouth-food.png",
           "./Resources/nhbos/portsmouth-scenery.png",
        ]
    },
    {
        name: "Boston",
        lat: "42.3611",
        lng: "-71.0571",
        date: "March 2026",
        featuredImg: "./Resources/nhbos/boston-selfie.png",
        locationDescription: "Before New York City, Yuki and I went down to Boston together to explore the city! It was such a wonderful time. The hotel we stayed in was so fancy, it had such a cool view of the city at night. Yuki got to meet my friends Gabe and Abby, and of course their dog Roxy. We tried to take the subway, but the train was not moving, I was embarassed because this would never happen in Japan! We had such a lovely time exploring Boston together.",
        locationImages: 
        [
           "./Resources/nhbos/boston-mirrors.png",
           "./Resources/nhbos/boston-food.png",
        ]
    },
     {
        name: "New York City",
        lat: "40.7128",
        lng: "-74.0060",
        date: "March 2026",
        featuredImg: "./Resources/nyc/nyc-selfie.png",
        locationDescription: "Our trip to New York City! This weekend was so fun. We took a train down to New York together. I really enjoyed that train ride, Yuki wanted to read my palm, but I told her I don't like fortune! Our hotel was old, but so cool. We got to take a subway ride, even though we accidentally took the wrong train. I wanted to take Yuki to a local Serbian restaurant, but it was so busy. Luckily, we found a tasty Italian restaurant, even though Filip hates pasta. New York City was such a wonderful time.",
        locationImages: 
        [
           "./Resources/nyc/nyc-mirror-msg.png",
            "./Resources/nyc/nyc-mirror-selfie.png",
             "./Resources/nyc/nyc-scenery.png",
             "./Resources/nyc/nyc-bagels.png",
        ]
    },
    {
        name: "Clearwater Beach, Florida",
        lat: "27.9783",
        lng: "-82.8317",
        date: "August 2026",
        featuredImg: "./Resources/florida/florida-cover.png",
        locationDescription: "While Yuki came to stay with me in the US during the summer, I wanted to take her somewhere new. We went to Florida! We had our first plane ride together. Of course it was special, but I was very jealous Yuki can sleep anywhere at any time (she can sleep in the airport chair so easy)! I really enjoyed out first flight together, those moments really make us feel like husband and wife. Florida was a bit of a rough start. Filip was a dummy, and he accidentally booked a very scary motel! It had no wifi, no hair dryer, and someone even tried to break in! It also had creepy statues of Elvis and Marilyn Monroe on the balcony. Although it was so stressful, now Yuki and I laugh about this memory. Our next hotel was so nice. It had an infinity pool, which I had never tried before. We spent the week swimming the pool and the beach. We tried so much delicious food, although we were a bit lazy and went to the same restaurant three times! (But the fish was so tasty.) We got to go on a boat ride and see some dolphins, we stopped to swim together on this very tiny island. It was such a fun week, but we had a song stuck in our head called 'SurfStyle' which was VERY catchy. It was such a fun week.",
        locationImages: 
        [
           "./Resources/florida/florida-beach-msg.png",
           "./Resources/florida/florida-scenery.png",
        ]
    },
    //FL

    //Japan Locations
    {
        name: 'Osaka Castle',
        lat: "34.6874",
        lng: "135.5258",
        date: "June 2026",
        featuredImg: "./Resources/japan/osaka-castle-walking.png",
        locationDescription: "Taking our engagement photos at Osaka Castle! It was our wedding week in Osaka. Of course everyday was wonderful, but this day was the most special day. It really felt like a dream come true, and unforgettable memory. I got to wear a traditional Japanese Hakama, and Yuki wore a beautfiul orange Kimono. We were really lucky, we had great sunny weather. It was supposed to be rainy, but life wanted us to enjoy our special day with beautiful weather, so we could take our pictures at Osaka castle, which we really wanted to do! We went to Tenmangu where the staff helped us put on our outfits. We took a cab ride to Osaka castle. I felt like we were Japanese royalty! Everyone was looking at us and taking pictures of us. When I think about that experience, I'm grateful I'm not famous. It felt so special. Everyone was there to celebrate us. Yuki's mom, supansa, and the staff. We have special photos and memories for the rest of our lives (even though Filip's hair is not good in the pictures.)",
        locationImages: 
        [
            './Resources/wedding-banner-image.jpg',
            './Resources/japan/osaka-castle-pic3.png',
            './Resources/japan/Osaka-car-selfie.png'
        ]
    }, 
    {
        name: 'Kyoto',
        lat: "35.0117",
        lng: "135.7683",
        date: "June 2026",
        featuredImg: "./Resources/japan/kyoto-1.png",
        locationDescription: "After a busy wedding week, we ended that week with a trip to Kyoto! It was one of our many 'practice honeymoons' as we like to call it. Kyoto was beautiful of course, but the best part was the hotel. Yuki booked us a very fancy hotel. It was the nicest one I've ever stayed in. It was so fancy, with a large spa bathtub, and a beautiful traditional style Japanese living room. The bed was HUGE, and so comfortable. The staff was so kind. They found out it was our honeymoon, so they made us a special gift, two towels wrapped as swans, which means a lot to Yuki and I! Our hotel was next to a beautfiul shrine. It was so much fun to explore, although it started to rain a lot. We went to a local izakaya that was delicious. I tried a matcha flavored beer, and the hotel had free sake! We had such a special night in Kyoto.",
        locationImages: 
        [
            "./Resources/japan/kyoto-2.png",
            "./Resources/japan/kyoto-3.png",
            "./Resources/japan/kyoto-4.png",
            "./Resources/japan/kyoto-5.png",
        ]
    }, 
    {
        name: 'Kifune',
        lat: "35.0718",
        lng: "135.4546",
        date: "June 2026",
        featuredImg: "./Resources/japan/kifune-1.png",
        locationDescription: "After we took our engagement photos during our wedding week in June, Yuki and I traveled to Kyoto! First, we stopped to see the Kifune shrine. Yuki's parents recommended Kifune becuase they know I love to hike. The nature was stunning. Kifune was so quiet, peaceful, and the scenery was lush and a beautiful emerald green. The walk up the road was long, and we quickly became hungry! We found a small cafe. Yuki ate cold soba, and I ate an eel donburi, it was very oishii. Kifune temple was stunning. I especially loved the staircase with the lanterns. Truly a beautfiul part of Japan. I even got to try a local soda called Ramone. It was very tasty!",
        locationImages: 
        [
            "./Resources/japan/kifune-2.png",
            "./Resources/japan/kifune-3.png",
        ]
    }, 
    {
        name: 'CRAFY Ring Shop',
        lat: "34.669714",
        lng: "135.50146",
        date: "June 2026",
        featuredImg: "./Resources/japan/ring-1.png",
        locationDescription: "Our wedding week was such an exciting time. We did so many wonderful things. We also got to create our own wedding rings! We want to a local craft shop. It was such a cool experience. I am not very good at art, but I think the rings turned out okay! We picked a pink color, and we even got our names engraved on each other's rings. It was more difficult than I thought it would be, but I think I got the hang of it! We even got to keep a small temporary ring. Once we finally saw the rings, it was worth the wait, they are beautiful in person!",
        locationImages: 
        [
            "./Resources/japan/ring-2.png",
            "./Resources/japan/ring-3.png",
        ]
    }, 
    {
        name: 'Don Quixote Ferris Wheel',
        lat: "34.6692407",
        lng: "135.5027407",
        date: "January 2026",
        featuredImg: "./Resources/japan/firstdate-1.png",
        locationDescription: "Our first date, and our first ever picture together! I had no idea I would meet my wife on my Japan trip, what a wonderful surprise that life gave me. It was a chilly January evening. Yuki and I decided we would meet each other for the first time. I first saw Yuki outside of a Konbini by the train station, she was so beautiful. Right away, we had such a wonderful time. We went to a local coffee shop. I ordered a cappucino and Yuki got a matcha latte. We laughed, got to know each other, and practiced our Japanese and English together. We wanted to date going. At first, we were supposed to go to an onigiri shop, but unfortunately I didn't research and didn't realize it was cash only (embrassing!) Instead, we went to a local izakaya. It was incredible, I really loved the stuffed peppers. We decided we wanted to keep the date going, we were having such a wonderful time. We went to the Don Quixote ferris wheel for a ride, it was a very special memory for Yuki and I. Finally, we played some games at the game center, where I found out Yuki is VERY good at games. She kicked my butt at basketball. And she's such a good drummer at the drum game. After our date ended, I couldn't stop thinking about Yuki. I had such a wonderful time with her. I already couldn't wait to see her again.",
        locationImages: 
        [
            "./Resources/japan/firstdate-2.png",
            "./Resources/japan/firstdate-3.png",
        ]
    }, 
     {
        name: 'Umekita Park/Sky Building',
        lat: "34.706",
        lng: "135.494",
        date: "January 2026",
        featuredImg: "./Resources/japan/umeda-1.png",
        locationDescription: "Umekita park is a very special place to us. It is the place that Yuki and I became official. This is the spot where I officially gave the relationship confession. It was our second date, and we had such a wonderful time. We met in Umeda station (I was lost at first because Umeda station is HUGE. Luckily, Yuki knows Osaka so well.) Then we went to a fancy Izakaya restaurant, the food was so delicious. We were having such a wondeful time, we didn't want the date to end. We went up to the Umeda Sky building to enjoy the night views of Osaka. Finally, we ended the night walking around Umekita park, admiring the beautiful light. The park is usually packed, but this time, we had it all to ourselves. I knew by this point that Yuki was the only woman for me, so I was so glad to give the confession. Umekita park will always be a special and important place for us.",
        locationImages: 
        [
            
        ]
    }, 
    
]



//Google Maps API
//Map initiliazations
async function GenMapInstance(isJapan = false) {

    if (!isFirstLoad) {
        heartLoader.style.display = "block";
        mapBox.style.display = "none";
    }

    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    if (toggle.checked) {
        isJapan = true;
    } else {
        isJapan = false;
    }

    const zoomLevel = isJapan
    ? 8
    : 9

     const startingCoordinates = isJapan 
    ? { lat: 34.6723, lng: 135.7683 }  // Osaka, Japan
    : { lat: 43.6591, lng: -70.2568 };   // Centered in Maine

    map = new Map(document.getElementById('map'), {
        center: startingCoordinates, //Centered in Maine
        zoom: zoomLevel,
        mapTypeControl: false,
        fullscreenControl: false,
        disableDefaultUI: true,  
        mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        },
        streetViewControl: false,
        scrollwheel: true,
        mapId: "DEMO_MAP_ID",
    });

    const infoWindow = new google.maps.InfoWindow();

    //Map Filtered Locations
listLocations.forEach(location => {
let img = document.createElement("img");
img.style.border = "2px solid whitesmoke";
// img.style.borderRadius = "50%";
img.src = location.featuredImg;
img.style.height = "35px";
let posCoords = new google.maps.LatLng(location.lat, location.lng)
let marker = new AdvancedMarkerElement({
map: map,
position: posCoords,
title: location.name,
content: img,
gmpClickable: true,
})
//Content for infoWindow
let contentString = `
<div style="padding: 10px;">
<h3 class="location-title">${location.name}</h3>
<span class="location-date">${location.date}</span>
<p class="location-description">${location.locationDescription}</p>
<img style='width: 208px; height: auto; margin-bottom: 5px; border: 4px double #EAD2A8;' src=${location.featuredImg} />
${location.locationImages.map(chosenImg => `<img style='width: 208px; height: auto; margin-bottom: 5px; border: 4px double #EAD2A8;' src=${chosenImg} />`).join('')}
</div>`;
//Add infowindow to each location
marker.addListener('gmp-click', () => {
infoWindow.setContent(contentString),
infoWindow.open({
anchor: marker,
map,
}) 
})
});

isFirstLoad = false

setTimeout(function() {
//heartLoader.style.display = 'none';
$('#heart').fadeOut(200);
//mapBox.style.display = "block";
$('#mapbox-container').fadeIn(1200)
}, 1000);

}

const changeUnderline = () => { 
  if (toggle.checked) { 
    japanLabel.classList.add('underline'); 
    usaLabel.classList.remove('underline'); 
    
    // Clear old classes, force a reset, then add the new animation
    planeIcon.classList.remove('move-left'); 
    void planeIcon.offsetWidth; // 👈 Forces browser to reset animation timeline instantly
    planeIcon.classList.add('move-right'); 
  } else { 
    japanLabel.classList.remove('underline'); 
    usaLabel.classList.add('underline'); 
    
    planeIcon.classList.remove('move-right'); 
    void planeIcon.offsetWidth; // 👈 Forces browser to reset animation timeline instantly
    planeIcon.classList.add('move-left'); 
  } 
}

//Alternate between USA and Japan
toggle.addEventListener('click', GenMapInstance)
toggle.addEventListener('click', changeUnderline) 

//On Load
usaLabel.classList.toggle('underline')
GenMapInstance(false);
});



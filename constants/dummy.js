import assets from "./assets";

const weatherData = [
  {
    id : "sun-01",
    name: "airTemperature",
    image: assets.Sunny,
  },
  {
    id : "wind-02",
    name: "gust",
    image: assets.Gust,
  },
  {
    id: "cloud-03",
    name:"cloudCover",
    images: assets.Cloud,
  }
]




const citiesData = [
  {
    id: "city-01",
    name: "KIGALI",
    latitude: 2.0800,
    longitude: 29.7500,
    bio: "Kigali is the capital city of Rwanda, roughly in the center of the country. It sprawls across numerous hills, ridges and valleys, and has a vibrant restaurant and nightlife scene. The Kigali Genocide Memorial documents the 1994 mass killings in Rwanda, associated with the country’s civil war.",
    image: assets.Kigali,
  },
  {
    id: "city-02",
    name: "NAIROBI",
    latitude: 1.2921 ,
    longitude: 36.8219,
    bio:  "Nairobi is Kenya’s capital city. In addition to its urban core, the city has Nairobi National Park, a large game reserve known for breeding endangered black rhinos and home to giraffes, zebras and lions. Next to it is a well-regarded elephant orphanage operated by the David Sheldrick Wildlife Trust. Nairobi is also often used as a jumping-off point for safari trips elsewhere in Kenya. ",
    image: assets.Nairobi,
  },
  {
    id: "city-03",
    name: "KAMPALA",
    latitude: 0.3476,
    longitude: 32.5825,
    bio: "Kampala is Uganda's national and commercial capital bordering Lake Victoria, Africa's largest lake. Hills covered with red-tile villas and trees surround an urban centre of contemporary skyscrapers. In this downtown area, the Uganda Museum explores the country's tribal heritage through an extensive collection of artefacts. On nearby Mengo Hill is Lubiri Palace, the former seat of the Buganda Kingdom.",
    image: assets.Kampala,
  },
  {
    id: "city-04",
    name: "CAPETOWN",
    latitude: 33.9249 ,
    longitude: 18.4241,
    bio: "Cape Town is a port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain. Slowly rotating cable cars climb to the mountain’s flat top, from which there are sweeping views of the city, the busy harbor and boats heading for Robben Island, the notorious prison that once held Nelson Mandela, which is now a living museum.",
    image: assets.Capetown,
  },
  {
    id: "city-05",
    name: "ACCRA",
    latitude:  5.6037,
    longitude: 0.1870,
    bio: "Accra is the capital of Ghana, on the Atlantic coast of West Africa. Kwame Nkrumah Memorial Park honors Ghana’s first president, who helped lead the country to independence. The park contains Nkrumah’s mausoleum and a museum charting his life. Makola Market is the city’s vast, colorful bazaar. Popular seafront spots Labadi Beach and Kokrobite Beach offer golden sand and high-energy nightlife",
    image: assets.Accra,
  },
  {
    id: "city-06",
    name: "ABUJA",
    latitude:  9.0765,
    longitude: 7.3986,
    bio: " Abuja is the capital city of Nigeria, in the middle of the country. The skyline of the city, which was built largely in the 1980s, is dominated by Aso Rock, an enormous monolith. It rises up behind the Presidential Complex, which houses the residence and offices of the Nigerian president in the Three Arms Zone on the eastern edge of the city. Nearby are the National Assembly and the Supreme Court of Nigeria. ",
    image: assets.Abuja,
  },
  {
    id: "city-07",
    name: "CAIRO",
    latitude:  30.0444,
    longitude: 31.2357,
    bio: "Cairo, Egypt’s sprawling capital, is set on the Nile River. At its heart is Tahrir Square and the vast Egyptian Museum, a trove of antiquities including royal mummies and gilded King Tutankhamun artifacts. Nearby, Giza is the site of the iconic pyramids and Great Sphinx, dating to the 26th century BC. In Gezira Island’s leafy Zamalek district, 187m Cairo Tower affords panoramic city views.",
    image: assets.Abuja,
  },
  {
    id: "city-08",
    name: "WASHINGTON",
    latitude: 38.9072 ,
    longitude: 77.0369,
    bio: "Washington, DC, the U.S. capital, is a compact city on the Potomac River, bordering the states of Maryland and Virginia. It’s defined by imposing neoclassical monuments and buildings – including the iconic ones that house the federal government’s 3 branches: the Capitol, White House and Supreme Court. It's also home to iconic museums and performing-arts venues such as the Kennedy Center.",
    image: assets.Washington,
  },
  {
    id: "city-09",
    name: "SEOUL",
    latitude:  37.5665,
    longitude: 126.9780,
    bio:  "Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine trees",
    image: assets.Seoul,
  },
  {
    id: "city-10",
    name: "BARCELONA",
    latitude: 41.3874,
    longitude: 2.1686,
    bio: " Barcelona, the cosmopolitan capital of Spain’s Catalonia region, is known for its art and architecture. The fantastical Sagrada Família church and other modernist landmarks designed by Antoni Gaudí dot the city. Museu Picasso and Fundació Joan Miró feature modern art by their namesakes. City history museum MUHBA, includes several Roman archaeological sites.",
    image: assets.Barcelona,
  },
  {
    id: "city-11",
    name: "BERLIN",
    latitude:  52.5200,
    longitude: 13.4050,
    bio: "Berlin, Germany’s capital, dates to the 13th century. Reminders of the city's turbulent 20th-century history include its Holocaust memorial and the Berlin Wall's graffitied remains. Divided during the Cold War, its 18th-century Brandenburg Gate has become a symbol of reunification. The city's also known for its art scene and modern landmarks like the gold-colored, swoop-roofed Berliner Philharmonie, built in 1963.",
    image: assets.Berlin,
  },
  {
    id: "city-12",
    name: "DUBAI",
    latitude: 25.2048,
    longitude: 55.2708,
    bio: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks.",
    image: assets.Dubai,
  },
  {
    id: "city-13",
    name: "LONDON",
    latitude: 51.5072,
    longitude: 0.1276,
    bio:  "London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic ‘Big Ben’ clock tower and Westminster Abbey, site of British monarch coronations. Across the Thames River, the London Eye observation wheel provides panoramic views of the South Bank cultural complex, and the entire city.",
    image: assets.London,
  },
  {
    id: "city-14",
    name: "NEWYORK",
    latitude: 40.7128 ,
    longitude: 74.0060,
    bio: " New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square.",
    image: assets.Newyork,
  },
  {
    id: "city-15",
    name: "SHANGHAI",
    latitude: 31.2304,
    longitude: 121.4737,
    bio: " Shanghai, on China’s central coast, is the country's biggest city and a global financial hub. Its heart is the Bund, a famed waterfront promenade lined with colonial-era buildings. Across the Huangpu River rises the Pudong district’s futuristic skyline, including 632m Shanghai Tower and the Oriental Pearl TV Tower, with distinctive pink spheres. Sprawling Yu Garden has traditional pavilions, towers and ponds",
    image: assets.Shanghai,
  },{
    id: "city-16",
    name: "SYDNEY",
    latitude:  33.8688,
    longitude: 151.2093,
    bio:  "Sydney, capital of New South Wales and one of Australia's largest cities, is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge and esteemed Royal Botanic Garden nearby. Sydney Tower’s outdoor platform, the Skywalk, offers 360-degree views of the city and suburbs",
    image: assets.Sydney,
  },{
    id: "city-17",
    name: "ROME",
    latitude:  41.9028,
    longitude: 12.4964,
    bio: "Rome is the capital city of Italy. It is also the capital of the Lazio region, the centre of the Metropolitan City of Rome, and a special comune named Comune di Roma Capitale",
    image: assets.Rome,
  },
  {
    id: "city-18",
    name: "PARIS",
    latitude:  48.8566,
    longitude:  2.3522 ,
    bio: " Also known as the Latin Quarter, the 5th arrondissement is home to the Sorbonne university and student-filled cafes. It's also known for its bookshops, including the famed Shakespeare & Company. Family-friendly attractions include the Jardin des Plantes botanical gardens and the National Museum of Natural History. The stately Panthéon building holds the remains of notables like Voltaire and Marie Curie",
    image: assets.Paris,
  },
  {
    id: "city-19",
    name: "CASSABLANCA",
    latitude: 33.5731 ,
    longitude: 7.5898 ,
    bio: "Casablanca is a port city and commercial hub in western Morocco, fronting the Atlantic Ocean. The city's French colonial legacy is seen in its downtown Mauresque architecture, a blend of Moorish style and European art deco. Standing partly over the water, the enormous Hassan II Mosque, completed in 1993, has a 210m minaret topped with lasers directed toward Mecca. ",
    image: assets.Cassablanca,
  },
  {
    id: "city-20",
    name: "st.PETERSBURG",
    latitude: 59.9311 ,
    longitude: 30.3609,
    bio: "St. Petersburg is a Russian port city on the Baltic Sea. It was the imperial capital for 2 centuries, having been founded in 1703 by Peter the Great, subject of the city's iconic “Bronze Horseman” statue. It remains Russia's cultural center, with venues such as the Mariinsky Theatre hosting opera and ballet, and the State Russian Museum showcasing Russian art, from Orthodox icon paintings to Kandinsky works",
    image: assets.Petersburg,
  },
  {
    id: "city-21",
    name: "NEW DELHI",
    latitude:28.7041,
    longitude: 77.1025,
    bio : "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.",
    image: assets.Delhi,
  },
  {
    id: "city-22",
    name: "TOKYO",
    latitude: 35.6762,
    longitude: 139.6503,
    bio : "Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater (in the Edo-Tokyo Museum).",
    image: assets.Tokyo,
  }
  
 
];

export { citiesData, weatherData };

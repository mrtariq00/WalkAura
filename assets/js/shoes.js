const shoes = [
  {
    name: "AirZoom Runner",
    img: "/assets/images/man shoes/shoes3.png",
    gender: "man",
    description:
      "The AirZoom Runner is built for performance with an ultra-light mesh upper that enhances airflow, keeping your feet cool and dry even during long runs. Its advanced sole provides superior grip on both wet and dry surfaces, while the cushioned midsole reduces impact for a smoother stride. Perfect for athletes and casual joggers who want speed without sacrificing comfort.",
    price: 920,
    rating: 4.5,
    raters: 178,
  },
  {
    name: "CloudFlex Pro",
    img: "/assets/images/women shoes/168e985c6d5d6575c0e3e87e6eea0c3d.jpg",
    gender: "women",
    description:
      "The CloudFlex Pro combines everyday fashion with high-performance features. Designed with ultra-soft cushioning, these sneakers adapt to your movement for effortless comfort whether you're at the gym, on a walk, or spending a busy day on your feet. With its modern design and breathable lining, this shoe is perfect for women seeking style, support, and reliability in one package.",
    price: 1100,
    rating: 4.7,
    raters: 240,
  },
  {
    name: "StreetWave Low",
    img: "/assets/images/kid shoes/4e743878-4e4b-49f5-8e7d-22added6e4ab.webp",
    gender: "kid",
    description:
      "The StreetWave Low brings a fun retro vibe to kids' sneakers with a durable rubber outsole designed for playgrounds, sports, and everyday adventures. The lightweight build makes it easy for kids to move freely, while the padded interior ensures lasting comfort. It's a trendy choice for children who want both stylish looks and reliable footwear for school and playtime.",
    price: 1050,
    rating: 4.3,
    raters: 195,
  },
  {
    name: "Peak Trail X",
    img: "/assets/images/man shoes/shoes5.png",
    gender: "man",
    description:
      "Peak Trail X is engineered for explorers who thrive off the beaten path. Its rugged outsole grips rocky, muddy, and uneven terrain, ensuring stability on every adventure. A reinforced toe guard protects against rough surfaces, while the cushioned sole absorbs impact during long hikes. Built for endurance, this shoe is the ideal partner for outdoor enthusiasts seeking durability and comfort.",
    price: 1280,
    rating: 4.6,
    raters: 220,
  },
  {
    name: "Velora Active",
    img: "/assets/images/women shoes/a0cc12b7-5e35-4b26-a134-5d1afa208c89.jpg",
    gender: "women",
    description:
      "Velora Active is a lightweight training shoe crafted for gym sessions, cardio workouts, and running. Featuring breathable mesh with adaptive cushioning, it provides excellent support for intense movement. Its flexible sole allows smooth transitions between exercises, while the sleek style ensures you can wear them casually as well. A versatile choice for women who want one shoe for fitness and everyday wear.",
    price: 1150,
    rating: 4.4,
    raters: 160,
  },
  {
    name: "UrbanEdge Slip-On",
    img: "/assets/images/kid shoes/urban.jpg",
    gender: "kid",
    description:
      "UrbanEdge Slip-On sneakers are designed for kids who need easy, no-fuss footwear. The slip-on design with stretchy side panels ensures children can wear them without help, while the memory foam insole offers long-lasting cushioning. These shoes are lightweight, flexible, and perfect for school, playdates, or casual outings. Parents will love the durability, while kids will love the comfort and style.",
    price: 780,
    rating: 4.2,
    raters: 145,
  },
  {
    name: "SwiftCharge XT",
    img: "/assets/images/man shoes/red_shoes1.png",
    gender: "man",
    description:
      "SwiftCharge XT is a high-performance shoe built for athletes and active men. Its responsive midsole delivers energy return with every step, helping boost speed and agility. The breathable mesh keeps your feet cool, while the reinforced sole ensures excellent traction on multiple surfaces. Perfect for training, running, or gym workouts, it blends cutting-edge performance with sleek design.",
    price: 1150,
    rating: 4.7,
    raters: 265,
  },
  {
    name: "LunaComfort Glide",
    img: "/assets/images/women shoes/casual-women-shoes-500x500.webp",
    gender: "women",
    description:
      "LunaComfort Glide is crafted for women seeking elegance with comfort. Its soft lining prevents irritation, while the lightweight build allows all-day wear without fatigue. The subtle yet stylish design makes it perfect for casual outings, office wear, or travel. With a balance of support, cushioning, and feminine style, these sneakers are a versatile choice for modern women on the go.",
    price: 890,
    rating: 4.3,
    raters: 182,
  },
  {
    name: "AeroSprint Lite",
    img: "/assets/images/man shoes/shoes4.png",
    gender: "man",
    description:
      "AeroSprint Lite is the ultimate choice for speed enthusiasts. Its ultra-light structure minimizes weight while maximizing agility, making it ideal for racing and sprinting. The advanced sole ensures quick response with every step, while the breathable mesh prevents overheating during high-performance activities. Designed for athletes who want to shave seconds off their time without compromising comfort.",
    price: 1020,
    rating: 4.6,
    raters: 210,
  },
  {
    name: "RetroFlex Kids",
    img: "/assets/images/kid shoes/71L9AvQcgGL._UY300_.jpg",
    gender: "kid",
    description:
      "RetroFlex Kids shoes combine timeless sneaker design with modern comfort. The flexible outsole allows easy movement, while the cushioned interior supports little feet during playtime. With a trendy retro look and durable construction, these sneakers are perfect for school or casual outings. Stylish yet practical, they offer kids the best mix of comfort and fashion.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "ClassicStride",
    img: "/assets/images/man shoes/shoes.png",
    gender: "man",
    description:
      "ClassicStride is a modern twist on vintage sneaker styling. It features a breathable upper, cushioned sole, and flexible outsole, making it perfect for both casual and semi-sporty use. Built to withstand daily wear, it provides long-lasting support without compromising fashion. A great choice for men who appreciate timeless sneakers with a contemporary touch.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "GlowStep Junior",
    img: "/assets/images/kid shoes/images (4).jpg",
    gender: "kid",
    description:
      "GlowStep Junior sneakers are playful, colorful, and designed to keep kids comfortable. Their lightweight build makes them ideal for active play, while the durable sole ensures safety and grip. A mix of bright colors adds fun to the design, making them a favorite for children who want both style and comfort during school or playtime.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "Velora Retro",
    img: "/assets/images/women shoes/cc86992805772c087e10e863ef7149f1.jpg_720x720q80.jpg_.webp",
    gender: "women",
    description:
      "Velora Retro blends vintage-inspired fashion with everyday practicality. Its cushioned insole keeps feet relaxed throughout the day, while the breathable material prevents overheating. Stylish yet durable, these sneakers are perfect for casual meetups, shopping, or even light workouts. A versatile shoe for women who love a mix of elegance and sporty charm.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "SparkLite Kids",
    img: "/assets/images/kid shoes/YUNICUS-Toddler-Light-Up-Shoes-Boys-Kids-Shoes-Sport-Sneaker-LED-for-Toddles-Boys-Girls-Little-Kid-13-5M-Blue-Orange_92b62af0-dc3d-4229-8208-6acf3dcec91e.c3eeb25c44ef2699e9d25be9083f1bf5.webp",
    gender: "kid",
    description:
      "SparkLite Kids sneakers light up every step with fun LED features built into the sole. The breathable fabric and padded interior ensure comfort, while the durable outsole keeps kids steady on their feet. Designed for children who love playful and exciting shoes, these sneakers are perfect for school, outdoor activities, or simply showing off to friends.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "PlayRun Kids",
    img: "/assets/images/kid shoes/s-l1200.jpg",
    gender: "kid",
    description:
      "PlayRun Kids shoes are made for active children who love running, jumping, and playing. The shoes feature lightweight support, breathable material, and flexible soles that bend naturally with each step. Parents will appreciate the durable design, while kids will enjoy the sporty style and all-day comfort. Perfect for playgrounds, sports practice, and everyday use.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "LightBeam Sneakers",
    img: "/assets/images/kid shoes/New-LED-Children-Glowing-Shoes-Baby-Luminous-Sneakers-Boys-Lighting-Running-Shoes-Kids-Breathable-Mesh-Sneakers-4.webp",
    gender: "kid",
    description:
      "LightBeam Sneakers bring excitement to every step with glowing LED soles. Designed with breathable mesh, they keep kids' feet cool and fresh even during long hours of play. A cushioned interior ensures comfort, while the durable sole protects against slips. Ideal for kids who enjoy both fashion and fun in their footwear.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "FunWalk Retro",
    img: "/assets/images/kid shoes/images (7).jpg",
    gender: "kid",
    description:
      "FunWalk Retro sneakers are inspired by classic designs but made for modern kids. The flexible outsole provides easy movement, while the cushioned interior ensures long-lasting comfort. Durable and stylish, they work well for school, sports, or casual wear. These sneakers give kids the confidence to move with style and comfort all day long.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "AirZoom Breeze",
    img: "/assets/images/women shoes/olivia_pink_women_sneakers_0440688_1_1000x.webp",
    gender: "women",
    description:
      "AirZoom Breeze combines lightweight design with breathable materials for effortless running and walking. Its cushioned midsole absorbs shock, reducing fatigue during long use, while the stylish look makes it a versatile option for fitness and casual outings. Perfect for women who want athletic performance blended with everyday elegance.",
    price: 920,
    rating: 4.5,
    raters: 178,
  },
  {
    name: "AirZoom Motion",
    img: "/assets/images/women shoes/MRLW-J038854-090524-F25-000.jpg",
    gender: "women",
    description:
      "AirZoom Motion offers an airy, lightweight feel designed for women who want performance and fashion in one shoe. Its breathable upper allows maximum airflow, while the responsive sole keeps energy return high. Perfect for running, training, or casual wear, it blends athletic performance with stylish design for active women.",
    price: 920,
    rating: 4.5,
    raters: 178,
  },
  {
    name: "AirZoom Velocity",
    img: "/assets/images/women shoes/L-AC-0100049_2_fa11d411-14b7-4d1a-8a09-1ca889323940.webp",
    gender: "women",
    description:
      "AirZoom Velocity is designed for high-energy workouts and fast-paced running. Its responsive cushioning delivers smooth strides, while the lightweight build makes it easy to wear for extended sessions. The sleek, stylish design allows it to double as a casual sneaker, making it a reliable and versatile option for women with active lifestyles.",
    price: 920,
    rating: 4.5,
    raters: 178,
  },
  {
    name: "AirZoom Pulse",
    img: "/assets/images/women shoes/IMG_4400_b716fce7-0748-4a41-8912-84f1963dca0b.webp",
    gender: "women",
    description:
      "AirZoom Pulse is crafted for women who want smooth, breathable comfort during workouts and daily use. With a lightweight sole and cushioned interior, it reduces stress on joints and keeps feet fresh throughout the day. Its fashionable design means it pairs easily with both workout clothes and casual outfits, making it a multipurpose shoe.",
    price: 920,
    rating: 4.5,
    raters: 178,
  },
  {
    name: "RetroStride Man",
    img: "/assets/images/man shoes/shoes8.png",
    gender: "man",
    description:
      "RetroStride Man sneakers feature a vintage-inspired design that merges classic looks with modern comfort. They include a cushioned sole for all-day wear, breathable upper materials to prevent sweating, and durable construction that ensures long-lasting use. Perfect for men who want casual sneakers that stand out with a stylish retro vibe.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "RetroMax Men",
    img: "/assets/images/man shoes/shoes7.png",
    gender: "man",
    description:
      "RetroMax Men sneakers bring back the charm of classic streetwear while keeping comfort at the forefront. Built with a durable sole and flexible upper, they offer excellent daily wear reliability. Ideal for men who want a versatile shoe suitable for casual outings, light sports, and everything in between.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "RetroFlex Man",
    img: "/assets/images/man shoes/shoes6.png",
    gender: "man",
    description:
      "RetroFlex Man is designed with a breathable mesh upper, lightweight structure, and cushioned interior, making it an excellent choice for daily wear. The retro-inspired style adds a fashionable edge, while the flexible sole ensures comfort with every step. Built to match both casual outfits and active lifestyles.",
    price: 950,
    rating: 4.4,
    raters: 175,
  },
  {
    name: "TrailBlazer Pro",
    img: "/assets/images/man shoes/9.jpeg",
    gender: "man",
    description:
      "TrailBlazer Pro is engineered for serious hikers and outdoor adventurers. With waterproof construction and advanced traction technology, these shoes handle the toughest terrains while keeping your feet dry and comfortable. The reinforced toe cap and ankle support provide extra protection on rocky paths.",
    price: 1450,
    rating: 4.8,
    raters: 312,
  },
  {
    name: "UrbanCommute",
    img: "/assets/images/man shoes/10.webp",
    gender: "man",
    description:
      "UrbanCommute combines style and functionality for the modern city dweller. These shoes feature memory foam insoles for all-day comfort and slip-resistant soles perfect for busy streets. The sleek design transitions seamlessly from office to evening outings.",
    price: 980,
    rating: 4.6,
    raters: 198,
  },
  {
    name: "MaxComfort Walker",
    img: "/assets/images/man shoes/11.jpeg",
    gender: "man",
    description:
      "MaxComfort Walker is designed for those who spend long hours on their feet. With extra cushioning in the heel and arch support, these shoes reduce fatigue and provide superior comfort. The breathable mesh upper ensures proper airflow throughout the day.",
    price: 1120,
    rating: 4.7,
    raters: 267,
  },
  {
    name: "EliteRunner X",
    img: "/assets/images/man shoes/12.webp",
    gender: "man",
    description:
      "EliteRunner X is built for competitive runners seeking peak performance. Featuring carbon fiber plates for energy return and lightweight construction for speed, these shoes help you achieve your personal best. The adaptive lacing system ensures a secure fit during intense runs.",
    price: 1650,
    rating: 4.9,
    raters: 189,
  },
  {
    name: "CityScape Casual",
    img: "/assets/images/man shoes/13.webp",
    gender: "man",
    description:
      "CityScape Casual offers minimalist design with maximum comfort. These versatile shoes feature a flexible sole that moves naturally with your foot and a simple, clean look that pairs well with any casual outfit. Perfect for weekend wear and relaxed occasions.",
    price: 870,
    rating: 4.4,
    raters: 156,
  },
  {
    name: "GripMaster Trail",
    img: "/assets/images/man shoes/14.webp",
    gender: "man",
    description:
      "GripMaster Trail provides exceptional traction on wet and slippery surfaces. The multi-directional lug pattern digs into loose terrain while the waterproof membrane keeps moisture out. Ideal for hiking, camping, and outdoor work in challenging conditions.",
    price: 1320,
    rating: 4.5,
    raters: 223,
  },
  {
    name: "FlexFlow Training",
    img: "/assets/images/man shoes/15.webp",
    gender: "man",
    description:
      "FlexFlow Training is the ultimate gym companion. With lateral support for weightlifting and flexibility for cardio, these shoes handle every aspect of your workout routine. The stable base and responsive cushioning make them perfect for cross-training.",
    price: 1190,
    rating: 4.6,
    raters: 178,
  },
  {
    name: "Heritage Classic",
    img: "/assets/images/man shoes/16.jpeg",
    gender: "man",
    description:
      "Heritage Classic pays homage to timeless sneaker design while incorporating modern comfort technology. The premium leather upper ages beautifully, and the cushioned insole provides support that lasts all day. A true wardrobe staple for the style-conscious man.",
    price: 1250,
    rating: 4.7,
    raters: 204,
  },
  {
    name: "AeroDynamic Speed",
    img: "/assets/images/man shoes/17.jpeg",
    gender: "man",
    description:
      "AeroDynamic Speed features wind-tunnel tested design elements that reduce drag and enhance performance. The seamless upper minimizes friction points, while the propulsive sole geometry helps maintain momentum. Built for athletes who demand every advantage.",
    price: 1420,
    rating: 4.8,
    raters: 145,
  },
  {
    name: "WorkReady Pro",
    img: "/assets/images/man shoes/18.jpeg",
    gender: "man",
    description:
      "WorkReady Pro combines safety features with all-day comfort for professionals on their feet. With steel toe protection, slip-resistant outsoles, and shock-absorbing midsoles, these shoes meet workplace requirements without sacrificing comfort during long shifts.",
    price: 1380,
    rating: 4.5,
    raters: 267,
  },
  {
    name: "Elegance Walk",
    img: "/assets/images/women shoes/9.jpeg",
    gender: "women",
    description:
      "Elegance Walk redefines comfortable fashion with its sophisticated design and advanced cushioning system. The memory foam footbed molds to your feet while the flexible sole allows natural movement. Perfect for busy days that require both style and comfort.",
    price: 1080,
    rating: 4.7,
    raters: 234,
  },
  {
    name: "PowerStride Trainer",
    img: "/assets/images/women shoes/10.jpeg",
    gender: "women",
    description:
      "PowerStride Trainer delivers serious performance for fitness enthusiasts. With extra support for high-impact activities and breathable materials that wick moisture, these shoes keep you comfortable through the most intense workouts. The vibrant colors add motivation to every session.",
    price: 1220,
    rating: 4.8,
    raters: 189,
  },
  {
    name: "CityWalk Flats",
    img: "/assets/images/women shoes/11.jpg",
    gender: "women",
    description:
      "CityWalk Flats offer the perfect combination of style and practicality for urban living. The foldable design makes them easy to carry, while the cushioned sole provides surprising comfort for all-day wear. Ideal for commuters who need comfortable backup shoes.",
    price: 790,
    rating: 4.3,
    raters: 167,
  },
  {
    name: "TrailQueen Hiker",
    img: "/assets/images/women shoes/12.webp",
    gender: "women",
    description:
      "TrailQueen Hiker is built for women who love outdoor adventures. With waterproof construction, aggressive traction, and women-specific fit, these shoes handle mountain trails with confidence. The supportive midsole reduces fatigue on long hikes.",
    price: 1350,
    rating: 4.6,
    raters: 156,
  },
  {
    name: "FlexDance Studio",
    img: "/assets/images/women shoes/13.jpg",
    gender: "women",
    description:
      "FlexDance Studio shoes are designed for dancers and fitness instructors who need maximum flexibility and floor feel. The split sole design allows natural foot movement while providing just enough cushioning for comfort during long practice sessions.",
    price: 950,
    rating: 4.5,
    raters: 143,
  },
  {
    name: "Bloom Spring",
    img: "/assets/images/women shoes/15.avif",
    gender: "women",
    description:
      "Bloom Spring features floral-inspired designs and fresh pastel colors perfect for the season. The lightweight construction and breathable materials keep your feet comfortable as temperatures rise. A cheerful addition to any spring wardrobe.",
    price: 880,
    rating: 4.4,
    raters: 178,
  },
  {
    name: "Evening Glam",
    img: "/assets/images/women shoes/16.jpeg",
    gender: "women",
    description:
      "Evening Glam combines athletic comfort with sophisticated style for night-out occasions. The metallic accents and sleek silhouette dress up any outfit, while the hidden comfort features ensure you can dance the night away without sore feet.",
    price: 1020,
    rating: 4.6,
    raters: 134,
  },
  {
    name: "YogaFlow Minimal",
    img: "/assets/images/women shoes/17.jpg",
    gender: "women",
    description:
      "YogaFlow Minimal provides the barefoot feel preferred by yoga practitioners while offering protection and grip. The ultra-thin sole allows natural foot movement and better balance, making them perfect for yoga, pilates, and meditation practices.",
    price: 760,
    rating: 4.2,
    raters: 198,
  },
  {
    name: "Weekend Explorer",
    img: "/assets/images/women shoes/18.webp",
    gender: "women",
    description:
      "Weekend Explorer is designed for spontaneous adventures and casual outings. With versatile styling that works with jeans, shorts, or casual dresses, these shoes are ready for anything from brunch dates to park walks to shopping trips.",
    price: 940,
    rating: 4.5,
    raters: 167,
  },
  {
    name: "JumpHigh Basketball",
    img: "/assets/images/kid shoes/9.png",
    gender: "kid",
    description:
      "JumpHigh Basketball shoes are designed for young athletes who love the court. With ankle support for safety during jumps and quick cuts, plus responsive cushioning for energy return, these shoes help kids play their best game while staying comfortable.",
    price: 1120,
    rating: 4.6,
    raters: 145,
  },
  {
    name: "Rainbow Steps",
    img: "/assets/images/kid shoes/10.png",
    gender: "kid",
    description:
      "Rainbow Steps bring colorful fun to every outfit with their vibrant color-block design. The easy Velcro closure makes them simple for kids to put on themselves, while the durable construction stands up to playground adventures and daily wear.",
    price: 820,
    rating: 4.3,
    raters: 123,
  },
  {
    name: "SoccerStar Junior",
    img: "/assets/images/kid shoes/11.png",
    gender: "kid",
    description:
      "SoccerStar Junior features cleats designed for young soccer players learning the game. The lightweight construction doesn't weigh down small feet, while the proper stud pattern provides traction on grass fields. Perfect for practice and weekend games.",
    price: 980,
    rating: 4.5,
    raters: 167,
  },
  {
    name: "Magic Glow",
    img: "/assets/images/kid shoes/12.png",
    gender: "kid",
    description:
      "Magic Glow shoes feature colorful LED lights that change colors with each step. The fun light show delights children while the comfortable fit and easy-care materials please parents. A favorite for parties, playdates, and everyday excitement.",
    price: 890,
    rating: 4.4,
    raters: 156,
  },
  {
    name: "SchoolDay Comfort",
    img: "/assets/images/kid shoes/13.png",
    gender: "kid",
    description:
      "SchoolDay Comfort is designed specifically for long days in the classroom and playground. With supportive arches for growing feet and scuff-resistant materials that maintain their look, these shoes handle the busy school schedule with ease.",
    price: 760,
    rating: 4.2,
    raters: 189,
  },
  {
    name: "BeachWalk Sandals",
    img: "/assets/images/kid shoes/14.png",
    gender: "kid",
    description:
      "BeachWalk Sandals are perfect for summer adventures with quick-dry materials and water-friendly design. The adjustable straps ensure a secure fit, while the comfortable footbed protects tender feet from hot sand and rough surfaces.",
    price: 680,
    rating: 4.1,
    raters: 134,
  },
  {
    name: "WinterWarm Boots",
    img: "/assets/images/kid shoes/15.png",
    gender: "kid",
    description:
      "WinterWarm Boots keep little feet cozy in cold weather with insulated construction and waterproof exterior. The easy-on design and non-slip soles make them practical for snowy days, while the fun patterns add seasonal cheer.",
    price: 1250,
    rating: 4.5,
    raters: 145,
  },
  {
    name: "BalletDream Sneakers",
    img: "/assets/images/kid shoes/16.png",
    gender: "kid",
    description:
      "BalletDream Sneakers combine the elegant look of ballet flats with the practical comfort of sneakers. The flexible sole allows natural movement while providing protection, making them perfect for dance classes, parties, and dress-up occasions.",
    price: 910,
    rating: 4.4,
    raters: 123,
  },
  {
    name: "AlphaRunner Pro",
    img: "/assets/images/man shoes/19.webp",
    gender: "man",
    description:
      "AlphaRunner Pro features advanced carbon technology for elite running performance. The energy-return midsole and adaptive fit system provide personalized comfort and maximum speed efficiency for competitive runners.",
    price: 1850,
    rating: 4.9,
    raters: 278,
  },
  {
    name: "UrbanNomad",
    img: "/assets/images/man shoes/20.jpg",
    gender: "man",
    description:
      "UrbanNomad combines rugged outdoor durability with city-style aesthetics. The waterproof construction and all-terrain grip make these shoes perfect for urban explorers who venture from city streets to park trails.",
    price: 1320,
    rating: 4.6,
    raters: 189,
  },
  {
    name: "Executive Comfort",
    img: "/assets/images/man shoes/21.png",
    gender: "man",
    description:
      "Executive Comfort offers business-casual style with exceptional comfort technology. The leather upper maintains professional appearance while the hidden cushioning system provides all-day support for workplace demands.",
    price: 1650,
    rating: 4.7,
    raters: 234,
  },
  {
    name: "GravityDefyer",
    img: "/assets/images/man shoes/22.png",
    gender: "man",
    description:
      "GravityDefyer uses advanced shock absorption technology to reduce impact on joints. Perfect for people who stand all day or have foot discomfort, these shoes transform walking comfort with every step.",
    price: 1950,
    rating: 4.8,
    raters: 312,
  },
  {
    name: "Marathon Elite",
    img: "/assets/images/man shoes/23.png",
    gender: "man",
    description:
      "Marathon Elite is engineered for long-distance runners seeking record-breaking performance. The ultra-lightweight design and maximum energy return help maintain pace through the toughest miles of competition.",
    price: 2100,
    rating: 4.9,
    raters: 189,
  },
  {
    name: "Stealth Black",
    img: "/assets/images/man shoes/24.png",
    gender: "man",
    description:
      "Stealth Black offers minimalist design with maximum performance. The all-black aesthetic works for both athletic and casual wear, while the technical features provide superior comfort and durability.",
    price: 1250,
    rating: 4.5,
    raters: 167,
  },
  {
    name: "Power Lift",
    img: "/assets/images/women shoes/19.jpeg",
    gender: "women",
    description:
      "Power Lift is designed for women who strength train, featuring a stable base for heavy lifts and flexible forefoot for dynamic movements. The secure fit system ensures safety during intense workouts.",
    price: 1120,
    rating: 4.8,
    raters: 134,
  },
  {
    name: "Comfort Walk Plus",
    img: "/assets/images/women shoes/20.webp",
    gender: "women",
    description:
      "Comfort Walk Plus uses medical-grade orthotic technology for exceptional foot support. Perfect for people with foot conditions or those who spend long hours standing, these shoes provide life-changing comfort.",
    price: 1650,
    rating: 4.9,
    raters: 278,
  },
  {
    name: "Dance Fusion",
    img: "/assets/images/women shoes/24.webp",
    gender: "women",
    description:
      "Dance Fusion combines dance shoe flexibility with athletic sneaker support. The split-sole design allows beautiful foot articulation while providing cushioning for studio floors and practice sessions.",
    price: 1050,
    rating: 4.6,
    raters: 167,
  },
  {
    name: "American Flex",
    img: "/assets/images/women shoes/14.webp",
    gender: "women",
    description:
      "Rainbow Dash brings joyful color to athletic wear with vibrant rainbow patterns that celebrate diversity and positivity. The uplifting design motivates your workout while the performance features support your goals.",
    price: 950,
    rating: 4.5,
    raters: 189,
  },
  {
    name: "Winter Luxe",
    img: "/assets/images/women shoes/21.webp",
    gender: "women",
    description:
      "Winter Luxe combines fashion-forward style with cold-weather functionality. The waterproof suede and faux fur lining create a luxurious winter boot that keeps you warm and stylish in snowy conditions.",
    price: 1850,
    rating: 4.7,
    raters: 145,
  },
  {
    name: "Beach Cruiser",
    img: "/assets/images/women shoes/22.jpg",
    gender: "women",
    description:
      "Beach Cruiser offers easy slip-on design for casual summer days. The water-resistant materials and quick-dry lining make these perfect for beach trips, poolside lounging, and vacation adventures.",
    price: 720,
    rating: 4.3,
    raters: 178,
  },
  {
    name: "Office Elegance",
    img: "/assets/images/women shoes/3.jpg",
    gender: "women",
    description:
      "Office Elegance provides professional style with hidden comfort technology. These shoes feature memory foam insoles and flexible construction that withstands all-day wear in corporate environments.",
    price: 1350,
    rating: 4.6,
    raters: 223,
  },
  {
    name: "Animal Friends",
    img: "/assets/images/kid shoes/17.png",
    gender: "kid",
    description:
      "Animal Friends feature cute animal faces and patterns that children adore. Each pair comes with matching character stories that encourage imaginative play and storytelling adventures.",
    price: 850,
    rating: 4.4,
    raters: 178,
  },
  {
    name: "GrowWithMe",
    img: "/assets/images/kid shoes/18.png",
    gender: "kid",
    description:
      "GrowWithMe features adjustable sizing technology that expands as children's feet grow. The innovative design provides up to three sizes in one shoe, offering exceptional value for growing families.",
    price: 1650,
    rating: 4.8,
    raters: 223,
  },
  {
    name: "First Steps",
    img: "/assets/images/kid shoes/19.png",
    gender: "kid",
    description:
      "First Steps is specially designed for toddlers taking their earliest walks. The flexible soles and extra-wide base provide stability and confidence while learning to walk and explore the world.",
    price: 780,
    rating: 4.5,
    raters: 189,
  },
  {
    name: "Space Explorer",
    img: "/assets/images/kid shoes/20.png",
    gender: "kid",
    description:
      "Space Explorer features planetary designs and glow-in-the-dark elements that inspire cosmic adventures. The educational packaging includes fun facts about our solar system for learning through play.",
    price: 950,
    rating: 4.6,
    raters: 156,
  },
  {
    name: "Water Splashers",
    img: "/assets/images/kid shoes/21.png",
    gender: "kid",
    description:
      "Water Splashers are perfect for pool parties and beach days with quick-dry materials and drainage ports. The secure strap system ensures they stay on during water play and swimming activities.",
    price: 680,
    rating: 4.3,
    raters: 145,
  },
  {
    name: "Artistic Expression",
    img: "/assets/images/kid shoes/22.png",
    gender: "kid",
    description:
      "Artistic Expression comes with washable markers allowing kids to customize their own shoe designs. The creative opportunity encourages artistic expression while the washable feature lets them redesign repeatedly.",
    price: 1150,
    rating: 4.7,
    raters: 134,
  },
  {
    name: "Winter Wonder",
    img: "/assets/images/kid shoes/23.png",
    gender: "kid",
    description:
      "Winter Wonder keeps little feet warm and dry in snowy conditions with thermal insulation and waterproof construction. The fun snowflake patterns and bright colors make cold weather dressing enjoyable.",
    price: 1250,
    rating: 4.5,
    raters: 167,
  },
  {
    name: "School Star",
    img: "/assets/images/kid shoes/24.png",
    gender: "kid",
    description:
      "School Star combines classroom-appropriate style with playground-ready durability. The scuff-resistant materials maintain their appearance while the comfortable fit lasts through busy school days.",
    price: 890,
    rating: 4.4,
    raters: 189,
  },
];

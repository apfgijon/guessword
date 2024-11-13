
const words = [
    {
      "word": "sunrise",
      "hint1": "The time of day when the sun appears.",
      "hint2": "It marks the beginning of daylight.",
      "explain": "Sunrise is the moment when the sun first appears over the horizon, bringing light to the start of a new day.\n\nA poem:\n\nSunrise breaks with colors bright,\nChasing shadows of the night.\nA golden glow, a day’s new start,\nWith warmth that fills the waking heart."
    },
    {
      "word": "friendship",
      "hint1": "A close bond between people.",
      "hint2": "Built on trust and shared moments.",
      "explain": "Friendship is a deep bond formed between people, built on trust, support, and shared experiences.\n\nA poem:\n\nFriendship holds with gentle hands,\nThrough laughter shared and life’s demands.\nA steady light, a faithful guide,\nWith friends so true, hearts open wide."
    },
    {
      "word": "laughter",
      "hint1": "The sound of joy and amusement.",
      "hint2": "It’s often contagious in happy moments.",
      "explain": "Laughter is the joyful sound we make when we’re amused or happy, often shared with others.\n\nA poem:\n\nLaughter rings, so warm and bright,\nChasing worries out of sight.\nA melody of joy and cheer,\nIn every laugh, love draws near."
    },
    {
      "word": "ocean",
      "hint1": "A vast body of saltwater.",
      "hint2": "It covers much of Earth and has waves.",
      "explain": "The ocean is a massive, salty body of water that spans across Earth, housing diverse marine life.\n\nA poem:\n\nOcean waves roll to the shore,\nA timeless rhythm, a mighty roar.\nWith depths unknown and endless blue,\nThe ocean holds its secrets true."
    },
    {
      "word": "journey",
      "hint1": "A trip from one place to another.",
      "hint2": "Can be physical or emotional.",
      "explain": "A journey is an act of traveling from one place to another, often representing growth or change.\n\nA poem:\n\nOn paths unknown, we walk ahead,\nWith every step, our fears we shed.\nA journey long, a story told,\nIn each new mile, our dreams unfold."
    },
    {
      "word": "whisper",
      "hint1": "A soft, quiet sound or voice.",
      "hint2": "Used to convey secrets.",
      "explain": "A whisper is a soft way of speaking or making sound, often intimate and secretive.\n\nA poem:\n\nWhisper soft, like drifting mist,\nA sound so faint, you’d barely list.\nSecrets shared in shadowed night,\nEchoes carried, out of sight."
    },
    {
      "word": "dream",
      "hint1": "A sequence of thoughts during sleep.",
      "hint2": "Also means a cherished aspiration.",
      "explain": "A dream is a series of thoughts and images experienced during sleep, or it can mean a strong aspiration.\n\nA poem:\n\nDreams take flight in silent night,\nGuided softly by starlight.\nA world unknown, yet full of grace,\nA fleeting touch, a warm embrace."
    },
    {
      "word": "autumn",
      "hint1": "The season when leaves fall.",
      "hint2": "It’s a time of harvest and cooler weather.",
      "explain": "Autumn is the season between summer and winter when leaves change color and fall, bringing a crispness to the air.\n\nA poem:\n\nAutumn leaves in colors bright,\nDrift down in the fading light.\nA season’s change, a time to rest,\nIn autumn’s arms, we feel blessed."
    },
    {
      "word": "memory",
      "hint1": "A recollection of past events.",
      "hint2": "It’s something you can cherish or miss.",
      "explain": "Memory is the ability to recall past experiences, holding moments dear in our minds.\n\nA poem:\n\nMemories sweet, of days long past,\nMoments treasured, built to last.\nIn quiet thoughts, they come alive,\nIn heart’s own way, they still survive."
    },
    {
      "word": "horizon",
      "hint1": "The line where the earth meets the sky.",
      "hint2": "Seen best at sunrise or sunset.",
      "explain": "The horizon is the distant line where the earth and sky appear to meet, often symbolizing new possibilities.\n\nA poem:\n\nThe horizon calls, so far and true,\nA line where sky meets ocean blue.\nWith every dawn, a hope revealed,\nA path ahead, forever sealed."
    },
    {
      "word": "shadow",
      "hint1": "A dark area cast by an object blocking light.",
      "hint2": "It follows you in sunlight.",
      "explain": "A shadow is a dark shape or outline cast by an object blocking light, often a reminder of the light’s presence.\n\nA poem:\n\nShadow follows, silent and deep,\nA quiet companion we often keep.\nThrough light and dark, it stays close by,\nA hidden friend beneath the sky."
    },
    {
      "word": "rain",
      "hint1": "Water droplets that fall from clouds.",
      "hint2": "It refreshes the earth and helps plants grow.",
      "explain": "Rain is the precipitation of water droplets from the sky, vital for nourishing the earth.\n\nA poem:\n\nRain falls soft on fields so bare,\nBreathing life to trees and air.\nIn every drop, the earth does sing,\nA gentle dance of life in spring."
    },
    {
      "word": "forest",
      "hint1": "A large area covered with trees.",
      "hint2": "Home to many animals and plants.",
      "explain": "A forest is a dense area filled with trees, home to a rich variety of flora and fauna.\n\nA poem:\n\nIn forest deep, the silence grows,\nA world alive where no one knows.\nWith towering trees and shaded light,\nThe forest holds a beauty bright."
    },
    {
      "word": "peace",
      "hint1": "A state of calm without conflict.",
      "hint2": "Often found in quiet moments or within.",
      "explain": "Peace is the absence of conflict and the presence of tranquility, a state we often seek within ourselves.\n\nA poem:\n\nPeace descends like morning dew,\nIn gentle calm, life feels anew.\nA soft embrace, a still, clear mind,\nIn peace, the world grows kind."
    },
    {
      "word": "flower",
      "hint1": "A blooming part of a plant.",
      "hint2": "It comes in various colors and fragrances.",
      "explain": "A flower is the reproductive part of a plant, often brightly colored and fragrant, attracting pollinators.\n\nA poem:\n\nFlower bright in garden fair,\nLends its scent to springtime air.\nA beauty born from earth’s embrace,\nWith petals soft and gentle grace."
    },
    {
      "word": "cloud",
      "hint1": "A visible mass of water droplets in the sky.",
      "hint2": "They bring rain or shade on sunny days.",
      "explain": "A cloud is a collection of tiny water droplets or ice crystals suspended in the sky, often bringing rain.\n\nA poem:\n\nClouds drift by on breezes light,\nChanging shapes in endless flight.\nThey hold the rain, the storm, the snow,\nAnd paint the sky with gentle glow."
    },
    {
      "word": "river",
      "hint1": "A flowing body of water.",
      "hint2": "Often leads to a lake or ocean.",
      "explain": "A river is a natural stream of water flowing toward a larger body of water, providing life to plants and animals along its banks.\n\nA poem:\n\nRiver flows with gentle grace,\nWinding through each secret place.\nIts waters sing, a song so deep,\nIn quiet lands, where willows weep."
    },
    {
      "word": "garden",
      "hint1": "A place where flowers and plants grow.",
      "hint2": "It’s often full of colors and fragrances.",
      "explain": "A garden is an area where plants, flowers, and sometimes vegetables are cultivated, often a place of beauty and peace.\n\nA poem:\n\nIn garden’s bloom, life takes its stand,\nA vibrant touch across the land.\nWith petals bright and leaves so green,\nA hidden world, a tranquil scene."
    },
    {
      "word": "mountain",
      "hint1": "A large natural elevation of the earth’s surface.",
      "hint2": "It can be climbed or hiked for a view.",
      "explain": "A mountain is a tall, natural elevation of the earth, often with steep sides and a peak at the top.\n\nA poem:\n\nMountain high, above the land,\nStanding bold, so proud and grand.\nIn sun and storm, it keeps its place,\nA giant in the sky’s embrace."
    },
    {
      "word": "fire",
      "hint1": "It provides warmth and light.",
      "hint2": "It can also be dangerous if uncontrolled.",
      "explain": "Fire is a chemical reaction that produces heat, light, and often a comforting warmth, used for cooking, warmth, and celebration.\n\nA poem:\n\nFire dances, bright and warm,\nA flickering light in darkest storm.\nIt sparks and glows, a fierce delight,\nA beacon in the endless night."
    },
    {
      "word": "feather",
      "hint1": "It covers birds and helps them fly.",
      "hint2": "It’s soft and lightweight.",
      "explain": "A feather is a soft, light structure covering birds, aiding them in flight and insulation.\n\nA poem:\n\nFeather light, on breezes high,\nFloats softly through the open sky.\nA trace of wings, a gentle grace,\nA remnant left from soaring space."
    },
    {
      "word": "window",
      "hint1": "An opening in a wall for light or view.",
      "hint2": "It’s often covered with glass.",
      "explain": "A window is an opening in a wall that lets in light, air, and offers a view to the outside world.\n\nA poem:\n\nWindow clear to skies so blue,\nShows the world in morning’s hue.\nA frame of life, of night and day,\nThrough which our dreams find their way."
    },
    {
      "word": "star",
      "hint1": "A shining object in the night sky.",
      "hint2": "It twinkles and is part of constellations.",
      "explain": "A star is a luminous ball of gas, mostly hydrogen and helium, that shines brightly in the night sky.\n\nA poem:\n\nStars above in darkened skies,\nSparkle bright before our eyes.\nThey guide the lost, they light the way,\nIn endless night, they choose to stay."
    },
    {
      "word": "desert",
      "hint1": "A dry area with little rainfall.",
      "hint2": "It often has sand and few plants.",
      "explain": "A desert is a dry, barren region with very little rainfall, where only certain plants and animals can survive.\n\nA poem:\n\nDesert sands in golden hue,\nStretch far and wide, with skies so blue.\nIn silence deep, the sands remain,\nA quiet land, free from rain."
    },
    {
      "word": "forest",
      "hint1": "A large area filled with trees.",
      "hint2": "It’s home to many animals and plants.",
      "explain": "A forest is a large area dominated by trees and wildlife, providing a habitat for countless species.\n\nA poem:\n\nForest deep with shadows cast,\nHolds secrets old, from ages past.\nIn leafy shade and branches tall,\nNature’s voice begins to call."
    },
    {
      "word": "rainbow",
      "hint1": "A colorful arc seen after rain.",
      "hint2": "It has seven distinct colors.",
      "explain": "A rainbow is a spectrum of light that appears when sunlight shines through rain, creating colors in the sky.\n\nA poem:\n\nRainbow arcs in colors bright,\nA promise seen in morning light.\nAcross the sky, it fades too fast,\nA fleeting bridge the rain has cast."
    },
    {
      "word": "shell",
      "hint1": "A hard outer covering, often found on the beach.",
      "hint2": "Many sea creatures use it for protection.",
      "explain": "A shell is a hard, protective outer layer created by an animal, found commonly on beaches.\n\nA poem:\n\nShells lie still on sandy shore,\nWhispers kept of ocean’s lore.\nWith spirals smooth and colors pale,\nThey tell the sea’s forgotten tale."
    },
    {
      "word": "island",
      "hint1": "A piece of land surrounded by water.",
      "hint2": "It’s isolated from the mainland.",
      "explain": "An island is a piece of land completely surrounded by water, often a secluded natural paradise.\n\nA poem:\n\nIsland rests in waters clear,\nA peaceful place, so far yet near.\nWith palm trees tall and beaches white,\nIt stands alone in pure delight."
    },
    {
      "word": "sky",
      "hint1": "The expanse above us, visible from Earth.",
      "hint2": "It changes colors throughout the day.",
      "explain": "The sky is the expanse above Earth where clouds, stars, and the sun appear, shifting from dawn to dusk.\n\nA poem:\n\nSky above, in endless blue,\nHolds the stars and sun so true.\nFrom dawn till dusk, it stretches wide,\nAn open world where dreams reside."
    },
    {
      "word": "wave",
      "hint1": "A movement of water, often seen in oceans.",
      "hint2": "It’s also a common greeting gesture.",
      "explain": "A wave is a movement of water rising and falling, often seen on oceans and lakes, as well as a friendly gesture.\n\nA poem:\n\nWaves roll in with steady beat,\nA rhythm strong, yet soft and sweet.\nThey kiss the shore and then recede,\nAn ocean’s breath, a calming deed."
    },
    {
      "word": "tree",
      "hint1": "A tall plant with a trunk and branches.",
      "hint2": "It provides shade and oxygen.",
      "explain": "A tree is a large plant with a trunk, branches, and leaves, offering shade, oxygen, and a home for wildlife.\n\nA poem:\n\nTree stands tall with branches wide,\nReaching high on every side.\nRoots run deep, leaves dance and sway,\nA guardian strong, night and day."
    },
    {
      "word": "bird",
      "hint1": "A creature with feathers and wings.",
      "hint2": "Many can fly and sing.",
      "explain": "A bird is a warm-blooded animal with feathers, wings, and a beak, often known for its ability to fly and sing.\n\nA poem:\n\nBird in sky, with wings so free,\nSings a song for you and me.\nIn fields and trees, it finds its way,\nGreeting each new brightened day."
    },
    {
      "word": "flower",
      "hint1": "A part of a plant that often has petals and a pleasant smell.",
      "hint2": "It blooms in different colors and shapes.",
      "explain": "A flower is the colorful, blooming part of a plant, often fragrant and used to attract pollinators.\n\nA poem:\n\nFlowers bloom in colors bright,\nTurning faces to the light.\nA touch of beauty, soft and sweet,\nIn gardens where the petals meet."
    },
    {
      "word": "stone",
      "hint1": "A small piece of rock found on the ground.",
      "hint2": "It’s hard and solid, often used in building.",
      "explain": "A stone is a hard, solid material formed from rock, often found in nature or used in construction.\n\nA poem:\n\nStone lies still, both rough and strong,\nIn rivers deep, it rolls along.\nA silent strength, in earth it stays,\nUnmoving through the endless days."
    },
    {
      "word": "path",
      "hint1": "A trail or way made for walking.",
      "hint2": "It leads you from one place to another.",
      "explain": "A path is a narrow way or trail meant for walking, guiding travelers through nature or towns.\n\nA poem:\n\nPath winds through the forest green,\nA trail unseen, yet worn and keen.\nWith every step, new sights unfold,\nA journey’s tale, forever told."
    },
    {
      "word": "light",
      "hint1": "It allows us to see in the dark.",
      "hint2": "The sun is the main source of it.",
      "explain": "Light is a natural or artificial brightness that makes vision possible, coming from sources like the sun or lamps.\n\nA poem:\n\nLight breaks through in morning’s glow,\nChasing shadows, soft and slow.\nA gentle warmth, a guiding ray,\nTurns the darkest night to day."
    },
    {
      "word": "sand",
      "hint1": "Tiny grains found on beaches and deserts.",
      "hint2": "It’s soft and easy to walk on.",
      "explain": "Sand is a loose, granular material found on beaches and deserts, made of tiny particles of rocks and minerals.\n\nA poem:\n\nSand beneath our toes so bare,\nA blanket warm in ocean’s care.\nEach grain a part of earth’s grand plan,\nA tiny piece of sea and land."
    },
    {
      "word": "moon",
      "hint1": "A celestial body that orbits the Earth.",
      "hint2": "It shines in the night sky.",
      "explain": "The moon is Earth's natural satellite, visible at night as a bright, round object in the sky.\n\nA poem:\n\nMoon above in quiet night,\nGlows with calm and silver light.\nA faithful friend in skies so high,\nWatching over as dreams drift by."
    },
    {
      "word": "boat",
      "hint1": "A small vessel for traveling on water.",
      "hint2": "It can be rowed, sailed, or powered by an engine.",
      "explain": "A boat is a watercraft for travel on water, used for fishing, transport, or leisure.\n\nA poem:\n\nBoat drifts on a gentle wave,\nOver waters deep and brave.\nWith sail or oar, it journeys far,\nGuided by the evening star."
    },
    {
      "word": "rose",
      "hint1": "A flower with thorns and a lovely smell.",
      "hint2": "Often red, pink, or white in color.",
      "explain": "A rose is a fragrant flower known for its beauty and thorns, often symbolizing love.\n\nA poem:\n\nRose blooms red with petals fine,\nA beauty rare, a love divine.\nWith scent so sweet, it stands alone,\nA fragrant heart, a thorny throne."
    },
    {
      "word": "bridge",
      "hint1": "A structure that connects two places over water or land.",
      "hint2": "It can be walked, driven, or ridden over.",
      "explain": "A bridge is a structure built to span physical obstacles like rivers or valleys, allowing passage.\n\nA poem:\n\nBridge across the river wide,\nConnects each shore from side to side.\nA path for all, both young and old,\nA journey shared, a story told."
    },
    {
      "word": "chair",
      "hint1": "A piece of furniture you sit on.",
      "hint2": "It often has a back and four legs.",
      "explain": "A chair is a piece of furniture designed for sitting, typically with a back, seat, and sometimes arms.\n\nA poem:\n\nChair awaits with open grace,\nA resting spot, a quiet place.\nIn rooms of light, by fireside’s gleam,\nIt holds the heart, it holds the dream."
    },
    {
      "word": "cloud",
      "hint1": "A visible mass of water droplets in the sky.",
      "hint2": "They bring rain or shade on sunny days.",
      "explain": "A cloud is a collection of tiny water droplets or ice crystals suspended in the sky, often bringing rain.\n\nA poem:\n\nClouds drift by on breezes light,\nChanging shapes in endless flight.\nThey hold the rain, the storm, the snow,\nAnd paint the sky with gentle glow."
    },
    {
      "word": "key",
      "hint1": "A small tool used to unlock doors.",
      "hint2": "It often has teeth and a handle.",
      "explain": "A key is a small metal tool used to open locks, symbolizing access and security.\n\nA poem:\n\nKey in hand, a secret kept,\nUnlocks the door where treasures slept.\nA twist of hope, a turn of fate,\nIt opens doors we’ve longed to wait."
    },
    {
      "word": "stone",
      "hint1": "A hard, natural material found on the ground.",
      "hint2": "It’s often small and can be held in your hand.",
      "explain": "A stone is a small, hard piece of rock, formed naturally and often smooth to the touch.\n\nA poem:\n\nStone lies still by river’s side,\nCarved by water, smooth and wide.\nIt holds the earth’s old secrets dear,\nIn silence deep, its tales we hear."
    },
    {
      "word": "clock",
      "hint1": "A device that shows the time.",
      "hint2": "It has numbers, hands, or a digital display.",
      "explain": "A clock is an instrument used to measure and display time, keeping track of hours, minutes, and seconds.\n\nA poem:\n\nClock ticks on with steady pace,\nMarking moments we can’t replace.\nIn every tick, a second flies,\nA silent march beneath the skies."
    },
    {
      "word": "river",
      "hint1": "A flowing body of water.",
      "hint2": "It often leads to lakes or the ocean.",
      "explain": "A river is a large natural stream of water flowing towards a lake, sea, or another river.\n\nA poem:\n\nRiver winds through fields and trees,\nA song of water, soft as breeze.\nIn gentle waves, it travels far,\nA silver path beneath the star."
    },
    {
      "word": "lamp",
      "hint1": "A device that produces light.",
      "hint2": "Often used on desks or by beds.",
      "explain": "A lamp is a small electric or oil-based light source, often used to brighten a space for reading or work.\n\nA poem:\n\nLamp shines bright in evening’s calm,\nCasting warmth, a gentle balm.\nWith light so soft, it fills the room,\nGuiding us through evening’s gloom."
    },
    {
      "word": "book",
      "hint1": "A collection of pages with words or pictures.",
      "hint2": "It’s used for reading and learning.",
      "explain": "A book is a collection of written or printed pages bound together, often containing stories or information.\n\nA poem:\n\nBooks hold worlds in pages tight,\nAdventures bold in black and white.\nWith every word, a tale unfolds,\nIn quiet corners, secrets told."
    },
    {
      "word": "mirror",
      "hint1": "A surface that reflects images.",
      "hint2": "Often used to see your own reflection.",
      "explain": "A mirror is a smooth, reflective surface, typically made of glass, that shows a clear image of anything in front of it.\n\nA poem:\n\nMirror gleams with silver light,\nReflecting day and shadowed night.\nIn every gaze, a truth it shows,\nThe face we know, the heart it knows."
    },
    {
      "word": "field",
      "hint1": "An open area of land, often covered in grass.",
      "hint2": "Used for growing crops or as pasture.",
      "explain": "A field is a large, open area of land, often used for farming or grazing animals.\n\nA poem:\n\nField of green beneath the sky,\nA rolling plain where breezes fly.\nIn open space, the heart feels free,\nA world of calm, where life can be."
    },
    {
      "word": "road",
      "hint1": "A path for vehicles or people to travel on.",
      "hint2": "Often leads from one place to another.",
      "explain": "A road is a paved path for vehicles or people, connecting places and making travel easier.\n\nA poem:\n\nRoad ahead, so straight and wide,\nA journey waits on either side.\nWith every mile, a tale unfolds,\nA path that leads to dreams untold."
    },
    {
      "word": "cup",
      "hint1": "A small container for drinking.",
      "hint2": "Often made of glass, ceramic, or plastic.",
      "explain": "A cup is a small container used for drinking liquids, typically with a handle for holding.\n\nA poem:\n\nCup held warm in morning light,\nA gentle start, a moment bright.\nIn every sip, a comfort deep,\nA quiet calm for hearts to keep."
    },
    {
      "word": "tree",
      "hint1": "A tall plant with branches and leaves.",
      "hint2": "Provides shade and produces oxygen.",
      "explain": "A tree is a large, woody plant with branches and leaves, offering shade and clean air.\n\nA poem:\n\nTree stands tall with branches high,\nA shelter broad beneath the sky.\nIn every leaf, in roots so deep,\nIt guards the earth in silent keep."
    },
    {
      "word": "song",
      "hint1": "A piece of music with words.",
      "hint2": "Often sung or played on instruments.",
      "explain": "A song is a musical composition with lyrics, usually sung and often expressing emotions or stories.\n\nA poem:\n\nSong flows soft like rivers clear,\nA melody for hearts to hear.\nIn every note, a feeling bright,\nA gentle sound, a pure delight."
    },
    {
      "word": "sun",
      "hint1": "The star at the center of our solar system.",
      "hint2": "Provides light and warmth to Earth.",
      "explain": "The sun is a star that provides light and heat, essential for life on Earth.\n\nA poem:\n\nSun above in skies so blue,\nBrings warmth and life in golden hue.\nWith every rise and gentle fall,\nIt lights the world for one and all."
    },
    {
      "word": "fruit",
      "hint1": "A sweet, edible part of a plant.",
      "hint2": "Includes apples, oranges, and bananas.",
      "explain": "Fruit is the sweet, edible part of a plant that contains seeds, often enjoyed as a healthy food.\n\nA poem:\n\nFruit so ripe in colors bright,\nA taste of summer, pure delight.\nWith every bite, a sweetness true,\nNature’s gift for me and you."
    },
    {
      "word": "leaf",
      "hint1": "A green part of a plant or tree.",
      "hint2": "It changes color and falls in autumn.",
      "explain": "A leaf is the part of a plant that grows from the stem, often green and used for photosynthesis.\n\nA poem:\n\nLeaves of green in sunlight bright,\nFlutter soft in morning light.\nThey dance in winds both near and far,\nA gentle touch from tree to star."
    },
    {
      "word": "door",
      "hint1": "A barrier that opens and closes to allow entry.",
      "hint2": "It’s found at the entrance of buildings and rooms.",
      "explain": "A door is a movable barrier that allows entry or exit to a room or building when opened.\n\nA poem:\n\nDoor swings wide to welcome in,\nA passage where new tales begin.\nWith every step through doors we see,\nThe path that leads to destiny."
    },
    {
      "word": "lake",
      "hint1": "A large body of water surrounded by land.",
      "hint2": "Often a popular spot for swimming or fishing.",
      "explain": "A lake is a sizable, inland body of fresh or salt water, surrounded by land and often tranquil.\n\nA poem:\n\nLake so calm with waters deep,\nA place where dreams and secrets keep.\nIn mirrored surface, skies do gleam,\nA quiet, peaceful, endless dream."
    },
    {
      "word": "sky",
      "hint1": "The expanse above, where clouds and stars appear.",
      "hint2": "It changes colors from day to night.",
      "explain": "The sky is the open space above Earth, where we see clouds, sun, moon, and stars, changing hues from dawn to dusk.\n\nA poem:\n\nSky above in endless blue,\nHolds the stars and daylight too.\nIn morning’s rise or evening’s fall,\nIt wraps the earth in beauty’s thrall."
    },
    {
      "word": "plant",
      "hint1": "A living organism that grows in soil.",
      "hint2": "It needs sunlight and water to thrive.",
      "explain": "A plant is a living organism, rooted in the ground, that grows leaves, stems, and sometimes flowers, contributing to the ecosystem.\n\nA poem:\n\nPlants reach high with leaves so green,\nIn garden beds, a gentle scene.\nWith sun and rain, they grow so tall,\nA gift of life for one and all."
    },
    {
      "word": "seed",
      "hint1": "The starting point of a plant’s life.",
      "hint2": "It’s planted in soil to grow.",
      "explain": "A seed is the small part of a plant that can grow into a new plant when given the right conditions of soil, water, and sunlight.\n\nA poem:\n\nSeed lies still beneath the earth,\nWaiting there for spring’s rebirth.\nWith tender care, it sprouts anew,\nA life begun, fresh and true."
    },
    {
      "word": "star",
      "hint1": "A bright object in the night sky.",
      "hint2": "It twinkles and is far away in space.",
      "explain": "A star is a massive, luminous ball of gas in space that shines brightly, visible from Earth at night.\n\nA poem:\n\nStars above in skies so wide,\nTwinkle soft as worlds collide.\nIn every light, a distant fire,\nA wonder deep, a heart’s desire."
    },
    {
      "word": "cake",
      "hint1": "A sweet baked dessert, often with icing.",
      "hint2": "Common at birthday parties and celebrations.",
      "explain": "A cake is a sweet baked dessert, often decorated with icing and enjoyed on special occasions.\n\nA poem:\n\nCake so sweet, with layers high,\nA treat for all who pass it by.\nIn every bite, a joy so sweet,\nA festive treat, a tasty feat."
    },
    {
      "word": "fountain",
      "hint1": "A structure that shoots water into the air.",
      "hint2": "Often seen in parks and plazas.",
      "explain": "A fountain is a decorative structure that sprays water, often found in public spaces for beauty and enjoyment.\n\nA poem:\n\nFountain sings with water’s grace,\nA joyful dance in open space.\nIt sparkles bright, with droplets free,\nA living art for all to see."
    },
    {
      "word": "night",
      "hint1": "The time after sunset and before sunrise.",
      "hint2": "It’s dark and when we usually sleep.",
      "explain": "Night is the time between sunset and sunrise when it’s dark, and most people rest or sleep.\n\nA poem:\n\nNight descends in shadows deep,\nA quiet world where dreams may keep.\nWith stars above and moon so bright,\nIt brings a calm to end the light."
    },
    {
      "word": "beach",
      "hint1": "A sandy area by the ocean or a lake.",
      "hint2": "A popular spot for swimming and sunbathing.",
      "explain": "A beach is a sandy or pebbly shoreline by the ocean, sea, or lake, often enjoyed for relaxation and swimming.\n\nA poem:\n\nBeach of sand so soft and warm,\nWhere waves roll in, a calming charm.\nWith skies so blue and sun above,\nIt’s nature’s gift, a place we love."
    },
    {
      "word": "glass",
      "hint1": "A clear material used in windows and cups.",
      "hint2": "Fragile and transparent.",
      "explain": "Glass is a hard, transparent material used for windows, bottles, and cups, valued for its clarity.\n\nA poem:\n\nGlass so clear, a crystal sight,\nCatching sun in gentle light.\nIn every pane, a world appears,\nReflecting life through all its years."
    },
    {
      "word": "ring",
      "hint1": "A circular band, often worn on fingers.",
      "hint2": "A symbol of commitment or fashion.",
      "explain": "A ring is a circular band, usually worn on the finger, often symbolizing commitment or used as jewelry.\n\nA poem:\n\nRing so small, a circle true,\nA bond that holds, a love anew.\nIn gold or silver, plain or bright,\nA symbol worn both day and night."
    },
    {
      "word": "clock",
      "hint1": "A device that shows the time.",
      "hint2": "It has numbers, hands, or a digital display.",
      "explain": "A clock is a device that displays the time, helping us keep track of hours, minutes, and seconds.\n\nA poem:\n\nClock ticks on in silent song,\nMarking time as life moves on.\nIn every hand, a second flies,\nA whisper soft beneath the skies."
    },
    {
      "word": "forest",
      "hint1": "A large area covered with trees and wildlife.",
      "hint2": "A place of natural beauty and serenity.",
      "explain": "A forest is a vast area dominated by trees and wildlife, providing shelter and a home for many species.\n\nA poem:\n\nForest tall with shadows deep,\nA world where ancient secrets sleep.\nIn every leaf and branch that grows,\nNature’s timeless beauty shows."
    },
    {
      "word": "desk",
      "hint1": "A piece of furniture used for writing or work.",
      "hint2": "Often found in offices and classrooms.",
      "explain": "A desk is a piece of furniture with a flat surface, used for writing, working, or studying.\n\nA poem:\n\nDesk so neat, a working space,\nA place of thought, a quiet grace.\nWith pen and paper, dreams unfold,\nStories written, lives retold."
    },
    {
      "word": "hat",
      "hint1": "An accessory worn on the head.",
      "hint2": "Used for protection or fashion.",
      "explain": "A hat is an item worn on the head for protection from the sun, warmth, or style.\n\nA poem:\n\nHat upon the head so high,\nShields from sun or open sky.\nWith brims or bands, both wide and small,\nA simple charm, a fashion call."
    }
  ]
  
  

export const getRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return  randomWord;
    
  };
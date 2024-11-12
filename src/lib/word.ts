
const words = [
    "Apple", "Mountain", "Bridge", "Puzzle", "Candle", "Whisper", "Mirror", "Jungle", "Thunder", "Garden",
    "Shadow", "Sunset", "River", "Ocean", "Forest", "Guitar", "Rocket", "Breeze", "Bubble", "Galaxy",
    "Volcano", "Rainbow", "Dolphin", "Iceberg", "Castle", "Diamond", "Treasure", "Phantom", "Blossom", "Feather",
    "Gravity", "Lantern", "Fortress", "Desert", "Dragon", "Serpent", "Canyon", "Comet", "Emerald", "Falcon",
    "Thunderstorm", "Eclipse", "Meteor", "Vineyard", "Meadow", "Waterfall", "Raindrop", "Horizon", "Firefly", "Cliff",
    "Sandstorm", "Cyclone", "Lighthouse", "Hurricane", "Seashell", "Sparrow", "Oasis", "Valley", "Timber", "Frost",
    "Crystal", "Igloo", "Sapphire", "Cosmos", "Tundra", "Glacier", "Blizzard", "Canyon", "Meadow", "Aurora",
    "Icecap", "Monsoon", "Island", "Mangrove", "Waves", "Geyser", "Quicksand", "Thunderbolt", "Fog", "Seabreeze",
    "Pine", "Cove", "Prairie", "Bayou", "Storm", "Ravine", "Willow", "Delta", "Pond", "Coral",
    "Birch", "Canyon", "Savanna", "Sunrise", "Earthquake", "Cactus", "Rainforest", "Avalanche", "Gulf", "Spring"
]


export const getRandomWord = () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return  randomWord;
    
  };
function charGen() {
    var race;
    var background;
    var str;
    var dex;
    var con;
    var int;
    var wis;
    var cha;
    var hp;
    var sp;
    var weapon = "Club";
    var trinket;
    var luckyCharm;

    var r = roll(20);
    if (r <= 8) {
        race = "Human";
    } else if (r <= 18) {
        var nh = roll(20);
        if (nh <= 2) {
            race = "Hill Dwarf";
        } else if (nh <= 4) { 
            race = "Mountain Dwarf";
        } else if (nh <= 6) { 
            race = "High Elf";
        } else if (nh <= 8) { 
            race = "Wood Elf";
        } else if (nh <= 9) { 
            race = "Half-Elf";
        } else if (nh <= 10) { 
            race = "Half-Orc";
        } else if (nh <= 12) { 
            race = "Lightfoot Halfling";
        } else if (nh <= 14) { 
            race = "Stout Halfling";
        } else if (nh <= 16) { 
            race = "Forest Gnome";
        } else if (nh <= 18) { 
            race = "Rock Gnome";
        } else if (nh <= 19) { 
            race = "Tiefling";
        } else if (nh <= 20) { 
            race = "Dragonborn";
        }
    } else if (r <= 20) {
        var vh = roll(20);
        if (vh <= 2) {
            race = "Aasimar";
        } else if (vh <= 5) {
            race = "Firbolg";
        } else if (vh <= 8) {
            race = "Goliath";
        } else if (vh <= 9) {
            race = "Kenku";
        } else if (vh <= 13) {
            race = "Lizardfolk";
        } else if (vh <= 18) {
            race = "Tabaxi";
        } else if (vh <= 20) {
            race = "Triton";
        }
    }

    var br = roll(20);
    if (br <= 1) {
        background = "Acolyte";
    } else if (br <= 2) {
        background = "Charlatan";
        weapon = "Dagger";
    } else if (br <= 4) {
        background = "Criminal";
        weapon = "Dagger";
    } else if (br <= 7) {
        background = "Entertainer";
    } else if (br <= 10) {
        background = "Folk Hero";
        weapon = "Light crossbow";
    } else if (br <= 13) {
        background = "Guild Artisan";
    } else if (br <= 14) {
        background = "Hermit";
    } else if (br <= 15) {
        background = "Noble";
        weapon = "Shortsword";
    } else if (br <= 16) {
        background = "Outlander";
        weapon = "Quarterstaff";
    } else if (br <= 17) {
        background = "Sage";
        weapon = "Dagger";
    } else if (br <= 18) {
        pr = roll(6);
        if (pr == 1) {
            background = "Pirate";
        } else {
            background = "Sailor";
        }
    } else if (br <= 19) {
        background = "Soldier";
        weapon = "Longsword";
    } else if (br <= 20) {
        background = "Urchin";
        weapon = "Sling";
    }

    str = roll3d6();
    dex = roll3d6();
    con = roll3d6();
    int = roll3d6();
    wis = roll3d6();
    cha = roll3d6();

    hp = Math.max(1,Math.trunc((con - 10) / 2) + roll(4));
    sp = roll(4);
	trinket = trinkets[roll(100)];


    var out = `<br>${race} ${background}, STR ${str}, DEX ${dex}, CON ${con}, INT ${int}, WIS ${wis}, CHA ${cha}, HP ${hp}, Inv: ${sp} sp, ${weapon}, ${trinket}`;
	if (background == "Pirate") {
		luckyCharm = trinkets[roll(100)];
        out += `, ${luckyCharm} (lucky charm)`;
	}
    document.getElementById('char').innerHTML += out;
}


function roll(size) {
    var x = Math.max(1, Math.floor(Math.random() * (size + 1)));
    console.log(`1d${size}=${x}`);
    return x;
}

function roll3d6() {
    var x = roll(6) + roll(6) + roll(6);
    return x;
}


var trinkets=[
	"----",
    `a mummified goblin hand`,
    `a piece of crystal that faintly glows in the moonlight`,
    `a gold coin minted in an unknown land`,
    `a diary written in a language you don’t know`,
    `a brass ring that never tarnishes`,
    `an old chess piece made from glass`,
    `a pair of knucklebone dice, each with a skull symbol on the side that would normally show six pips`,
    `a small idol depicting a nightmarish creature that gives you unsettling dreams when you sleep near it`,
    `a rope necklace from which dangles four mummified elf fingers`,
    `the deed for a parcel of land in a realm unknown to you`,
    `a 1-ounce block made from an unknown material`,
    `a small cloth doll skewered with needles`,
    `a tooth from an unknown beast`,
    `an enormous scale, perhaps from a dragon`,
    `a bright green feather`,
    `an old divination card bearing your likeness`,
    `a glass orb filled with moving smoke`,
    `a 1-pound egg with a bright red shell`,
    `a pipe that blows bubbles`,
    `a glass jar containing a weird bit of flesh floating in pickling fluid`,
    `a tiny gnome-crafted music box that plays a song you dimly remember from your childhood`,
    `a small wooden statuette of a smug halfling`,
    `a brass orb etched with strange runes`,
    `a multicolored stone disk`,
    `a tiny silver icon of a raven`,
    `a bag containing forty-seven humanoid teeth, one of which is rotten`,
    `a shard of obsidian that always feels warm to the touch`,
    `a dragon's bony talon hanging from a plain leather necklace`,
    `a pair of old socks`,
    `a blank book whose pages refuse to hold ink, chalk, graphite, or any other substance or marking`,
    `a silver badge in the shape of a five-pointed star`,
    `a knife that belonged to a relative`,
    `a glass vial filled with nail clippings`,
    `a rectangular metal device with two tiny metal cups on one end that throws sparks when wet`,
    `a white, sequined glove sized for a human`,
    `a vest with one hundred tiny pockets`,
    `a small, weightless stone block`,
    `a tiny sketch portrait of a goblin`,
    `an empty glass vial that smells of perfume when opened`,
    `a gemstone that looks like a lump of coal when examined by anyone but you`,
    `a scrap of cloth from an old banner`,
    `a rank insignia from a lost legionnaire`,
    `a tiny silver bell without a clapper`,
    `a mechanical canary inside a gnome-crafted lamp`,
    `a tiny chest carved to look like it has numerous feet on the bottom`,
    `a dead sprite inside a clear glass bottle`,
    `a metal can that has no opening but sounds as if it is filled with liquid, sand, spiders, or broken glass (your choice)`,
    `a glass orb filled with water, in which swims a clockwork goldfish`,
    `a silver spoon with an M engraved on the handle`,
    `a whistle made from gold-colored wood`,
    `a dead scarab beetle the size of your hand`,
    `two toy soldiers, one with a missing head`,
    `a small box filled with different-sized buttons`,
    `a candle that can't be lit`,
    `a tiny cage with no door`,
    `an old key`,
    `an indecipherable treasure map`,
    `a hilt from a broken sword`,
    `a rabbit’s foot`,
    `a glass eye`,
    `a cameo carved in the likeness of a hideous person`,
    `a silver skull the size of a coin`,
    `an alabaster mask`,
    `a pyramid of sticky black incense that smells very bad`,
    `a nightcap that, when worn, gives you pleasant dreams`,
    `a single caltrop made from bone`,
    `a gold monocle frame without the lens`,
    `a 1-inch cube, each side painted a different color`,
    `a crystal knob from a door`,
    `a small packet filled with pink dust`,
    `a fragment of a beautiful song, written as musical notes on two pieces of parchment`,
    `a silver teardrop earring made from a real teardrop`,
    `the shell of an egg painted with scenes of human misery in disturbing detail`,
    `a fan that, when unfolded, shows a sleeping cat`,
    `a set of bone pipes`,
    `a four-leaf clover pressed inside a book discussing manners and etiquette`,
    `a sheet of parchment upon which is drawn a complex mechanical contraption`,
    `an ornate scabbard that fits no blade you have found so far`,
    `an invitation to a party where a murder happened`,
    `a bronze pentacle with an etching of a rat's head in its center`,
    `a purple handkerchief embroidered with the name of a powerful archmage`,
    `half of a floorplan for a temple, castle, or some other structure`,
    `a bit of folded cloth that, when unfolded, turns into a stylish cap`,
    `a receipt of deposit at a bank in a far-flung city`,
    `a diary with seven missing pages`,
    `an empty silver snuffbox bearing an inscription on the surface that says "dreams"`,
    `an iron holy symbol devoted to an unknown god`,
    `a book that tells the story of a legendary hero's rise and fall, with the last chapter missing`,
    `a vial of dragon blood`,
    `an ancient arrow of elven design`,
    `a needle that never bends`,
    `an ornate brooch of dwarven design`,
    `an empty wine bottle bearing a pretty label that says, "The Wizard of Wines Winery, Red Dragon Crush, 331422-W"`,
    `a mosaic tile with a multicolored, glazed surface`,
    `a petrified mouse`,
    `a black pirate flag adorned with a dragon's skull and crossbones`,
    `a tiny mechanical crab or spider that moves about when it’s not being observed`,
    `a glass jar containing lard with a label that reads, "Griffon Grease"`,
    `a wooden box with a ceramic bottom that holds a living worm with a head on each end of its body`,
    `a metal urn containing the ashes of a hero`
]

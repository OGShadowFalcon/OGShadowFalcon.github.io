const buttonPolly = document.querySelector('.ButtonPolly');
const buttonPysen = document.querySelector('.ButtonPysen');

const text1 = document.getElementById("changedText1");
const text2 = document.getElementById("changedText2");
const headline = document.getElementById("headlineChangeText");

const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");
const catPicSecondDiv = document.getElementById("catPicSecondDiv");

const flex = document.getElementById("textAndImg");

const h1 = document.getElementById("h1");
const l1 = document.getElementById("1");
const l2 = document.getElementById("2");
const l3 = document.getElementById("3");
const l4 = document.getElementById("4");
const l5 = document.getElementById("5");
const text3 = document.getElementById("changedText3");



function PysenPage() {
    pic1.src = "Images/IMG_9185.PNG";
    pic2.src = "Images/Skärmbild 2024-01-22 113611.png";
    pic3.src = "Images/Skärmbild 2024-01-30 092651.png";
    
    text1.innerHTML = "Huskatter kan ha vilket temperament som helst, men är oftast frisk och har vanligtvis inte så många nedärva sjukdomsanlag, som kan vara fallet med vissa framavlade raser. Tas huskatten väl omhand, lever den oftast länge. Medellivslängden är ungefär 15 år.";
    text2.innerHTML = "Huskatter kan ha vilket temperament som helst, men är oftast frisk och har vanligtvis inte så många nedärva sjukdomsanlag, som kan vara fallet med vissa framavlade raser. Tas huskatten väl omhand, lever den oftast länge. Medellivslängden är ungefär 15 år.";

    headline.innerHTML = "FAKTA OM PYSEN";

    flex.style.flexDirection="row";

    catPicSecondDiv.src = "Images/pysen.png"

    h1.innerHTML = "SNABBA FAKTA OM PYSEN"
    l1.innerHTML = "Tjock"
    l2.innerHTML = "Går upp till Polly och bara slår henne???"
    l3.innerHTML = "Gluten allergiker"
    l4.innerHTML = "Laktosintolerant"
    l5.innerHTML = "Rädd för sällskap på fler än 4 personer"
    text3.innerHTML = "Huskatter kan ha vilket temperament som helst, men är oftast frisk och har vanligtvis inte så många nedärva sjukdomsanlag, som kan vara fallet med vissa framavlade raser. Tas huskatten väl omhand, lever den oftast länge. Medellivslängden är ungefär 15 år.";
}

function PollyPage() {
    pic1.src = "Images/IMG_8186.JPG";
    pic2.src = "Images/Skärmbild 2024-01-22 113719.png";
    pic3.src = "Images/polly1.png";

    text1.innerHTML = "Ragdoll är en kattras med ursprung från USA. Kattrasen godkändes 1990 som ras i FIFe, och 1992 registrerades den första ragdollen inom SVERAK. Ragdoll är en väldigt lugn och sällskaplig katt, som även är väldigt pratig. Maine coon är den största av alla kattraser och har en muskulös kropp och robusta ben. Huvudet har ett fyrkantigt nosparti och stora öron, som är breda vid basen och högt placerade. Den långa och tjocka pälsen består av underull täckt av glansig, vattentät överpäls. Pälsen är kortare på huvudet, halsen och skuldrorna och längre på ryggen, sidorna och svansen. På magen och bakbenen är pälsen kraftig och lurvig. Halskragen är kraftigare på hanar än på honor. Svansen är lång och yvig och öronen har tofsar på spetsen. Pälsen på tassarna har en snösko-effekt. Maine coon finns i trettio eller fler färger. Ögonen kan vara gröna, guld- eller kopparfärgade; vita katter kan ha blå eller olikfärgade ögon. Chinchilla perser finns i en färg: vit med gröna ögon. Den har ett brett huvud med små öron och ett kort, öppet ansikte. Ögonen är stora och runda med en gnistrande färg. Trots att chinchillan tenderar att vara mer finlemmad än de flesta perserkatter har den relativt korta, tjocka och starka ben. Svansen är kort och yvig. Pälsen är lång, tjock och yvig med tät och mjuk underull. Norsk skogkatt är en kattras som ingår i gruppen semilånghåriga raskatter och härstammar från Norge. Deras päls är vattenavstötande och anpassad till ett kallt klimat. Det är en social katt som är ett trevligt husdjur. Den kan vara mycket kärvänlig och tillgiven sin ägare om den behandlas väl.";
    text2.innerHTML = "Ragdoll är en kattras med ursprung från USA. Kattrasen godkändes 1990 som ras i FIFe, och 1992 registrerades den första ragdollen inom SVERAK. Ragdoll är en väldigt lugn och sällskaplig katt, som även är väldigt pratig. Maine coon är den största av alla kattraser och har en muskulös kropp och robusta ben. Huvudet har ett fyrkantigt nosparti och stora öron, som är breda vid basen och högt placerade. Den långa och tjocka pälsen består av underull täckt av glansig, vattentät överpäls. Pälsen är kortare på huvudet, halsen och skuldrorna och längre på ryggen, sidorna och svansen. På magen och bakbenen är pälsen kraftig och lurvig. Halskragen är kraftigare på hanar än på honor. Svansen är lång och yvig och öronen har tofsar på spetsen. Pälsen på tassarna har en snösko-effekt. Maine coon finns i trettio eller fler färger. Ögonen kan vara gröna, guld- eller kopparfärgade; vita katter kan ha blå eller olikfärgade ögon. Chinchilla perser finns i en färg: vit med gröna ögon. Den har ett brett huvud med små öron och ett kort, öppet ansikte. Ögonen är stora och runda med en gnistrande färg. Trots att chinchillan tenderar att vara mer finlemmad än de flesta perserkatter har den relativt korta, tjocka och starka ben. Svansen är kort och yvig. Pälsen är lång, tjock och yvig med tät och mjuk underull. Norsk skogkatt är en kattras som ingår i gruppen semilånghåriga raskatter och härstammar från Norge. Deras päls är vattenavstötande och anpassad till ett kallt klimat. Det är en social katt som är ett trevligt husdjur. Den kan vara mycket kärvänlig och tillgiven sin ägare om den behandlas väl.";

    headline.innerHTML = "FAKTA OM POLLY";

    flex.style.flexDirection="column";

    catPicSecondDiv.src = "Images/polly2.png"

    h1.innerHTML = "SNABBA FAKTA OM POLLY"
    l1.innerHTML = "Tiny"
    l2.innerHTML = "Ädre än pysen och inte rädd"
    l3.innerHTML = "Allätare"
    l4.innerHTML = "Tycker pysen är irriterande"
    l5.innerHTML = "Älskar att gå på tangentbord"
    text3.innerHTML = "Polly är väldigt liten men låt inte hennes storlek lura dig. Hon är en tuff tjej och säljer ofta droger inom grannskapet. Pysen är mycket skraj för Polly eftersom att han är yngre än henne";
}
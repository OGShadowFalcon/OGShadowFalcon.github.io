

const buttonPolly = document.querySelector('.ButtonPolly');
const buttonPysen = document.querySelector('.ButtonPysen');
const element = document.getElementsByClassName("changedText");

const element2 = document.getElementById("headlineChangeText");
const pic1 = document.getElementById("pic1");
const pic2 = document.getElementById("pic2");
const pic3 = document.getElementById("pic3");

function PysenPage() {
    pic1.src = "Images/IMG_9185.PNG";
    pic2.src = "Images/IMG_9185.PNG";
    pic3.src = "Images/IMG_9185.PNG";
    
    element.innerHTML = "Huskatter kan ha vilket temperament som helst, men är oftast frisk och har vanligtvis inte så många nedärva sjukdomsanlag, som kan vara fallet med vissa framavlade raser. Tas huskatten väl omhand, lever den oftast länge. Medellivslängden är ungefär 15 år."

    element2.innerHTML = "FAKTA OM PYSEN";
}

function PollyPage() {
    pic1.src = "Images/IMG_8186.JPG";
    pic2.src = "Images/IMG_8186.JPG";
    pic3.src = "Images/IMG_8186.JPG";
    



    element.innerHTML = "Ragdoll är en kattras med ursprung från USA. Kattrasen godkändes 1990 som ras i FIFe, och 1992 registrerades den första ragdollen inom SVERAK. Ragdoll är en väldigt lugn och sällskaplig katt, som även är väldigt pratig. Maine coon är den största av alla kattraser och har en muskulös kropp och robusta ben. Huvudet har ett fyrkantigt nosparti och stora öron, som är breda vid basen och högt placerade. Den långa och tjocka pälsen består av underull täckt av glansig, vattentät överpäls. Pälsen är kortare på huvudet, halsen och skuldrorna och längre på ryggen, sidorna och svansen. På magen och bakbenen är pälsen kraftig och lurvig. Halskragen är kraftigare på hanar än på honor. Svansen är lång och yvig och öronen har tofsar på spetsen. Pälsen på tassarna har en snösko-effekt. Maine coon finns i trettio eller fler färger. Ögonen kan vara gröna, guld- eller kopparfärgade; vita katter kan ha blå eller olikfärgade ögon. Chinchilla perser finns i en färg: vit med gröna ögon. Den har ett brett huvud med små öron och ett kort, öppet ansikte. Ögonen är stora och runda med en gnistrande färg. Trots att chinchillan tenderar att vara mer finlemmad än de flesta perserkatter har den relativt korta, tjocka och starka ben. Svansen är kort och yvig. Pälsen är lång, tjock och yvig med tät och mjuk underull. Norsk skogkatt är en kattras som ingår i gruppen semilånghåriga raskatter och härstammar från Norge. Deras päls är vattenavstötande och anpassad till ett kallt klimat. Det är en social katt som är ett trevligt husdjur. Den kan vara mycket kärvänlig och tillgiven sin ägare om den behandlas väl."

    element2.innerHTML = "FAKTA OM POLLY";
}
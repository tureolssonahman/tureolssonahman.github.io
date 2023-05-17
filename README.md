# tureolssonahman.github.io
Slutprojekt - redovisning
Elever: Ture Olsson-Åhman

**Resultat**

https://tureolssonahman.github.io/

I huvudsak har resultatet blivit väldigt likt det jag aspirerade till från början. En hemsida där man kan se en modell av skolans teknik korridor och digitalt “besöka” den. Det som skiljer sig från den ursprungliga idén är att den inte är helt sanningsenligt gjord. En del av 3D grafiken har ändrats för att antingen se bättre ut, eller vara mer representativ av vad de ska föreställa. T.ex. är sofforna i verkligheten varken röda eller bara två, men jag upplever att två röda soffor är det man tänker sig när man ser “lounge” hörnan av teknikkorridoren. I samma anda har även de runda borden en annan färg, detta eftersom att jag märkt att de i verkligheten är väldigt många av möblerna som har en grå och tråkig färg, som inte passade detta arbete. Målet skiftade från att vara en korrekt 1:1 modell, till att bli något fint och representativt, och såldes ändrades även en del av grafiken.

På hemsidan får du även se kameran svepa över korridoren vilket ger dig möjlighet att se olika vinklar av verket.

**Arbetsgången** 

Koden har jag primärt skrivit i VsCode och sedan laddat upp på github till mitt egna repository. För att skapa själva hemsidan började jag skapa ett skal eller en grund där jag sedan kunde importera 3d-filmerna. Det innebär först att skapa ett html framework och grundlig kod i Three.js där du bland annat skapar en kamera och en rityta.

Därefter började 3d skapandet i blender. Jag började med att utforma de stora ytorna, det vill säga golv, väggar och rum. Sedan adderade jag skåpen och de stora möblerna. Till sist försökte jag lägga till en personlig touch med mer detaljer. Däribland husen i foamboard som står utplacerade i korridoren och andra arbeten som visas runt om, i detta fall bron av glasspinnar. 

Det som mer konkret hände i blender var att skapa till exempel möblerna med enkla former för att sedan använda så kallade modifiers för att göra dem mer komplexa. För att skapa pantamera-tunnan användes boolean för att göra ett hål och för att skapa de runda borden sänkte jag antalet vertices för att få en mer “low poly” effekt.

Till sist skapade jag rörelsen för kameran i three.js miljön. Det var nästan det mest tidskrävande momentet då de andra lösningarna inte ville fungera. Jag fick istället för orbit controls använda camera.pointat() för att skapa något liknande, fast automatiskt.

**Val av verktyg (programvara)**

När jag inledde detta projekt visste jag att jag ville programmera men vilken “plattform” som jag skulle använda mig av visste jag inte. Jag vägde mellan att använda samma programmeringsmiljö som vi tidigare arbetat i, open processing, men valde att istället bygga allt från grunden med three.js. Detta val grundar sig i att du får mer frihet när du inte använder dig av en webbplats med en del avgränsningar, samt att det tillät mig att publicera koden till en hemsida. Nackdelarna med three.js är att de kräver lite högre kompetens, men jag ansåg det som bra träning och ett gott tillfälle att bli bättre.

Jag valde att skapa 3D modellen i blender, ett gratis  och open-source program lämpat för modellering på hög nivå. Det som dock ska nämnas är att programvaran inte är särskilt nybörjarvänlig och kanske i efterhand inte rätt val för detta arbete. Många timmar som annars hade kunnat läggas på kreativt utlopp behövde istället ägnas åt att bråka med olika knapptryck och lära sig hur man skapade ganska enkla former. Där programmet i-o-för sig istället briljerade var när man faktiskt behövde göra något komplicerat, med tillräckligt mycket googlande, gick allt man ville att utföra. Till sist underlättade blender väldigt mycket när man skulle exportera arbetet till ett filformat som gick att använda med three js. 

 .glb är ett filformat som enkelt går att importera med en modul i three.js och lika lätt går att exportera från blender. Tyvärr komprimeras en del av kvaliteten bort, men den sömlösa integrationen gjorde det ändå ett enkelt val.
 
**Problem**

Det absolut största problemet jag stötte på längs vägen var att importera orbit controls till mitt three.js arbete. Jag försökte flera timmar på olika vis men fick det aldrig att fungera. Idén från början var att användaren själv skulle kunna zooma och kolla omkring, men istället skapade jag en funktion som flyttade kameran automatiskt och “siktade in” den på en specifik punkt vilket gjorde att kameran upplevs som levande  och lite verklig.

Jag hade även en idé att implementera flera olika delar av skolan i projektet. Men tiden sprang ikapp mig och idén blev kastad. De tidiga stadierna av 3d filen går att se här:

**Värdering**

I helhet måste jag säga att jag blev nöjd med arbetet. Jag lyckades att skapa en 3D modell i ett nytt program som jag upplever faktiskt är igenkännligt och sedan exportera denna till en webbplats som jag själv skapat. Det som jag däremot inte blev lika nöjd med var detaljerna. Mycket visade sig ta ganska lång tid och detta drabbade finliret. Väggarna som angränsar till klassrum hade jag gärna velat fylla med dörrar och fönster, men blev nu endast stora rätblock som indikerar en idé av klassrum. Det positiva som dock går att ta ut ur detta är att jag planerade arbetet relativt bra, det gick att skala ner arbetsbördan när tiden blev bristfällig och ändå behålla integriteten av modellen. 

Dessutom blev många saker lite väl kantiga och enfärgade. Ifall jag hade gjort om arbetet eller haft mer tid hade jag försökt att få mer textur på objekten som nu blev lite väl fyrkantiga och ensidiga.

**Inspirationskällor**

Jag har tidigare sett webbsidor i 3D och tanken slog mig att det var ett bra projekt för slutarbetet. Jag har dock inga konkreta inspirationskällor. När jag började arbetet kollade jag på lite olika hemsidor för att se hur jag borde lägga upp projektet, men i slutändan blev det inte så likt dem.
Spridning/publicering

För att publicera koden och de filer som jag skapat har jag använt mig av github, en hemsida där man kan publicera och ta del av andras verk. Github används i både kommersiellt och privat bruk och lämpar sig väl till projekt som detta eftersom de är gratis att skapa ett konto, du kan bidra till projektet från olik datorer, och det mest väsentliga i detta arbete, det tillåter dig att publicera dessa filer till en domän helt gratis. Github pages gjorde det alltså möjligt att publicera detta arbete, inte bara så man kan ladda ner filerna från github-repository’t, utan även besöka det som en hemsida. 

Det är även väldigt fördelaktigt i detta arbete. Man behöver endast dela länken till githubprofilen och så kan man se samt ladda ner alla filer som man vill ta del av.

# Workshop-Microfrontends

"[Microfrontends](https://micro-frontends.org) sind zu den gewohnten Frontendmonolithen das, was Microservices zum Backendmonolithen sind" <br/>
In diesem Workshop werden wir die nicht traditionelle Herangehensweise der Frontend Entwicklung in Angriff nehmen.<br/><br/>
Wir schauen uns dazu zunächst einmal an, wie Anwendungen, die von Microfrontends gebrauch machen, aufgebaut sind, <br/>
setzen dann ein minimales Projekt gemeinsam auf und lassen anschließend Resümee passieren, <br>
um herauszufinden, ob und wann der Ansatz von Microfrontends im Gebrauch sinnvoll ist. <br/>
Dabei ist es Dir und deinem/r Partner/in überlassen, welches Framework Du bzw. Ihr gerne nutzt, um euer Feature mit einzubringen!<br/>
<br>

## Vorkenntnisse:
- Git
- Javascript 

## Benötigte Tools:
- IDE
- npm bzw. npx

## Material
- <b>[Aufgaben-Repo mit Basiscode](https://github.com/Taha-Moujtahid/Workshop-Microfrontends)</b>
- [Microfrontend Seite](https://micro-frontends.org)
- [Microfrontend GitHub Repo](https://github.com/neuland/micro-frontends)
- [Create-MF-App](https://github.com/jherr/create-mf-app)

## Getting Started 
Wähle dein Component Team (AudioPlayer PORT=3001, SongList PORT=3002, FriendsList PORT=3003)
npx create-mf-app

? Pick the name of your app: <ComponentName>
? Project Type: Application
? Port number: 300X
? Framework: react <- Ihr könnt natürlich auch was anderes verwenden
? Language: javascript <- same here
? CSS: Tailwind <- damit wir uns nicht in die haare kriegen weil der button eines anderen hässlicher ist als der eigene

▶️ cd <ComponentName>
▶️ npm install
▶️ npm start

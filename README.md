# Bootcamp Workshop i React

Denne Workshoppen er for deg som kan grunnleggende HTML og CSS fra før, og som vil lære deg React og alt det kule rammeverket har å by på.

## Ressurser

[Dokumentasjonen til React](https://react.dev/learn)

[Presentasjon til denne workshoppen](https://github.com/bekk/bootcamp-react-ws/blob/main/react-intro.pdf)

## Emoji-guide

Du kommer til å se noen emojis i oppgavene. Disse betyr:

-   🏆 Oppgave: Her er hva du skal gjøre.
-   💡 Tips: Litt ekstra info som kan være greit å ha for å løse en oppgave.
-   🚨 Løsningsforslag: Her finner du et eksempel på hvordan du _kan_ løse oppgaven.

## Oppsett

### Få koden lokalt på egen maskin

1. Klon repoet ved å skrive dette i terminalen din:

    ```bash
    	git clone https://github.com/bekk/bootcamp-react-ws.git
    ```

2. Naviger deg inn i mappa som heter `bootcamp-react-ws` ved å skrive dette i terminalen din

    ```bash
    	cd bootcamp-react-ws
    ```

3. Installer nødvendige avhengigheter for prosjektet:

    ```bash
    	npm install
    ```

4. Start opp nettsiden ved å skrive:

    ```bash
    	npm run dev
    ```

### Sandbox

Om kloning av repoet skulle være litt knotete kan du bruke denne [CodeSandbox-lenken](https://codesandbox.io/p/sandbox/bootcamp-react-ws-67pf2s) for å redigere rett i browseren

> [!WARNING]
> Trykk på `Fork` oppe i det høyre hjørnet for å få din egne versjon av koden.

# Oppgaver

I denne workshoppen skal du lage deg din egen personlige bloggside 🎉. Vi skal ta for oss steg for steg hvordan man bygger opp en React-applikasjon, men du har alltid friheten til å gjøre din egen vri på oppgavene!

## Oppgave 1 - komponenter, props og children

La oss begynne med basic setup av React komponenter og et par andre vanlige ting i React.

Gå inn i `App.jsx`-komponenten inne i `src`-mappa, og fjern all koden som er mellom `<>...</>` inne i `return()`-funksjonen – la oss begynne å lagge denne nettsiden mer personalisert til deg og den du er!

### Oppgave 1.1

🏆 I `App.jsx`, returner `Blog`-komponeten som allerede er importert i fila. `Blog.jsx` ligger inne i mappa som heter `Oppgave 1`.

> 💡 Det er en grei huskeregel at DOM-komponenter starter med liten forbokstav, og React-komponenter starter med Stor forbokstav. `<div />` er med andre ord et HTML-element, mens `<Blog />` er en referanse til Blog-funksjonen vi vil bruke.

### Oppgave 1.2

🏆 Få `Blog.jsx` til å returnere en heading med innholdet "MittNavns blogg". Du kan bruke `<h1 />`-elementet for å lage en heading.

### Oppgave 1.3

🏆 I samme fil, lag en `Title`-komponent som returnerer heading-elementet ditt som du skrev i forrige deloppgave. Bruk Title-komponenten din inne i Blog-komponenten.

### Oppgave 1.4

🏆 Lag en ny fil i Oppgave1-mappa som du navngir `Title.jsx`. Kopier Title komponenten du laget i forrige oppgave inn til Title.jsx fila og eksporter den slik at den kan brukes i andre komponenter. Importer Title komponenten i `Blog.jsx` og slett samtidig Title definisjonen fra `Blog.jsx`.

> 💡 I React kan man eksportere komponenter fra en fil, les om `default` og `named`-exports [her](https://react.dev/learn/importing-and-exporting-components).

### Oppgave 1.5

🏆 I stedet for å hardkode navnet ditt i komponenten, gjør om Title-komponenten din til å ta inn en prop som heter `name`. Da kan du sende inn navnet ditt i Blog.jsx der du bruker `<Title />`.

> 💡 Props kan hete akkurat hva du vil, og kan være akkurat den datastrukturen du vil at den skal være. Les mer om props [her](https://react.dev/learn/passing-props-to-a-component#step-1-pass-props-to-the-child-component).

### Oppgave 1.6

🏆 Inne i Title.jsx, legg til className-prop ‘title’ på h1-elementet. Nå kan du style komponenten slik du vil i `.title` selektoren du finner i `App.css`.

> 💡 Ikke vært så mye borti CSS? Les mer om CSS [her](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics).

### Oppgave 1.7 - Bonus

🏆 Importer `Confetti`-komponenten og bruk den i Blog-komponenten din 🎉

✨ Endre farger, størrelser, spacing, osv slik du vil 💅

### Løsningsforslag

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
// I Title.jsx
export default function Title({ name }) {
	return <h1 className="title">{name}s blogg</h1>;
}

// I Blog.jsx
return (
	<>
		<Title name="Caroline" />
	</>
);
```

</details>

## Oppgave 2 - lister og events

I denne oppgava skal vi se litt på dynamisk innhold og rendring av komponenter.

I `Blog.jsx`, kommenter inn Facts-funksjonen som ligger øverst i fila, og bruk denne under Title-komponenten din i render-funksjonen.

Åpne `Facts.jsx` som ligger i mappa som heter `Oppgave 2`. Her finnes det allerede en liste med tekster som vises. Vi viser hvert element ved bruk av index, f.eks med `facts[0]` som viser det første elementet i lista. Denne løsningen skalerer dårlig da vi må manuelt bruke index for å hente ut hvert element vi vil vise. Vi vil derfor skrive om innholdet i `Facts.jsx` til å iterere gjennom hvert element i `facts`-lista ved bruk av `map()`-funksjonen. La oss gjøre det steg for steg:

### Oppgave 2.1

🏆 Fjern de hardkoda faktaene i renderfunksjonen til `Facts.jsx`, og iterer gjennom hvert element i lista og returner et `<li>` element for hvert fakta-element.

> 💡 Det finnes flere liste-operasjoner i JavaScript, `.map()` itererer gjennom hvert element i lista og du kan bestemme hva hvert element skal mappes om til. Les mer om map [her](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

### Oppgave 2.2

🏆 Bli kvitt warningen i konsollen om at hvert element i lista trenger en unik identifikator. Dette gjøres ved å bruke `key`-attributten på hvert element. Husk at `key` må være unik for hvert element i lista.

> 💡 Les om `key` mer [her](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key).

### Oppgave 2.3

Det kan bli rotete å ha all koden i en fil, så la oss dele opp koden i flere komponenter.

🏆 Lag en egen komponent, `Card`, som returnerer et listeelement `<li>` og bruk komponenten i `Facts.jsx`. `Card` skal ta inn faktaen som skal vises som en prop (f.eks. `facts`). Klassenavnet `card` kan benyttes for å legge på styling.

### Oppgave 2.4

🏆 Endre Card-komponenten slik at den tar inn fakta som `children` fremfor å sendes inn gjennom `fact`-prop'en, slik at den blir mer dynamisk. Gjør nødvendige endringer i `Facts`-komponenten.

> 💡 `children` er en fin måte å sette sammen flere komponenter på en dynamisk måte, ved å bruke children så "wrapper" man en komponenten rundt en annen komponent. Les mer om children [her](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children).

✨ Legg inn fakta om deg selv i stedet, og style card-komponenten slik du vil med andre farger og animasjoner 💅

### Løsningsforslag

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
// I Facts.jsx
function Facts() {
    return {
        <>
            <h2>Fakta om kjendiser</h2>
            {facts.map((fact) => (
              <Card key={fact}>{fact}</Card>
            ))}
        </>
    }
}

// I Card.jsx
function Card({ children }) {
    return (
        <li className="card">{children}</li>
    )
}
```

</details>

## Oppgave 3 - useState og conditional rendering

Nå skal vi gjøre nettsiden litt mer interaktiv!

I `Blog.jsx`, kommenter inn CoverPhoto-funksjonen som ligger øverst i fila, og bruk denne under Title-komponenten din i render-funksjonen.

### Oppgave 3.1

Gå inn i mappa som heter `Oppgave3` og åpne `CoverPhoto.jsx`

🏆 Endre CoverPhoto-komponenten slik at den returnerer et bildet som har stien `"/src/assets/img1.jpg"`. <em>Gi komponenten klassenavnet `"cover-photo"`</em>.

> 💡 Her kan du bruke `<img>`-element for å vise et bilde.

### Oppgave 3.2

🏆 Gjør det mulig for brukeren å trykke på bildet ved å legge bildet i en knapp (`<button>`) og print en melding til konsollen når knappen trykkes på.

> 💡 For å logge til konsollen kan du bruke `console.log('din tekst her')`, og for å se konsollen kan du høyre-klikke i nettleseren og trykke på "inspiser" eller "inspect".

Les mer om events [her](https://react.dev/learn/responding-to-events).

### Oppgave 3.3

Vi har lyst til å vise et annet bilde når brukeren trykker på det nåværende bildet – så i stedet for å console.logge trenger vi nå å vite om brukeren har trykket på bildet eller ikke.

🏆 Lag en `useState` som har verdien `showFirstPicture` og en funksjon som heter `setShowFirstPicture`, med default-verdi satt til `true`.

> 💡 useState returnerer alltid en liste på formatet `const [verdi, setVerdi] = useState()`, og du kan kalle disse verdiene hva du vil.

Vi bestemmer om det skal være bolske verdier, tall eller tekst som verdien i useState'en skal ha, i dette tilfellet trenger vi bare en bolsk verdi som forteller om vi skal vise det første bildet eller ikke. Les om useState [her](https://react.dev/reference/react/useState).

### Oppgave 3.4

🏆 Endre i CoverPhoto-komponenten slik at når brukeren trykker på bildet så skal setShowFirstPicture oppdatere verdien til showFirstPicture til å være det motsatte av det den var. <em>Altså hvis showFirstPicture er true så skal den nye verdien bli false, og motsatt.</em>

### Oppgave 3.5

🏆 I render-funksjonen kan du nå bruke verdien til `showFirstPicture` for å vise enten bilde 1 eller bilde 2, avhengig om brukeren har trykket på bildet eller ikke. _Bilde 2 finner du på stien `/src/assets/img2.jpg`._

> 💡 Dette kalles conditional rendering og ser slik ut: `condition ? ifConditionIsTrue : ifConditionIsFalse`

✨ Legg inn bilde av deg selv, av en hobby eller noe annet du liker, og style nettsiden slik du vil 💅

### Løsningsforslag

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
// I CoverPhoto.jsx

import { useState } from 'react';

export default function CoverPhoto() {
	const [showFirstPicture, setShowFirstPicture] = useState(true);

	const onButtonClick = () => {
		setShowFirstPicture(!showFirstPicture);
	};

	return (
		<button onClick={onButtonClick}>
			<div className="cover-photo">
				{showFirstPicture ? (
					<img src="/src/assets/img1.jpg" alt="picture of coffee" />
				) : (
					<img
						src="/src/assets/img2.jpg"
						alt="picture of person and a candle"
					/>
				)}
			</div>
		</button>
	);
}
```

</details>

### Oppgave 4 - useEffect og datahenting

Nå skal nettsiden endelig begynne å kommunisere med verden, for nå skal vi nemlig hente litt data! Vi skal vise kollektivtrafikk-avganger fra et stoppested som man kan trenge å vite før man forlater hjemmet sitt. La oss ta for oss dette steg for seg.

I `Blog.jsx`, kommenter inn DepartureBoard-funksjonen som ligger øverst i fila, og bruk denne under Title-komponenten din i render-funksjonen.

### Oppgave 4.1

🏆 Lag en useEffect inne i `DepartureBoard.jsx` som ligger i `Oppgave4`-mappa. Som en oppvarmingsoppgave kan du begynne med å console-logge en vilkårlig tekst til konsollen når komponenten mountes.

> 💡 Her er dependency-arrayet til useEffect'en viktig. Hvis man dropper lista vil useEffect kjøres på hver render, har man en tom liste vil det si at det som er i useEffect'en bare skal kjøres når komponenten mountes, og en liste med verdier trigger bare useEffecten bare når verdiene i lista får en oppdatert verdi.

OBS! Komponenten din vil mountes 2 ganger i developer mode 🙃 – så useEffect som bare skal kjøres på mount vil kjøre to ganger. Forvirrende greier! Grunnen er at React vil stressteste komponenten din og verifisere at den fungerer uavhengig om useEffect kjøres en eller to ganger.

### Oppgave 4.2

🏆 I stedet for å console-logge til konsollen, kan du nå skrive en async funksjon inne i useEffecten som heter `fetchData` som kaller `fetchDepartures` som er en ferdiglaget funksjon som henter noe data <em>(du trenger ikke bry deg om innholdet i denne funksjonen)</em>. Du kan begynne med å console-logge dataen du får tilbake for å se at nettverkskallet fungerer. Husk å kalle fetchData inne i useEffecten din.

<details>
<summary>💡 Et vanlig oppsett av en useEffect som henter data</summary>

```javascript
useEffect(() => {
    const fetchData = async () => {
        ...
    }

    fetchData()
}, [])
```

</details>

<details>
<summary>💡 Funksjonen `fetchDepartures` henter data fra Entur sine API'er, og returnerer data på dette formatet:</summary>

    {
        stopPlace: string // Navnet på stoppestedet,
        departures: Array<{
            frontText: string, // hva strekningen heter
            departureTime: string, // avgangstidspunkt
        }>
    }

</details>

</br>

Les om henting av data med useEffects [her](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

### Oppgave 4.3

🏆 Lag to states i komponenten din, en som tar seg av tittelen på stoppestedet, et annet som lagrer alle avgangene. De kan f.eks hete `[title, setTitle]` og `[departures, setDepartures]`.

### Oppgave 4.4

🏆 Oppdater verdiene til `title` og `departures` med dataen fra endepunktet i useEffecten.

<details>
<summary>💡 I JavaScript kan du destrukturere objekter</summary>

```javascript
const { stopPlace, departures } = data;
```

</details>

### Oppgave 4.5

🏆 Rendre tittel og avgangsinformasjonen. <em>Her kan du legge til `departures` som `className` på `<ul>`-taggen rundt avgangene, og `departure` på hvert `<li>`-element. Du kan også legge til et clockIcon som et bilde for hver avgang som et visuelt tillegg.</em>

### Oppgave 4.6

🏆 Hent informasjon om et stoppested du kjenner til! 💅

-   Gå på https://entur.no/kart.
-   Skriv inn et stoppested du kjenner til.
-   Gå i url'en på nettsiden og kopierer id'en som begynner på `NSR:`, f.eks `NSR:StopPlace:58801`.
-   Gå i `client.js` på linje 15 og erstatt den id'en med din egen id for å hente avganger for ditt stoppested!

### Løsningsforslag

<details>
<summary>🚨 Løsningsforslag</summary>

```javascript
import { useState, useEffect } from 'react';

import clockIcon from '../assets/Clock.svg';

import { fetchDepartures } from '../client';

export default function DepartureBoard() {
	const [title, setTitle] = useState('...');
	const [departures, setDepartures] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const { stopPlace, departures } = await fetchDepartures();
			setTitle(stopPlace);
			setDepartures(departures);
		};
		fetchData();
	}, []);

	return (
		<>
			<h2>Avganger fra {title}</h2>
			<ul className="departures">
				{departures.map(({ frontText, departureTime }) => {
					return (
						<li
							className="departure"
							key={`${frontText}${departureTime}`}
						>
							<img src={clockIcon} />
							{frontText} kl. {departureTime}
						</li>
					);
				})}
			</ul>
		</>
	);
}
```

</details>

## Oppgave 5 - Bonusoppgaver

Hva! Har du kommet så langt allerede?! Da har jeg noen bonusoppgaver til deg! Du kan velge mellom disse oppgavene:

🏆 Lag en bildekarusell

I stedet for å klikke på bildet for å endre det så kan du lage en karusell der brukeren kan bla seg gjennom bilder.

-   Hvis du trenger bilder kan du bruke https://unsplash.com/.

🏆 Personaliser bloggsiden din enda mer!

Er det noe mer informasjon eller komponenter som mangler? Slå deg løs!

🏆 Datahenting

Lyst til å leke mer med datahenting? Det er brukt GraphQL for å hente data fra Entur sitt JourneyPlanner API i oppgave 4. Sjekk ut [dokumentasjonen på API'et](https://api.entur.io/graphql-explorer/journey-planner-v3?query=%23%20Avgangstavle%20-%20Stavanger%20stadion%0A%0A%7B%0A%20%20stopPlace%28id%3A%20%22NSR%3AStopPlace%3A548%22%29%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20estimatedCalls%28timeRange%3A%2072100%2C%20numberOfDepartures%3A%2010%29%20%7B%20%20%20%20%20%0A%20%20%20%20%20%20realtime%0A%20%20%20%20%20%20aimedArrivalTime%0A%20%20%20%20%20%20aimedDepartureTime%0A%20%20%20%20%20%20expectedArrivalTime%0A%20%20%20%20%20%20expectedDepartureTime%0A%20%20%20%20%20%20actualArrivalTime%0A%20%20%20%20%20%20actualDepartureTime%0A%20%20%20%20%20%20date%0A%20%20%20%20%20%20forBoarding%0A%20%20%20%20%20%20forAlighting%0A%20%20%20%20%20%20destinationDisplay%20%7B%0A%20%20%20%20%20%20%20%20frontText%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20quay%20%7B%0A%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20serviceJourney%20%7B%0A%20%20%20%20%20%20%20%20journeyPattern%20%7B%0A%20%20%20%20%20%20%20%20%20%20line%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20transportMode%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A) og se om du kan hente og vise mer nyttig data for et stoppested!

🏆 Context

Bruk [React Context](https://react.dev/learn/passing-data-deeply-with-context) til å lage dark-mode på siden din når brukeren trykker på en knapp.

-   Hint: Bruk CSS-variabler.

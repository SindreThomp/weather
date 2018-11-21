# Gruppe 1 - SATS - Weather report
Sindre Thompson, Ann Margrethe Pedersen, Tarjei Taxerås, Stian Simonsen

## Problemstilling:
Værmeldinger er ofte unøyaktige, og kan være svært forskjellige. Derfor ønsker vi å kombinere resultatet fra 3 eller flere forskjellige kilder for å få den mest nøyaktige værmeldingen.
Enten å vise resultatene fra alle kildene hver for seg, eller gjennomsnittet av dem.

## Brukerhistorier 
- For at jeg skal vite hvilke aktiviteter vi kan utføre, som en lærer for en klasse som skal på skoletur, ønsker jeg å sjekke været i Oslo.
- Som en turist, ønsker jeg å sjekke været der jeg skal, for å vite hva jeg skal pakke. 

## Plan
Vi tenker å ha et oversiktlig norgeskart, med de utvalgte byene på. Når man trykker på en av byene skal resultatet av været komme opp i en oversikt ved siden av. Referer til rikt bilde. Været kan sees opptil en uke fram i tid. Mulighet for inkludering av en søkefunksjon. Planen er å bruke utvalgte byer:
- Oslo
- Kristiansand
- Trondheim
- Bergen
- Stavanger
- Tromsø
- Bodø
- Kirkenes

Dette er for å ikke gjøre det for komplekst.

Som rammeverk ønsker vi å bruke Angular. Angular er noe vi har litt erfaring med fra en tidligere ICA og vi er interessert i å prøve ut andre rammeverk enn NetBeans. 

Lignende tjenester finnes allerede, men vi ønsker å lære mer om bruk av API-er, og bruk av Angular.

## Underveis i prosjektet
Vi ser i ettertid at det var litt problemer med rammeverket Angular på Mac. Det var noen problemer med å installere det, så derfor valgte vi å bruke Vue istedenfor. Vue burde i tilegg passe bedre til vårt prosjekt, i og med at systemet ikke skal være for innviklet, bare noen enkle uthentinger ved hjelp av API.

## Javascript

## Vue


## Axios 
 - "Promise based HTTP client for the browser and node.js"
 - Axios er et javascript-bibliotek brukt til å gjøre HTTP-requests fra node.js, eller XMLHttpRequests fra nettleseren, som også støtter ES6 Promise API.
 
### Axios-funksjoner:
- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Intercept request and response
- Transform request and response data
- Cancel requests
- Automatic transforms for JSON data
- Client side support for protecting against XSRF

- [Source](https://www.npmjs.com/package/axios)

### Metoder

### Vår bruk av Axios
get
then
catch


Akitveres i HTML-fila ved hjelp av et script:
- <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

## OpenWeatermap
Openweathermap er ei nettside som gir ut APIer for å finne vær og vind på ønskelig lokasjon. Man registrer seg og får en API. API-url-en
kan endres ut ifra hvilken type informasjon du vil hente ut. Dette kan være vær for dette tidspunktet, 5 dager fremover(forecast), inkluderer været for hver 3. time. Man kan også ha 16 dager osv., men da er ikke lenger tjenesten gratis.

- Kun for en dag: http://api.openweathermap.org/data/2.5/weather?q=Olso&APPID={API-ID}
- For 5 dager(forecast): http://api.openweathermap.org/data/2.5/forecast?q=Olso&APPID={API-ID}

## Weatherbit
## Yahoo


Planen først var å hente ut informasjon ved hjelp av forecast, men dette viste seg å være problematisk da det var vanskelig 
å filtrere ut det resultatene fra det bestemte tidspunktene. For å utføre dette 
Det tok opp for mye tid, så derfor bestemte vi oss for å bare gå får værinformasjon på nåværende tidspunkt.



# Opinion Portal

## Languages README [Polski, (English - Temporarily translated by Lingvanex, powered by Vivaldi Browser)]

### [Polski]

### Work In Progress

#### Co znajduje się w tym repo?

Opinion Portal to repozytorium aplikacji do wstawianie opinii przez użytkowników, i do dodawania produktów/usług do opiniowania przez firmy i osoby posiadające swoją markę osobistą.

Aplikacja jest pisana w Angularze, przywykorzystaniu bazy danych Supabase.

#### Czy apka działa?

Apka jest w wersji alpha od ponad 2 lat. Dużo rzeczy działa, ale nie wszystkie rzeczy działają dobrze. Na razie apka jest hostowana na Github Pages i tak pozostanie dopóki nie zrobię dedykowanego backendu.

#### Z jakimi przeszkodami się mierzysz?

Z przeszkodami z którymi się mierzę to między innymi:
- Wyzwania z projektowaniem i wdrażaniem UI,
- Podczas wchodzenia bezpośrednio np. na formularz logowania, np:"https://patrykopala.github.io/OpinionPortal/login" nie łapię mi endpoint'u (dotyczy Github Pages)


#### Jak uruchomić aplikację u siebie na kompie?

Jeżeli chcesz przetestować aplikacje na swoim środowisku to wystarczy, że:

1. sklonujesz repo z pomocą komendy "git clone", przykład:
```bash
git clone https://github.com/PatrykOpala/OpinionPortal.git
```

2. zainstalujesz potrzebne zależności:
```bash
npm i
```
lub
```bash
npm install
```
3. Uruchomisz lokalny serwer:
```bash
npm start 
```
lub
```bash
npm run start
```
lub
```bash
ng serve
```

Jeżeli chcesz przetestować apkę za pomocą testów jednostkowych to wystarczy, że wykonasz komendę:
```bash
ng test
```
lub
```bash
npm run test
```
Analogicznie możesz wykonać także testy end-to-end za pomocą komendy:
```bash
ng e2e
```

### [English]

#### What's in this repo?

Opinion Portal is a repository of applications for inserting opinions by users, and for adding products / services for giving opinions by companies and people with their personal brand.

The application is written in Angular, using the Supabase database.

#### Does the app work?

The app has been in the alpha version for over 2 years. A lot of things work, but not all things work well. For now, the app is hosted on Github Pages and will remain so until I make a dedicated backend.

#### What obstacles do you face?

With obstacles I face, among others:
- Challenges with the design and implementation of UI,
- When entering directly, e.g. on the login form, e.g:"https://patrykopala.github.io/OpinionPortal/login" I don't get endpoint (applies Github Pages)


#### How to run the application at home on the computer?

If you want to test applications on your environment, all you have to do is:

1. you clone a repo with the help of a command "git clone", e.g:
```bash
git clone https://github.com/PatrykOpala/OpinionPortal.git
```
2. you will install the necessary dependencies:
```bash
npm i
```
or
```bash
npm install
```
3. You will run a local server:
```bash
npm start 
```
or
```bash
npm run start
```
or
```bash
ng serve
```
If you want to test the app using unit tests, all you have to do is execute the command:
```bash
ng test
```
or
```bash
npm run test
```
Similarly, you can also perform end-to-end tests using the command:
```bash
ng e2e
```

<!-- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->

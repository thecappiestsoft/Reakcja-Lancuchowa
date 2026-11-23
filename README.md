# Reakcja Łańcuchowa – wersja deweloperska

Błyskawiczne mikrogry z chemii (PL/EN, tryb jasny i ciemny, solo i imprezowy).
Ta paczka to ta sama gra co opublikowany artefakt, tylko rozbita na osobne pliki,
żeby łatwiej było ją edytować. Zachowanie i wygląd są identyczne z oryginałem.

## Uruchomienie

Nie trzeba niczego instalować ani budować.

- **Najprościej:** otwórz `index.html` w przeglądarce (działa także z `file://`).
- **Z serwerem lokalnym** (wygodniejsze przy edycji):
  `npm run dev` → http://localhost:5173
  albo `python3 -m http.server 5173`

## Jeden plik do publikacji

`npm run build` (lub `python3 tools/build.py`) składa wszystko z powrotem
w jeden samodzielny plik `dist/index.html` – gotowy do wgrania jako artefakt
lub na dowolny hosting.

## Struktura

```
index.html                 – szkielet HTML: menu, biografia Łańcuchowa, scena gry
css/
  base/reset.css           – reset bazowy
  base/tokens.css          – zmienne kolorów i fontów, motyw jasny i ciemny („Kawa”)
  layout/                  – górny pasek, HUD, scena + nakładki, stopka
  screens/                 – menu, biografia, ekran końcowy
  components/              – przełączniki PL/EN i motywu, zakładki, logo, kafelki mikrogier
  games/<mikrogra>.css     – style każdej mikrogry osobno
js/
  boot/theme-boot.js       – ustawia motyw przed pierwszym malowaniem (bez migania)
  data/globals.js          – deklaracje zmiennych z pulami zadań, masy molowe
  data/data-pl.js          – loadPL(): wszystkie zadania po polsku
  data/data-en.js          – loadEN(): zadania po angielsku
  core/utils.js            – narzędzia ($, pick, shuffle, formatowanie wzorów…)
  core/sound.js            – efekty dźwiękowe
  core/i18n.js             – przełączanie języka, teksty interfejsu
  ui/menu.js               – ustawienia: tryb, poziom, trudność, działy, mikrogry
  games/_shared.js         – wspólny renderer quizu + rejestr ENGINES
  games/engines/<nazwa>.js – jedna mikrogra = jeden plik
  games/helpers.js         – opisy mikrogier i funkcje pomocnicze (atom, jony, pH…)
  core/game-loop.js        – pętla gry: rundy, czas, punkty, życia, wyniki
  ui/pause.js, ui/theme.js – pauza i motyw
  main.js                  – start aplikacji
tools/build.py             – składanie do jednego pliku
```

## Ważne przy edycji

- **Kolejność plików ma znaczenie.** Skrypty to zwykłe (nie-modułowe) `<script>`,
  które dzielą zakres globalny – dokładnie jak w oryginale jednego pliku. Kolejność
  ich ładowania jest w `index.html`; kolejność arkuszy CSS też (kaskada).
- **Kolejność mikrogier w menu** = kolejność plików z `js/games/engines/` w `index.html`.
- **Nowa mikrogra:** utwórz `js/games/engines/moja.js` z `ENGINES.moja={…}`
  (wzoruj się na `quiz.js` lub `tf.js`), dodaj jej opis w `ENG_DESC` w
  `js/games/helpers.js`, ewentualnie styl w `css/games/moja.css`, i podepnij oba pliki
  w `index.html`.
- **Nowe zadania:** dopisz je w `js/data/data-pl.js` i `js/data/data-en.js`
  (format opisują komentarze, np. `Q(kategoria, poziom 1-3, pytanie, [poprawna, błędne…])`).
- Zapisy w przeglądarce (`localStorage`): `rl-theme`, `rl-lang` i najlepszy wynik.
- Fonty ładowane są z Google Fonts; offline gra użyje fontów systemowych.

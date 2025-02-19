# tests

Lezione originale:

- [x] none -> presente
- [x] presente -> reset
- [x] presente -> assenza recuperabile
- [x] presente -> assenza ingiustificata

- [x] none -> assenza recuperabile
- [x] assenza recuperabile (non programmata) -> reset
- [x] assenza recuperabile (non programmata) -> presente
- [x] none -> assenza ingiustificata
- [x] assenza ingiustificata -> reset
- [x] assenza ingiustificata -> presente

- [x] none -> prova
- [x] prova -> reset

- [x] none -> elimina
- [x] presente -> elimina
- [x] prova -> elimina
- [x] assenza ingiustificata -> elimina
- [x] assenza recuperabile (non programmata) -> elimina
- [x] assenza recuperabile (programmata ma non fatta) -> elimina
- [] assenza recuperabile (programmata e fatta) -> elimina

- [x] sposta -> lezione nuova
- [x] sposta -> lezione con altre lezioni
- [] modifica orario
- [] note


Lezione da recuperare:

- [x] da programmare -> programmata
- [x] programmata -> da programmare


Lezione di recupero:

- [] none -> presente
- [] none -> assente
- [] presente -> reset
- [] presente -> assente
- [] assente -> reset
- [] assente -> presente
- [] none -> elimina
- [] presente -> elimina
- [] assente -> elimina
- [] modifica orario
- [] note
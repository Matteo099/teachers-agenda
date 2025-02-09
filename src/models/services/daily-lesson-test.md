# tests

Lezione originale:

- [x] none -> presente
- [x] presente -> reset
- [x] presente -> assenza recuperabile
- [x] presente -> assenza ingiustificata

- [x] none -> assenza recuperabile
- [x] assenza recuperabile (non programmata) -> presente
- [x] assenza recuperabile (non programmata) -> reset
- [x] none -> assenza ingiustificata
- [x] assenza ingiustificata -> presente
- [x] assenza ingiustificata -> reset

- [x] none -> prova
- [x] prova -> reset

- [x] none -> elimina
- [x] presente -> elimina
- [x] assenza ingiustificata -> elimina
- [x] assenza recuperabile (non programmata) -> elimina
- [] assenza recuperabile (programmata ma non fatta) -> elimina
    - non viene aggiornato l'array recoveryLessons.recoveries => rimane la lezione da recuperare...
- [] assenza recuperabile (programmata e fatta) -> elimina

- [] sposta
- [] modifica orario
- [] note


Lezione da recuperare:

- [x] da programmare -> programmata
- [x] programmata -> da programmare


Lezione di recupero:

- [] presente
- [] assenza
- [] reset
- [] modifica orario
- [] note
- [] elimina
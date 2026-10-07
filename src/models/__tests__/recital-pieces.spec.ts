import { describe, expect, it } from 'vitest';
import { getStudentRecitalPieces } from '../recital-pieces';

describe('brani del saggio', () => {
    it('legge il vecchio brano singolo senza perderlo', () => {
        expect(getStudentRecitalPieces({ recitalPiece: 'Notturno', recitalAuthor: 'Chopin' }))
            .toEqual([{ piece: 'Notturno', author: 'Chopin' }]);
    });

    it('preferisce la lista nuova e permette di svuotarla', () => {
        const pieces = [{ piece: 'Brano 1', author: 'Autore 1' }, { piece: 'Brano 2', author: 'Autore 2' }];
        expect(getStudentRecitalPieces({ recitalPieces: pieces, recitalPiece: 'Vecchio' })).toEqual(pieces);
        expect(getStudentRecitalPieces({ recitalPieces: [], recitalPiece: 'Vecchio' })).toEqual([]);
    });
});

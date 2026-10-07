import type { RecitalPiece, Student } from './model';

/** Read both the current list and an existing single-piece student record. */
export function getStudentRecitalPieces(student: Pick<Student, 'recitalPieces' | 'recitalPiece' | 'recitalAuthor'>): RecitalPiece[] {
    if (Array.isArray(student.recitalPieces)) return student.recitalPieces;
    if (student.recitalPiece || student.recitalAuthor) {
        return [{ piece: student.recitalPiece ?? '', author: student.recitalAuthor ?? '' }];
    }
    return [];
}

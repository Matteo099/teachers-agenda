export const nameof = <T>(name: keyof T) => name;

export const formatDate = function (d: Date): string {
    const yyyy = d.getFullYear();
    const mm = (d.getMonth() + 1).toString().padStart(2, '0'); // Months start at 0!
    const dd = (d.getDate()).toString().padStart(2, '0');
    return `${dd}/${mm}/${yyyy}`;
}
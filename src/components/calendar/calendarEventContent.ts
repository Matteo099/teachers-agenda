import { statusColors, type StatusColorKey } from '@/models/statusColors';

function escapeText(value: string): string {
    return value.replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[character]!);
}

export function calendarEventContent(title: string, subtitle: string, status?: StatusColorKey, archived = false) {
    const badge = status
        ? `<span class="app-calendar-event-badge status-${status}" aria-label="${escapeText(statusColors[status].label)}">${statusColors[status].short}</span>`
        : '';
    const archivedBadge = archived ? '<span class="app-calendar-archived-badge">Archiviato</span>' : '';
    const line = `<div class="app-calendar-event-line"><span class="app-calendar-event-title">${escapeText(title)}</span>${archivedBadge}${badge}</div>`;
    return {
        timeGrid: `${line}<div class="app-calendar-event-subtitle">${escapeText(subtitle)}</div>`,
        dateGrid: line,
        monthGrid: line,
        monthAgenda: line,
    };
}

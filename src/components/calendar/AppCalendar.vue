<template>
  <div class="app-calendar" :class="{ 'app-calendar-compact': compact, 'app-calendar-hide-header': hideHeader, 'app-calendar-hide-day': hideDayHeader }">
    <ScheduleXCalendar :calendar-app="calendarApp">
      <template v-if="$slots.eventModal" #eventModal="{ calendarEvent }">
        <slot name="eventModal" :calendar-event="calendarEvent" />
      </template>
    </ScheduleXCalendar>
  </div>
</template>

<script setup lang="ts">
import type { CalendarApp } from '@schedule-x/calendar';
import { ScheduleXCalendar } from '@schedule-x/vue';
withDefaults(defineProps<{ calendarApp: CalendarApp; compact?: boolean; hideHeader?: boolean; hideDayHeader?: boolean }>(), {
  compact: false,
  hideHeader: false,
  hideDayHeader: false
});
</script>

<style scoped>
.app-calendar { overflow: hidden; border: 1px solid var(--app-border); border-radius: 14px; background: var(--app-surface); }
.app-calendar :deep(.sx__calendar-wrapper) {
  --sx-color-primary: var(--app-primary);
  --sx-color-primary-container: var(--app-accent-surface);
  --sx-color-on-primary-container: var(--app-primary);
  --sx-color-secondary: var(--app-muted);
  --sx-color-surface: var(--app-surface);
  --sx-color-surface-container: var(--app-hover-surface);
  --sx-color-surface-container-low: var(--app-background);
  --sx-color-surface-container-high: var(--app-hover-surface);
  --sx-color-background: var(--app-surface);
  --sx-color-on-background: var(--app-text);
  --sx-color-on-surface: var(--app-text);
  --sx-color-outline: var(--app-border);
  --sx-color-outline-variant: var(--app-border);
  --sx-color-neutral: var(--app-muted);
  --sx-border: 1px solid var(--app-border);
}
.app-calendar :deep(.sx-vue-calendar-wrapper) { min-height: 620px; font-family: Inter, Roboto, system-ui, sans-serif; }
.app-calendar :deep(.sx__calendar) { border: 0 !important; border-radius: 0 !important; box-shadow: none !important; font-family: inherit !important; }
.app-calendar :deep(.sx__calendar-header) { align-items: center; flex-wrap: wrap; padding: 18px 20px; border-bottom: 1px solid var(--app-border); background: var(--app-surface); }
.app-calendar :deep(.sx__range-heading) { color: var(--app-text); font-size: 1.05rem; font-weight: 700; }
.app-calendar :deep(.sx__today-button), .app-calendar :deep(.sx__view-selection-selected-item), .app-calendar :deep(.sx__date-input) { border: 1px solid var(--app-border); border-radius: 10px; background: var(--app-surface); color: var(--app-text); font-weight: 600; }
.app-calendar :deep(.sx__today-button:hover), .app-calendar :deep(.sx__view-selection-selected-item:hover) { border-color: var(--app-hover-border); background: var(--app-hover-surface); }
.app-calendar :deep(.sx__week-header) { border-bottom: 1px solid var(--app-border); background: var(--app-surface); }
.app-calendar :deep(.sx__week-grid__day-name) { color: var(--app-muted); font-size: .78rem; font-weight: 650; }
.app-calendar :deep(.sx__week-grid__date-number) { color: var(--app-text); font-weight: 700; }
.app-calendar :deep(.sx__week-grid__date--is-today .sx__week-grid__date-number) { color: var(--app-primary); }
.app-calendar :deep(.sx__week-grid__hour-text) { color: var(--app-muted); font-size: .73rem; }
.app-calendar :deep(.sx__time-grid-day), .app-calendar :deep(.sx__date-grid-cell), .app-calendar :deep(.sx__month-grid-day) { background: var(--app-surface); }
.app-calendar :deep(.sx__time-grid-event), .app-calendar :deep(.sx__date-grid-event), .app-calendar :deep(.sx__month-grid-event) { overflow: hidden; border-radius: 9px !important; box-shadow: 0 2px 6px rgba(30, 50, 100, .08); }
.app-calendar :deep(.sx__time-grid-event-title), .app-calendar :deep(.sx__month-grid-event) { font-weight: 650; }
.app-calendar :deep(.sx__time-grid-event) { border-left: 3px solid currentColor; }
.app-calendar :deep(.app-calendar-event-line) { display: flex; align-items: center; gap: 4px; min-width: 0; }
.app-calendar :deep(.app-calendar-event-title) { flex: 1; min-width: 0; overflow: hidden; font-size: .78rem; font-weight: 700; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
.app-calendar :deep(.app-calendar-event-badge) { display: inline-flex; flex: none; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 5px; background: var(--status-bg); color: var(--status-fg); font-size: .7rem; font-weight: 800; line-height: 1; }
.app-calendar :deep(.app-calendar-event-subtitle) { overflow: hidden; margin-top: 2px; font-size: .68rem; line-height: 1.2; text-overflow: ellipsis; white-space: nowrap; }
.app-calendar :deep(.sx__event-modal) { overflow: hidden; border: 1px solid var(--app-border); border-radius: 14px; box-shadow: var(--app-hover-shadow); }
.app-calendar-hide-header :deep(.sx__calendar-header), .app-calendar-hide-day :deep(.sx__week-header) { display: none !important; }
.app-calendar-compact :deep(.sx-vue-calendar-wrapper) { min-height: 480px; }
@media (max-width: 600px) {
  .app-calendar { overflow-x: auto; }
  .app-calendar :deep(.is-week-view) { min-width: 580px; }
  .app-calendar :deep(.sx__calendar-header) { gap: 8px; padding: 12px; }
  .app-calendar :deep(.sx__range-heading) { font-size: .9rem; }
  .app-calendar :deep(.sx__time-grid-event-title) { font-size: .75rem; }
}
</style>

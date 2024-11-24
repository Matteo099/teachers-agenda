<template>
    <DailyLessonCalendar :events="events" editable></DailyLessonCalendar>
</template>

<script setup lang="ts">
import DailyLessonCalendar from '@/components/calendar/DailyLessonCalendar.vue';
import { Time, yyyyMMdd } from '@/models/model';
import {
    type CalendarEvent
} from '@schedule-x/calendar';
import { onMounted, ref, type Ref } from 'vue';

const events: Ref<CalendarEvent[]> = ref([]);

async function fetchEvents() {
    const today = yyyyMMdd.today();
    let time = Time.fromITime(13 * 3600+40*60);
    
    for (let index = 1; index <= 6; index++) {
        const start = time.format();
        time = time.add({ hour: 1 });
        const end = time.format();
        events.value.push({
            id: index,
            title: "Studente " + index,
            start: today.toIyyyyMMdd("-") + " " + start,
            end: today.toIyyyyMMdd("-") + " " + end,
        });
    }

    console.log(events.value);
}

onMounted(async () => {
    await fetchEvents();
});
</script>
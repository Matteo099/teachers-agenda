import LogConsole from "@/components/debugger/LogConsole.vue";
import { DailyLessonRepository } from "@/models/repositories/daily-lesson-repository";
import { SchoolRepository } from "@/models/repositories/school-repository";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";

// describe('HelloWorld', () => {
//     it('renders properly', () => {
//         const wrapper = mount(LogConsole, { props: { bufferSize: 10 } })
//         console.log(wrapper.text())
//         expect(wrapper.text()).toContain('Hello Vitest')
//     })
// })

describe("DailyLessonService2.updateLessonsStatus", () => {
    it("From NONE to PRESENT", async () => {
        const dl = await SchoolRepository.instance.get("90iUvnbTwH8SrylaSRM4");
        console.log(dl);
    });
});
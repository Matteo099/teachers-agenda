import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import DailyLessonView from '../DailyLessonView.vue'

describe('DailyLessonView', () => {
    it('renders properly', () => {
        const wrapper = mount(DailyLessonView, { props: { msg: 'Hello Vitest' } })
        expect(wrapper.text()).toContain('Hello Vitest')
    })
})

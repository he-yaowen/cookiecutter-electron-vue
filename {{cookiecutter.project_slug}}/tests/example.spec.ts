import {mount} from "@vue/test-utils";
import {expect, test} from "vitest";
import HomePage from "@renderer/views/pages/HomePage.vue";

test("HomePage component", async () => {
    expect(HomePage).toBeTruthy();

    const wrapper = mount(HomePage, {});

    expect(wrapper.text()).toContain("Hello, world!");
});

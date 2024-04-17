import React from "react";
import { shallow } from "enzyme";

import Header from "./Header";

describe("<Header />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a img tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("renders a h1 tags", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("h1").exists()).toBe(true);
  });
});

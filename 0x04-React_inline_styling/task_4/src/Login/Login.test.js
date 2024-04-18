import React from "react";
import { shallow } from "enzyme";

import Login from "./Login";

describe("<Login />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders 2 input tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").toHaveLength(2));
  });

  it("renders 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").toHaveLength(2));
  });
});

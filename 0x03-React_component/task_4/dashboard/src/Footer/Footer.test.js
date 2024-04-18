import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a text", () => {
    const wrapper = shallow(<Header />);
    const text = "Copyright"
    expect(wrapper.find("App-footer").find("p").find(text)).toBe(true);
  });
});

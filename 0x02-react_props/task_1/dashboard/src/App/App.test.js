import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notification";
import Footer from "../Footer/Footer";

describe("<App />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Notification component witout crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Header component without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the Footer component without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });
});

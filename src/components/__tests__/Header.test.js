import React from "react";
import { shallow } from "enzyme";
import ReactDOM from "react-dom";
import Header from "../Header";

describe("Header", () => {
  let mountedHead;

  beforeEach(() => {
    mountedHead = shallow(<Header />);
  });
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders a logo", () => {
    const logoImg = mountedHead.find(
      'img[src="images/wired-brain-coffee-logo.png"]'
    );
    expect(logoImg.length).toBe(1);
  });
});

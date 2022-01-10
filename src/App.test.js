import App from "./App";
import renderer from "react-test-renderer";
import Enzyme, { mount } from "enzyme";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17"; // added for Adapter

Enzyme.configure({ adapter: new Adapter() });

test("renders without crashing", () => {
  mount(<App />);
});

test("should render 1 header", () => {
  const component = mount(<App />);
  expect(component.find("header").length).toBe(1);
});

test("should render 1 h5 tag", () => {
  const component = mount(<App />);
  expect(component.find("h5").length).toBe(1);
});

test("should render 1 h5 tag with text Air Quality Monitor", () => {
  const component = mount(<App />);
  expect(component.find("h5").text()).toBe("Air Quality Monitor");
});

test("should render 1 Home component", () => {
  const component = mount(<App />);
  expect(component.find("Home").length).toBe(1);
});

test("should render 1 Button with text Compare AQIs", () => {
  const component = mount(<App />);
  expect(component.find("button").length).toBe(1);
  expect(component.find("button span").text()).toBe("Compare AQIs");
});

test("should render 1 table, tbody and thead ", () => {
  const component = mount(<App />);
  expect(component.find("table").length).toBe(1);
  expect(component.find("thead").length).toBe(1);
  expect(component.find("tbody").length).toBe(1);
});

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

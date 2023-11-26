import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
configure({ adapter: new Adapter() });
describe("<NavigationItems />", () => {
    let wrapper = null;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems token={false} />);
    });
    it("should render two <NavigationItem /> elements if token is null", () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it("should render three <NavigationItem /> elements if token is true", () => {
        wrapper.setProps({ token: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it("should render logout <NavigationItem /> elements equally", () => {
        wrapper.setProps({ token: true });
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(
            true
        );
    });
});

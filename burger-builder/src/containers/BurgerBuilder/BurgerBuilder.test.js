import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import { BurgerBuilder } from "./BurgerBuilder";

configure({ adapter: new Adapter() });
describe("<BurgerBuilder />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder initIngredients={() => {}} />);
    });
    it("should render <BurgerControls /> when ingredients are provided", () => {
        wrapper.setProps({ ingredients: { Salad: 1 } });
        expect(wrapper.find(BurgerControls)).toHaveLength(1);
    });
});

import * as React from "react";
import CircleButton from "../components";
import renderer from "react-test-renderer";

it(`renders correctly`, () => {
    const tree = renderer.create(<CircleButton />).toJSON();
    expect(tree).toMatchSnapshot();
});

import ProductRow from "../../src/components/ProductRow";
import { render } from "@testing-library/react";

const fakeObject = {
  item: {
    name: "someName",
  },
};
const renderComponent = (params) => {
  render(<ProductRow {...params} />);
};

describe("ProductRow", () => {
  it("should render as expected", () => {
    const component = renderComponent(fakeObject);
    expect(component).toMatchSnapshot();
  });
});

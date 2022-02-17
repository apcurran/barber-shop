import React from "react";
import { render } from "@testing-library/react";
import ShopHours from "./ShopHours";

test("renders shop hours table header", () => {
  const { getByText } = render(<ShopHours />);
  const headline = getByText(/Shop Hours/i);
  
  expect(headline).toBeInTheDocument();
});

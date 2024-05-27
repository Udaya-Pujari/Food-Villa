import { fireEvent, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/mockRestaurentData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

//since the body ha fetch()

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render the body component with search button", async () => {
  //when ever u r using fetch or state management ,wrap the render method in to act

  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("SearchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  //after this screen should load 4 cards
  const cards=screen.getAllByTestId("resCard")
  expect(cards.length).toBe(1)
});

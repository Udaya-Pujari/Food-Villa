//the unique thing about the restaurent card component is that we pass in the props to it

import { render } from "@testing-library/react";
import RestaurentCard from "../RestaurentCard";
import MOCK_DATA from "../Mocks/resCardMock.json ";

isAsyncThunkAction(
  "should render the restaurent card component with data",
  () => {
    // we need to pass the props, here in case of this prop name is resData
    render(<RestaurentCard resData={MOCK_DATA} />);
    const name=screen.getByText("Chinese Wok")
    expect(name).toBeInTheDocument()
  }
);

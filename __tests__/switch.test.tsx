import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Switch, Case, Default } from "../index.tsx";

describe("Switch component", () => {
  test("should render matching Case component", () => {
    const { getByText, queryByText } = render(
      <Switch>
        <Case condition={true}>Case 1</Case>
        <Case condition={false}>Case 2</Case>
        <Default>Default Case</Default>
      </Switch>
    );

    expect(getByText("Case 1")).toBeInTheDocument();
    expect(queryByText("Case 2")).not.toBeInTheDocument();
    expect(queryByText("Default Case")).not.toBeInTheDocument();
  });

  test("should render default Case component", () => {
    const { getByText } = render(
      <Switch>
        <Case condition={false}>Case 1</Case>
        <Case condition={false}>Case 2</Case>
        <Default>Default Case</Default>
      </Switch>
    );

    expect(getByText("Default Case")).toBeInTheDocument();
  });

  test("should render null if no matching Case or Default component", () => {
    const { container } = render(
      <Switch>
        <Case condition={false}>Case 1</Case>
        <Case condition={false}>Case 2</Case>
      </Switch>
    );

    expect(container.firstChild).toBeNull();
  });
});

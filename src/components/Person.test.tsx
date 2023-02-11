import {render, screen} from "@testing-library/react";
import {Person} from "./Person";

test("renders a name", () => {
    render(<Person name={"Andrew"}/>)
    const divElement = screen.getByRole("contentinfo")
    expect(divElement).toHaveTextContent("Name is Andrew")
    expect(divElement).toHaveAttribute("role", "contentinfo")
})
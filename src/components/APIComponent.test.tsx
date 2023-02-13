import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {APIComponent} from "./APIComponent";
import {setupServer} from "msw/node";
import {rest} from "msw";

test("gets the data", async () => {
    render(<APIComponent />)

    const out = await waitFor(() => screen.getByRole('contentinfo'))

    expect(out).toHaveTextContent("Name is Andrew")
})
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import {APIComponent} from "./APIComponent";
import {setupServer} from "msw/node";
import {rest} from "msw";

const server = setupServer(
    rest.get("/api", (req, res, ctx) => {
        return res(ctx.json({name: "Andrew"}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test("gets the data", async () => {
    render(<APIComponent />)

    const out = await waitFor(() => screen.getByRole('contentinfo'))

    expect(out).toHaveTextContent("Name is Andrew")
})
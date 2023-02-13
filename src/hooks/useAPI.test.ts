import {act, renderHook, waitFor} from "@testing-library/react";
import {useCounter} from "./useCounter";
import {useAPI} from "./useAPI";


test("Custom async hook", async () => {
    const {result} = renderHook(() => useAPI())

    await waitFor(() => {
        expect(result.current).toEqual({name: "Andrew"})
    })

})
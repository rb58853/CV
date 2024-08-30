import { setFloatButton } from "./wsSlice"

function setFloatButtonState(dispatch, state) {
    dispatch(setFloatButton(state))
}

export default setFloatButtonState
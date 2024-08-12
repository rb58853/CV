import { setSection } from "./sectionSlice";

function setSectionFunction(dispatch, section) {
    dispatch(setSection(section))
}

export default setSectionFunction
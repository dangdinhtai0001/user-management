// ~ -------------------- import zone --------------------
import PerfectScrollbar from "perfect-scrollbar";

export function addScrollbar4Element(elementName, options) {
    const defaultOptions = {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20,
        // suppressScrollX: true,
    };


    const elemnt = document.querySelector(elementName);

    if (elemnt) {
        if (options) {
            const ps = new PerfectScrollbar(elemnt, options);
            ps.update();
        } else {
            const ps = new PerfectScrollbar(elemnt, defaultOptions);
            ps.update();
        }

    }
}


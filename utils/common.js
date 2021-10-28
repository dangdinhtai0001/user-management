// ~ -------------------- import zone --------------------
import PerfectScrollbar from "perfect-scrollbar";

export function addScrollbar4Element(elementPath, options) {
    const defaultOptions = {
        wheelSpeed: 1,
        wheelPropagation: true,
        minScrollbarLength: 20,
        // suppressScrollX: true,
    };


    const element = document.querySelector(elementPath);

    if (element) {
        if (options) {
            const ps = new PerfectScrollbar(element, options);
            ps.update();
        } else {
            const ps = new PerfectScrollbar(element, defaultOptions);
            ps.update();
        }

    }
}

export function getDefaultContainerLoading(elementPath) {
    return {
        target: document.querySelector(elementPath),
        text: "Đang tải dữ liệu...",
        spinner: "el-icon-loading",
    }
}

export function getDefaultFullScreenLoading(elementPath) {
    return {
        target: document.querySelector(elementPath),
        text: "Đang tải dữ liệu...",
        spinner: "el-icon-loading",
        lock: true,
        background: "rgba(0, 0, 0, 0.7)"
    }
}


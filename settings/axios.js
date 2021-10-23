export default {
    baseURL: process.env.API_BASE_URL || "http://127.0.0.1:8091/api/v0",
    debug: process.env.DEBUG || false,
    proxyHeaders: false,
    credentials: false
}
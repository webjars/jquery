requirejs.config({
    paths: { "jquery": webjars.path("jquery", "jquery") },
    shim: { "jquery": { "exports": "$" } }
});

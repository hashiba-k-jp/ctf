function header(){
    body = document.querySelector("body");
    main = document.querySelector("main");
    nav = document.createElement("nav");

    body.insertBefore(nav, main);

    nav.outerHTML = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-warning-subtle\" aria-label=\"Third navbar example\">\
        <div class=\"container-fluid\">\
            <a class=\"navbar-brand\" href=\"#\">cheatseet for myself</a>\
            <button class=\"navbar-toggler collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarsExample03\" aria-controls=\"navbarsExample03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\
                <span class=\"navbar-toggler-icon\"></span>\
            </button>\
    \
            <div class=\"navbar-collapse collapse\" id=\"navbarsExample03\" style=\"\">\
            <ul class=\"navbar-nav me-auto mb-2 mb-sm-0\">\
                <li class=\"nav-item\">\
                    <a class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\
                </li>\
                <!-- <li class=\"nav-item\">\
                    <a class=\"nav-link\" href=\"#\">Link</a>\
                </li>\
                <li class=\"nav-item\">\
                    <a class=\"nav-link disabled\" aria-disabled=\"true\">Disabled</a>\
                </li> -->\
                <!-- <li class=\"nav-item dropdown\">\
                    <a class=\"nav-link dropdown-toggle\" href=\"#\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Dropdown</a>\
                    <ul class=\"dropdown-menu\">\
                          <li><a class=\"dropdown-item\" href=\"#\">Action</a></li>\
                          <li><a class=\"dropdown-item\" href=\"#\">Another action</a></li>\
                          <li><a class=\"dropdown-item\" href=\"#\">Something else here</a></li>\
                    </ul>\
                </li> -->\
            </ul>\
            <!-- <form role=\"search\">\
                <input class=\"form-control\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\
            </form> -->\
            </div>\
        </div>\
    </nav>"

}

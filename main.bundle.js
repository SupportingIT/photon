webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 141;


/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(162);
var platform_browser_dynamic_1 = __webpack_require__(157);
var core_1 = __webpack_require__(10);
var environment_1 = __webpack_require__(161);
var _1 = __webpack_require__(160);
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(_1.AppModule);
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/main.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__(33);
var core_1 = __webpack_require__(10);
var forms_1 = __webpack_require__(88);
var http_1 = __webpack_require__(156);
var clarity_angular_1 = __webpack_require__(90);
var app_component_1 = __webpack_require__(89);
var utils_module_1 = __webpack_require__(165);
var app_routing_1 = __webpack_require__(159);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            clarity_angular_1.ClarityModule.forRoot(),
            utils_module_1.UtilsModule,
            app_routing_1.ROUTING
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/app/app.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__(47);
exports.ROUTES = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
exports.ROUTING = router_1.RouterModule.forRoot(exports.ROUTES);
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/app/app.routing.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(89));
__export(__webpack_require__(158));
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/app/index.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: true
};
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/environments/environment.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__(179);
__webpack_require__(172);
__webpack_require__(168);
__webpack_require__(174);
__webpack_require__(173);
__webpack_require__(171);
__webpack_require__(170);
__webpack_require__(178);
__webpack_require__(167);
__webpack_require__(166);
__webpack_require__(176);
__webpack_require__(169);
__webpack_require__(177);
__webpack_require__(175);
__webpack_require__(180);
__webpack_require__(358);
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/polyfills.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(47);
var HashListener = (function () {
    function HashListener(route) {
        var _this = this;
        this.route = route;
        this.sub = this.route.fragment.subscribe(function (f) {
            _this.scrollToAnchor(f, false);
        });
    }
    HashListener.prototype.ngOnInit = function () {
        this.scrollToAnchor(this.route.snapshot.fragment, false);
    };
    HashListener.prototype.scrollToAnchor = function (hash, smooth) {
        if (smooth === void 0) { smooth = true; }
        if (hash) {
            var element = document.querySelector("#" + hash);
            if (element) {
                element.scrollIntoView({
                    behavior: smooth ? "smooth" : "instant",
                    block: "start"
                });
            }
        }
    };
    HashListener.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return HashListener;
}());
HashListener = __decorate([
    core_1.Directive({
        selector: "[hash-listener]",
        host: {
            "[style.position]": "'relative'"
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
], HashListener);
exports.HashListener = HashListener;
var _a;
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/utils/hash-listener.directive.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Hack while waiting for https://github.com/angular/angular/issues/6595 to be fixed.
 */

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(47);
var ScrollSpy = (function () {
    function ScrollSpy(renderer) {
        this.renderer = renderer;
        this.anchors = [];
        this.throttle = false;
    }
    Object.defineProperty(ScrollSpy.prototype, "links", {
        set: function (routerLinks) {
            var _this = this;
            this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            this.sub = routerLinks.changes.subscribe(function () {
                _this.anchors = routerLinks.map(function (routerLink) { return "#" + routerLink.fragment; });
            });
        },
        enumerable: true,
        configurable: true
    });
    ScrollSpy.prototype.handleEvent = function () {
        var _this = this;
        this.scrollPosition = this.scrollable.scrollTop;
        if (!this.throttle) {
            window.requestAnimationFrame(function () {
                var currentLinkIndex = _this.findCurrentAnchor() || 0;
                _this.linkElements.forEach(function (link, index) {
                    _this.renderer.setElementClass(link.nativeElement, "active", index === currentLinkIndex);
                });
                _this.throttle = false;
            });
        }
        this.throttle = true;
    };
    ScrollSpy.prototype.findCurrentAnchor = function () {
        for (var i = this.anchors.length - 1; i >= 0; i--) {
            var anchor = this.anchors[i];
            if (this.scrollable.querySelector(anchor) && this.scrollable.querySelector(anchor).offsetTop <= this.scrollPosition) {
                return i;
            }
        }
    };
    ScrollSpy.prototype.ngOnInit = function () {
        this.scrollable.addEventListener("scroll", this);
    };
    ScrollSpy.prototype.ngOnDestroy = function () {
        this.scrollable.removeEventListener("scroll", this);
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    return ScrollSpy;
}());
__decorate([
    core_1.Input("scrollspy"),
    __metadata("design:type", Object)
], ScrollSpy.prototype, "scrollable", void 0);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true }),
    __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _b || Object])
], ScrollSpy.prototype, "links", null);
__decorate([
    core_1.ContentChildren(router_1.RouterLinkWithHref, { descendants: true, read: core_1.ElementRef }),
    __metadata("design:type", typeof (_c = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _c || Object)
], ScrollSpy.prototype, "linkElements", void 0);
ScrollSpy = __decorate([
    core_1.Directive({
        selector: "[scrollspy]",
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _d || Object])
], ScrollSpy);
exports.ScrollSpy = ScrollSpy;
var _a, _b, _c, _d;
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/utils/scrollspy.directive.js.map

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(10);
var hash_listener_directive_1 = __webpack_require__(163);
var scrollspy_directive_1 = __webpack_require__(164);
var clarity_angular_1 = __webpack_require__(90);
var common_1 = __webpack_require__(40);
var UtilsModule = (function () {
    function UtilsModule() {
    }
    return UtilsModule;
}());
UtilsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            clarity_angular_1.ClarityModule.forChild()
        ],
        declarations: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ],
        exports: [
            hash_listener_directive_1.HashListener,
            scrollspy_directive_1.ScrollSpy
        ]
    })
], UtilsModule);
exports.UtilsModule = UtilsModule;
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/utils/utils.module.js.map

/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(38)(false);
// imports


// module
exports.push([module.i, ".clr-icon.clr-clarity-logo {\n  background-image: url(/photon/images/vmw_oss.svg); }\n\n.hero {\n  background-color: #ddd;\n  left: -24px;\n  padding-bottom: 2em;\n  padding-top: 2em;\n  overflow-x: hidden;\n  position: relative;\n  text-align: center;\n  top: -24px; }\n  .hero .btn-custom {\n    display: inline-block;\n    text-align: center;\n    margin: auto; }\n\n@media (min-width: 320px) {\n  .content-area {\n    overflow-x: hidden; }\n  .hero {\n    width: 100vw; } }\n\n@media (min-width: 768px) {\n  .content-area {\n    overflow-x: hidden; }\n  .hero {\n    width: 110%; } }\n\n.hero-image img {\n  max-width: 360px; }\n\n.icon {\n  display: inline-block;\n  height: 32px;\n  vertical-align: middle;\n  width: 32px; }\n  .icon.icon-github {\n    background: url(/photon/images/github_icon.svg) no-repeat left -2px; }\n\n.nav-group label {\n  display: block;\n  margin-bottom: 1em; }\n\n.sidenav .nav-link {\n  padding: 3px 6px; }\n  .sidenav .nav-link:hover {\n    background: #eee; }\n  .sidenav .nav-link.active {\n    background: #d9e4ea;\n    color: #000; }\n\n.section {\n  padding: .5em 0; }\n\n.contributor {\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  margin-bottom: 1.5em;\n  margin-right: 1em;\n  max-width: 64px;\n  text-decoration: none; }\n\n@media (min-width: 320px) {\n  #license {\n    padding-bottom: 20vh; } }\n\n@media (min-width: 768px) {\n  #license {\n    padding-bottom: 80vh; } }\n\n.row:after {\n  clear: both;\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<clr-main-container>\n    <header class=\"header header-6\">\n        <div class=\"branding\">\n            <a href=\"https://vmware.github.io/\" class=\"nav-link\">\n                <span class=\"clr-icon clr-clarity-logo\"></span>\n                <span class=\"title\">VMware&reg; Open Source Program Office</span>\n            </a>\n        </div>\n    </header>\n    <div class=\"content-container\">\n        <div id=\"content-area\" class=\"content-area\" hash-listener #scrollable>\n            <div class=\"hero\">\n                <div class=\"hero-image\"><img src=\"images/photon.png\" alt=\"VMware Photon OS&trade;\"></div>\n                <h3>Minimal Linux Container Host</h3>\n                <p><a href=\"https://github.com/vmware/photon\" class=\"btn btn-primary\"><i class=\"icon icon-github\"></i> Fork Photon&trade;</a></p>\n                <p>Track our progress in earning the Linux Foundation's Core Infrastructure Initiative's Best Practices Badge!\n                <br>\n                <a href=\"https://bestpractices.coreinfrastructure.org/projects/212\"><img src=\"https://bestpractices.coreinfrastructure.org/projects/212/badge\"></a></p>\n            </div>\n            <div id=\"overview\" class=\"section\">\n                <h2>What is Photon OS&trade;</h2>\n\n                <p>Photon OS&trade; is a minimal Linux container host, optimized to run on VMware platforms. With the 1.0 release, we have greatly expanded the library of packages that are in our repository, making Photon OS&trade; more broadly applicable to a range of use-cases. We invite partners, customers and interested community members to collaborate on both running containerized applications in a virtualized environment and the potential of an operating system tightly coupled to underlying virtual infrastructure.</p>\n\n                <br>\n\n                <ul>\n                    <li><strong>Optimized for vSphere</strong> - Leveraging more than a decade of experience validating guest operating systems, Photon OS is thoroughly validated on vSphere; and, because VMware is focused on the vSphere platform, we're able to highly tune the Photon OS kernel for VMware product and provider platforms.</li>\n                    <li><strong>Container support</strong> - Compatible with container runtimes, like Docker, and container scheduling frameworks, like Kubernetes.</li>\n                    <li><strong>Efficient lifecycle management</strong> - Contains a new, open-source, yum-compatible package manager - tdnf - that makes the system as small as possible, but preserves robust yum package management capabilities.</li></ul>\n                \n                <p>See the <a href=\"https://vmware.github.io/photon/files/photon_faqs.pdf\">FAQ</a> for more information.</p>\n            </div>\n\n            <div id=\"gettingPhotonOS\" class=\"section\">\n                <h2>Getting Photon OS&trade;</h2>\n\n\n                <p>The latest binary version is 1.0, Revision 2. These revised binaries build upon the expanded package library and guest OS validation on VMware platforms from the original 1.0 release. Revision 2 refreshes the binaries to include all the package updates that we’ve pulled in since 1.0. The new binaries will eliminate the need to update so many packages on a newly created instance. As with the original 1.0 release, we're offering pre-built ISO, OVA (for both virtual hardware v10 and virtual hardware v11), Amazon AMI and Google GCE-compatible images:</p>\n\n                <br>\n\n                <ul>\n                    <li><a href=\"https://bintray.com/vmware/photon/download_file?file_path=photon-1.0-62c543d.iso\" target=\"_blank\">Photon OS, Version 1.0 — Full ISO</a> - Contains everything you could need to install Photon OS and more, with the full library of packages on the ISO.</li>\n                    <li><a href=\"https://bintray.com/vmware/photon/download_file?file_path=photon-custom-hw10-1.0-62c543d.ova\" target=\"_blank\">Photon OS, Version 1.0 — OVA with virtual hardware v10</a> - A pre-installed and vSphere-optimized Photon OS minimal instance configured with virtual hardware version 10.</li>\n                    <li><a href=\"https://bintray.com/vmware/photon/download_file?file_path=photon-custom-hw11-1.0-62c543d.ova\" target=\"_blank\">Photon OS, Version 1.0 — OVA with virtual hardware v11</a> - A pre-installed and vSphere-optimized Photon OS minimal instance configured with virtual hardware version 11.</li>\n                    <li><a href=\"https://bintray.com/vmware/photon/download_file?file_path=photon-ami-1.0-62c543d.tar.gz\" target=\"_blank\">Photon OS, Version 1.0 — AMI for Amazon AWS</a> - A pre-installed Photon OS minimal instance, configured for Amazon AWS.</li>\n                    <li><a href=\"https://bintray.com/vmware/photon/download_file?file_path=photon-gce-1.0-62c543d.tar.gz\" target=\"_blank\">Photon OS, Version 1.0 — GCE Image for Google Compute Engine</a> - A pre-installed Photon OS minimal instance, configured for Google GCE.</li>\n                </ul>\n                <p>For the complete catalog of binaries available for download, along with checksums and previous binaries, please see <a href=\"https://github.com/vmware/photon/wiki/Downloading-Photon-OS\" target=\"_blank\">Downloading Photon OS</a>.\n                </p>\n            </div>\n\n            <div id=\"gettingStarted\" class=\"section\">\n                <h2>Getting Started</h2>\n                <p>We've provided a few guides to help get you started over on our <a href=\"https://github.com/vmware/photon/wiki\">Photon OS&trade; GitHub Wiki</a></p>\n            </div>\n\n            <div id=\"support\" class=\"section\">\n                <h2>Support</h2>\n                <p>Photon OS&trade; is released as open source software and, presently, provides community support through our GitHub project page.If you encounter an issue or have a question, feel free to reach out via <a href=\"https://github.com/vmware/photon/issues\">GitHub issues for Photon OS&trade;</a>.</p>\n            </div>\n            <div id=\"contributors\" class=\"section\">\n                <h2>Contributors</h2>\n\n                <p>\n                    <a title=\"Krishna Ganugapati\" href=\"https://github.com/kganugapati\"><img alt=\"Krishna Ganugapati\" src=\"https://avatars.githubusercontent.com/u/11167611?v=3\" class=\"contributor\"></a>\n                    <a title=\"Sriram Nambakam\" href=\"https://github.com/snambakam\"><img alt=\"Sriram Nambakam\" src=\"https://avatars.githubusercontent.com/u/10917504?v=3\" class=\"contributor\"></a>\n                    <a title=\"Sharath George\" href=\"https://github.com/sharathjg\"><img alt=\"Sharath George\" src=\"https://avatars.githubusercontent.com/u/11167586?v=3\" class=\"contributor\"></a>\n                    <a title=\"Priyesh Padmavilasom\" href=\"https://github.com/ppadmavilasom\"><img alt=\"Priyesh Padmavilasom\" src=\"https://avatars.githubusercontent.com/u/11167452?v=3\" class=\"contributor\"></a>\n                    <a title=\"Divya Thaluru\" href=\"https://github.com/dthaluru\"><img alt=\"Divya Thaluru\" src=\"https://avatars.githubusercontent.com/u/11169145?v=3\" class=\"contributor\"></a>\n                    <a title=\"Anish Swaminathan\" href=\"https://github.com/suezzelur\"><img alt=\"Anish Swaminathan\" src=\"https://avatars.githubusercontent.com/u/12656953?v=3\" class=\"contributor\"></a>\n                    <a title=\"Kumar Kaushik\" href=\"https://github.com/kaushik229\"><img alt=\"Kumar Kaushik\" src=\"https://avatars.githubusercontent.com/u/12632836?v=3\" class=\"contributor\"></a>\n                    <a title=\"Vinay Kulkarni\" href=\"https://github.com/vinaykul\"><img alt=\"Vinay Kulkarni\" src=\"https://avatars.githubusercontent.com/u/12750645?v=3\" class=\"contributor\"></a>\n                    <a title=\"Danut Moraru\" href=\"https://github.com/dmoraru\"><img alt=\"Danut Moraru\" src=\"https://avatars.githubusercontent.com/u/13158414?v=3\" class=\"contributor\"></a>\n                    <a title=\"Xiaolin Li\" href=\"https://github.com/xiaolin-vmware\"><img alt=\"Xiaolin Li\" src=\"https://avatars.githubusercontent.com/u/13423245?v=3\" class=\"contributor\"></a>\n                    <a title=\"Gregory Murray\" href=\"https://github.com/gregmmurray\"><img alt=\"Gregory Murray\" src=\"https://avatars.githubusercontent.com/u/11306358?v=3\" class=\"contributor\"></a>\n                </p>\n            </div>\n\n            <div id=\"contributing\" class=\"section\">\n                <h2>Contributing</h2>\n                \n                <p>The Photon project team welcomes contributions from the community. If you wish to contribute code and you have not signed our Contributor License Agreement (CLA), our CLA-bot will walk you through the process and update the issue when you open a <a href=\"https://help.github.com/articles/creating-a-pull-request\">Pull Request</a>. For any questions about the CLA process, please refer to our <a href=\"https://cla.vmware.com/faq\">FAQ</a> or contact us through the GitHub issue tracker.</p>\n            </div>\n\n            <div id=\"license\" class=\"section\">\n                <h2>License</h2>\n\n                <p>The ISO and OVA images are distributed under the <a href=\"https://github.com/gregmmurray/GS_vSphere/files/317294/PhotonOS.GA.EULA_2016May19FINAL.txt\">VMware Photon OS&trade; EULA</a>. Open source license information may be found in Photon OS&trade; <a href=\"https://raw.githubusercontent.com/vmware/photon/master/COPYING\">Open Source License</a> file.</p>\n            </div>\n        </div>\n        <nav class=\"sidenav\" [clr-nav-level]=\"2\">\n            <section class=\"sidenav-content\">\n                <section class=\"nav-group\" [scrollspy]=\"scrollable\">\n                    <label><a class=\"nav-link active\" routerLink=\".\" routerLinkActive=\"active\" fragment=\"overview\">Overview</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"gettingPhotonOS\">Getting Photon OS&trade;</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"gettingStarted\">Getting Started</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"support\">Support</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"contributors\">Contributors</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"contributing\">Contributing</a></label>\n                    <label class=\"bump-down\"><a class=\"nav-link\" routerLink=\".\" fragment=\"license\">License</a></label>\n                </section>\n            </section>\n        </nav>\n    </div>\n</clr-main-container>\n"

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(10);
var router_1 = __webpack_require__(47);
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: __webpack_require__(329),
        styles: [__webpack_require__(320)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a;
//# sourceMappingURL=/Users/druk/Sites/photon/src/src/src/app/app.component.js.map

/***/ })

},[360]);
//# sourceMappingURL=main.bundle.js.map
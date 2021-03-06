System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var FormSkuComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            FormSkuComponent = (function () {
                function FormSkuComponent() {
                }
                FormSkuComponent.prototype.onSubmit = function (value) {
                    console.log('you submitted value: ', value);
                };
                FormSkuComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-form-sku',
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "  \n  <div class=\"ui raised segment\">  \n    <h2 class=\"ui header\">Demo Form: Sku</h2>  \n    <form #f=\"ngForm\"  \n          (ngSubmit)=\"onSubmit(f.value)\"  \n          class=\"ui form\">\n\n      <div class=\"field\">  \n        <label for=\"skuInput\">SKU</label>  \n        <input type=\"text\"  \n               id=\"skuInput\"  \n               placeholder=\"SKU\"  \n               ngControl=\"sku\">  \n      </div>\n\n      <button type=\"submit\" class=\"ui button\">Submit</button>  \n    </form>  \n  </div>  \n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormSkuComponent);
                return FormSkuComponent;
            })();
            exports_1("FormSkuComponent", FormSkuComponent);
        }
    }
});
//# sourceMappingURL=demo-form.component.js.map
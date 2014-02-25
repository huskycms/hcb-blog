define([
    "dojo/_base/declare",
    'hc-backend/layout/main/content/package',
    "dojo/i18n!./nls/Package",
    'xstyle/css!./css/blog.css'
], function(declare, _Package, translation) {

    return declare("BlogPackage", [ _Package ], {
        // summary:
        //      Clients package will provide user to manage web site clients
        title: translation['packageTitle'],
        iconClass: 'blogIcon',

        postCreate: function () {
            try {
                this.inherited(arguments);
            } catch (e) {
                 console.error(this.declaredClass, arguments, e);
                 throw e;
            }
        }
    });
});

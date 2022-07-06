sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"test/Courses1/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("test.Courses1.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// icon logo
			sap.ui.core.IconPool.addIcon("cool", "customfont", "icomoon", "e900");
			
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
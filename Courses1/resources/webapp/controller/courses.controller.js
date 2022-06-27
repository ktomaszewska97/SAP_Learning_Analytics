sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("test.Courses1.controller.courses", {
  onInit: function () {
  },
  onPressPeople: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("employees", true);
  },
   onPressCourses: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("courses", true);
  },
  onPressSingleCourse: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("singleCourse", true);
  },
  onPressSinglePerson: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("singleperson", true);
  },
  onPressHistory: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("history", true);
  },
  onPressDashboard: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("dashboard", true);
  }
  });
});
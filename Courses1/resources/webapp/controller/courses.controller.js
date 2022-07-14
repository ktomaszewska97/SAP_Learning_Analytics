sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	
], function (Controller, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("test.Courses1.controller.courses", {
  onInit: function () {
  },
//navigation menu
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
  },
//search 

onFilterPosts: function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("newValue");
			if (sQuery) {
//eventuell statt Course, die id des Feldes, oben query statt newValue möglich
				aFilter.push(new Filter("Course", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oTable = this.byId("coursesTable");
			var oBinding = oTable.getBinding("items");
			oBinding.filter(aFilter);
		}
  });
});
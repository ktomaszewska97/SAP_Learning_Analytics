
	
      

		

sap.ui.define([
               "sap/ui/core/mvc/Controller"
               ], function (Controller, JSONModel) {
  "use restrict";
  return Controller.extend("courses.Courses.controller.Courses",{
  onInit: function () {
  },
  onPress: function(oEvent)
  {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("second");
  }
  });
});



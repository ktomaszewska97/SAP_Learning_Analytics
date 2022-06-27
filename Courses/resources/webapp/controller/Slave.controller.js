sap.ui.define([
               "sap/ui/core/mvc/Controller",
               "sap/ui/core/routing/History"
               ], function (Controller, History) {
  "use restrict";
  return Controller.extend("courses.Courses.controller.Slave",{
  onInit: function () {
  },
  onBack: function()
  {
  var oHistory = History.getInstance();
  var sPreviousHash = oHistory.getPreviousHash();
  if (sPreviousHash !== undefined) {
  window.history.go(-1);
  } else {
  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
  oRouter.navTo("overview", true);
  }
  }
  });
});


sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
"sap/ui/core/library"
   
	], function(Controller, JSONModel, CoreLibrary) {
	"use strict";

//datarange nächste zeile
   var ValueState = CoreLibrary.ValueState;

 	return Controller.extend("SC.SingleCourse.controller.SingleCourse", { 
	
	
		onInit: function () {

        	var oData = {
			
				"Editable": true,
				"Enabled": true
			};
			
//nächste Zeile auch bei select
	       //datarange
            var oDRS2 = this.byId("DRS2"),
				dateFrom = new Date(),
				dateTo = new Date(),
				oModel = new JSONModel(oData);

			dateFrom.setUTCDate(2);
			dateFrom.setUTCMonth(1);
			dateFrom.setUTCFullYear(2014);

			dateTo.setUTCDate(17);
			dateTo.setUTCMonth(1);
			dateTo.setUTCFullYear(2014);
			
//datarange
            oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
//datarange
			oDRS2.setDateValue(new Date(2016, 1, 16));
			oDRS2.setSecondDateValue(new Date(2016, 1, 18));
			oDRS2.setMinDate(new Date(2016, 0, 1));
			oDRS2.setMaxDate(new Date(2016, 11, 31));
			
			this._iEvent = 0;
//datarange
		},
			handleChange: function (oEvent) {
			var sFrom = oEvent.getParameter("from"),
				sTo = oEvent.getParameter("to"),
				bValid = oEvent.getParameter("valid"),
				oEventSource = oEvent.getSource(),
				oText = this.byId("TextEvent");

			this._iEvent++;

			oText.setText("Id: " + oEventSource.getId() + "\nFrom: " + sFrom + "\nTo: " + sTo);

			if (bValid) {
				oEventSource.setValueState(ValueState.None);
			} else {
				oEventSource.setValueState(ValueState.Error);
			}
		}
	});
});      

		
	



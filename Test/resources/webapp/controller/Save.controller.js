sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel",
"sap/ui/core/library"
   
	], function(Controller, JSONModel, CoreLibrary) {
	"use strict";

//datarange nächste zeile
   var ValueState = CoreLibrary.ValueState;

	return Controller.extend("Test.Test.controller.View1", {
	
	
		onInit: function () {

        	var oData = {
				"SelectedProduct": "HT-1001",
				"SelectedProduct2": "HT-1001",
				"SelectedProduct3": "HT-1001",
				"SelectedProduct4": "HT-1001",
				"Company": [
					{
						"ProductId": "HT-1000",
						"Name": "MSG global"
					},
					{
						"ProductId": "HT-1001",
						"Name": "MSG Germany"
					},
					{
						"ProductId": "HT-1002",
						"Name": "MSG Italy"
					}
					
				],
					"BusinessUnit": [
					{
						"ProductId": "4",
						"Name": "HR"
					},
					{
						"ProductId": "5",
						"Name": "Management"
					},
					{
						"ProductId": "6",
						"Name": "IT"
					}
					
				],
				"Team": [
					{
						"ProductId": "7",
						"Name": "Insurance"
					},
					{
						"ProductId": "8",
						"Name": "Food"
					},
					{
						"ProductId": "9",
						"Name": "Banking"
					}
					
				],
				"ActiveInactive": [
					{
						"ProductId": "10",
						"Name": "Active"
					},
					{
						"ProductId": "11",
						"Name": "Inactive"
					}
					
				],
			
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

		
	


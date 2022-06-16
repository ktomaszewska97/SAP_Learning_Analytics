sap.ui.define([
	"sap/ui/core/mvc/Controller",
   "sap/ui/model/json/JSONModel"

   
	], function(Controller, JSONModel) {
	"use strict";



	return Controller.extend("Test.Test.controller.View1", {
		
			        //daterange
	
	
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
	           var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
		}
	});
});      
//daterange


			// set explored app's demo model on this sample
//nächste Zeile auch bei select
			
		
	


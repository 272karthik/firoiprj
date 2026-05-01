sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    "sap/ui/model/json/JSONModel"
], (Controller,MessageToast,JSONModel) => {
    "use strict";

    return Controller.extend("com.sap.zproject1.controller.View1", {
        onInit() {
            var oData = {
                "name": "Peter",
                "enabled": true
            };

            var oModel = new JSONModel();
            oModel. setData(oData);
            this.getView().setModel(oModel);
        },

        	onPress: function (evt) {
			MessageToast.show( "VENKYDON GUNSHOT Anuko");
            },
            onchange: function(oEvent1){

                var input = oEvent1.getSource();

                if(input.getValue()<10){
                    input.setValueState(sap.ui.core.ValueState.Error);
                    input.setValueStateText("Value must be greater than 10")
                }else{

                    input.setValueState(sap.ui.core.ValueState.None);
                }
            }
    });
});
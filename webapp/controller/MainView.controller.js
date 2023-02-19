sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        /*
        function myCheck()
            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();

            if(valueEmployee.length == 6){
                //inputEmployee.setDescription("Ok");
                this.byId("labelCountry").setVisible(true);
                this.byId("slCountry").setVisible(true);
            
            }else{
                //inputEmployee.setDescription("Not Ok");
                this.byId("labelCountry").setVisible(false);
                this.byId("slCountry").setVisible(false);

            }
        }
        */

        var Main = Controller.extend("fioriapp.employees.controller.MainView", {});

        Main.prototype.onInit = function () {
            
        }

        Main.prototype.onValidate = function () {

            var inputEmployee = this.byId("inputEmployee");
            var valueEmployee = inputEmployee.getValue();

            if(valueEmployee.length == 6){
                //inputEmployee.setDescription("Ok");
                this.getView().byId("labelCountry").setVisible(true);
                this.getView().byId("slCountry").setVisible(true);
            
            }else{
                //inputEmployee.setDescription("Not Ok");
                this.getView().byId("labelCountry").setVisible(false);
                this.getView().byId("slCountry").setVisible(false);

            }
        }

        return Main;
    });

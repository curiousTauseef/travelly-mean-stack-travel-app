function file(){return{restrict:"A",require:"ngModel",link:function(e,i,n,l){i.on("change",function(e){l.$setViewValue(e.target.files[0])})}}}angular.module("TravellyApp").directive("file",file);
import { Component } from "@angular/core";

@Component({
    selector:'app-alert',
    templateUrl:'./alert.component.html'
})
export class AlertComponent{
    alertStatus: string='warning';
    alertMessage: string='';
    constructor(){
        this.alertStatus=Math.random()>0.5 ?'warning':'success';
    }
    getAlertStatus(){
        return this.alertStatus;
    }
    getAlertMessage(){
        return this.alertStatus==='warning'? 'This is a warning alert':'This is a success alert';
    }
    getColor(){
        return this.alertStatus==='warning'? 'green':'red';
    }

}
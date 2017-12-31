import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dataManager } from '../../data/dataManager';

@Component({
  selector: 'page-today',
  templateUrl: 'today.html'
})
export class TodayPage {
  isNewTask = false;
  canAddNewTask = false;
  inputText = "";
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = dataManager;
  }
  itemSelected(item){

  }
  addTask(){
    if(!this.isNewTask)
    {
      this.isNewTask = true;
      this.canAddNewTask = false;
    }
      
    else if(this.canAddNewTask){
      this.items.push({text: this.inputText+"", done: false});
      this.inputText = "";
      this.isNewTask = false;

    }
    

  }
  onChangeText(value){
    if(value.length > 0){
      this.canAddNewTask = true;
    }
  }

}

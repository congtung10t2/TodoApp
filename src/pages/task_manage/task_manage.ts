import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { dataManager } from '../../data/dataManager';
@Component({
  selector: 'page-task-manage',
  templateUrl: 'task_manage.html'
})
export class TaskManager {
  isUpdating = false;
  inputText = "";
  items = [];
  isCanUpdate = false;
  selectedItem = null;
  constructor(public navCtrl: NavController) {
    this.items = dataManager;
  }
  itemSelected(item){

  }
  update(){
    this.selectedItem.text = this.inputText;
    this.isCanUpdate = false;
    this.isUpdating = false;
  }
  edit(item){
    this.isUpdating = true;
    this.selectedItem = item;
    this.inputText = item.text;
  }
  delete(item){
    let index = this.items.indexOf(item);
    console.log(index+"")
    if(index != -1)
    this.items.splice(index, 1);
  }
  onChangeText(value){
    if(value.length > 0){
      this.isCanUpdate = true;
    }
  }

}

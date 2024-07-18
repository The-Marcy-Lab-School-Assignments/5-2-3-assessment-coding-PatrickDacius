const { getId } = require('./utils');

class ToDoItem {
  constructor(description, priorityLevel, isDone) {
    this.id = getId();
    this.description = description;
    this.priorityLevel = priorityLevel
    this.isDone = false
    this.imNotCreative = null

  }
  getIsDone() {
    return this.isDone;
  }


  toggleDone() {
    this.isDone = !this.isDone;
  }
}



class ToDoList {

  static allInstances = []

  constructor(name) {
    this.id = getId();
    this.name = name;
    this.items = []
    this.isDeleted = false
    ToDoList.allInstances.push(this)
  }
  createItem(description, priorityLevel) {
    const chores = new ToDoItem(description, priorityLevel)
    this.items.push(chores)
    return chores

  }
  getItems() {
    return [...this.items]

  }
  getCompletedCount() {
    let completedCount = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].isDone) {
        completedCount++;
      }
    }
    return completedCount;
  }
  static list() {
    return [...this.allInstances]
  }
  static findBy(id) {
    return ToDoList.allInstances.find(list => list.id === id)
  }
  deleteItem() {
    return this.isDeleted = true;
  }
}


module.exports = {
  ToDoItem,
  ToDoList
};
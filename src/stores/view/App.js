import { observable, action } from 'mobx';

class AppStore {
  @observable count = 0;
  @observable tabState = 'home';
  @action changeTabState(state){
    console.log(state);
    this.tabState = state;
  };
  resetTimer() {
    this.count = 0;
  }
}

export default AppStore;

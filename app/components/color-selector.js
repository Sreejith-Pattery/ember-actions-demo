import Ember from 'ember';

export default Ember.Component.extend({
    itemColors:["blue","yellow","green","red","purple","pink","none"],
    actions:{
        putOnItem(color){
            this.sendAction('putOnItem', color)
        }
    }
});

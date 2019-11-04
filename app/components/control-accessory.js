import Ember from 'ember';

export default Ember.Component.extend({
    itemName:'hats',
    hasItem:false,
    itemColor:"blue",
    actions:{
        putOnItem(color){
            this.set('hasItem',true);
            this.set('itemColor',color);
            this.sendAction('pressRelease', this.get('itemName'));
        },
        takeOffItem(){
            this.set('hasItem',false);
            this.sendAction('takeOffHat');
        },
        showHelp(){
            this.sendAction('showModalDialog', `We realise it is difficult to remove our proprietary vicelock ${this.get('itemName')}`);
        }
    }
});

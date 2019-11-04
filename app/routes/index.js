import Ember from 'ember';

export default Ember.Route.extend({
    actions:{
        pressRelease(itemName){
            this.send('showModalDialog',`Very ${itemName}.  Much disrupt`);
        },
        putOnHat(color){
            this.send('showModalDialog','Another action for putting on Hat');
        },
        takeOffHat(){
            this.send('showModalDialog','We (and your head) are sorry this happened')
        }
    }
});

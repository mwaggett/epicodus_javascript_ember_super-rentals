import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('city', params.city_id);
  },
  actions: {
    updateCity(city, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          city.set(key,params[key]);
        }
      });
      city.save();
      this.transitionTo('index');
    },
    destroyCity(city) {
      city.destroyRecord();
      this.transitionTo('index');
    }
  }
});

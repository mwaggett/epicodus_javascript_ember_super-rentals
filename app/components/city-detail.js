import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    updateCity(city,params) {
      this.sendAction('updateCity', city, params);
    },
    deleteCity(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  updateCityForm: false,
  actions: {
    updateCityForm() {
      this.set('updateCityForm', true);
    },
    updateCity(city) {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
        attractions: this.get('attractions').split(",")
      };
      this.set('updateCityForm', false);
      this.sendAction('updateCity', city, params);
    }
  }
});

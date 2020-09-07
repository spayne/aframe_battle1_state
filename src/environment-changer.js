// Component to listen for environment menu clicks and notify state with an event.
AFRAME.registerComponent('environment-changer', {
    init: function () {
      this.el.addEventListener('click', (evt) => {
        console.log('environment changer clicked');
        var desired_environment = evt.target.getAttribute('text').value.toLowerCase();
        this.el.sceneEl.emit('environmentSet', desired_environment);   
      });
    }
  });
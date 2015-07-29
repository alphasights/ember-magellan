/* globals document */

export default function(container, application){
  const hasDOM = typeof document !== 'undefined';

  if (!hasDOM) {
    return;
  }

  const rootElement = document.querySelector(application.rootElement);
  const containerElement = document.createElement('div');

  containerElement.id = 'ember-magellan-container';
  rootElement.appendChild(containerElement);
}

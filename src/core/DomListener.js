import {capitalize} from './utils';

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  // вызывать только после render() - после отрисовки всех компонент
  // задаем метод init() в ExcelComponent
  initDOMListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener);
      if (!this[method]) {
        const name = this.name || '';
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }
      console.log(method)
      // тоже самое что и addEventListener
      this.$root.on(listener, this[method].bind(this))
    });
  }

  removeDOMListeners() {

  }
}

// input => onInput
function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

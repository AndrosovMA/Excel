/*
  Description
  1- Excel.js отвчает за подоключение компонентов Header, Toolbar,
     Formula, Table и их рендера
  2- $ для обозначения обращения к dom элементам
*/

import {$} from '../../core/dom';

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector);
    console.log('-Excel.js,constructor,this.$el. ---', this.$el);

    this.components = options.components || [];
    console.log('-Excel.js,constructor,this.components. ---', this.components);
  }

  // Возвращает корневую node для excel
  getRoot() {
    const $root = $.create('div', 'excel');
    console.log('-Excel.js - getRoot() --', $root)

    this.components = this.components.map(Component => {
      const $el = $.create('div', Component.className);

      // new Component  - наследуется от компонентов Header, Formula ...
      const component = new Component($el);
      console.log(component);
      $el.html(component.toHTML());
      $root.append($el);
      return component;
    });

    return $root;
  }

  render() {
    this.$el.append(this.getRoot());

    this.components.forEach(component => component.init())
  }
}

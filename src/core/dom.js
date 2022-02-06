// $ - работа с DOM элементами

class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector; // если будет передан элемент ноды event.target
  }

  // базовый геттер/сеттер
  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html;
      return this; // возвращаем для использования Chain
    }
    return this.$el.outerHTML.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  // навешивание событий
  on(eventType, callback) {
    this.$el.addEventListener(eventType, callback)
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el;
    }
    if (Element.prototype.append) {
      this.$el.append(node);
    } else {
      this.$el.appendChild(node);
    }
    return this;
  }
}

// Экспорт функции $ помогает нам каждый раз не писать new DOM()
export function $(selector) {
  return new Dom(selector);
}

// статический метод для функции $
$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName);
  if (classes) {
    el.classList.add(classes);
  }
  return $(el);
};



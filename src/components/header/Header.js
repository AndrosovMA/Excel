import {ExcelComponent} from '../../core/ExcelComponent';

export class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
        <input type="text" class="excel__input input" value="Новая таблица"/>

        <div class="excel__container-button">
              <div class="excel__button button">
                  <i class="material-icons">delete</i>
              </div>
              <div class="excel__button button">
                  <i class="material-icons">exit_to_app</i>
              </div>
        </div>
    `;
  }
}

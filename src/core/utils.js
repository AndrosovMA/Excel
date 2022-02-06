// набор вспомогательных функций которые не привязаны к конкретному участку кода


export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

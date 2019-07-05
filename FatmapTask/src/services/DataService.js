import * as data from '../../data/off-pistes';

export function getMapsList () {
  const json = data;

  const array: Array = [];
  for(let i in json) {
    array.push(json[i]);
  }
  array.pop();

  return array;
}

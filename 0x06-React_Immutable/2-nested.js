const { fromJS } = require('immutable');

export default function accessImmutableObject(object, array) {
  const mappedData = fromJS(object);
  console.log(mappedData.getIn(array, undefined));

  return mappedData.getIn(array);
}

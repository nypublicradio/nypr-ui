import Route from '@ember/routing/route';

// BEGIN-SNIPPET brick-route
const row1 = [
  {attributes: {title: 'item1'}},
  {attributes: {title: 'item2'}},
  {attributes: {title: 'item3'}}
];

const row2 = [
  {attributes: {title: 'item4'}},
  {attributes: {title: 'item5'}},
  {attributes: {title: 'item6'}}
];

const row3 = [
  {attributes: {title: 'item7'}},
  {attributes: {title: 'item8'}},
  {attributes: {title: 'item9'}}
];

export default Route.extend({
  model() {
    return {
      row1,
      row2,
      row3
    };
  }
});
// END-SNIPPET

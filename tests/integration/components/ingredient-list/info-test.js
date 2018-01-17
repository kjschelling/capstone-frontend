import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ingredient-list/info', 'Integration | Component | ingredient list/info', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ingredient-list/info}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#ingredient-list/info}}
      template block text
    {{/ingredient-list/info}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

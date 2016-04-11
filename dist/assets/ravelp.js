"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('ravelp/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  var inject = _ember['default'].inject;
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: inject.service()
  });
});
define('ravelp/app', ['exports', 'ember', 'ravelp/resolver', 'ember-load-initializers', 'ravelp/config/environment'], function (exports, _ember, _ravelpResolver, _emberLoadInitializers, _ravelpConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _ravelpConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _ravelpConfigEnvironment['default'].podModulePrefix,
    Resolver: _ravelpResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _ravelpConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('ravelp/components/add-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    artistGenre: _ember['default'].computed('artist.name', 'artist.genre', function () {
      return this.get('artist.name') + ' - ' + this.get('artist.genre');
    }),

    actions: {
      update: function update(artist, params) {
        this.sendAction('update', artist, params);
      }
    }
  });
});
define('ravelp/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ravelp/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _ravelpConfigEnvironment) {

  var name = _ravelpConfigEnvironment['default'].APP.name;
  var version = _ravelpConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('ravelp/components/artist-detail', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    favorites: _ember['default'].inject.service(),

    actions: {
      addToFavorites: function addToFavorites(favorite) {
        this.get('favorites').add(favorite);
      }
    }

  });
});
define('ravelp/components/artist-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ravelp/components/display-favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    favorites: _ember['default'].inject.service(),

    actions: {
      remove: function remove(favorite) {
        this.get('favorites').remove(favorite);
      }
    }
  });
});
define('ravelp/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsPositionedContainer['default'];
    }
  });
});
define('ravelp/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('ravelp/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('ravelp/components/materialize-badge', ['exports', 'ember', 'ravelp/components/md-badge'], function (exports, _ember, _ravelpComponentsMdBadge) {
  exports['default'] = _ravelpComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-button-submit', ['exports', 'ember', 'ravelp/components/md-btn-submit'], function (exports, _ember, _ravelpComponentsMdBtnSubmit) {
  exports['default'] = _ravelpComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-button', ['exports', 'ember', 'ravelp/components/md-btn'], function (exports, _ember, _ravelpComponentsMdBtn) {
  exports['default'] = _ravelpComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-card-action', ['exports', 'ember', 'ravelp/components/md-card-action'], function (exports, _ember, _ravelpComponentsMdCardAction) {
  exports['default'] = _ravelpComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-card-content', ['exports', 'ember', 'ravelp/components/md-card-content'], function (exports, _ember, _ravelpComponentsMdCardContent) {
  exports['default'] = _ravelpComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-card-panel', ['exports', 'ember', 'ravelp/components/md-card-panel'], function (exports, _ember, _ravelpComponentsMdCardPanel) {
  exports['default'] = _ravelpComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-card-reveal', ['exports', 'ember', 'ravelp/components/md-card-reveal'], function (exports, _ember, _ravelpComponentsMdCardReveal) {
  exports['default'] = _ravelpComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-card', ['exports', 'ember', 'ravelp/components/md-card'], function (exports, _ember, _ravelpComponentsMdCard) {
  exports['default'] = _ravelpComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-checkbox', ['exports', 'ember', 'ravelp/components/md-check'], function (exports, _ember, _ravelpComponentsMdCheck) {
  exports['default'] = _ravelpComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-checkboxes', ['exports', 'ember', 'ravelp/components/md-checks'], function (exports, _ember, _ravelpComponentsMdChecks) {
  exports['default'] = _ravelpComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-collapsible-card', ['exports', 'ember', 'ravelp/components/md-card-collapsible'], function (exports, _ember, _ravelpComponentsMdCardCollapsible) {
  exports['default'] = _ravelpComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-collapsible', ['exports', 'ember', 'ravelp/components/md-collapsible'], function (exports, _ember, _ravelpComponentsMdCollapsible) {
  exports['default'] = _ravelpComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-copyright', ['exports', 'ember', 'ravelp/components/md-copyright'], function (exports, _ember, _ravelpComponentsMdCopyright) {
  exports['default'] = _ravelpComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-date-input', ['exports', 'ember', 'ravelp/components/md-input-date'], function (exports, _ember, _ravelpComponentsMdInputDate) {
  exports['default'] = _ravelpComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-input-field', ['exports', 'ember', 'ravelp/components/md-input-field'], function (exports, _ember, _ravelpComponentsMdInputField) {
  exports['default'] = _ravelpComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-input', ['exports', 'ember', 'ravelp/components/md-input'], function (exports, _ember, _ravelpComponentsMdInput) {
  exports['default'] = _ravelpComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-loader', ['exports', 'ember', 'ravelp/components/md-loader'], function (exports, _ember, _ravelpComponentsMdLoader) {
  exports['default'] = _ravelpComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-modal', ['exports', 'ember', 'ravelp/components/md-modal'], function (exports, _ember, _ravelpComponentsMdModal) {
  exports['default'] = _ravelpComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-navbar', ['exports', 'ember', 'ravelp/components/md-navbar'], function (exports, _ember, _ravelpComponentsMdNavbar) {
  exports['default'] = _ravelpComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-pagination', ['exports', 'ember', 'ravelp/components/md-pagination'], function (exports, _ember, _ravelpComponentsMdPagination) {
  exports['default'] = _ravelpComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-parallax', ['exports', 'ember', 'ravelp/components/md-parallax'], function (exports, _ember, _ravelpComponentsMdParallax) {
  exports['default'] = _ravelpComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-radio', ['exports', 'ember', 'ravelp/components/md-radio'], function (exports, _ember, _ravelpComponentsMdRadio) {
  exports['default'] = _ravelpComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-radios', ['exports', 'ember', 'ravelp/components/md-radios'], function (exports, _ember, _ravelpComponentsMdRadios) {
  exports['default'] = _ravelpComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-range', ['exports', 'ember', 'ravelp/components/md-range'], function (exports, _ember, _ravelpComponentsMdRange) {
  exports['default'] = _ravelpComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-select', ['exports', 'ember', 'ravelp/components/md-select'], function (exports, _ember, _ravelpComponentsMdSelect) {
  exports['default'] = _ravelpComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-switch', ['exports', 'ember', 'ravelp/components/md-switch'], function (exports, _ember, _ravelpComponentsMdSwitch) {
  exports['default'] = _ravelpComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-switches', ['exports', 'ember', 'ravelp/components/md-switches'], function (exports, _ember, _ravelpComponentsMdSwitches) {
  exports['default'] = _ravelpComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-tabs-tab', ['exports', 'ember', 'ravelp/components/md-tab'], function (exports, _ember, _ravelpComponentsMdTab) {
  exports['default'] = _ravelpComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-tabs', ['exports', 'ember', 'ravelp/components/md-tabs'], function (exports, _ember, _ravelpComponentsMdTabs) {
  exports['default'] = _ravelpComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/materialize-textarea', ['exports', 'ember', 'ravelp/components/md-textarea'], function (exports, _ember, _ravelpComponentsMdTextarea) {
  exports['default'] = _ravelpComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('ravelp/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('ravelp/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('ravelp/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('ravelp/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('ravelp/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('ravelp/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('ravelp/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('ravelp/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('ravelp/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('ravelp/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('ravelp/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('ravelp/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('ravelp/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('ravelp/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('ravelp/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('ravelp/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('ravelp/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('ravelp/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('ravelp/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('ravelp/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('ravelp/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('ravelp/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('ravelp/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('ravelp/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('ravelp/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('ravelp/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('ravelp/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('ravelp/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('ravelp/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('ravelp/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('ravelp/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('ravelp/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('ravelp/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('ravelp/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('ravelp/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('ravelp/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('ravelp/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('ravelp/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('ravelp/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('ravelp/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('ravelp/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _emberModalDialogComponentsModalDialogOverlay) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialogOverlay['default'];
    }
  });
});
define('ravelp/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsModalDialog['default'];
    }
  });
});
define('ravelp/components/new-artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newArtistForm: false,
    actions: {
      newArtistFormShow: function newArtistFormShow() {
        this.set('newArtistForm', true);
      },
      addArtist: function addArtist() {
        var params = {
          name: this.get('name'),
          genre: this.get('genre'),
          bio: this.get('bio'),
          image: this.get('image'),
          website: this.get('website')
        };
        this.set('newArtistForm', false);
        this.sendAction('addArtist', params);
      }
    }
  });
});
define('ravelp/components/new-review', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    addNewReview: false,
    actions: {
      reviewFormShow: function reviewFormShow() {
        this.set('addNewReview', true);
      },
      saveReview: function saveReview() {
        var params = {
          user: this.get('user'),
          venue: this.get('venue'),
          rating: this.get('rating'),
          performance: this.get('performance'),
          artist: this.get('artist')
        };
        this.set('addNewReview', false);
        this.sendAction('saveReview', params);
      }
    }
  });
});
define('ravelp/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('ravelp/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('ravelp/components/review-tile', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('ravelp/components/tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _emberModalDialogComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogComponentsTetherDialog['default'];
    }
  });
});
define('ravelp/components/update-artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    updateArtist: false,
    actions: {
      updateArtist: function updateArtist() {
        this.set('updateArtist', true);
      },
      update: function update(artist) {
        var params = {
          name: this.get('name'),
          genre: this.get('genre'),
          bio: this.get('bio'),
          image: this.get('image'),
          website: this.get('website')
        };
        this.set('updateArtist', false);
        this.sendAction('update', artist, params);
      }
    }
  });
});
define('ravelp/helpers/artist-popularity', ['exports', 'ember'], function (exports, _ember) {
  exports.artistPopularity = artistPopularity;

  function artistPopularity(params) {
    var artist = params[0];

    if (artist.get('reviews').get('length') >= 3) {
      return _ember['default'].String.htmlSafe('<i class="fa fa-heart"></i><i class="fa fa-heart"></i><i class="fa fa-heart"></i>');
    } else if (artist.get('reviews').get('length') >= 2) {
      return _ember['default'].String.htmlSafe('<i class="fa fa-heart"></i><i class="fa fa-heart"></i>');
    } else if (artist.get('reviews').get('length') >= 1) {
      return _ember['default'].String.htmlSafe('<i class="fa fa-heart"></i>');
    }
  }

  exports['default'] = _ember['default'].Helper.helper(artistPopularity);
});
define('ravelp/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('ravelp/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('ravelp/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('ravelp/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ravelp/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _ravelpConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_ravelpConfigEnvironment['default'].APP.name, _ravelpConfigEnvironment['default'].APP.version)
  };
});
define('ravelp/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('ravelp/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ravelp/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('ravelp/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('ravelp/initializers/export-application-global', ['exports', 'ember', 'ravelp/config/environment'], function (exports, _ember, _ravelpConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_ravelpConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _ravelpConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_ravelpConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('ravelp/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('ravelp/initializers/md-settings', ['exports', 'ravelp/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _ravelpConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize() {
    var materializeDefaults = _ravelpConfigEnvironment['default'].materializeDefaults;

    var application = arguments[1] || arguments[0];

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('ravelp/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('ravelp/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("ravelp/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('ravelp/models/artist', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr(),
    genre: _emberData['default'].attr(),
    image: _emberData['default'].attr(),
    bio: _emberData['default'].attr(),
    website: _emberData['default'].attr(),
    reviews: _emberData['default'].hasMany('review', { async: true })
  });
});
define('ravelp/models/review', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].attr(),
    rating: _emberData['default'].attr(),
    venue: _emberData['default'].attr(),
    performance: _emberData['default'].attr(),
    artist: _emberData['default'].belongsTo('artist', { async: true })
  });
});
define('ravelp/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('ravelp/router', ['exports', 'ember', 'ravelp/config/environment'], function (exports, _ember, _ravelpConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _ravelpConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('artist', { path: '/artist/:artist_id' });
    this.route('add-artist');
    this.route('favorites');
  });

  exports['default'] = Router;
});
define('ravelp/routes/add-artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('artist');
    },
    actions: {
      addArtist: function addArtist(params) {
        var newArtist = this.store.createRecord('artist', params);
        newArtist.save();
        this.transitionTo('add-artist');
      },
      update: function update(artist, params) {
        Object.keys(params).forEach(function (key) {
          if (params[key] !== undefined) {
            artist.set(key, params[key]);
          }
        });
        artist.save();
        this.transitionTo('add-artist');
      }
    }
  });
});
define('ravelp/routes/artist', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('artist', params.artist_id);
    },
    actions: {
      saveReview: function saveReview(params) {
        var newReview = this.store.createRecord('review', params);
        var artist = params.artist;
        artist.get('reviews').addObject(newReview);
        newReview.save().then(function () {
          return artist.save();
        });
        this.transitionTo('artist', params.artist);
      }
    }
  });
});
define('ravelp/routes/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    favorites: _ember['default'].inject.service()
  });
});
define('ravelp/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('artist');
    }
  });
});
define('ravelp/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('ravelp/services/favorites', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    favorites: [],

    add: function add(favorite) {
      this.get('favorites').pushObject(favorite);
    },
    remove: function remove(favorite) {
      this.get('favorites').removeObject(favorite);
    }
  });
});
define('ravelp/services/firebase', ['exports', 'emberfire/services/firebase', 'ravelp/config/environment'], function (exports, _emberfireServicesFirebase, _ravelpConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _ravelpConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});
define('ravelp/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('ravelp/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("ravelp/templates/add-artist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 8
            },
            "end": {
              "line": 15,
              "column": 8
            }
          },
          "moduleName": "ravelp/templates/add-artist.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "add-tile", [], ["artist", ["subexpr", "@mut", [["get", "artist", ["loc", [null, [14, 28], [14, 34]]]]], [], []], "update", "update"], ["loc", [null, [14, 10], [14, 52]]]]],
        locals: ["artist"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/add-artist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Ravelp");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Your source for peace, love, unity, and respect");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "addArtist");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("Current Artists for Review");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("center");
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("(Don't see your favorite artist? Add them!)");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s7");
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s5");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        return morphs;
      },
      statements: [["inline", "md-parallax", [], ["image", "assets/img/raveHeader4.JPG"], ["loc", [null, [2, 2], [2, 52]]]], ["block", "each", [["get", "model", ["loc", [null, [13, 16], [13, 21]]]]], [], 0, null, ["loc", [null, [13, 8], [15, 17]]]], ["inline", "new-artist", [], ["addArtist", "addArtist"], ["loc", [null, [18, 8], [18, 45]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ravelp/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 2
              },
              "end": {
                "line": 5,
                "column": 2
              }
            },
            "moduleName": "ravelp/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "link-to", ["PLUR", "index"], [], ["loc", [null, [4, 4], [4, 30]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 8,
                "column": 2
              }
            },
            "moduleName": "ravelp/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "link-to", ["Add an Artist", "add-artist"], [], ["loc", [null, [7, 4], [7, 44]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.4.4",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 2
              }
            },
            "moduleName": "ravelp/templates/application.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "link-to", ["My Favorites", "favorites"], [], ["loc", [null, [10, 4], [10, 42]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/application.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "link-to", ["index"], ["tagName", "li"], 0, null, ["loc", [null, [3, 2], [5, 14]]]], ["block", "link-to", ["add-artist"], ["tagName", "li"], 1, null, ["loc", [null, [6, 2], [8, 14]]]], ["block", "link-to", ["favorites"], ["tagName", "li"], 2, null, ["loc", [null, [9, 2], [11, 14]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "md-navbar", [], ["name", "Ravelp", "class", "blue lighten-2"], 0, null, ["loc", [null, [1, 0], [12, 14]]]], ["content", "outlet", ["loc", [null, [14, 4], [14, 14]]]], ["content", "md-modal-container", ["loc", [null, [19, 0], [19, 22]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ravelp/templates/artist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/artist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Ravelp");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Your source for peace, love, unity, and respect");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["inline", "md-parallax", [], ["image", "assets/img/raveHeader3.JPG"], ["loc", [null, [2, 2], [2, 52]]]], ["inline", "artist-detail", [], ["artist", ["subexpr", "@mut", [["get", "model", ["loc", [null, [7, 23], [7, 28]]]]], [], []]], ["loc", [null, [7, 0], [7, 30]]]], ["inline", "new-review", [], ["artist", ["subexpr", "@mut", [["get", "model", ["loc", [null, [9, 20], [9, 25]]]]], [], []], "saveReview", "saveReview"], ["loc", [null, [9, 0], [9, 51]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ravelp/templates/components/add-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/add-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "addTile");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h5");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["content", "artistGenre", ["loc", [null, [2, 6], [2, 21]]]], ["inline", "update-artist", [], ["artist", ["subexpr", "@mut", [["get", "artist", ["loc", [null, [3, 23], [3, 29]]]]], [], []], "update", "update"], ["loc", [null, [3, 0], [3, 47]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ravelp/templates/components/artist-detail", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 8
            },
            "end": {
              "line": 23,
              "column": 8
            }
          },
          "moduleName": "ravelp/templates/components/artist-detail.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "review-tile", [], ["review", ["subexpr", "@mut", [["get", "review", ["loc", [null, [22, 31], [22, 37]]]]], [], []]], ["loc", [null, [22, 10], [22, 39]]]]],
        locals: ["review"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/artist-detail.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "artistDetail");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s8");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Website: ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(".com");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col s4");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("center");
        var el6 = dom.createElement("img");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("button");
        dom.setAttribute(el6, "class", "waves-effect waves-light btn");
        var el7 = dom.createTextNode("Add to My Favorites");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n     ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "artistDetailReview");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Spread the Love");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [3]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [3, 1]);
        var element5 = dom.childAt(element2, [3, 1]);
        var element6 = dom.childAt(element5, [0]);
        var element7 = dom.childAt(element5, [2]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
        morphs[2] = dom.createAttrMorph(element4, 'href');
        morphs[3] = dom.createMorphAt(element4, 0, 0);
        morphs[4] = dom.createAttrMorph(element6, 'src');
        morphs[5] = dom.createElementMorph(element7);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]), 3, 3);
        return morphs;
      },
      statements: [["content", "artist.name", ["loc", [null, [4, 8], [4, 23]]]], ["content", "artist.bio", ["loc", [null, [7, 11], [7, 25]]]], ["attribute", "href", ["concat", [["get", "artist.website", ["loc", [null, [8, 31], [8, 45]]]]]]], ["content", "artist.name", ["loc", [null, [8, 49], [8, 64]]]], ["attribute", "src", ["concat", [["get", "artist.image", ["loc", [null, [11, 28], [11, 40]]]]]]], ["element", "action", ["addToFavorites", ["get", "artist", ["loc", [null, [12, 79], [12, 85]]]]], [], ["loc", [null, [12, 53], [12, 87]]]], ["block", "each", [["get", "artist.reviews", ["loc", [null, [21, 16], [21, 30]]]]], [], 0, null, ["loc", [null, [21, 8], [23, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ravelp/templates/components/artist-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 6
            },
            "end": {
              "line": 2,
              "column": 52
            }
          },
          "moduleName": "ravelp/templates/components/artist-tile.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["content", "artist.name", ["loc", [null, [2, 37], [2, 52]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/artist-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "artistTile");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("img");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Genre: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Website: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "target", "_blank");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(".com");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Review Level: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element0, [9, 1]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
        morphs[1] = dom.createAttrMorph(element1, 'src');
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 0, 0);
        morphs[4] = dom.createAttrMorph(element2, 'href');
        morphs[5] = dom.createMorphAt(element2, 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element0, [11]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["artist", ["get", "artist.id", ["loc", [null, [2, 26], [2, 35]]]]], [], 0, null, ["loc", [null, [2, 6], [2, 64]]]], ["attribute", "src", ["concat", [["get", "artist.image", ["loc", [null, [3, 14], [3, 26]]]]]]], ["content", "artist.genre", ["loc", [null, [4, 12], [4, 28]]]], ["content", "artist.bio", ["loc", [null, [5, 5], [5, 19]]]], ["attribute", "href", ["concat", [["get", "artist.website", ["loc", [null, [6, 41], [6, 55]]]]]]], ["content", "artist.name", ["loc", [null, [6, 59], [6, 74]]]], ["inline", "artist-popularity", [["get", "artist", ["loc", [null, [7, 39], [7, 45]]]]], [], ["loc", [null, [7, 19], [7, 47]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ravelp/templates/components/display-favorites", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 9,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/components/display-favorites.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "displayFavs");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Artist: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("Genre: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createElement("img");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn");
          var el3 = dom.createTextNode("Remove");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [5, 0]);
          var element2 = dom.childAt(element0, [7]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[2] = dom.createAttrMorph(element1, 'src');
          morphs[3] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "favorite.name", ["loc", [null, [4, 16], [4, 33]]]], ["content", "favorite.genre", ["loc", [null, [5, 14], [5, 32]]]], ["attribute", "src", ["concat", [["get", "favorite.image", ["loc", [null, [6, 19], [6, 33]]]]]]], ["element", "action", ["remove", ["get", "favorite", ["loc", [null, [7, 42], [7, 50]]]]], [], ["loc", [null, [7, 24], [7, 52]]]]],
        locals: ["favorite"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/display-favorites.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "favorites.favorites", ["loc", [null, [2, 8], [2, 27]]]]], [], 0, null, ["loc", [null, [2, 0], [9, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("ravelp/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/labeled-radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ravelp/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsModalDialog['default'];
    }
  });
});
define("ravelp/templates/components/new-artist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 25,
              "column": 2
            }
          },
          "moduleName": "ravelp/templates/components/new-artist.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode(" Add a new Artist ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("form");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "form-group");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "name");
          var el4 = dom.createTextNode("Name:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "genre");
          var el4 = dom.createTextNode("Genre:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "bio");
          var el4 = dom.createTextNode("Biography:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "image");
          var el4 = dom.createTextNode("Image URL:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("label");
          dom.setAttribute(el3, "for", "website");
          var el4 = dom.createTextNode("Website URL:");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "waves-effect waves-light btn");
          var el3 = dom.createTextNode("Save");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [3]);
          var element2 = dom.childAt(element1, [1]);
          var element3 = dom.childAt(element1, [3]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(element2, 3, 3);
          morphs[1] = dom.createMorphAt(element2, 7, 7);
          morphs[2] = dom.createMorphAt(element2, 11, 11);
          morphs[3] = dom.createMorphAt(element2, 15, 15);
          morphs[4] = dom.createMorphAt(element2, 19, 19);
          morphs[5] = dom.createElementMorph(element3);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "name", ["loc", [null, [8, 22], [8, 26]]]]], [], []], "id", "name"], ["loc", [null, [8, 8], [8, 38]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "genre", ["loc", [null, [11, 22], [11, 27]]]]], [], []], "id", "genre"], ["loc", [null, [11, 8], [11, 40]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "bio", ["loc", [null, [14, 25], [14, 28]]]]], [], []], "id", "bio"], ["loc", [null, [14, 8], [14, 39]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "image", ["loc", [null, [17, 22], [17, 27]]]]], [], []], "id", "image"], ["loc", [null, [17, 8], [17, 40]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "website", ["loc", [null, [20, 22], [20, 29]]]]], [], []], "id", "website"], ["loc", [null, [20, 8], [20, 44]]]], ["element", "action", ["addArtist"], [], ["loc", [null, [23, 51], [23, 73]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 25,
              "column": 2
            },
            "end": {
              "line": 27,
              "column": 2
            }
          },
          "moduleName": "ravelp/templates/components/new-artist.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("center");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn");
          var el3 = dom.createTextNode("Add Artist");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["newArtistFormShow"], [], ["loc", [null, [26, 30], [26, 60]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/new-artist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "newArtistForm");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "newArtistForm", ["loc", [null, [3, 8], [3, 21]]]]], [], 0, 1, ["loc", [null, [3, 2], [27, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ravelp/templates/components/new-review", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 30,
              "column": 4
            }
          },
          "moduleName": "ravelp/templates/components/new-review.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("section");
          dom.setAttribute(el1, "class", "reviewSection");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createTextNode("New Review:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "user");
          var el5 = dom.createTextNode("User Name:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "rating");
          var el5 = dom.createTextNode("Rating:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "venue");
          var el5 = dom.createTextNode("Venue Seen at:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "performance");
          var el5 = dom.createTextNode("How was the Performance?");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n            ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n          ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "waves-effect waves-light btn");
          var el4 = dom.createTextNode("Save");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1, 3]);
          var element2 = dom.childAt(element1, [9]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [5]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [7]), 3, 3);
          morphs[4] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "user", ["loc", [null, [9, 26], [9, 30]]]]], [], []], "id", "user"], ["loc", [null, [9, 12], [9, 42]]]], ["inline", "input", [], ["max", 9, "value", ["subexpr", "@mut", [["get", "rating", ["loc", [null, [14, 32], [14, 38]]]]], [], []], "id", "rating"], ["loc", [null, [14, 12], [14, 52]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "venue", ["loc", [null, [19, 26], [19, 31]]]]], [], []], "id", "venue"], ["loc", [null, [19, 12], [19, 44]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "performance", ["loc", [null, [24, 29], [24, 40]]]]], [], []], "id", "performance"], ["loc", [null, [24, 12], [24, 59]]]], ["element", "action", ["saveReview"], [], ["loc", [null, [27, 55], [27, 78]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 4
            },
            "end": {
              "line": 32,
              "column": 4
            }
          },
          "moduleName": "ravelp/templates/components/new-review.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("center");
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "class", "btn leaveReview");
          var el3 = dom.createTextNode("Leave a Review");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 0]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["reviewFormShow"], [], ["loc", [null, [31, 46], [31, 73]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 35,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/new-review.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "newReview");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "if", [["get", "addNewReview", ["loc", [null, [3, 10], [3, 22]]]]], [], 0, 1, ["loc", [null, [3, 4], [32, 11]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ravelp/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "triple-curlies"
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/components/radio-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/radio-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ravelp/templates/components/review-tile", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/review-tile.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "reviewTile");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Rating:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("/10");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Username:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "reviewFont");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("b");
        var el4 = dom.createTextNode("Venue Seen at:");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("span");
        dom.setAttribute(el3, "class", "reviewFont");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("b");
        var el3 = dom.createTextNode("How was the Performace?");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "reviewFont");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [3]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 2, 2);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [2]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [7]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [10]), 0, 0);
        return morphs;
      },
      statements: [["content", "review.rating", ["loc", [null, [3, 20], [3, 37]]]], ["content", "review.user", ["loc", [null, [4, 47], [4, 62]]]], ["content", "review.venue", ["loc", [null, [5, 49], [5, 65]]]], ["content", "review.performance", ["loc", [null, [7, 27], [7, 49]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('ravelp/templates/components/tether-dialog', ['exports', 'ember-modal-dialog/templates/components/tether-dialog'], function (exports, _emberModalDialogTemplatesComponentsTetherDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberModalDialogTemplatesComponentsTetherDialog['default'];
    }
  });
});
define("ravelp/templates/components/update-artist", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["multiple-nodes"]
          },
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 23,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/components/update-artist.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h3");
          var el2 = dom.createTextNode("Update ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "bio");
          var el5 = dom.createTextNode("Bio:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "image");
          var el5 = dom.createTextNode("Image URL:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "form-group");
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("label");
          dom.setAttribute(el4, "for", "website");
          var el5 = dom.createTextNode("Website URL:");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n      ");
          dom.appendChild(el3, el4);
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n    ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n    ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn-lg btn-info");
          var el4 = dom.createTextNode("Save Updates");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [2, 1]);
          var element2 = dom.childAt(element1, [7]);
          var morphs = new Array(5);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 3, 3);
          morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 3, 3);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [5]), 3, 3);
          morphs[4] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [["content", "artist.name", ["loc", [null, [2, 11], [2, 26]]]], ["inline", "textarea", [], ["value", ["subexpr", "@mut", [["get", "bio", ["loc", [null, [7, 23], [7, 26]]]]], [], []], "id", "bio", "placeholder", ["subexpr", "@mut", [["get", "artist.bio", ["loc", [null, [7, 48], [7, 58]]]]], [], []]], ["loc", [null, [7, 6], [7, 60]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "image", ["loc", [null, [12, 20], [12, 25]]]]], [], []], "id", "image", "placeholder", ["subexpr", "@mut", [["get", "product.image", ["loc", [null, [12, 49], [12, 62]]]]], [], []]], ["loc", [null, [12, 6], [12, 64]]]], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "website", ["loc", [null, [17, 20], [17, 27]]]]], [], []], "id", "website", "placeholder", ["subexpr", "@mut", [["get", "artist.website", ["loc", [null, [17, 53], [17, 67]]]]], [], []]], ["loc", [null, [17, 6], [17, 69]]]], ["element", "action", ["update", ["get", "artist", ["loc", [null, [20, 53], [20, 59]]]]], [], ["loc", [null, [20, 35], [20, 61]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "ravelp/templates/components/update-artist.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "btn waves-effect waves-light");
          dom.setAttribute(el1, "type", "submit");
          var el2 = dom.createTextNode("Update");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["updateArtist"], [], ["loc", [null, [24, 61], [24, 86]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/components/update-artist.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "updateArtist", ["loc", [null, [1, 6], [1, 18]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("ravelp/templates/favorites", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/favorites.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Ravelp");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Your source for peace, love, unity, and respect");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        dom.setAttribute(el2, "class", "favorites");
        var el3 = dom.createTextNode("My Favorites");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 3, 1]), 1, 1);
        return morphs;
      },
      statements: [["inline", "md-parallax", [], ["image", "assets/img/raveHeader5.JPG"], ["loc", [null, [2, 2], [2, 52]]]], ["content", "display-favorites", ["loc", [null, [12, 6], [12, 27]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("ravelp/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.4.4",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 10
            },
            "end": {
              "line": 36,
              "column": 10
            }
          },
          "moduleName": "ravelp/templates/index.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("             ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "artist-tile", [], ["artist", ["subexpr", "@mut", [["get", "artist", ["loc", [null, [35, 34], [35, 40]]]]], [], []]], ["loc", [null, [35, 13], [35, 42]]]]],
        locals: ["artist"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.4.4",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 41,
            "column": 0
          }
        },
        "moduleName": "ravelp/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" {{md-parallax image=\"assets/img/raveHeader1.JPG\"}}\n<div class=\"section grey lighten-2\">\n      <div class=\"row container\">\n          <h4>Hello Parallax</h4>\n          <p>My really amazing content goes here...</p>\n      </div>\n  </div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Ravelp");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("Your source for peace, love, unity, and respect");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n  ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h1");
        dom.setAttribute(el3, "class", "indexHeader");
        var el4 = dom.createTextNode("Welcome to Ravelp, find and share your PLUR");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s8");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("plur kandi kid rave where's molly EDM trade bracelets hooping hardstyle trance drop bass. so hard show tiesto unity pasties fluffies bros squad rolling paradiso ill be right back vibin deep house. filthy heavy rage respect shuffle im right by the stage turnt. HAM juke turn up trap mafia levels avicii massive trails hardcore light show grime. moombahton love play progressive train gloving edc troll wonderland insomniac passifier beads. LED tutu glitter furry hood booty plurnt garage tranced out. candy flipping headbanger get wet dubstep bunny fist pump x rated touch me dada. peace hugs water untz dope chill hand heart mind blown. unicorn slave killin it rainbows dance sunshine.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("plur kandi kid rave where's molly EDM trade bracelets hooping hardstyle trance drop bass. so hard show tiesto unity pasties fluffies bros squad rolling paradiso ill be right back vibin deep house. filthy heavy rage respect shuffle im right by the stage turnt. HAM juke turn up trap mafia levels avicii massive trails hardcore light show grime. moombahton love play progressive train gloving edc troll wonderland insomniac passifier beads. LED tutu glitter furry hood booty plurnt garage tranced out. candy flipping headbanger get wet dubstep bunny fist pump x rated touch me dada. peace hugs water untz dope chill hand heart mind blown. unicorn slave killin it rainbows dance sunshine.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createElement("b");
        var el6 = dom.createElement("i");
        var el7 = dom.createTextNode("Because lets face it, you really want to know whether or not the $200.00 for the one night on a ticket is worth it!");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s4");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "gloverContainer");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "glover");
        dom.setAttribute(el5, "src", "http://24.media.tumblr.com/tumblr_lloa8vEn6F1qac24zo1_500.jpg");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col s12");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "artistContainer");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createTextNode("-Find an Artist-");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 7, 7);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4, 3, 1, 1]), 3, 3);
        return morphs;
      },
      statements: [["inline", "md-parallax", [], ["image", "assets/img/raveHeader1.JPG"], ["loc", [null, [9, 4], [9, 54]]]], ["inline", "md-parallax", [], ["image", "assets/img/raveHeader1.JPG"], ["loc", [null, [12, 4], [12, 54]]]], ["block", "each", [["get", "model", ["loc", [null, [34, 18], [34, 23]]]]], [], 0, null, ["loc", [null, [34, 10], [36, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('ravelp/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('ravelp/views/default-collection-header', ['exports', 'ember-cli-materialize/views/default-collection-header'], function (exports, _emberCliMaterializeViewsDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultCollectionHeader['default'];
    }
  });
});
define('ravelp/views/default-column-header', ['exports', 'ember-cli-materialize/views/default-column-header'], function (exports, _emberCliMaterializeViewsDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultColumnHeader['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('ravelp/config/environment', ['ember'], function(Ember) {
  var prefix = 'ravelp';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("ravelp/app")["default"].create({"name":"ravelp","version":"0.0.0+3f0157cc"});
}

/* jshint ignore:end */
//# sourceMappingURL=ravelp.map
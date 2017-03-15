System.config({
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "*": "dist/client/app/*",
    "npm:*": "jspm_packages/npm/*",
    "github:*": "jspm_packages/github/*"
  },
  bundles: {
    "client-app-build.js": [
      "add-mylist.js",
      "app.js",
      "config/authConfig.js",
      "editTags.js",
      "github:CodeSeven/toastr@2.1.3.js",
      "github:CodeSeven/toastr@2.1.3/build/toastr.css!github:systemjs/plugin-css@0.1.32.js",
      "github:CodeSeven/toastr@2.1.3/toastr.js",
      "github:components/jquery@3.1.0.js",
      "github:components/jquery@3.1.0/jquery.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "home.js",
      "login.js",
      "logout.js",
      "main.js",
      "mylist.js",
      "nav-bar.js",
      "notification-state.js",
      "notification.js",
      "npm:aurelia-auth@3.0.2.js",
      "npm:aurelia-auth@3.0.2/aurelia-auth.js",
      "npm:aurelia-auth@3.0.2/auth-fetch-config.js",
      "npm:aurelia-auth@3.0.2/auth-filter.js",
      "npm:aurelia-auth@3.0.2/auth-service.js",
      "npm:aurelia-auth@3.0.2/auth-utilities.js",
      "npm:aurelia-auth@3.0.2/authentication.js",
      "npm:aurelia-auth@3.0.2/authorize-step.js",
      "npm:aurelia-auth@3.0.2/base-config.js",
      "npm:aurelia-auth@3.0.2/oAuth1.js",
      "npm:aurelia-auth@3.0.2/oAuth2.js",
      "npm:aurelia-auth@3.0.2/popup.js",
      "npm:aurelia-auth@3.0.2/storage.js",
      "npm:aurelia-binding@1.0.3.js",
      "npm:aurelia-binding@1.0.3/aurelia-binding.js",
      "npm:aurelia-dependency-injection@1.2.0.js",
      "npm:aurelia-dependency-injection@1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.2.js",
      "npm:aurelia-framework@1.0.2/aurelia-framework.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging@1.1.1.js",
      "npm:aurelia-logging@1.1.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.2.js",
      "npm:aurelia-metadata@1.0.2/aurelia-metadata.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.7.js",
      "npm:aurelia-router@1.0.7/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating@1.0.1.js",
      "npm:aurelia-templating@1.0.1/aurelia-templating.js",
      "npm:jquery@3.1.1.js",
      "npm:jquery@3.1.1/dist/jquery.js",
      "recordings.js",
      "services/ApiClient.js",
      "services/RecordingsApi.js",
      "show-all-recordings.js",
      "show-my-recordings.js",
      "signup.js",
      "spinner.js"
    ],
    "aurelia.js": [
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-binding@1.0.3.js",
      "npm:aurelia-binding@1.0.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.2.0.js",
      "npm:aurelia-dependency-injection@1.2.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-fetch-client@1.0.1.js",
      "npm:aurelia-fetch-client@1.0.1/aurelia-fetch-client.js",
      "npm:aurelia-framework@1.0.2.js",
      "npm:aurelia-framework@1.0.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.1.1.js",
      "npm:aurelia-logging@1.1.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.2.js",
      "npm:aurelia-metadata@1.0.2/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.1.1.js",
      "npm:aurelia-path@1.1.1/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0.js",
      "npm:aurelia-polyfills@1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.1.0.js",
      "npm:aurelia-route-recognizer@1.1.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.7.js",
      "npm:aurelia-router@1.0.7/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.1.js",
      "npm:aurelia-templating@1.0.1/aurelia-templating.js",
      "npm:jquery@3.1.1.js",
      "npm:jquery@3.1.1/dist/jquery.js"
    ],
    "dist/aurelia.js": [
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-binding@1.0.3.js",
      "npm:aurelia-binding@1.0.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.2.js",
      "npm:aurelia-framework@1.0.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0.js",
      "npm:aurelia-logging@1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0.js",
      "npm:aurelia-metadata@1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0.js",
      "npm:aurelia-path@1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0.js",
      "npm:aurelia-polyfills@1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.2.js",
      "npm:aurelia-router@1.0.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.1.js",
      "npm:aurelia-templating@1.0.1/aurelia-templating.js",
      "npm:jquery@3.1.0.js",
      "npm:jquery@3.1.0/dist/jquery.js"
    ],
    "dist/client-app-build.js": [
      "app.js",
      "github:CodeSeven/toastr@2.1.3.js",
      "github:CodeSeven/toastr@2.1.3/build/toastr.css!github:systemjs/plugin-css@0.1.27.js",
      "github:CodeSeven/toastr@2.1.3/toastr.js",
      "github:components/jquery@3.1.0.js",
      "github:components/jquery@3.1.0/jquery.js",
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "home.js",
      "main.js",
      "mylist.js",
      "notification-state.js",
      "notification.js",
      "npm:aurelia-binding@1.0.3.js",
      "npm:aurelia-binding@1.0.3/aurelia-binding.js",
      "npm:aurelia-dependency-injection@1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-framework@1.0.2.js",
      "npm:aurelia-framework@1.0.2/aurelia-framework.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging@1.0.0.js",
      "npm:aurelia-logging@1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0.js",
      "npm:aurelia-metadata@1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0.js",
      "npm:aurelia-path@1.0.0/aurelia-path.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating@1.0.1.js",
      "npm:aurelia-templating@1.0.1/aurelia-templating.js",
      "npm:jquery@3.1.0.js",
      "npm:jquery@3.1.0/dist/jquery.js"
    ],
    "aurelia": [
      "github:twbs/bootstrap@3.3.7.js",
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js",
      "npm:aurelia-binding@1.0.3.js",
      "npm:aurelia-binding@1.0.3/aurelia-binding.js",
      "npm:aurelia-bootstrapper@1.0.0.js",
      "npm:aurelia-bootstrapper@1.0.0/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.0.0.js",
      "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.0.js",
      "npm:aurelia-event-aggregator@1.0.0/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.0.2.js",
      "npm:aurelia-framework@1.0.2/aurelia-framework.js",
      "npm:aurelia-history-browser@1.0.0.js",
      "npm:aurelia-history-browser@1.0.0/aurelia-history-browser.js",
      "npm:aurelia-history@1.0.0.js",
      "npm:aurelia-history@1.0.0/aurelia-history.js",
      "npm:aurelia-loader-default@1.0.0.js",
      "npm:aurelia-loader-default@1.0.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.0.js",
      "npm:aurelia-loader@1.0.0/aurelia-loader.js",
      "npm:aurelia-logging-console@1.0.0.js",
      "npm:aurelia-logging-console@1.0.0/aurelia-logging-console.js",
      "npm:aurelia-logging@1.0.0.js",
      "npm:aurelia-logging@1.0.0/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.0.js",
      "npm:aurelia-metadata@1.0.0/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.0.0.js",
      "npm:aurelia-pal-browser@1.0.0/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.0.0.js",
      "npm:aurelia-pal@1.0.0/aurelia-pal.js",
      "npm:aurelia-path@1.0.0.js",
      "npm:aurelia-path@1.0.0/aurelia-path.js",
      "npm:aurelia-polyfills@1.0.0.js",
      "npm:aurelia-polyfills@1.0.0/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.0.0.js",
      "npm:aurelia-route-recognizer@1.0.0/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.0.2.js",
      "npm:aurelia-router@1.0.2/aurelia-router.js",
      "npm:aurelia-task-queue@1.0.0.js",
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js",
      "npm:aurelia-templating-binding@1.0.0.js",
      "npm:aurelia-templating-binding@1.0.0/aurelia-templating-binding.js",
      "npm:aurelia-templating-resources@1.0.0.js",
      "npm:aurelia-templating-resources@1.0.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.0.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.0.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.0.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.0.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.0.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.0.0/compose.js",
      "npm:aurelia-templating-resources@1.0.0/css-resource.js",
      "npm:aurelia-templating-resources@1.0.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.0.0/focus.js",
      "npm:aurelia-templating-resources@1.0.0/hide.js",
      "npm:aurelia-templating-resources@1.0.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.0.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.0.0/if.js",
      "npm:aurelia-templating-resources@1.0.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.0.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.0.0/repeat.js",
      "npm:aurelia-templating-resources@1.0.0/replaceable.js",
      "npm:aurelia-templating-resources@1.0.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.0.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.0.0/show.js",
      "npm:aurelia-templating-resources@1.0.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.0.0/with.js",
      "npm:aurelia-templating-router@1.0.0.js",
      "npm:aurelia-templating-router@1.0.0/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.0.0/route-href.js",
      "npm:aurelia-templating-router@1.0.0/route-loader.js",
      "npm:aurelia-templating-router@1.0.0/router-view.js",
      "npm:aurelia-templating@1.0.1.js",
      "npm:aurelia-templating@1.0.1/aurelia-templating.js",
      "npm:jquery@3.1.0.js",
      "npm:jquery@3.1.0/dist/jquery.js"
    ]
  },
  depCache: {
    "client/src/notification-state.js": [
      "toastr"
    ],
    "github:CodeSeven/toastr@2.1.3.js": [
      "github:CodeSeven/toastr@2.1.3/toastr"
    ],
    "github:CodeSeven/toastr@2.1.3/toastr.js": [
      "jquery",
      "./build/toastr.css!"
    ],
    "github:components/jquery@3.1.0.js": [
      "github:components/jquery@3.1.0/jquery.js"
    ],
    "client/src/notification.js": [
      "aurelia-framework",
      "./notification-state"
    ],
    "npm:aurelia-framework@1.0.2.js": [
      "npm:aurelia-framework@1.0.2/aurelia-framework"
    ],
    "npm:aurelia-framework@1.0.2/aurelia-framework.js": [
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-metadata",
      "aurelia-templating",
      "aurelia-loader",
      "aurelia-task-queue",
      "aurelia-path",
      "aurelia-pal",
      "aurelia-logging"
    ],
    "npm:aurelia-dependency-injection@1.0.0.js": [
      "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection"
    ],
    "npm:aurelia-binding@1.0.3.js": [
      "npm:aurelia-binding@1.0.3/aurelia-binding"
    ],
    "npm:aurelia-metadata@1.0.0.js": [
      "npm:aurelia-metadata@1.0.0/aurelia-metadata"
    ],
    "npm:aurelia-templating@1.0.1.js": [
      "npm:aurelia-templating@1.0.1/aurelia-templating"
    ],
    "npm:aurelia-loader@1.0.0.js": [
      "npm:aurelia-loader@1.0.0/aurelia-loader"
    ],
    "npm:aurelia-task-queue@1.0.0.js": [
      "npm:aurelia-task-queue@1.0.0/aurelia-task-queue"
    ],
    "npm:aurelia-path@1.0.0.js": [
      "npm:aurelia-path@1.0.0/aurelia-path"
    ],
    "npm:aurelia-pal@1.0.0.js": [
      "npm:aurelia-pal@1.0.0/aurelia-pal"
    ],
    "npm:aurelia-logging@1.0.0.js": [
      "npm:aurelia-logging@1.0.0/aurelia-logging"
    ],
    "npm:aurelia-dependency-injection@1.0.0/aurelia-dependency-injection.js": [
      "aurelia-metadata",
      "aurelia-pal"
    ],
    "npm:aurelia-binding@1.0.3/aurelia-binding.js": [
      "aurelia-logging",
      "aurelia-pal",
      "aurelia-task-queue",
      "aurelia-metadata"
    ],
    "npm:aurelia-metadata@1.0.0/aurelia-metadata.js": [
      "aurelia-pal"
    ],
    "npm:aurelia-templating@1.0.1/aurelia-templating.js": [
      "aurelia-logging",
      "aurelia-metadata",
      "aurelia-pal",
      "aurelia-path",
      "aurelia-loader",
      "aurelia-dependency-injection",
      "aurelia-binding",
      "aurelia-task-queue"
    ],
    "npm:aurelia-loader@1.0.0/aurelia-loader.js": [
      "aurelia-path",
      "aurelia-metadata"
    ],
    "npm:aurelia-task-queue@1.0.0/aurelia-task-queue.js": [
      "aurelia-pal"
    ],
    "client/src/mylist.js": [
      "aurelia-framework",
      "./notification-state"
    ],
    "client/src/main.js": [
      "jquery",
      "bootstrap"
    ],
    "github:twbs/bootstrap@3.3.7.js": [
      "github:twbs/bootstrap@3.3.7/js/bootstrap.js"
    ],
    "npm:jquery@3.1.0.js": [
      "npm:jquery@3.1.0/dist/jquery.js"
    ],
    "github:twbs/bootstrap@3.3.7/js/bootstrap.js": [
      "jquery"
    ],
    "client/app/notification-state.js": [
      "toastr"
    ],
    "client/app/notification.js": [
      "aurelia-framework",
      "./notification-state"
    ],
    "client/app/mylist.js": [
      "aurelia-framework",
      "./notification-state"
    ],
    "client/app/main.js": [
      "jquery",
      "bootstrap"
    ]
  },
  map: {
    "aurelia-auth": "npm:aurelia-auth@3.0.2",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.2",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "bcryptjs": "npm:bcryptjs@2.3.0",
    "bootstrap": "github:twbs/bootstrap@3.3.7",
    "font-awesome": "npm:font-awesome@4.7.0",
    "jquery": "npm:jquery@3.1.1",
    "jwt-simple": "npm:jwt-simple@0.5.0",
    "lodash": "npm:lodash@4.16.5",
    "moment": "npm:moment@2.15.2",
    "text": "github:systemjs/plugin-text@0.0.2",
    "toastr": "github:CodeSeven/toastr@2.1.3",
    "github:CodeSeven/toastr@2.1.3": {
      "css": "github:systemjs/plugin-css@0.1.32",
      "jquery": "github:components/jquery@3.1.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.9"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.7": {
      "jquery": "npm:jquery@3.1.1"
    },
    "npm:asn1.js@4.8.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-auth@3.0.2": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.7"
    },
    "npm:aurelia-binding@1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:aurelia-bootstrapper@1.0.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.2",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0",
      "aurelia-router": "npm:aurelia-router@1.0.7",
      "aurelia-templating": "npm:aurelia-templating@1.0.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
    },
    "npm:aurelia-dependency-injection@1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1"
    },
    "npm:aurelia-framework@1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.1"
    },
    "npm:aurelia-history-browser@1.0.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader-default@1.0.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-loader@1.0.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-logging-console@1.0.0": {
      "aurelia-logging": "npm:aurelia-logging@1.1.1"
    },
    "npm:aurelia-metadata@1.0.2": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-polyfills@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "aurelia-path": "npm:aurelia-path@1.1.1"
    },
    "npm:aurelia-router@1.0.7": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
      "aurelia-history": "npm:aurelia-history@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
    },
    "npm:aurelia-task-queue@1.0.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.3",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.1"
    },
    "npm:aurelia-templating-resources@1.0.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.1"
    },
    "npm:aurelia-templating-router@1.0.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-router": "npm:aurelia-router@1.0.7",
      "aurelia-templating": "npm:aurelia-templating@1.0.1"
    },
    "npm:aurelia-templating@1.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.3",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0",
      "aurelia-logging": "npm:aurelia-logging@1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
      "aurelia-pal": "npm:aurelia-pal@1.0.0",
      "aurelia-path": "npm:aurelia-path@1.1.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0"
    },
    "npm:bcryptjs@2.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:browserify-sign@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.8",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.3.2"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.5"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.0",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:elliptic@6.3.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.32"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jwt-simple@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.0.6"
    },
    "npm:parse-asn1@5.0.0": {
      "asn1.js": "npm:asn1.js@4.8.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.9": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.0.0",
      "randombytes": "npm:randombytes@2.0.3"
    },
    "npm:randombytes@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
/* config-overrides.js */

const MonacoEditorWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {
    if (!config.plugins) {
        config.plugins = [];
    }
    config.plugins.push(
        new MonacoEditorWebpackPlugin()
    );
    return config;
}
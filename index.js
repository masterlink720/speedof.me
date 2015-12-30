/**
 * @doc:     http://speedof.me/api/doc/SpeedOfMe_API_Doc.pdf
 * @example: http://speedof.me/api/doc/sample_advanced.html
 */

var jsdom   = require('node-jsdom'),
    util    = require("util"),
    fs      = require('fs');

var raw = fs.readFileSync('./lib/dom.html', {mode: 'r', encoding: 'utf-8'});

var doc = jsdom.jsdom(raw, {
    features: {
        FetchExternalResources: ['script'],
        ProcessExternalResources: ['script']
    }
});

/*jsdom.jQueryify(doc.parentWindow, '', function() {
    util.log('done ' + util.inspect({
            api: doc.parentWindow.SomApi
        }));
});*/
doc.parentWindow.on_init = function() {
    util.log('** on_init **\n\t: ' + util.inspect({args: arguments}, {colors: true}));
};

module.exports = {
    doc: doc
};

/*
console.log('Raw: '+ raw);

process.exit();

var $;

// var doc = dom.jsdom('<html><head><script src="//speedof.me/api/api.js"></script></head>');
var window = jsdom.jsdom().parentWindow,
    api_script = null;

// var doc = jsdom.jQueryify(window, "//speedof.me/api/api.js", function() {
var doc = jsdom.jQueryify(window, "https://code.jquery.com/jquery-2.1.4.min.js", function() {
    console.log('Done ' + util.inspect(window, {colors: true}));

    api_script = window.document.createElement('script');
    api_script.src = '//speedof.me/api/api.js';
    window.document.body.appendChild(api_script);

    util.log('script added: ' + util.inspect(api_script, {colors: true}));
});

module.exports = {
    window: window,
    doc: doc,
    api_script: api_script
};*/
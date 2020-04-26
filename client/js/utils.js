export function getRefs(context) {
    const refs = {};
    const $els = (context || document.body).querySelectorAll('[data-ref]');

    $els.forEach(function ($el) {
        const name = $el.getAttribute('data-ref');
        refs[name] = $el;
    });

    return refs;
}

export function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

export function assign(source, ...targets) {
    return Object.assign({}, source, ...targets);
}

export function render(template, context, parent) {
    parent.innerHTML = window.nunjucks.render(template, context);
    return getRefs(parent);
}

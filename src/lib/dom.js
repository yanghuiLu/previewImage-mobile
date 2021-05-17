/**
 * get one element
 * @public
 */
export const one = function(selector){
    return document.querySelector(selector)
}
/**
 * get multiple elements
 * @public
 */
export const all = function(selector, contextElement) {
    var nodeList,
    list = [];
    if (contextElement) {
    nodeList = contextElement.querySelectorAll(selector);
    } else {
    nodeList = document.querySelectorAll(selector);
    }
    if (nodeList && nodeList.length > 0) {
    list = Array.prototype.slice.call(nodeList);
    }
    return list;
}

/**
 * delegate an event to a parent element
 * @public
 * @param  array     $el        parent element
 * @param  string    eventType  name of the event
 * @param  string    selector   target's selector
 * @param  function  fn
 */
export const delegate = function($el, eventType, selector, fn) {
    if (!$el) { return; }
    $el.addEventListener(eventType, function(e) {
    var targets = all(selector, $el);
    if (!targets) {
        return;
    }
    // findTarget:
    for (var i=0; i<targets.length; i++) {
        var $node = e.target;
        while ($node) {
            if ($node == targets[i]) {
                fn.call($node, e);
                break; //findTarget;
            }
            $node = $node.parentNode;
            if ($node == $el) {
                break;
            }
        }
    }
    }, false);
};

export default {
    one,
    all,
    delegate
}
'use strict';

import "./style/style.less";
import PreviewImage from '../lib/core/previewImage' 
import { objectClone,extend } from './utils'
import defaults from '../lib/defaults'
import bind  from '../lib/helps/bind'

function createInstance(defaultConfig){
    let context = new PreviewImage(defaultConfig);

    // let instance = bind(PreviewImage.prototype,context);

    // extend(instance, PreviewImage.prototype, context);

    // extend(instance, context);

    return context.start.bind(context);
}

let previewImage = createInstance(defaults);


previewImage.create = function(configOptions){
    return createInstance(objectClone(defaults, instanceConfig));
}
// console.log(previewImage)

// module.exports = previewImage

// module.exports.default = previewImage;
// // console.log(previewImage)
export default previewImage;

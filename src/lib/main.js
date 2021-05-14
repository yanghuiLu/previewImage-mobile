import "./style/style.less";
import PreviewImage from '../lib/core/previewImage' 
import utils from './utils'
import defaults from '../lib/defaults'
import bind  from '../lib/helps/bind'


function createInstance(defaultConfig){
    let context = new PreviewImage(defaultConfig);
    // let instance = bind(PreviewImage.prototype,context);

    // // utils.extend(instance, PreviewImage.prototype, context);

    // utils.extend(instance, context);

    // console.dir(instance)

    return context;
}

let previewImage = createInstance(defaults);

console.log(previewImage)

// module.exports = previewImage

// module.exports.default = previewImage;
// // console.log(previewImage)
export default previewImage;

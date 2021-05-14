'use strict';

const utils = require('../utils')

export class PreviewImage {
    constructor(){
        this.init2 = 2
        this.init()
    }

    init(){
        console.log('init')
    }

    initDom(){
        console.log('initDom')
    }

    start({ urls,current }){
        if(!utils.isArray(urls)){
            throw new Error('urls 必须是数组')
        }
        this.urls = urls;
        this.current = current || 0;
    }
}

// module.exports = PreviewImage;
export default PreviewImage;

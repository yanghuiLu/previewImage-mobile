'use strict';

import { isArray } from'../utils';

export class PreviewImage {
    constructor(){
        this.init()
    }

    init(){
        console.log('init')
    }

    initDom(){
        console.log('initDom')
    }

    start({ urls,current }){
        this.initDom()
        if(!isArray(urls)){
            throw new Error('urls 必须是数组')
        }
        this.urls = urls;
        this.current = current || 0;
    }
}

export default PreviewImage;

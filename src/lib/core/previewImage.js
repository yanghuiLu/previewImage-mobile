'use strict';

import { isArray } from'../utils';
import { createDom,createImageContainer } from './createDom'

export class PreviewImage {
    constructor(){
        this.$container = null; //图片容器

        this.init()
    }

    init(){
        console.log('init')
    }

    initDom(urls){
        if(!this.$container){
            this.$container = createImageContainer()
            document.body.append(this.$container)
        }
        console.log('initDom')
    }

    start({ urls,current }){
        if(!isArray(urls)){
            throw new Error('urls 必须是数组')
        }
        this.urls = urls;
        this.current = current;
        this.initDom(urls)
    }
}

export default PreviewImage;

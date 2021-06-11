'use strict';

import { isArray } from'../utils';
import { createDom,createImageContainer,createImageBox,appendDom } from './createDom'

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
            let { container,box } = createImageContainer()
            this.$container = container;
            this.$box = box
            document.body.append(this.$container)
        }
        let $urls = createImageBox(urls)
        appendDom(this.$box,$urls)
        console.log('initDom')
    }

    bindEvent(){
        let itemClassName = '__previewImage-item';
        $.delegate(this.$container,'click',itemClassName,closePreview);
        $.delegate(this.$container,'touchstart',itemClassName,touchStartFun);
        $.delegate(this.$container,'touchmove',itemClassName,touchMoveFun);
        $.delegate(this.$container,'touchend',itemClassName,touchEndFun);
        $.delegate(this.$container,'touchcancel',itemClassName,touchEndFun);
    }

    start({ urls,current }){
        if(!isArray(urls)){
            throw new Error('urls 必须是数组')
        }
        this.urls = urls;
        this.current = current;
        this.initDom(urls)
        this.bindEvent()
    }
}

export default PreviewImage;

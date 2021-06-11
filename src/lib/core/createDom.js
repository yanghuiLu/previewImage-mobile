import { isArray  } from '../utils'
// import loadingSvg from '../../assets/loading.svg'

export function createDom(tag,className){
    let dom = document.createElement(tag);
    dom.className = className.join(' ');
    return dom;
}

export function createImageContainer(){
    let container = createDom('div',['__previewImage-container']);
    let box = createDom('div',['__previewImage-box']);
    container.append(box)
    return { container,box };
}


export function createImageBox(urls){
    return urls.map(item => {
        let imgBox = createDom('div',['__previewImage-item'])
        // let img = new Image();
        // img.src = loadingSvg;
        // img.className = '__previewImage-image';
        // img.dataset.src = item;
        // imgBox.append(loadingSvg)
        // imgBox.innerHTML = loadingSvg
        return imgBox;
    });
}


export function appendDom(parent,nodes){
    if(isArray(nodes)){
        while(nodes.length){
            let node = nodes.shift();
            parent.append(node)
        }
    }else{
        parent.append(nodes)
    }
    return parent;
}


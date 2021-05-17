


export function createDom(tag,className){
    return document.createElement(tag).className = className.join(' ');
}

export function createImageContainer(className){
    return createDom('div',className)
}
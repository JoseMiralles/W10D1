const {DOMNodeCollection} = require("./dom_node_collection");

const $l = (selector)=>{
    if (selector instanceof String){
        const array = Array.from(document.querySelectorAll(selector));
        return new DOMNodeCollection(array);
    } else if (selector instanceof HTMLElement){
        return new DOMNodeCollection([selector]);
    }
};

window.$l = $l;
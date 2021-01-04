const {DOMNodeCollection} = require("./dom_node_collection");

const $l = (selector)=>{
    if (typeof selector === "string" || selector instanceof String){
        const array = Array.from(document.querySelectorAll(selector));
        console.log(array);
        return new DOMNodeCollection(array);
    } 
    
    else if (selector instanceof HTMLElement){
        console.log([selector]);
        return new DOMNodeCollection([selector]);
    }

};

window.$l = $l;
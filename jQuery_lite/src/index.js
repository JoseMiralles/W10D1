const {DOMNodeCollection} = require("./dom_node_collection");

const $l = (selector)=>{
    if (typeof selector === "string" || selector instanceof String){
        const array = Array.from(document.querySelectorAll(selector));
        // console.log(array);
        return new DOMNodeCollection(array);
    } 
    
    else if (selector instanceof HTMLElement){
        // console.log([selector]);
        return new DOMNodeCollection([selector]);
    }

};

window.addEventListener("load", ()=>{
    const test = $l(".test");
    test.html("Works!!");
    // test.empty();
    test.append("Appended");
    test.append( $l(".appendable") );
    const element = document.createElement("div");
    element.innerHTML = "HTML ELEMENT";
    test.append(element);
    const children = test.children();
    const parents = test.parent();
    const searched = test.find(".appendable");
    test.remove(".appendable");
});

window.$l = $l;
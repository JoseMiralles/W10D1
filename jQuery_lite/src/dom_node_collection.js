class DOMNodeCollection{
    constructor(elements){
        this.elements = elements;
    }

    html(string = null){
        if (string || string === ""){
            this.elements.forEach(el => {
                el.innerHTML = string;
            });
        } else {
            return this.elements[0].innerHTML;
        }
    }

    empty(){
        this.html("");
    }

    append(selector){
        if (typeof selector === "string" || selector instanceof String) {
            this.elements.forEach(el => {
                el.innerHTML += selector;
            });
        } else if (selector instanceof DOMNodeCollection) {
            this.elements.forEach(el => {
                selector.elements.forEach(sel => {
                    el.innerHTML += sel.outerHTML;
                });
            });
        } else if (selector instanceof HTMLElement){
            this.elements.forEach(el => {
                el.innerHTML += selector.outerHTML;
            });
        }
    }

    children(){
        const children = [];
        this.elements.forEach(el => {
            for (let i = 0; i < el.children.length; i++) {
                children.push(
                    new DOMNodeCollection(el.children[i])
                );
            }
        });
        return children;
    }

    parent(){
        const parents = [];
        this.elements.forEach(el => {
            parents.push(
                new DOMNodeCollection(el.parentElement)
            );
        });
        return parents;
    }

    find(selector){
        const res = [];
        this.elements.forEach(el => {
            res.push(
                new DOMNodeCollection(el.querySelectorAll(selector))
            );
        });
        return res;
    }

    remove(selector){
        this.elements.forEach(el => {
            el.querySelectorAll(selector).forEach(el => {
                el.remove();
            });
        });
    }
}


module.exports = {
    DOMNodeCollection
}
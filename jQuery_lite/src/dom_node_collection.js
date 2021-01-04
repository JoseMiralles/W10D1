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
                el.innerHTML += string;
            });
        } else{selector instanceof DOMNodeCollection} {
            return this.elements[0].innerHTML;
        }
    }
}


module.exports = {
    DOMNodeCollection
}




this.element.innerHTML = inputElement.outerHTML
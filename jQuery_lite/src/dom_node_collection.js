class DOMNodeCollection{
    constructor(elements){
        this.elements = elements;
    }

    html(string = null){
        if (string){
            this.elements.forEach(el => {
                el.innerHTML = string;
            });
        } else {
            return this.elements[0].innerHTML;
        }
    }
}


module.exports = {
    DOMNodeCollection
}
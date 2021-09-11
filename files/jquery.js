function $(selector, container){
  const self = {
    element: document.querySelector(container).querySelector(selector),
    
    html: ()=> {return self.element},
    
    inHTML: ()=>{return self.element.innerHTML;},
    
    outHTML: ()=>{return self.element.outerHTML;},
    
    on: (event, callback) => {self.element.addEventListener(event, callback)},
    
    hide: ()=> {self.element.style.display = 'none'},
    
    show: ()=> {self.element.style.removeProperty('display')},
    
    setAttr: (name, value) => {
      if(value == null)
        return self.element.getAttribute(name)
      else
        self.element.setAttribute(name, value)
    },
    
    removeAttr: (name)=>{self.element.removeAttribute(name)},
    
    toggleAttr: (name, value) => {
        if(self.element.hasAttribute(name) && self.element.getAttribute(name) == value){
            self.element.removeAttribute(name);
        } else{
            self.element.setAttribute(name, value);
        }
    },
    
    css: (name, value) => {self.element.style.setProperty(name, value);},
    
    addClass: (clsnm) => {self.element.classList.add(clsnm)},
    
    removeClass: (clsnm) => {self.element.classList.remove(clsnm)},
    
    toggleClass: (clsnm) => {self.element.classList.toggle(clsnm)},
    
    classes: ()=>{return self.element.classList},
    
    ready: (redyfn)=>{self.element.addEventListener('load', redyfn)}
    
  }
  return self
}

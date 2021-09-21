function $(selector){
  const self = {
    element: document.querySelector(selector),
    
    html: ()=> {return self.element},
    
    inHTML: ()=>{return self.element.innerHTML;},
    
    outHTML: ()=>{return self.element.outerHTML;},
    
    on: (event, callback) => {self.element.addEventListener(event, callback)},
    
    hide: ()=> {self.element.style.display = 'none'},
    
    show: ()=> {self.element.style.removeProperty('display')},
    
    attr: (names) => {
      for (const property in names){
      self.element.setAttribute(property, names[property]);
        }
    },
    
    attrs: ()=>{return self.element.attributes},
    
    removeAttr: (name)=>{self.element.removeAttribute(name)},
    
    toggleAttr: (name, value) => {
        if(self.element.hasAttribute(name) && self.element.getAttribute(name) == value){
            self.element.removeAttribute(name);
        } else{
            self.element.setAttribute(name, value);
        }
    },
    
    getAttr: (name)=>{return self.element.getAttribute(name)},
    
    addClass: (clsnm) => {self.element.classList.add(clsnm)},
    
    removeClass: (clsnm) => {self.element.classList.remove(clsnm)},
    
    toggleClass: (clsnm) => {self.element.classList.toggle(clsnm)},
    
    classes: ()=>{return self.element.classList},
    
    ready: (redyfn)=>{self.element.addEventListener('load', redyfn)},
    
    create: (elem)=>{
       var ctelem = document.createElement(elem);
       self.element.appendChild(ctelem); 
    },
    
    css: (style)=>{
      for (const property in style){
          self.element.style.setProperty(property, style[property]);
    }
    },
  
    appendTo: (appender)=>{
        document.querySelector(appender).appendChild(self.element);
    },
    
    cloneTo: (cont)=>{
     document.querySelector(cont).innerHTML += self.element.outerHTML;
    }
    
  }
  return self
}

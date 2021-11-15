function $(selector){
    const self = {
    element: document.querySelector(selector),
      
    html: () => {return self.element},
      
    inHTML: (n) => {
          if(n){
              if(n.indexOf("+") == 0){
            self.element.innerHTML += n.substring(1,n.length);
              } else{
            self.element.innerHTML = n;
              }
          } else {
            return self.element.innerHTML;
          }
      },
      
    outHTML: (n) => {
          if(n){
              if(n.indexOf("+") == 0){
            self.element.outerHTML += n.substring(1,n.length);
              } else{
            self.element.outerHTML = n;
              }
          } else {
            return self.element.outerHTML;
          }
      },
    
    text: (n) => {
        if(n){
          if(n.indexOf("+") == 0){
            self.element.innerText += n.substring(1,n.length);
           } else{
            self.element.innerText = n;
              }
          } else {
            return self.element.innerText;
          }
      },
    
    val: (n) => {
        if(n){
          if(n.indexOf("+") == 0){
            self.element.value += n.substring(1,n.length);
           } else{
            self.element.value = n;
              }
          } else {
            return self.element.value;
          }
    },

    on: (event, callback) => {self.element.addEventListener(event, callback)},
    
    click: (func) => {self.element.addEventListener('click', func)},

    hide: ()=> {self.element.style.display = 'none';},
    
    show: ()=> {self.element.style.removeProperty('display')},
    
    toggle: ()=>{
     if(!self.element.style.display || self.element.style.display != "none"){
    self.element.style.setProperty("display", "none"), t;
        }
        else{
    self.element.style.removeProperty("display");
        }
    },
    
    attr: (names) => {
      for (const property in names){
      self.element.setAttribute(property, names[property]);
        }
    },
    
    attrs: ()=>{return self.element.attributes},
    
    removeAttr: (names)=>{
        for (var i = 0; i < names.length; i++){
        self.element.removeAttribute(names[i]);
        }
    },
    
    toggleAttr: (name, value) => {
        if(self.element.hasAttribute(name) && self.element.getAttribute(name) == value){
            self.element.removeAttribute(name);
        } else{
            self.element.setAttribute(name, value);
        }
    },
    
    getAttr: (name)=>{return self.element.getAttribute(name)},
    
    id: (id)=>{self.element.setAttribute("id", id);},
    
    class: (clsnm) => {self.element.classList.add(clsnm)},
    
    removeClass: (clsnm) => {self.element.classList.remove(clsnm)},
    
    toggleClass: (clsnm) => {self.element.classList.toggle(clsnm)},
    
    classes: ()=>{return self.element.classList},
    
    ready: (redyfn)=>{self.element.addEventListener('load', redyfn)},
    
    css: (style)=>{
      for (const property in style){
          self.element.style.setProperty(property, style[property]);
    }
    },
  
    appendTo: (appender)=>{
        if(appender){
        document.querySelector(appender).appendChild(self.element);
        } else{
        document.body.appendChild(self.element);
        }
    },
    
    cloneTo: (cont)=>{
        if(cont){
     document.querySelector(cont).innerHTML += self.element.outerHTML;
        } else {
            document.body.innerHTML += self.element.outerHTML;
        }
    },
    
    focus: ()=>{
        self.element.focus();
    }
    
    }
    return self;
    }
    
    var as = {};
    
    as.new = function(elem, cont){
    var nwelem = document.createElement(elem);
     document.querySelector(cont).appendChild(nwelem);
   var asnew = {
    attr: (names) => {
      for (const property in names){
      nwelem.setAttribute(property, names[property]);
        }
      var asnewa = {
      css: (style) => {
      for (const property in style){nwelem.style.setProperty(property, style[property]);}},
      on: (event, callback) => {nwelem.addEventListener(event, callback)},
      text: (text) => {
        nwelem.innerText = text;
          }
        }
      return asnewa;
    },
       
    css: (style) => {
      for (const property in style){
       nwelem.style.setProperty(property, style[property]);
       }
    },
       
    inHTML: (html) => {
        nwelem.innerHTML = html;
    },
    outHTML: (html) => {
        nwelem.outerHTML = html;
    },
    text: (text) => {
        nwelem.innerText = text;
    },
    val: (v) => {
        nwelem.value = v;
    },
    on: (event, callback) => {
        nwelem.addEventListener(event, callback);
      var ason = {
          text: (t) => {nwelem.innerText = t},
          val: (v) => {nwelem.value = v}
           }
       return ason;
    },
    click: (func) => {nwelem.addEventListener('click', func)},
    id: (id)=>{nwelem.setAttribute("id", id)},
    class: (clsnm) => {nwelem.classList.add(clsnm)}
    }
     return asnew;
    }
    
    as.hideAll = function(s){
      var a = document.querySelectorAll(s);
      for (var b = 0; b < a.length; b++){
          a[b].style.setProperty("display", "none");
         }
    }
    
    as.hide =  function(elems){
      for (var i = 0; i < elems.length; i++){
        as.hideAll(elems[i]);
      }
    }
    
    as.showAll = function(s){
      var a = document.querySelectorAll(s);
      for (var b = 0; b < a.length; b++){
          a[b].style.removeProperty("display");
         }
    }
    
    as.show = function(elems){
      for (var i = 0; i < elems.length; i++){
        as.showAll(elems[i]);
      }
    }
    
    as.toggleAll = function(s){
      var a = document.querySelectorAll(s);
      for (var b = 0; b < a.length; b++){
        if(!a[b].style.display || a[b].style.display != "none"){
    a[b].style.setProperty("display", "none");
        }
        else{
    a[b].style.removeProperty("display");
        }
      }
    }
    
    as.toggle = function(elems){
      for (var i = 0; i < elems.length; i++){
        as.toggleAll(elems[i]);
      }
    }

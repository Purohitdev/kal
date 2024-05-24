
function remove(a) {
  let pre = a.parentElement;
  let pree = pre.parentElement
  pree.style.display = "none";
}

var slideno = 1;
function fun2(num) {
  var allc = document.querySelectorAll(".caurosal-item");
  document.querySelector(".caurosal-item.active").className = "caurosal-item";
  // 
  // console.log("mum ="+num);
  // console.log("old slideno ="+ slideno)

  slideno += num;
  // console.log("new slide ="+ slideno);
  // 
  if (slideno > allc.length) {
    slideno = 1;
  }
  else if (slideno == 0) {
    slideno = allc.length;

  }
  // 
  document.querySelector(`#slide${slideno}`).className = "caurosal-item active";

}

function fun1() {
  var act = document.querySelectorAll(".div-info1 p");
  // console.log(act)

  for (let x of act) {
    // console.log(x)
    x.style = " transform:translateX(0%);  transition: all 1s;"
  }

}

fun1()


function fun3() {
  var actt = document.querySelectorAll(".div-info2 p");
  // console.log(actt)

  for (let y of actt) {
    // console.log(y)
    y.style = " transform:translateY(0%);  transition: all 1s;"
  }
}

setTimeout(function () {
  fun3()
}, 2000)


function fun4() {
  var acttt = document.querySelectorAll(".div-info3 p");
  // console.log(acttt)

  for (let z of acttt) {
    // console.log(z)
    z.style = " transform:translateX(0%);  transition: all 1s;"
  }
}

setTimeout(function () {
  fun4()
}, 4000)


function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}


function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}

window.onscroll = function () {
  if (document.documentElement.scrollTop > 500 && document.documentElement.scrollTop < 600) {
    let allp = document.querySelectorAll(".detail-sec2 p")
    // console.log(allp);
    let allh5 = document.querySelectorAll(".detail-sec2 h5")
    // console.log(allh5);
    for (let p of allp) {
      // console.log(p)
      p.style = " transform:translateX(0%);  transition: all 1s;"
    }
    for (let h5 of allh5) {
      // console.log(h5)
      h5.style = " transform:translateX(0%);transition: all 1.5s;"
    }
  }

}

function navtab(a, b) {
  var navhead = document.getElementsByClassName("navhead");
  for (var head of navhead) {
    head.className = "navhead";
  }
  a.className = "navhead navactive";


  var navbody = document.getElementsByClassName("nav-body");
  for (var body of navbody) {
    body.className = "nav-body";
  }

  document.getElementById(b).className = "nav-body nbactive"

}

function api1() {
  let x = new XMLHttpRequest();
  x.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      // console.log(data);
      displaybox(data);
    } else {
      console.error(`Not working: readyState: ${this.readyState} | status: ${this.status}`);
    }
  };
  x.open("GET", "https://dummyjson.com/products", true);
  x.send();
}

api1();

function displaybox(data) {
  // console.log(data);
  let main = document.querySelector(".row");
  // console.log(main);
  // for(var d in  data){
  console.log(data.products);
  // console.log(data[d]);
  for (var da of data.products) {
    console.log(da)
    //      for(var daa in  da){
    // console.log(da[daa])
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da.price - da.discountPercentage);
    main.appendChild(col);




    // console.log(da.description)


    

    col.innerHTML = ` <div id="myModal" class="modal">
                <div class="modal-content">
                 <span class="close" onclick="closemodel(this)">&times;</span>
                 <p>${da.description}</p>
            
           
           






                
                </div>
                </div>
                <div class="assest1">
                  <div class="overflow">
            <div class="ico-model">
            <span onclick="likefun(this)">
            <i class='fa fa-heart-o heartcount'></i>
            </span>
            <span class="material-symbols-outlined fix" onclick="model(this)">
              visibility
              </span>
              <span class="material-symbols-outlined fix">
                task_alt
                </span>
          </div>
                <div class="div-ass1">
                  <img src="${da.thumbnail}" alt="" width="100%">
                </div>
                <div class="div-ass2">
                  <h3>${da.title} </h3>
                  <p class="text-truncate"> ${da.description} </p>
                   </div>
                <div class="div-ass3">
               <div class="div-ass3a">
               <h3>brand:<p>${da.brand}</p></h3>
               </div>    
               <div class="div-ass3b">
               <h3>category:<p>${da.category}</p></h3>
               </div>
                </div>
                <div class="div-ass4">
                <h3>oldPrice:<p> <s> ${da.price} </s></p></h3>
                <h3>price:<p>  ${disc}</p></h3>
                </div>
                
                <div class="div-ass-butt">
                <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                storefront
              </span>  </button>
                </div>
                
      
              </div>
              </div>`

  }

  let main2 = document.querySelector(".row2");
  // console.log(main2);
  // console.log(data.products);

  var da3 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "smartphones";

  });

  var da4 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "laptops";
  });

  var da6 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "fragrances";
  });

  var da8 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "skincare";
  });

  var da10 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "groceries";
  });

  var da12 = data.products.filter((a) => {
    // console.log(a.category);
    return a.category == "home-decoration";
  });

  // console.log(da3);

  for (var da2 of da3) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da2.price - da2.discountPercentage);
    main2.appendChild(col);
    col.innerHTML =


      `<div class="assest1">
                <div class="overflow">
          <div class="ico-model">
          <span  onclick="likefun(this)">
          <i class='fa fa-heart-o heartcount'></i>
          </span>
          <span class="material-symbols-outlined fix">
            visibility
            </span>
            <span class="material-symbols-outlined fix">
              task_alt
              </span>
        </div>
              <div class="div-ass1">
                <img src="${da2.thumbnail}" alt="" width="100%">
              </div>
              <div class="div-ass2">
                <h3>${da2.title} </h3>
                <p class="text-truncate"> ${da2.description} </p>
                 </div>
              <div class="div-ass3">
             <div class="div-ass3a">
             <h3>brand:<p>${da2.brand}</p></h3>
             </div>    
             <div class="div-ass3b">
             <h3>category:<p>${da2.category}</p></h3>
             </div>
              </div>
              <div class="div-ass4">
              <h3>oldPrice:<p> <s> ${da2.price} </s></p></h3>
              <h3>price:<p>  ${disc}</p></h3>
              </div>
              
              <div class="div-ass-butt">
              <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
              storefront
            </span>  </button>
              </div>
              
    
            </div>
            </div>`

    // console.log(da2);
    // console.log(da2.description);
  }

  let main3 = document.querySelector(".row3");


  for (var da5 of da4) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da5.price - da5.discountPercentage);
    main3.appendChild(col);
    col.innerHTML = `<div class="assest1">
                       <div class="overflow">
                 <div class="ico-model">
                 <span  onclick="likefun(this)">
                 <i class='fa fa-heart-o heartcount'></i>
                 </span>
                 <span class="material-symbols-outlined fix">
                   visibility
                   </span>
                   <span class="material-symbols-outlined fix">
                     task_alt
                     </span>
               </div>
                     <div class="div-ass1">
                       <img src="${da5.thumbnail}" alt="" width="100%">
                     </div>
                     <div class="div-ass2">
                       <h3>${da5.title} </h3>
                       <p class="text-truncate"> ${da5.description} </p>
                        </div>
                     <div class="div-ass3">
                    <div class="div-ass3a">
                    <h3>brand:<p>${da5.brand}</p></h3>
                    </div>    
                    <div class="div-ass3b">
                    <h3>category:<p>${da5.category}</p></h3>
                    </div>
                     </div>
                     <div class="div-ass4">
                     <h3>oldPrice:<p> <s> ${da5.price} </s></p></h3>
                     <h3>price:<p>  ${disc}</p></h3>
                     </div>
                     
                     <div class="div-ass-butt">
                     <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                     storefront
                   </span>  </button>
                     </div>
                     
           
                   </div>
                   </div>`

    //  console.log(da2);
  }

  let main4 = document.querySelector(".row4");


  for (var da7 of da6) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da7.price - da7.discountPercentage);
    main4.appendChild(col);
    col.innerHTML = `<div class="assest1">
                       <div class="overflow">
                 <div class="ico-model">
                 <span  onclick="likefun(this)">
                 <i class='fa fa-heart-o heartcount'></i>
                 </span>
                 <span class="material-symbols-outlined fix">
                   visibility
                   </span>
                   <span class="material-symbols-outlined fix">
                     task_alt
                     </span>
               </div>
                     <div class="div-ass1">
                       <img src="${da7.thumbnail}" alt="" width="100%">
                     </div>
                     <div class="div-ass2">
                       <h3>${da7.title} </h3>
                       <p class="text-truncate"> ${da7.description} </p>
                        </div>
                     <div class="div-ass3">
                    <div class="div-ass3a">
                    <h3>brand:<p>${da7.brand}</p></h3>
                    </div>    
                    <div class="div-ass3b">
                    <h3>category:<p>${da7.category}</p></h3>
                    </div>
                     </div>
                     <div class="div-ass4">
                     <h3>oldPrice:<p> <s> ${da7.price} </s></p></h3>
                     <h3>price:<p>  ${disc}</p></h3>
                     </div>
                     
                     <div class="div-ass-butt">
                     <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                     storefront
                   </span>  </button>
                     </div>
                     
           
                   </div>
                   </div>`


  }

  let main5 = document.querySelector(".row5");
  for (var da9 of da8) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da9.price - da9.discountPercentage);
    main5.appendChild(col);
    col.innerHTML = `<div class="assest1">
                       <div class="overflow">
                 <div class="ico-model">
                 <span  onclick="likefun(this)">
                 <i class='fa fa-heart-o heartcount'></i>
                 </span>
                 <span class="material-symbols-outlined fix">
                   visibility
                   </span>
                   <span class="material-symbols-outlined fix">
                     task_alt
                     </span>
               </div>
                     <div class="div-ass1">
                       <img src="${da9.thumbnail}" alt="" width="100%">
                     </div>
                     <div class="div-ass2">
                       <h3>${da9.title} </h3>
                       <p class="text-truncate"> ${da9.description} </p>
                        </div>
                     <div class="div-ass3">
                    <div class="div-ass3a">
                    <h3>brand:<p>${da9.brand}</p></h3>
                    </div>    
                    <div class="div-ass3b">
                    <h3>category:<p>${da9.category}</p></h3>
                    </div>
                     </div>
                     <div class="div-ass4">
                     <h3>oldPrice:<p> <s> ${da9.price} </s></p></h3>
                     <h3>price:<p>  ${disc}</p></h3>
                     </div>
                     
                     <div class="div-ass-butt">
                     <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                     storefront
                   </span>  </button>
                     </div>
                     
           
                   </div>
                   </div>`


  }
  let main6 = document.querySelector(".row6");
  for (var da11 of da10) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da11.price - da11.discountPercentage);
    main6.appendChild(col);
    col.innerHTML = `<div class="assest1">
                       <div class="overflow">
                 <div class="ico-model">
                 <span  onclick="likefun(this)">
                 <i class='fa fa-heart-o heartcount'></i>
                 </span>
                 <span class="material-symbols-outlined fix">
                   visibility
                   </span>
                   <span class="material-symbols-outlined fix">
                     task_alt
                     </span>
               </div>
                     <div class="div-ass1">
                       <img src="${da11.thumbnail}" alt="" width="100%">
                     </div>
                     <div class="div-ass2">
                       <h3>${da11.title} </h3>
                       <p class="text-truncate"> ${da11.description} </p>
                        </div>
                     <div class="div-ass3">
                    <div class="div-ass3a">
                    <h3>brand:<p>${da11.brand}</p></h3>
                    </div>    
                    <div class="div-ass3b">
                    <h3>category:<p>${da11.category}</p></h3>
                    </div>
                     </div>
                     <div class="div-ass4">
                     <h3>oldPrice:<p> <s> ${da11.price} </s></p></h3>
                     <h3>price:<p>  ${disc}</p></h3>
                     </div>
                     
                     <div class="div-ass-butt">
                     <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                     storefront
                   </span>  </button>
                     </div>
                     
           
                   </div>
                   </div>`


  }
  let main7 = document.querySelector(".row7");
  for (var da13 of da12) {
    let col = document.createElement("div");
    col.className = "col-3";
    var disc = Math.floor(da13.price - da13.discountPercentage);
    main7.appendChild(col);
    col.innerHTML = `<div class="assest1">
                       <div class="overflow">
                 <div class="ico-model">
                 <span  onclick="likefun(this)">
                 <i class='fa fa-heart-o heartcount'></i>
                 </span>
                 <span class="material-symbols-outlined fix">
                   visibility
                   </span>
                   <span class="material-symbols-outlined fix">
                     task_alt
                     </span>
               </div>
                     <div class="div-ass1">
                       <img src="${da13.thumbnail}" alt="" width="100%">
                     </div>
                     <div class="div-ass2">
                       <h3>${da13.title} </h3>
                       <p class="text-truncate"> ${da13.description} </p>
                        </div>
                     <div class="div-ass3">
                    <div class="div-ass3a">
                    <h3>brand:<p>${da13.brand}</p></h3>
                    </div>    
                    <div class="div-ass3b">
                    <h3>category:<p>${da13.category}</p></h3>
                    </div>
                     </div>
                     <div class="div-ass4">
                     <h3>oldPrice:<p> <s> ${da13.price} </s></p></h3>
                     <h3>price:<p>  ${disc}</p></h3>
                     </div>
                     
                     <div class="div-ass-butt">
                     <button class="mainbutt"> add to cart  <span class="material-symbols-outlined">
                     storefront
                   </span>  </button>
                     </div>
                     
           
                   </div>
                   </div>`


  }
}

c = 0;
function likefun(a) {
  c++
  if (a.children[0].className == 'fa fa-heart-o heartcount') {

    a.innerHTML = "<i class='fa fa-heart newheart'></i>";
    let count = document.querySelector(".small-circle");
    console.log(count);
    count.innerHTML = c
  }
  else {
    a.innerHTML = "<i class='fa fa-heart-o heartcount'></i>";
  }

}



function model(a) {

  var a = document.querySelector(".modal");
  a.style.display = "block";
  console.log(a);
  

}

function closemodel() {
  var modal = document.querySelector(".modal");
  modal.style.display = "none";

}



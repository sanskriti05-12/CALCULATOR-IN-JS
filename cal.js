let store="";
let pressed =(value)=>{
    let show=document.querySelector("#display")
    store=store+value
    show.innerHTML=store
}
let equall=()=>{
    let show=document.querySelector("#display")
    show.innerHTML=eval(store)
    store=eval(store)
    store.toString();
}
let sq=()=>{
    let show=document.querySelector("#display")
    store=store*store
    show.innerHTML=store
}

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
let del=()=>{
    let show=document.querySelector("#display")
    store=store.slice(0,-1)
    show.innerHTML=store
}
let ac=()=>{
    let show=document.querySelector("#display")
    store=
    show.innerHTML=""
}
let cu=()=>{
    let show=document.querySelector("#display")
    store=store*store*store
    show.innerHTML=store
}

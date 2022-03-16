const soma = (a,b)=>{
    return a+b
}

const sub = (a,b)=>{
    return a-b
}

const obj = (a,b)=>{
    // const a = a
    // const b = b
    const objeto = {a : a,
                    b : b}
    return objeto
}

export default {soma, sub, obj}
export const getrandom1=(length,min,max)=>{ //整数
    let arr=[];
    for(let i=0;i<length;i++){
        arr.push(Math.floor(Math.random()*(max-min+1)+min));
    }
    return arr;
}
export const getrandom2=(length,min,max)=>{ //两位小数  --字符串类型
    let arr=[];
    for(let i=0;i<length;i++){
        let Num=(Math.random()*(max-min+1)+min).toFixed(2);
        arr.push(Num);
    }
    return arr;
}
export const getRandom2=(length,min,max)=>{ //两位小数  --数字类型
    let arr=[];
    for(let i=0;i<length;i++){
        let Num=parseFloat((Math.random()*(max-min+1)+min).toFixed(2));
        arr.push(Num);
    }
    return arr;
}
export const getrandom3=(length,min,max)=>{ //三位整数
    let arr=[];
    for(let i=0;i<length;i++){
        arr.push(String(Math.floor(Math.random()*(max-min+1)+min)).padStart(3,'0'));
    }
    return arr;
}
export const getrandom4=(length,min,max)=>{ //两位整数
    let arr=[];
    for(let i=0;i<length;i++){
        arr.push(String(Math.floor(Math.random()*(max-min+1)+min)).padStart(2,'0'));
    }
    return arr;
}

export function MIO():string{
    return "MIO"
}
export function UUID(salt:number):string{
    return "UUIO"
}
export function testInterfaceExport():Promise<void>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(1)
            resolve()
        })
    })
    
}
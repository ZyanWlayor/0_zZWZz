/**
 * @description 文件大小可视化
 * @param value 需要
 */
export function renderSize(value:string):string{
    if(null==value||value==''){
        return "0 Bytes";
    }
    let unitArr = new Array("Bytes","KB","MB","GB","TB","PB","EB","ZB","YB");
    let index=0;
    let srcsize = parseFloat(value);
    index=Math.floor(Math.log(srcsize)/Math.log(1024));
    let size:number = srcsize/Math.pow(1024,index);
    let sizeSerialized = size.toFixed(2);//保留的小数位数
    return sizeSerialized + unitArr[index];
}
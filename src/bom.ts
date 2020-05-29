/**
 * @description 解析查询字符串
 */
export function resolveQueryString():{ [key:string]:string} {
    let query,params:{ [key:string]:string} = {}, e;
    try {
        query = location.href.split('?')[1] || ''
    }catch {
        return params
    }

    let re = /([^&=]+)=?([^&]*)/g,
        decodeRE = /\+/g,
        decode = function (str:string) { return decodeURIComponent(str.replace(decodeRE, " ")); };
    
    while (e = re.exec(query)) {
        params[decode(e[1])] = decode(e[2])
    };
    return params;
}
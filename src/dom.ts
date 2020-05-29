/**
 * @description 判断元素是否是父元素的子元素
 * @param obj 要判断的元素
 * @param parentObj 父元素
 */
export function isParent(obj:Node & ParentNode, parentObj:Node & ParentNode) {
    while (obj != undefined && obj != null && obj.nodeName.toUpperCase() != 'BODY') {
        if (obj == parentObj) {
            return true;
        }
        obj = obj.parentNode;
    }
    return false;
}
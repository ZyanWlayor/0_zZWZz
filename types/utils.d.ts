declare namespace utils {
    function MIO():string
    function UUID(salt:string):string
    function testInterfaceExport():Promise<void>

}
export default utils

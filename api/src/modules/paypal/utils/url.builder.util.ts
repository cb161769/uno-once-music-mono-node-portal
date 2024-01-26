export function generateUrl(baseUrl:string,version:string,path:string):string{
    try {
        return `${baseUrl}/${version}/${path};` 
    } catch (error) {
        throw new Error(error['message'])
        
    }
}
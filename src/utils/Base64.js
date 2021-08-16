export default class Base64 {

    encode(string){
        var emBase64 = new Buffer(string).toString('base64');
        return emBase64;
    }
}

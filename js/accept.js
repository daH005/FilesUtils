export function fileIsValidByAccept(file, accept) {
    let isValid = false;
    let signs = accept.split(",");
    let curSign;
    for (let i in signs) {
        curSign = signs[i];
        if (curSign.startsWith(".")) {
            isValid = _filenameIsValidByExtension(file.name, curSign);
        }
        else {
            isValid = _fileTypeIsValidByRegex(file.type, new RegExp(curSign));
        }
        if (isValid) {
            break;
        }
    }
    return isValid;
}
function _filenameIsValidByExtension(filename, extension) {
    return filename.endsWith(extension);
}
function _fileTypeIsValidByRegex(fileType, regex) {
    return Boolean(fileType.match(regex));
}

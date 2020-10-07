function createParagraphChunksArr(str) {
    if (!str.includes("\r\n")) return str;

    return str
            .split("\r\n")
            .filter(" ");
}

export default createParagraphChunksArr;
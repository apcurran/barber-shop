function createParagraphChunksArr(str) {
    if (!str.includes("\n")) return str;

    return str.split("\n\n");
}

export default createParagraphChunksArr;
function dirReduc(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "WEST" && arr[i + 1] === "EAST" ||
            arr[i] === "EAST" && arr[i + 1] === "WEST" ||
            arr[i] === "NORTH" && arr[i + 1] === "SOUTH" ||
            arr[i] === "SOUTH" && arr[i + 1] === "NORTH") {
            arr.splice(i, 2);
            count++;
            i--;
        }
    }
    return count === 0 ? arr : dirReduc(arr);
}
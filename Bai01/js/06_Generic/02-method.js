class StudyGeneric {
    static printArray(params) {
        console.log(params);
    }
}
StudyGeneric.printArray([3, 4, 1, 2, 5].sort(function (x, y) { return x - y; }));
StudyGeneric.printArray(["bac", "mna"]);
StudyGeneric.printArray([3, 4, 1, 2, 5, "bac", "mna"]);

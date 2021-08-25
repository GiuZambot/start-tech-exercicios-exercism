export const compute = (left, right) => {
    if (!left && !right) return 0;

    if (left && !right)
        throw new Error('right strand must not be empty');

    if (!left && right)
        throw new Error('left strand must not be empty');

    if (left.length !== right.length)
        throw new Error('left and right strands must be of equal length');

    if (left === right) return 0;

    if (left !== right) {
        let diferentes = 0;
        for (let i = 0; i < left.length; i++) {
            diferentes += left[i] === right[i] ? 0 : 1;
        }
        return diferentes;
    }
};
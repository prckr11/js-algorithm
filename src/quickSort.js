export default function quickSort (array) {
    if (array.length <= 1) return array;

    const pivot = array[array.length - 1];
    const smallerThanPivot = [];
    const largerThanPivot = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            smallerThanPivot.push(array[i]);
        } else {
            largerThanPivot.push(array[i]);
        }
    }

    return [...quickSort(smallerThanPivot), pivot, ...quickSort(largerThanPivot)]
}
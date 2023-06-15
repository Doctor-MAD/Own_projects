console.log(" this is module file.")

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    })
    return sum / arr.length;
};
module.exports = {
    avg: average,
    name1: "Akash",
    repo: "Github",
    hello: () => {
        console.log(`Hi, I am ${module.exports.name1} and my repo is ${module.exports.repo}`);
    }
}
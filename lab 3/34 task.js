const byte = (ip) => {
    const ipArray = ip.split('.');
    const ipArrayNum = ipArray.map(Number);
    const result = ipArrayNum.reduce((acc, byte, index) => acc + (byte << ((3 - index) * 8)), 0);
    return result;
}

const ip = '10.0.0.1';
const final = byte(ip);
console.log(final)


function introspectObject(iface) {
    const result = [];
    Object.keys(iface).forEach(key => {
        const value = iface[key];
        if (typeof value === 'function') {
            result.push([key, value.length]);
        }
    });

    return result;
}


const iface = {
    m1: x => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

console.log(introspectObject(iface));
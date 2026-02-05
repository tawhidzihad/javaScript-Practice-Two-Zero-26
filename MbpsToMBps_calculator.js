function mbpsConvert(megaBits){
    // 1 megaBytes = 8 megaBits.
    const megaBytes = 0.125;

    let result = megaBytes * megaBits;
    return result;
}

const speed = 21;
const output = mbpsConvert(speed);
console.log(speed, "Mbps =", output, "MBps");
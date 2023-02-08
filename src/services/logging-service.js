class Logging {
    constructor() {
        this.current_time = new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date().getSeconds();
    }
    table(data) {
        console.table(data);
    }
    info(info) {
        console.log(`[INFO]  ====> ${info} ${this.current_time} <====`);
    }
    warn(warn) {
        console.log(`[WARN]  ====> ${warn} ${this.current_time} <====`);
    }
    error(error) {
        console.log(`[ERROR] ====> ${error} ${this.current_time} <====`);
    }
}
const log = new Logging();
export default log;

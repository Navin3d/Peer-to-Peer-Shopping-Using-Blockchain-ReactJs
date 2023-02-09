class Logging {
    constructor() {
        this.current_time = new Date().getHours()+":"+new Date().getMinutes()+":"+ new Date().getSeconds();
    }
    table(data) {
        console.table(data);
    }
    info(info) {
        console.log(`[${this.current_time}] [INFO]  ====> ${JSON.stringify(info)}`);
    }
    warn(warn) {
        console.log(`[${this.current_time}] [WARN]  ====> ${JSON.stringify(warn)}`);
    }
    error(error) {
        console.log(`[${this.current_time}] [ERROR] ====> ${JSON.stringify(error)}`);
    }
}
const log = new Logging();
export default log;

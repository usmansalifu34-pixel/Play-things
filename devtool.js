const cp = require('node:child_process')
//console.log(process.argv[2])

switch(process.argv[2]){
    case "kill":
        let output = cp.execSync(`lsof -i :${process.argv[3]}`).toString()
        const pid = output.split('\n')[1].split(/\s+/)[1]
        cp.execSync(`kill ${pid}`)
        console.log(`server running on port ${3000} was killed successfully`)
        break;
    case "chmod":
        
            //let command = process.argv[3]
            //console.log(process.argv)
            cp.execSync(`chmod ${process.argv[3]} ${process.argv[4]}`)
            let res = cp.execSync(`ls -l ${process.argv [4]}`).toString()
            //console.log(command, process.argv)
            console.log(res)
            break;
    case "genSecret":
        const secret = cp.execSync(`openssl rand -hex 64`).toString()
        console.log(secret)
    break;
    default:
        console.log("unknown command")
}
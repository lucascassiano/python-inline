import { PythonShell } from 'python-shell';

export default class Python {
    constructor() {

    }

    /*
        static compile = (args, code) => {
            let options = {
                args: args
            };
    
            PythonShell.runString(code, options, function (err, results) {
                if (err) throw err;
                console.log(results);
                console.log('finished');
            });
        }*/
}

function compiler() {
    return function (obj) {
        //console.log(obj);

        let options = null;

        PythonShell.runString(obj, options, function (err, results) {
            if (err) throw err;
            return results; //console.log(results);
        });

    }
}

export const compile = function (obj) {
    if (typeof obj === 'object' &&
        !Array.isArray(obj)
    ) {
        return compiler(obj);
    }
    return compiler()(obj);
}


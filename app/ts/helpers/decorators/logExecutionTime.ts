export function logExecutionTime(inSeconds: boolean = false) {

    return function(target: any, propertyKey:string, descriptor: PropertyDescriptor) {
        
        const originalMethod = descriptor.value;
        
        descriptor.value = function(...args: any[]) {
            let unity= "ms";
            let divisor = 1;
            if (inSeconds) {
                unity = "s";
                divisor = 1000;
            }
            console.log("-------------------------");
            console.log(`Params passed to '${propertyKey}' method: ${JSON.stringify(args)}`);
            const t1 = performance.now();
            const applied = originalMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`The '${propertyKey}' method return: ${JSON.stringify(applied)}`);
            console.log(`The '${propertyKey}' method took ${(t2 - t1)/divisor}${unity} long`);
            return applied;
        }

        return descriptor;
    }
}
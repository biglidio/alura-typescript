export function domInject(selector: string) {

    return function(target: any, key:string) {
        
        let element: JQuery;

        const getter = function() {
            if(!element) {
                element = $(selector);
                console.log(`Tring to get ${selector} to inject in ${key}`);
            }

            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    }
}
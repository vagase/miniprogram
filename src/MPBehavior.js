export default class BaseBehavior {
    constructor(name) {
        this.name = name;
        this.behaviors = [];
        this.properties = {};
        this.data = {};
        this.methods = {};
    }
    
    created() {
    }
    
    attached() {
    }
    
    ready() {
    }
    
    moved() {
    }
    
    detached() {
    }
    
    static register() {
        const _findAllFunctions = (proto) => {
            if (!proto || proto === Object.prototype) {
                return null;
            }
        
            let result = Object.getOwnPropertyNames(proto).reduce((result, name) => {
                if (name === 'create' || name === 'constructor') {
                    return result;
                }
            
                result[name] = proto[name];
            
                return result;
            }, {});
        
            let parent = _findAllFunctions(proto.__proto__);
            if (parent) {
                result = Object.assign({}, parent, result);
            }
        
            return result;
        };
    
        const _findAllProperties = (component) => {
            let result = {};
        
            Object.keys(component).forEach((key) => {
                result[key] = component[key];
            });
        
            return result;
        };
        
        const component = new this(arguments);
        const functions = _findAllFunctions(component.__proto__);
        const properties = _findAllProperties(component);
        
        let lifecycleMethods = {};
        let componentMethods = Object.assign({}, functions);
        for (const method of ['created', 'attached', 'ready', 'moved', 'detached']) {
            lifecycleMethods[method] = componentMethods[method];
            delete componentMethods[method];
        }
        properties['methods'] = Object.assign({}, componentMethods, properties['methods']);
        
        return Behavior(Object.assign({}, lifecycleMethods, properties));
    }
}

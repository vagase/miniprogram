/**
 * 通过 class 方式实现页面更符合 oop 工程师习惯，例如可以方便使用继承等功能
 */
export default class MPPage {
    constructor(pageName) {
        // pageName 可用于调试
        this.pageName = pageName;
        this.data = {};
    }

    // 阻止控件响应用户操作，比如触摸穿透
    preventDefault(e) {
    }

    onLoad(e) {
    }

    onUnload(e) {
    }

    onShow(e) {
    }

    onHide(e) {
    }

    onReady(e) {
    }

    onPullDownRefresh(e) {
    }

    onReachBottom(e) {
    }

    static register() {
        const _findAllFunctions = (proto) => {
            if (!proto || proto === Object.prototype) {
                return null;
            }
        
            let result = Object.getOwnPropertyNames(proto).reduce((result, name) => {
                if (name === 'register' || name === 'constructor') {
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
    
        const _findAllProperties = (page) => {
            let result = {};
        
            Object.keys(page).forEach((key) => {
                result[key] = page[key];
            });
        
            return result;
        };
        
        const page = new this(arguments);
        const functions = _findAllFunctions(page.__proto__);
        const properties = _findAllProperties(page);

        const config = Object.assign({}, functions, properties);
        Page(config);
    }
}

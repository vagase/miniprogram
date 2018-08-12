import MPBehavior from "../../src/MPBehavior";

class TestBehavior extends MPBehavior {
    constructor() {
        super('TestBehavior');
    }
    
    openPage(e) {
        wx.navigateTo({
            url: '../TestPage2/index'
        });
    }
}

export default TestBehavior.register()
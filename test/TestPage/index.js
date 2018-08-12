import MPPage from "../../src/MPPage";

class TestPage extends MPPage {
    constructor() {
        super('TestPage');
        
        this.data.title = 'Hello ';
        this.data.description = 'Powered by "MPPage"';
    }
    
    didClickDescription(e) {
        wx.showModal({
            title: '欢迎使用 MPPage',
            showCancel: false
        })
    }
}

TestPage.register();
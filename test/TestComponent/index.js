import MPComponent from "../../src/MPComponent"
import testBehavior from "../TestBehavior/index";

export default class TestComponent extends MPComponent {
    constructor() {
        super('TestComponent');
        
        this.behaviors.push(testBehavior);
        
        this.properties.title = {
            type: String,
            value: ''
        };
        
        this.properties.counter = {
            type: Number,
            value: 1
        };
    }
    
    didClickPlus(e) {
        this.setData({
            counter: this.data.counter + 1
        });
    }
    
    didClickMinus(e) {
        this.setData({
            counter: this.data.counter - 1
        });
    }
}

TestComponent.register();
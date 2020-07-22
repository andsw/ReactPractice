import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
    state = {
        count: 0,
        imgURL: "http://img.netbian.com/file/2020/0516/8169431837be79f7ff21c09a7daec2e6.jpg",
        address: {
            street: ""
        },
        tags: ['tag1', 'tag2', 'tag3', 'tag4'],
        products: ['bags', 'shoes', 'toy', 'fruit']
    };
    styles = {
        width: "500px",
        display: 'block'
    };
    render() {

        // 用Fragment既可以保证only one root，又可以保证不会添加多余的标签如div
        return <React.Fragment>
            <img src={this.state.imgURL} alt="" style={this.styles}/>
            <span className={this.getCountClasses()} style={{ fontSize: 30 }}>{this.formatCount()}</span>
            {/*如果要传参的话， 只能用一个匿名方法包含 () => {this.increaseCount()}*/}
            <button className="btn btn-dark text-white" onClick={this.increaseCount}>+</button>
            <h2>购物车商品:</h2>
            <ul>
                {this.renderProduct()}
            </ul>
            <h2>tags:</h2>
            <ul>
                {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            </ul>
        </React.Fragment>;
    };

    renderProduct() {
        let { products } = this.state;
        if (products.length === 0) {
            return 'there is no product!';
        }
        return products.map(product => <li key={product}>{product}</li>)
    }

    // constructor() {
    //     super();
    //     // 3. 但是每个事件方法都要这样就会很麻烦
    //     this.increaseCount.bind(this);
    // }

    // 4，所以可以将方法由increaseCount改成increase = () => {}
    increaseCount = () =>  {
        // 1.事件触发的方法，相当于事一个匿名类函数，所以this不可以指代Counter这个类
        // 2.所以我们可以在构造函数中绑定this
        console.log("button clicked" + this)
        this.setState({ count: this.state.count + 1 })
    }

    getCountClasses() {
        let countClass = "badge m-2 badge-";
        countClass += this.state.count === 0 ? "warning" : "primary";
        return countClass;
    }

    formatCount() {
        // return this.state.count === 0 ? 'zero' : this.state.count;
        const { count } = this.state; // 这里注意了
        return count === 0 ? <h1>zero</h1> : count;
    }

}

export default Counter;
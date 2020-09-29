/**
 * Created by HeShaowen on 2020/7/27.
 */
import React, {Component} from 'react';

export default class ForwardRefComponent extends Component {

    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            show: false
        }
    }

    componentDidMount() {
        this.ref.current.addEventListener('click', () => {
            console.log("button click ! ")
            this.setState({
                show: true
            })
            setTimeout(() => {
                this.setState({show: false})
            }, 1000)
        })
    }

    render() {
        return (
            <div>

                <h5 style={{display: (this.state.show ? 'block' : 'none')}}>show when button clicked for 1 second! </h5>
                <ButtonComponent ref={this.ref}>试试refs转发</ButtonComponent>
            </div>
        );
    }
}

const ButtonComponent = React.forwardRef((props, ref) => {
    return (
        <div>
            <button ref={ref}>
                { props.children }
            </button>
        </div>
    )
});
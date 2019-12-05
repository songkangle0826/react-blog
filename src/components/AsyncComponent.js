// import()方法返回的是一个Promise，Promise的返回值只能通过then()来读取，所以你会发现官方的3种使用场景全都是在then()里面操作。

// 懒加载组件
import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
    return class extends Component {
        constructor() {
            super();
            this.state = {
                component: null
            }
        }
        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({ component: cmp.default });
                });
        }
        render() {
            const P = this.state.component;
            return P ? <P {...this.props} /> : null;
        }
    }
};

export default asyncComponent;
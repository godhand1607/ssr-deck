import React, { Component } from 'react';
import Link from 'next/link';

class Home extends Component {

    static async getInitialProps(ctx) {
        if (!process.browser) {
            // do api call
        }
        console.log(ctx);
        const props = { name: 'Test'};
        return props;
    }

    componentDidMount() {
        if (process.browser) {
            // do api call
        }
    }


    render() {
        return (<div>
            {this.props.name}
            <Link href="/about"> Go to About page</Link>
        </div>)
    }

}

export default Home;

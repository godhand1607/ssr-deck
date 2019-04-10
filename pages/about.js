import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    static async getInitialProps(ctx) {
        console.log(ctx);
        if (process.browser) {

        }
       /// ctx.req.query.id
        return {};
    }

    render() {
        return (<div>This is the about page!
            <Link href="/"> Go to Home page</Link>
        </div>);
    }

}

export default About;

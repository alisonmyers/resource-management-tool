import * as React from 'react';
import Layout from '../components/my-layout';

const FeedbackPage = () => {
    return (
        <Layout pageTitle="Feedback">

            <div>
                <p>Please use the feedback form below (may take a few seconds to load). The form is setup to send a copy of your responses to your provided email for reference.</p>
            </div>

            <div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfh9vF2cIrUVJtfovPUEiww1fQxPtcGkZcoE7ezrx8a2fm00g/viewform?embedded=true" width="640" height="1804" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </Layout>
    )
}

export default FeedbackPage


import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

import Layout from 'components/common/layout';

const Notes: NextPage = () => {
    return (
        <Layout>
            <div>Notes Page</div>
            <Link href="/">
                <p>Back To Home</p>
            </Link>
        </Layout>
    );
};

export default Notes;

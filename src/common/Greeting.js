import React from "react";
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
// import DecorativeIcon from '@tds/core-decorative-icon'
import { Close } from '@tds/core-interactive-icon'
import Link from '@tds/core-link'

import './index.scss'

const Greeting = ({showModal}) => {
    const closeModal = () => {
        showModal(false)
    }
    return (
        <>
        <div className="greeting-card">
            <Card>
                <FlexGrid.Row>
                    <FlexGrid.Col horizontalAlign='right'>
                        <Link href="#" icon={Close} iconPosition="right" onClick={closeModal}>
                            Close
                        </Link>
                    </FlexGrid.Col>
                </FlexGrid.Row>
                <Box between={1}>
                    <Heading level="h3">{`Welcome back John`}</Heading>
                    <Paragraph>
                        Since your last login on the system, there were:
                    </Paragraph>
                    <div className="dashboard-para-activities">
                        <Paragraph>
                            {`45 new Activities`}
                        </Paragraph>
                    </div>
                </Box>
            </Card>
            </div>
        </>
    )
}

export default Greeting;
import React, { useState } from "react";
import FlexGrid from '@tds/core-flex-grid'
import Box from '@tds/core-box'
import Heading from '@tds/core-heading'
import Text from '@tds/core-text'
import Tabs from '@tds/community-tabs'
import Button from '@tds/core-button'

import CustomTable from "../../common/table";
import './dashboard.scss'

const head = [
    'Number',
    'Short description',
    'state',
    'Priority',
    'Service offering',
    'Related configuration item',
    'Location',
    'Opened',
    'Opened by'
]

const tableData = [
	{
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
    {
		number: "RITM0034950",
		shortDescription: "Need something for AWS",
		state: "Complete",
        priority: "4-Low",
        serviceOffering: "AWS Managed Operations",
        relatedConfigurationItem: "windowTest",
        location: "",
		opened: new Date().toLocaleString(),
		openedBy: "Will Demo"
	}
]

const MyCases =() =>{
    const [open, setOpen] = useState('my-open-request')

	const handleOpen = id => {
		setOpen(id)
	}
    return(
        <>
        <Heading level="h1" tag="h1">Active Requests</Heading>
            <div className='mycases-counter-button'>
        <FlexGrid.Row horizontalAlign={'end'}>
                <Button variant="standard">Submit New Case</Button>
        </FlexGrid.Row>
            </div>
            <FlexGrid limitWidth={false}>
                <div className="mycases-table-container">
                    
            <Tabs copy="en" open={open} onOpen={handleOpen}>
							<Tabs.Panel id="my-open-request" heading="My Open Requests" />
							<Tabs.Panel id="my-closed-requests" heading="My Closed Requests" />
							<Tabs.Panel id="all-open-requests" heading="All Open Requests" />
							<Tabs.Panel id="all-closed-requests" heading="All Closed Requests" />
						</Tabs>
						{open=== 'my-open-request' && 
							<CustomTable head={head} data={tableData} pagination/>
						}
						{open=== 'my-closed-requests' && 
							<CustomTable head={head} data={tableData} pagination/>
						}
						{open=== 'all-open-requests' && 
							<CustomTable head={head} data={[]} pagination/>
						}
						{open=== 'all-closed-requests' && 
							<CustomTable head={head} data={[]} pagination/>
						}
                        </div>
            </FlexGrid>
        </>
    )
}

export default MyCases;
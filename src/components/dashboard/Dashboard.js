import React, { useState } from "react";
import FlexGrid from '@tds/core-flex-grid'
import Card from '@tds/core-card'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import Paragraph from '@tds/core-paragraph'
import Box from '@tds/core-box'
import ChevronLink from '@tds/core-chevron-link'
import {
	Contract,
	Document,
	Helpdesk,
	CallForward,
	CartEmptyBold,
	Bookmark,
	RemoteControl
} from '@tds/core-decorative-icon'
import HairlineDivider from '@tds/core-hairline-divider'
import { BenefitWithHeading, BenefitNoHeading } from '@tds/core-benefit'
import Tabs from '@tds/community-tabs'
import Notification from '@tds/core-notification'

// import DecorativeIcon from '@tds/core-decorative-icon'
import { DownloadPDF, SettingsBold, SupportBold, Settings, LinkExternal, QuestionMarkCircle } from '@tds/core-interactive-icon'
import Link from '@tds/core-link'


import CustomTable from "../../common/table";
import './dashboard.scss'

const head = [
	'Number',
	'Item',
	'State',
	'Opened',
	'Due Time/Date',
	'Opened by'
]
const tableData = [
	{
		number: "RITM0034950",
		item: "Need something for AWS",
		state: "Complete",
		opened: new Date().toLocaleString(),
		dueTimeDate: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		item: "Need something for AWS",
		state: "Complete",
		opened: new Date().toLocaleString(),
		dueTimeDate: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		item: "Need something for AWS",
		state: "Complete",
		opened: new Date().toLocaleString(),
		dueTimeDate: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		item: "Need something for AWS",
		state: "Complete",
		opened: new Date().toLocaleString(),
		dueTimeDate: new Date().toLocaleString(),
		openedBy: "Will Demo"
	},
	{
		number: "RITM0034950",
		item: "Need something for AWS",
		state: "Complete",
		opened: new Date().toLocaleString(),
		dueTimeDate: new Date().toLocaleString(),
		openedBy: "Will Demo"
	}
]

const Dashboard = (props) => {
	const { dashboard } = props.customPageData
	const [open, setOpen] = useState('my-open-request')

	const handleOpen = id => {
		setOpen(id)
	}
	const renderIcon = (key) => {
		switch (key) {
			case 'report':
				return <Helpdesk size="48" />
			case 'service':
				return <Document size="48" />
			case 'knowledge':
				return <Contract size="48" />
		}
	}

	const renderInfoCard = () => {
		return (
			<FlexGrid.Row>
				{dashboard && dashboard.services && dashboard.services.map((service) => {
					return (
						<FlexGrid.Col xs={12} sm={6} md={4} lg={3}>
							<Card spacing="compact" variant="defaultOnlyBorder" fullHeight>
								<FlexGrid gutter={false}>
									<FlexGrid.Row horizontalAlign="center">
										<FlexGrid.Col md={4} xs={0}>
											<Box inset={3} between={3}>
												{renderIcon(service.icon)}
											</Box>
										</FlexGrid.Col>
										<FlexGrid.Col md={8} xs={12} horizontalAlign="left">
											<Box between={2}>
												<Heading level="h4">{service.title}</Heading>

												<Paragraph>
													{service.text}
												</Paragraph>

												<div>
													<ChevronLink variant="primary" href={service.link}>
														{service.linkText}
													</ChevronLink>
												</div>
											</Box>
										</FlexGrid.Col>
									</FlexGrid.Row>
								</FlexGrid>

							</Card>
						</FlexGrid.Col>
					)
				})}
			</FlexGrid.Row>)
	}

	const renderServiceCard = () => {
		return (
			<FlexGrid.Row>
				<FlexGrid.Col xs={12} md={4} lg={4} sm={6}>
					<Card variant="defaultOnlyBorder">

						<Heading level="h4">
							<CallForward />
							&nbsp;&nbsp;Support
							<span className="heading-icon-more">
								<RemoteControl />
							</span>
						</Heading>
						<div className="status-card">
							<div className="status-card-box">
								<Paragraph>New Cases</Paragraph>
								<Text bold size={'large'}> 15</Text>

							</div>
							<div className="status-card-box">
								<Paragraph>Resolved Cases</Paragraph>
								<Text bold size={'large'}> 8</Text>

							</div>

						</div>
						<Box vertical={3}>

							<span className="badge">5</span> &nbsp;&nbsp;
							<ChevronLink href="/coming-soon">Requests that	need immediate response</ChevronLink>
						</Box>
						<HairlineDivider />
						<div className="status-accessible-link">
							<FlexGrid gutter={false}>
								<FlexGrid.Row>
									<FlexGrid.Col md={6} xs={12}>
										<Box between={3} vertical={2}>
											<Paragraph size="medium">
												<Link href="/coming-soon" icon={LinkExternal}>
													Open new incidents
												</Link>
											</Paragraph>


										</Box>
									</FlexGrid.Col>
									<FlexGrid.Col md={6} xs={12}>
										<Box between={3} vertical={2}>
											<Paragraph size="medium">
												<Link href="/coming-soon" icon={Settings} color={'accessibleGreen'}>
													Manage incidents
												</Link>
											</Paragraph>


										</Box>
									</FlexGrid.Col>

									<FlexGrid.Col md={6} xs={12}>
										<Box between={3} vertical={1}>
											<Paragraph size="medium">
												<Link href="/coming-soon" icon={QuestionMarkCircle}>
													FAQs
												</Link>
											</Paragraph>


										</Box>
									</FlexGrid.Col>
								</FlexGrid.Row>
							</FlexGrid>
						</div>
						<HairlineDivider />
						<div className="status-contact-box">
							<Box inline between={3}>
								<Box between={1}>
									<Heading level="h5">Billing Support</Heading>
									<Paragraph size={'small'}>All region except Quebec</Paragraph>
									<Text size={'small'}>1-866-512-8744</Text>
									<Paragraph size={'small'}>Quebec</Paragraph>
									<Text size={'small'}>1-877-520-1212</Text>
									<Paragraph size={'small'}>8am - 5pm local time, Monday - Friday</Paragraph>
								</Box>
								<HairlineDivider vertical />
								<Box inline between={1}>
									<Box between={1}>
										<Heading level="h5">Technical Support</Heading>
										<Text size={'small'}>1-877-710-0404</Text>
										<Paragraph size={'small'}>Technical support available 24/7</Paragraph>
									</Box>
								</Box>
							</Box>
						</div>
					</Card>
				</FlexGrid.Col>

				<FlexGrid.Col xs={12} md={4} lg={4} sm={6}>
					<Card variant="defaultOnlyBorder">

						<Heading level="h4">
							<CallForward />
							&nbsp;&nbsp;Support
							<span className="heading-icon-more">
								<RemoteControl />
							</span>
						</Heading>
						<div className="status-card">
							<div className="status-card-box">
								<Paragraph>Open Request</Paragraph>
								<Text bold size={'large'}> 15</Text>

							</div>
							<div className="status-card-box">
								<Paragraph>Closed Request</Paragraph>
								<Text bold size={'large'}> 8</Text>

							</div>
							<div className="status-card-box">
								<Paragraph>Draft Request</Paragraph>
								<Text bold size={'large'}> 8</Text>

							</div>

						</div>
						<Box vertical={3}>

							<span className="badge badge-black">2</span> &nbsp;&nbsp;
							<ChevronLink href="/coming-soon">Items pending in your cart</ChevronLink>
						</Box>
						<HairlineDivider />
						<Box vertical={1}>
							<Paragraph>
								You have access to more than one Service request system. Choose one to direct access.
							</Paragraph>
						</Box>
						<div className="serice-request-link">
							<Box between={1}>
								<Paragraph size="medium">
									<Link href="/coming-soon">Telus</Link>
								</Paragraph>

								<Paragraph size="small">
									<Link href="/coming-soon">CCL Service Assurance Support</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">Procurement and Supply Chain (CSS)</Link>
								</Paragraph>
							</Box>
						</div>
						<HairlineDivider />

						<div className="status-accessible-link">
							<FlexGrid gutter={false}>
								<FlexGrid.Row>
									<FlexGrid.Col md={6} xs={12}>
										<Box between={3} vertical={2}>
											<Paragraph size="medium">
												<Link href="/coming-soon" icon={QuestionMarkCircle}>
													Catalogue help
												</Link>

											</Paragraph>


										</Box>
									</FlexGrid.Col>

									<FlexGrid.Col md={6} xs={12}>
										<Box between={3} vertical={2}>
											<Paragraph size="medium">
												<Link href="/coming-soon" icon={Settings} color={'accessibleGreen'}>
													Make a request
												</Link>
											</Paragraph>


										</Box>
									</FlexGrid.Col>
								</FlexGrid.Row>
							</FlexGrid>
						</div>
					</Card>
				</FlexGrid.Col>

				<FlexGrid.Col xs={12} md={3} lg={3} sm={6}>
					<Card variant="defaultOnlyBorder">

						<Heading level="h4">
							<CallForward />
							&nbsp;&nbsp;Support
							<span className="heading-icon-more">
								<RemoteControl />
							</span>
						</Heading>


						<div className="serice-request-link">
							<Box between={2}>
								<Paragraph size="medium">
									<Link href="/coming-soon">Explore TELUS Services Management</Link>
								</Paragraph>

								<Paragraph size="small">
									<Link href="/coming-soon">AWS Documentation</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">GCP Documentation</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">Azure Documentation</Link>
								</Paragraph>

								<Paragraph size="small">
									<Link href="/coming-soon">Getting started with Data Protection</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">VCP - Hosted Cloud Dashboard</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">VCP - Copying, moving and deleting VMs</Link>
								</Paragraph>
								<Paragraph size="small">
									<Link href="/coming-soon">Using Certificates with Load Balancing</Link>
								</Paragraph>
							</Box>
						</div>
						<HairlineDivider />
						<Box vertical={2}>

							<Paragraph>
								Popular serives tagged in articles
							</Paragraph>
							<div className="services-tag-contianer">
								<span className="services-tags">
									Mainframe
								</span>
								<span className="services-tags">
									Data Collection
								</span>
								<span className="services-tags">
									Serive Desk
								</span>
								<span className="services-tags">
									Fraud Management
								</span>
							</div>
						</Box>
						<HairlineDivider />

						<div className="status-accessible-link">
							<Box vertical={2}>

								<ChevronLink href="/coming-soon">View all knowledge base articles</ChevronLink>
							</Box>
						</div>
					</Card>
				</FlexGrid.Col>
			</FlexGrid.Row>
		)
	}
	
	return (
		<>
			<div className="dashboard-tab-container">
				<FlexGrid limitWidth={false}>

					{renderInfoCard()}

					<div className="service-container">
						{renderServiceCard()}
					</div>

					<div className="service-table-container">
						<Box vertical={3}>
						<Heading level="h1" tag="h1">
							Active Requests
						</Heading>
						<Tabs copy="en" open={open} onOpen={handleOpen}>
							<Tabs.Panel id="my-open-request" heading="My Open Requests" />
							<Tabs.Panel id="my-closed-requests" heading="My Closed Requests" />
							<Tabs.Panel id="all-open-requests" heading="All Open Requests" />
							<Tabs.Panel id="all-closed-requests" heading="All Closed Requests" />
						</Tabs>
						{open=== 'my-open-request' && 
							<CustomTable head={head} data={[]} pagination/>
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
						</Box>
					</div>

				</FlexGrid>
			</div>
		</>
	)
}

export default Dashboard
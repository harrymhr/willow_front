import React from "react";
import "./cases.scss";
import Heading from "@tds/core-heading";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import Text from "@tds/core-text";
// import Small from "@tds/core-small";
import Button from "@tds/core-button";
import StepTracker from "@tds/core-step-tracker";
import Link from '@tds/core-link'
// import TextButton from "@tds/core-text-button";
import InputGroup from '@tds/community-input-group';
import CalloutParagraph from "@tds/community-callout-paragraph";
import Card from "@tds/core-card";
import Box from "@tds/core-box";
import FlexGrid from "@tds/core-flex-grid";
import Paragraph from "@tds/core-paragraph";
// import Input from "@tds/core-input";
// import "node_modules/progress-tracker/src/styles/progress-tracker.scss";

import { Stepper } from '@mui/material';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
  {
    label: 'Problem Solved',
    description: ``,
  },
  {
    label: 'Problem Solved',
    description: '',
  },
  {
    label: 'Problem Solved',
    description: ` `,
  },
  {
    label: 'Problem Solved',
    description: '',
  },
  {
    label: 'Problem Solved',
    description: ` `,
  },
];

const Cases = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <>

      <FlexGrid>
              {/* <FlexGrid> */}
              <div className="submit-cases">
                <Breadcrumbs baseUrl="http://localhost:9000/">
                  <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
                  <Breadcrumbs.Item href="/">My Cases</Breadcrumbs.Item>
                </Breadcrumbs>
                </div>

                <ChevronLink href="#" direction="left">
                  Back
                </ChevronLink>

                <Heading level="h2">Need something for AWS</Heading>
                <small>Request Number: RITM004267</small>
                <br />
                <br />
                <small>Estmated Completion</small>
                <br />
                <Text>June 30,2021</Text>
      <FlexGrid.Row>
        <FlexGrid.Col md={8}>
        <Box between={3}>
                  <StepTracker
                    copy="en"
                    //    current={state.current}
                    steps={[
                      "Request Created",
                      "Request Approve",
                      "Fulfillment",
                      "Completed",
                    ]}
                  />
                </Box>
        </FlexGrid.Col>
      </FlexGrid.Row>
                
                <FlexGrid.Row>
                  
                  <FlexGrid.Col horizontalAlign="left" md={8}>
                    <Box vertical={4}>
                      {/* <FlexGrid.Row>
                      <FlexGrid.Col horizontalAlign="left">
                        <Box vertical={3}>
                          <Input
                            label=" "
                            type="text"
                            placeholder="Type your message here"
                          />
                        </Box>
                      </FlexGrid.Col>
                      <FlexGrid.Col horizontalAlign="right">
                        <Box vertical={3}>
                          <Button>Send</Button>
                        </Box>
                        </FlexGrid.Col>
                      </FlexGrid.Row> */}
                      <InputGroup />
                      <Card variant="alternative">
                        <Stepper activeStep={activeStep} orientation="vertical">
                          {steps.map((step, index) => (
                            <Step key={step.label}>
                              <StepLabel>
                                {step.label}
                              </StepLabel>
                              
                            </Step>
                          ))}
                        </Stepper>

                        {/* <Tracker></Tracker> */}
                        {/* <Stepper activeStep={activeStep} orientation="vertical">

                  </Stepper> */}
                      </Card>
                    </Box>
                  </FlexGrid.Col>
                  <FlexGrid.Col horizontalAlign="right" md={3}>
                    <Box vertical={4}>
                      <FlexGrid.Row>
                        {/* <FlexGrid.Col xs={12} md={3}> */}
                        <Card variant="defaultWithBorder">
                          <Box between={3}>
                            <Heading level="h3">
                              Request placed on June 10, 2021
                            </Heading>
                            <Paragraph>
                              <b>Updated</b> 3days ago
                            </Paragraph>
                            <Paragraph>
                              <b>State</b> Closed
                            </Paragraph>
                            <Paragraph>
                              <b>Priority</b> 4-Low
                            </Paragraph>
                            <CalloutParagraph roundedCorners>
                              Attachments{" "}
                            </CalloutParagraph>
                            <Link href="#" direction="left">
                              connection-issue.jpg
                            </Link>
                            <Link href="#" direction="left">
                              connection-issue2.jpg
                            </Link>
                            <CalloutParagraph roundedCorners>
                              Request Summary
                            </CalloutParagraph>
                          </Box>
                        </Card>
                        {/* </FlexGrid.Col> */}
                      </FlexGrid.Row>
                    </Box>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              {/* </FlexGrid> */}

      </FlexGrid>

    </>
  );
};

export default Cases;

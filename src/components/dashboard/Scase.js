import React from "react";
import Heading from "@tds/core-heading";
import Breadcrumbs from "@tds/core-breadcrumbs";
import ChevronLink from "@tds/core-chevron-link";
import Input from "@tds/core-input";
import Button from "@tds/core-button";
import Small from "@tds/core-small";
import Box from "@tds/core-box";
import HairlineDivider from "@tds/core-hairline-divider";
import Select from "@tds/core-select";
import FlexGrid from "@tds/core-flex-grid";
import InputGroup from '@tds/community-input-group';
import TextArea from "@tds/core-text-area";
import Link from "@tds/core-link";
import Text from "@tds/core-text";
import Paragraph from "@tds/core-paragraph";
// import Input from '@tds/core-input'

import './cases.scss';

const Scase = () => {
  return (
    <>
    
      <FlexGrid limitWidth={false}>
      <div className="submit-cases">
        <Breadcrumbs baseUrl="http://localhost:9000/">
          <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/">Service Catalogue</Breadcrumbs.Item>
          <Breadcrumbs.Item href="/">Submit New Cases </Breadcrumbs.Item>
        </Breadcrumbs>
    </div>
        <ChevronLink href="#" direction="left">
          Back
        </ChevronLink>
        {/* <Heading level="h2"></Heading> */}
        <Paragraph>
          <Heading level="h2">Submit a new case</Heading>
          {/* </Text> */}

          <Text size="small">Use a form below to submit your issue</Text>
        </Paragraph>
        {/* <Small>Use a form below to submit your issue</Small> */}

        <Box between={4}>
          <HairlineDivider />
        </Box>

        <Small horizontalAlign="left">*Fields with asterisks are mandatory</Small>
        <br />
        <FlexGrid>
          <FlexGrid.Row>
            <FlexGrid.Col horizontalAlign={{ xs: "center", md: "left" }} md={5}>
              <Box vertical={2}>
                <Select
                  label="I'm having trouble with my"
                  placeholder="Please select..."
                  options={[
                    {
                      text: "John Smith",
                      options: [
                        { text: "John", value: "John" },
                        { text: "John", value: "John" },
                      ],
                    },
                    {
                      text: "Abriti ",
                      options: [
                        { text: " abriti", value: "abriti" },
                        { text: "ab", value: "ab" },
                      ],
                    },
                  ]}
                />
              </Box>
            </FlexGrid.Col>
            <FlexGrid.Col horizontalAlign="right" md={5}>
              <Box vertical={2}>
                <Select
                  vertical={2}
                  label="Scope of issues"
                  placeholder="Please select..."
                  options={[
                    {
                      text: "John Smith",
                      options: [
                        { text: "John", value: "John" },
                        { text: "John", value: "John" },
                      ],
                    },
                    {
                      text: "Abriti ",
                      options: [
                        { text: " abriti", value: "abriti" },
                        { text: "ab", value: "ab" },
                      ],
                    },
                  ]}
                />
              </Box>
            </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>

          <FlexGrid.Col md={10}>
            <Input label="Short Description*" type="text"/>
          </FlexGrid.Col>
          </FlexGrid.Row>
          <FlexGrid.Row>

          <FlexGrid.Col md={10}>
            <TextArea label="Please describe your issue *" />
          </FlexGrid.Col>
          </FlexGrid.Row>

          <FlexGrid.Col horizontalAlign="left">
            <Box vertical={2}>
              <Button>Submit Case</Button>
            </Box>
          </FlexGrid.Col>
        </FlexGrid>
      </FlexGrid>
    </>
  );
};

export default Scase;

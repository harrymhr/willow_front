import React from "react";
import Pagination from '@tds/community-pagination'
import Paragraph from '@tds/core-paragraph'
import FlexGrid from '@tds/core-flex-grid'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { SearchBold } from '@tds/core-interactive-icon'


import './table.scss'

const CustomTable = ({head, data, pagination}) => {
    return (
        <>{data && data.length ? (
            <>
            <table>
                <thead>
                    <tr>
                        {
                            head&& head.map((header, index)=>{
                                return (<th key={`${header}_${index}}`}>{header}</th>)
                            })
                        }
                        
                    </tr>
                </thead>
                <tbody>
                        {
                            data&& data.map((item, index)=>{
                                return(<tr>
                                    {Object.keys(item).map((key)=>{
                                        return(<td key={`${item[key]}_${index}`}>{item[key]}</td>)
                                    })}
                                </tr>
                                )
                            })
                        }
                    <tr>
                        
                    </tr>
                </tbody>
            </table>
            
            {pagination && (
                <FlexGrid.Row horizontalAlign="end">
                <Pagination copy="en">
                        <Pagination.Panel></Pagination.Panel>
                        <Pagination.Panel></Pagination.Panel>
                        <Pagination.Panel></Pagination.Panel>
                    </Pagination>
                </FlexGrid.Row>
            )}
        </>
         )
         : 
             <>
             <div className="no-data-message">
                     <div><SearchBold copy="en" size={'48'}/></div>
                 <Paragraph block={true}>Currently, you have no open requests.</Paragraph>
                 
             </div>
             </>
            }
        </>
            
    )
}

export default CustomTable;
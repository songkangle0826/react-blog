/*
* 内容区域
* */
import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

function ContentArea(props){
    return(
        <div className="app-contentarea">
            <Collapse accordion>
                {
                    props.contentList.map((item)=>{
                        return (
                            <Panel header={ item.header } key={ item.id }>
                                {/* dangerouslySetInnerHTML={{ __html: value.content }}react中将带标签的字符串转义为html解析==相当于vue中的v-html */}
                                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                            </Panel>
                        )
                    })
                }
            </Collapse>
        </div>
    )
}

export default ContentArea;
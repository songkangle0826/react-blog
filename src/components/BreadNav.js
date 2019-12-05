import React from 'react';
import { Breadcrumb } from 'antd';

// 导航
function BreadNav(props){
    console.log(props)
    return(
        <div className="app-breadnav">
            <Breadcrumb>
                {
                    props.breadNav.map((item)=>{
                        return <Breadcrumb.Item key={ item }>{ item }</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        </div>
    )
}

export default BreadNav;
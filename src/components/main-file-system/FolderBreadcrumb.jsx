import React from "react";

import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../../hooks/useFolder";

export default function FolderBreadcrumb({currentFolder}){

    if(!currentFolder)return;

    let path = (currentFolder===ROOT_FOLDER)?[]:[ROOT_FOLDER];

   

    if(currentFolder)path = [...path,...currentFolder.path];

    

    return (


        <Breadcrumb
            className="flex-grow-1 "
            listProps={{ className: "  m-0 w-75" }}
        >
            {

                path.map((folder,index)=>(

                    <Breadcrumb.Item
                        className="text-truncate d-inline-block link"
                        style={{ maxWidth: "150px"  }}
                        linkAs={Link}
                        linkProps={{
                            to:folder.id ? `/folder/${folder.id}`:"/drive"
                        }}
                        key={index}
                    >
                        {folder.name}
                        

                    </Breadcrumb.Item>

                    
                ))
            }
            {

                currentFolder

                    ?

                    <Breadcrumb.Item
                        className="text-truncate d-inline-block"
                        style={{ maxWidth: "200px" }}
                        active
                    >

                        {currentFolder.name}

                    </Breadcrumb.Item>

                    :

                    <></>
            }

        </Breadcrumb>
    )
}
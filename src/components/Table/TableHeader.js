import { useState } from "react";
import { PropertyShort } from "../PropertyShort/PropertyShort";
import {Short} from "../Short/Short";
import { styled,FormControl,Box, InputLabel, MenuItem, Select, Button } from "@mui/material";
import { CustomCaretIcon } from "../Caret/Caret";
import { ModalComponent } from "../Modal/ModalComponent";
import { FigmaModal } from "../Modal";
export const TableHeader=()=>{
 
  const [page, setPage] = useState('');
  const paginate = [
    "승인완료","승인거부"
  ]
  const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    '&:hover': {
      backgroundColor: '#2A3958',
      color: 'white',
    },
  }));
  const CustomSelectBox = styled(Select)(({ theme }) => ({
    padding: '5px',
    '& .MuiSelect-select': {
      padding: '5px',
    },
  }));
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="tableHeader">
     {/* <FigmaModal property1='default'/> */}
      <ModalComponent title="add new" open={openModal}  onClose={()=> setOpenModal(false)}>
        </ModalComponent>
    <div className="frame-16">
    <div className="frame-17">
      <Button onClick={()=>setOpenModal(true)}>
      <Short className="short-instance" divClassName="short-button1-default" text="등록" />
      </Button>
      </div>

    
  </div>
    <div className="frame-16">
    <div className="text-wrapper-21">선택한 0건</div>
    <div className="frame-17">
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">승인상태 변경</InputLabel>
    <CustomSelectBox
           
            value={page}
            className=" property-short"
            onChange={(e)=> setPage(e.target.value)}
            
            IconComponent={CustomCaretIcon}
          >
              {paginate.map((actions, index)=>
              {
                return(
                <CustomMenuItem key={index}  value={actions}>
                    {actions}
                  </CustomMenuItem>
              )}
            )}
    </CustomSelectBox>
    </FormControl></Box>
      <Short className="short-instance" divClassName="short-button1-default" text="저장" />
    </div>
  </div>
  </div>
  )
}
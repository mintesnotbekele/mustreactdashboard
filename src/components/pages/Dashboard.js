/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React, { useState } from "react";
import { DoubleChevronLeft } from "../../icons/DoubleChevronLeft";
import { DoubleChevronRight1 } from "../../icons/DoubleChevronRight1";
import { ArrowChevronLeft } from "../ArrowChevronLeft";
import { ArrowChevronRight } from "../ArrowChevronRight";
import { Basic } from "../Basic";
import { ButtonMaster } from "../ButtonMaster";
import { Checkbox } from "../Checkbox";
import { PropertyEnabled } from "../PropertyEnabled";
import { PropertyShort } from "../PropertyShort";
import { Scroll } from "../Scroll";
import { Short } from "../Short";
import "../../index.css";
import CustomizedTables from "../Table/TableBody";
import { TableHeader } from "../Table/TableHeader";
import { Box, FormControl, InputLabel, MenuItem, Select, styled } from "@mui/material";
import { CustomCaretIcon } from "../Caret/Caret";

export const Dashboard = () => {
  const statusActions = [
    "승인여부 전체","승인대기","승인완료","승인거부"
  ]
  const filters = [
    "신청일시순","승인일시순"
  ]
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
 const [status, setStatus] = useState('');
 const [select, setSelect] = useState('');
 const [page, setPage] = useState('');
 
 const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="div-wrapper">
      
        <div className="group">
        <div className="frame-wrapper">
          <div className="frame-18">
            <div className="frame-19">
              <div className="text-wrapper-22">회원상세</div>
              <div className="group-2">
                <div className="must" />
                <div className="text-wrapper-23">필수항목</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tabs">
          <div className="tab">
            <div className="text-wrapper-24">기본정보 관리</div>
          </div>
          <div className="tab-2">
            <div className="text-wrapper-25">투자유형 관리</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">입출금내역 조회</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">영업내역 조회</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">투자내역 조회</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">채권내역 조회</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">SMS 관리</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">상담내역 관리</div>
          </div>
          <div className="tab">
            <div className="text-wrapper-24">1:1문의내역 조회</div>
          </div>
        </div>
      </div>
      <div className="frame">
        <div className="frame-2">
          <div className="text-wrapper">
            신청 목록
            </div>
          <p className="element">
            <span className="span">(총 100명 | 승인대기</span>
           
            <span className="text-wrapper-3">1</span>
            <span className="span">건)</span>
          </p>
        </div>
        <div className="frame-3">
        <Box sx={{ minWidth: 120 }}>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Action</InputLabel>
        <CustomSelectBox
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="Action"
          onChange={handleChange}
        >
          {statusActions.map(actions=>
              {
                return(
                <MenuItem  value={actions}>
                    {actions}
                  </MenuItem>
              )}
            )}
           <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> 
        </CustomSelectBox>
      </FormControl> */}
    </Box>
    {/* <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel  id="demo-simple-select-label">승인여부 전체</InputLabel>
        <CustomSelectBox
            fullWidth
             style={{minWidth: '150px'}}
            value={status}
            className="property-short"
           
            label="Actions"
            onChange={(e)=> setStatus(e.target.value)}
            IconComponent={CustomCaretIcon}
          >
            <div  style={{borderRadius: "30px"}}  >
              {statusActions.map((actions, index)=>
              {
                return(
                <CustomMenuItem  key={index}   value={actions}>
                    {actions}
                  </CustomMenuItem>
              )}
              
            )}
            </div>
    </CustomSelectBox>
    </FormControl>
    </Box> */}
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">50개씩 보기</InputLabel>
    <CustomSelectBox
    style={{minWidth: '150px'}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            className=" property-short"
            onChange={(e)=> setStatus(e.target.value)}
            label="Actions"
       
            IconComponent={CustomCaretIcon}
          >
              {statusActions.map((actions, index)=>
              {
                return(
                <CustomMenuItem key={index}  value={actions}>
                    {actions}
                  </CustomMenuItem>
              )}
            )}
    </CustomSelectBox>
    
   </FormControl>
   </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel >신청일시순</InputLabel>
       <CustomSelectBox
          style={{minWidth: '150px'}}
            value={select}
            className="property-short"
            label="Actions"
            onChange={(e)=> setSelect(e.target.value)}
            IconComponent={CustomCaretIcon}
          >
              {filters.map((actions, index)=>
              {
                return(
                <CustomMenuItem key={index}  value={actions}>
                    {actions}
                  </CustomMenuItem>
              )}
            )}
    </CustomSelectBox>
    </FormControl>
    </Box>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">50개씩 보기</InputLabel>
    <CustomSelectBox
    
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={page}
            className=" property-short"
            onChange={(e)=> setPage(e.target.value)}
            label="Actions"
       
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
    
   </FormControl>
   </Box>
        </div>
      </div>
      <hr/>
      <TableHeader/>
      <CustomizedTables/>

      <div className="overlap">
       
        <div className="table-pagination">
          <div className="pagination">
            <div className="frame-14">
              <div className="button-master-wrapper">
                <div className="button-master-2">
                  <DoubleChevronLeft className="icon-instance-node" color="#9599A1" />
                </div>
              </div>
              <div className="button-master-wrapper">
                <div className="button-master-2">
                  <ArrowChevronLeft className="arrow-chevron-left-instance" />
                </div>
              </div>
            </div>
            <button className="button-2">
              <div className="button-master-3">
                <div className="regular-2">1</div>
              </div>
            </button>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-4" text="2" />
            </div>
            <button className="button-2">
              <div className="button-master-5">
                <div className="regular-3">3</div>
              </div>
            </button>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-6" text="4" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-6" text="5" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-6" text="6" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-4" text="7" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-6" text="8" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-6" text="9" />
            </div>
            <div className="button-master-wrapper">
              <ButtonMaster className="button-master-instance" regularClassName="button-master-7" text="10" />
            </div>
            <div className="frame-15">
              <div className="button-3">
                <div className="button-master-8">
                  <ArrowChevronRight className="arrow-chevron-right-instance" />
                </div>
              </div>
              <div className="button-master-wrapper">
                <div className="button-master-2">
                  <DoubleChevronRight1 className="icon-instance-node" color="#9599A1" />
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    
    
    
    </div>
  );
};

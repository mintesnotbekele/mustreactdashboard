import { PropertyShort } from "./PropertyShort";

export const Filters=()=>{
  return  <div className="filters">
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
          <PropertyShort
            className="component"
            text="승인여부 전체"
            vector="https://c.animaapp.com/hVax0Mf7/img/vector-5.svg"
          />
          <PropertyShort
            className="component"
            text="신청일시순"
            vector="https://c.animaapp.com/hVax0Mf7/img/vector-6.svg"
          />
          <PropertyShort
            className="component"
            text="50개씩 보기"
            vector="https://c.animaapp.com/hVax0Mf7/img/vector-7.svg"
          />
        </div>
      </div>;
}


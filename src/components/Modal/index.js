import PropTypes from "prop-types";
import React from "react";
import { Component } from "./Component";
import { ModalIcon } from "./ModalIcon";
import "./style.css";
import xclose from './x-close.svg';
export const FigmaModal = ({ property1 }) => {
  return (
    <div className="modal">
      <div className="modal-header">
        <div className="content">
          <ModalIcon
            property1={property1 === "variant-6" ? "completed" : "alert"}
            propertyAlertClassName={`${property1 === "variant-6" ? "class" : "class-2"}`}
          />
          <div className="text-and-supporting">
            <div className={`text ${property1}`}>
              {property1 === "default" && <>최대 10개까지 등록 가능합니다. 파일 등록에 실패하였습니다.</>}

              {property1 === "variant-5" && <>투자유형을 변경하시겠습니까?</>}

              {property1 === "variant-6" && <>저장되었습니다.</>}

              {property1 === "variant-7" && <>필수입력항목을 입력해주세요.</>}

              {property1 === "default" && (
                <>
                  <p className="p">jpg, jpeg, gif, png, pdf 파일만 등록 가능합니다.</p>
                  최대 100MB까지 등록 가능합니다.
                </>
              )}
            </div>
          </div>
        </div>
        <div className="button-close-x">
          <img className="x-close" alt="X close" src={xclose} />
        </div>
      </div>
      <div className="modal-actions">
        <div className={`div property-1-${property1}`}>
          {["default", "variant-6", "variant-7"].includes(property1) && <Component className="component-2" />}

          {property1 === "variant-5" && (
            <>
              <Component />
              <div className="button-wrapper">
                <button className="text-wrapper">취소</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

FigmaModal.propTypes = {
  property1: PropTypes.oneOf(["variant-5", "variant-7", "variant-6", "default"]),
};
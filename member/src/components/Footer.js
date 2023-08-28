import React from 'react';
import ModalStyle from './modal/usemodalcomponent.module.css';
import Resetcss from './modal/resetcss.css';

export default function Footer() {

  return (

    <div id='wrapper'>
    <footer className={footerstyle.footerstyle}>
      <img id="logo" src="../plane_airplane_icon.png" width="150px;" height="150px"></img>
        <h5 className={footertextstyle.footertextstyle}>
          경기도 성남시 수정수 대왕판교로 815 판교제2테크노밸리 기업지원허브 1층 메타버스 아카데미
          <br/>
          <br/>
          TEL : 02-317-6144 / FAX : 02-317-6062 
          <br/>
          <br/>
          Copyright(C)Team Sleep After Die all rights reserved.
        </h5>
    </footer>

    </div>
)
};

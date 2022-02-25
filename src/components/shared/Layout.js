import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, { useState } from 'react';


function Layout({ children, activeMenu }) {

  const [state, setState] = useState(true);

//  function changeState() {
//    if (state == true) {
//      setState(false);
//    }
//    else {
//      setState(true);
//    }
//  }

// useState, useEffect는 항상 실행하는 순서가 동일해야함
// 조건문이나 반복문을 사용하면 실행순서가 바뀔 수 있어 예상치 못한 오류를 야기

  function changeState() {
    setState((state) => !state);
  }

  return (
    <div className={styles.container}>
      <Header changeState={changeState} />
      <div className={styles.layout}>
        <Menu activeMenu={activeMenu} statement={state}/>
        <div className={state === true ? styles.contents : styles.contents_fold}>{children}</div>
      </div>
    </div>
  );
}


export default Layout;

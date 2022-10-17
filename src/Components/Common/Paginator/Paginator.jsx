import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';
import styled from "styled-components";


let Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  

  let portionCount = Math.ceil(pagesCount/portionSize)
  let[portionNumber,setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber-1)*portionSize +1
  let rightPortionNumber = portionNumber*portionSize 

  return <div className={styles.paginator}>
  {portionNumber>1 &&
  <PaginatorButton onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</PaginatorButton>}
      {pages.filter((p) =>p>= leftPortionNumber && p<=rightPortionNumber)
            .map ((p)=> {
        return <span
            className={cn ({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}
            key={p}
            onClick={(e) => {
              e.preventDefault()
              onPageChanged(p);
            }}> {p} </span>  
      })}
      {portionCount > portionNumber && 
        <PaginatorButton onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</PaginatorButton>}
    </div>
};

export const PaginatorButton = styled.button`
    background-color: aliceblue;
    font-size: large;
    border-radius: 5px;
    border: 2px solid rgb(214, 117, 43);
    cursor: pointer;
`;

export default Paginator;



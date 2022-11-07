import React, { useState, FC } from "react";
import styles from "./Paginator.module.css";
import cn from 'classnames';
import styled from "styled-components";

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanged:(pageNumber:number)=>void
  portionSize?: number,
}

const Paginator: FC<PropsType> = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10,
}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  

  let portionCount = Math.ceil(pagesCount/portionSize)
  let[portionNumber,setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber-1)*portionSize +1
  let rightPortionNumber = portionNumber*portionSize 

  return <div className={styles.paginator}>
  {portionNumber > 1 &&
  <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
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
        <button onClick={()=>{setPortionNumber(portionNumber+1)}}>NEXT</button>}
    </div>
};

export const PaginatorButton = styled.button`
    background-color: aliceblue;
    font-size: large;
    border-radius: 5px;
    border: 2px solid rgb(214, 117, 43);
    cursor: pointer;
`;


/*  */
//className={cn ({[styles.selectedPage]: currentPage === p}, styles.pageNumber)}

export default Paginator;




/* const PageNumber = styled.span`
  background-color: aliceblue;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  padding-left: 3px;
  margin: 5px;
  border: 2px solid rgb(111, 96, 222);
  `;

  const selectedPage = (PageNumber:any)=>styled.span`
  cursor: pointer;
    font-weight: bold;
    border-color: black;
    background-color: yellowgreen;
    pointer-events: none;
  `;

  const PaginatorContainer = styled.div`
  margin: 10px;
  `; */

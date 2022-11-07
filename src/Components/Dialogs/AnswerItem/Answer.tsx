import React, {FC} from 'react';

type  AnswerType = {
  answer: string
  key: number
}

const Answer: FC<AnswerType> = ({answer}) => <div> {answer} </div>;


export default Answer;
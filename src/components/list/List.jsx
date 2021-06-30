import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';
import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import ListItem from '../listItem/ListItem';
import './list.scss';

const List = () => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === 'left' && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === 'right' && slideNumber < 3) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    // console.log(distance);
  };

  return (
    <div className='list'>
      <span className='listTitle'>Continue to watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick('left')}
          style={{ display: !isMoved && 'none' }}
        />
        <div className='container' ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
};

export default List;
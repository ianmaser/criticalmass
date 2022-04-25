import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import navigation from './assets/navigation.json';

const Navbar = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
`;

const NavItem = styled.li`
  align-items: center;
  flex: 1;
  justify-content: center;
`;

const NavLink = styled.a`
  color: ${({active}) => active ? 'black' : 'gray'};
  display: inline-block;
  position: relative;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: ${({active}) => active ? 'black' : 'blue'};
  }
`;

const NavLine = styled.hr`
  background-color: black;
  height: 2px;
  margin: 0;
  position: absolute;
  left: ${({ left }) => `${left}px`};
  width: ${({ lineWidth }) => `${lineWidth}px`};
  transition: left 400ms, width 300ms;
`;

const StyledLine = styled.hr`
  background-color: lightgray;
  height: 2px;
  margin: 0;
  width: 100%;
`;

const TimeWrapper = styled.div`
  margin-top: 40px;
  align-items: center;
  border: 5px black solid;
  display: flex;
  justify-content: center;
  padding: 10px 20px; 
`;

const TimeDisplay = styled.h1`
  font-size: 50px;
`;

const App = () => {
  const [left, setLeft] = useState(0);
  const [lineWidth, setLineWidth] = useState();
  const [active, setActive] = useState(0);
  const [date, setDate] = useState(new Date())
  const refs = useRef([]);

  const tick = () => setDate(new Date());

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);

    return function cleanup() { 
      clearInterval(timerId);
    };
  });

  const handleClick = (index) => {
    const currentEl = refs.current[index].getBoundingClientRect();
    setLeft(currentEl.left);
    setLineWidth(currentEl.width);
    setActive(index);
  }

  const currentTime = date.toLocaleString("en-US", { timeZone: navigation.cities[active].timeZone})

  return (
    <div className="App" style={{ position: 'relative'}}>
      <Navbar>
        {navigation.cities.map((item, index) => {
          return (
            <NavItem key={`Nav item-${index}`}>
              <NavLink
                active={active === index}
                href={`#${item?.section}`}
                onClick={() => handleClick(index)} 
                ref={(el) => refs.current[index] = el}
              >
                {item.label}
              </NavLink>
            </NavItem>
          );
        })}
      </Navbar>
      <NavLine left={left} lineWidth={lineWidth} />
      <StyledLine />
      <TimeWrapper>
        <TimeDisplay>
          {currentTime}
        </TimeDisplay>
      </TimeWrapper>
    </div>
  );
}

export default App;
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import navigation from './assets/navigation.json';

const Navbar = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  justify-content: center;
  align-items: center;
`;


const NavItem = styled.li`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  display: inline-block;
  position: relative;
  color: gray;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: blue;
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
`

const StyledLine = styled.hr`
  background-color: lightgray;
  height: 2px;
  margin: 0;
  width: 100%;
`

const App = () => {
  const [left, setLeft] = useState(0);
  const [lineWidth, setLineWidth] = useState();
  const refs = useRef([]);

  const handleClick = (index) => {
    const currentEl = refs.current[index].getBoundingClientRect();
    setLeft(currentEl.left - 8);
    setLineWidth(currentEl.width + 8);
    console.log(refs.current[index].getBoundingClientRect());
  }

  return (
    <div className="App" style={{ position: 'relative'}}>
      <Navbar>
        {navigation.cities.map((item, index) => {
          return (
            <NavItem key={`Nav item-${index}`}>
              <NavLink
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
    </div>
  );
}

export default App;
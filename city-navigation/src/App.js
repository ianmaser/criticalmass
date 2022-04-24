import styled from 'styled-components';
import navigation from './assets/navigation.json';
import './App.css';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Navigation = styled.ul`
  display: flex;
  list-style-type: none;
  width: 100%;
  background-color: red;
  flex-direction: row;
  height: 50px;
`;

const NavItem = styled.li`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NavLink = styled.a`
  display: block;
  color: gray;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

function App() {
  console.log('navigation', navigation);
  return (
    <PageWrapper>
      <Navigation> 
        {navigation.cities.map((item, index) => {
          return (
          <NavItem>
            <NavLink href={`#${item?.section}`}>{item.label}</NavLink> 
          </NavItem>
        );
        })}
      </Navigation>
    </PageWrapper>
  );
}

export default App;

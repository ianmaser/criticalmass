import styled from 'styled-components';
import navigation from './assets/navigation.json';
import './App.css';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Navigation = styled.ul`
  display: flex;
  width: 100%;
  background-color: red;
  flex-direction: row;
`;

function App() {
  console.log('navigation', navigation);
  return (
    <PageWrapper>
      <Navigation />
    </PageWrapper>
  );
}

export default App;

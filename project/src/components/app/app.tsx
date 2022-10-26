import MainPage from '../../pages/main-page/main-page';

type AppScreenProps = {
  cardsCount: number;
}

function App(props: AppScreenProps): JSX.Element {
  return (
    <MainPage cardsCount={props.cardsCount}/>
  );
}

export default App;

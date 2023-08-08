import Header from './component/Header/Header';
import classes from './app.module.scss'
import './sass/DefoultStyle.css'
import Main from './component/Main/Main';

function App() {
  return (
    <div className={classes.wrapper}>

			{/* блок хедер */}
			<Header />
      
			{/* мейн блок */}
			<Main />

    </div>
  );
}

export default App;

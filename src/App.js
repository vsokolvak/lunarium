import Header from './component/Header/Header';
import classes from './app.module.scss'
import './sass/DefoultStyle.css'
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import Order from './component/Order/Index';

function App() {
  return (
    <div className={classes.wrapper}>
		<Routes>
			<Route path='/*' 
			element={
			<div> 
				{/* блок хедер */}
				<Header />
		  
				{/* мейн блок */}
				<Main />

				{/* футер */}
				<Footer /> 
			</div>} />
			
			<Route path='/order' element={<Order />} />
		</Routes>
    </div>
  );
}

export default App;

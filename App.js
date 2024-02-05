import './App.css';
import {Container} from 'react-bootstrap'
import Navbars from './component/Navbar';
import Header from './component/header';
import Category from './component/Category';
import CardList from './component/Card';
import {item} from './component/data';
import { useState } from 'react';

function App() {
  const [itemData , setItemData]=useState(item);
// get all category unique .
  const allCategory=[...new Set(item.map((i)=>i.category)),"All"]
  console.log(allCategory);

  // filter by category .
  const filterByCategory=(cat)=>{
    if(cat ==="All"){
      setItemData(item);
    }else{

      const newarr=item.filter((i)=> i.category ===cat)
      setItemData(newarr);
    }
    }
  // filter by  Search .
  const filterBySearch=(word)=>{
    if(word !== ""){
      const newarr=item.filter((i)=> i.title ===word)
      setItemData(newarr);

    }
  }

  return (
    <div className='body'>

      <Navbars filterBySearch={filterBySearch}/>
      <Container>

      <Header/>
      <Category filterByCategory={filterByCategory} allCategory={allCategory}/>
      <CardList itemData={itemData} />
      </Container>
    </div>
    
  );
}

export default App;

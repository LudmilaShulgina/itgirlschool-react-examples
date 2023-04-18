import {useState} from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState()

  const handleClickLink = (e)=> {
    e.preventDefault()
    setPage(e.target.dataset["number"])
  }


  return (
    <>
      <header>Header</header>
      <main>
        <div>
          <h5>Menu</h5>
          <ol>
            <li><a href={'/'} data-number={1} onClick={handleClickLink}>Page 1</a></li>
            <li><a href={'/'} data-number={2} onClick={handleClickLink}>Page 2</a></li>
            <li><a href={'/'} data-number={3} onClick={handleClickLink}>Page 3</a></li>
          </ol>
        </div>
        {page &&
        <div>
          <h1>Page {page}</h1>
        </div>
        }

      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;

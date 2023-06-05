import { useRef, useState, useEffect } from 'react'
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState('');
  const [result, setResult] = useState('')
  const fileInputRef = useRef();//pick dom element from virtual dom
  //document.getElementById("ff"); access actual dom
  const onUploadClick = () => {
    fileInputRef.current.click();//current is a property of fileInputRef object & has input element
    //and has access to click event
  };//route choose file on button click and .current has dom element on click routed
  const logo = 'https://cwpwp2.betterthanpaper.com/wp-content/uploads/2020/03/mobile-money-transfer-724x445.jpg';

  useEffect(() => {
    const getImage = async () => {
      if (file) {//on mounting file will be empty
        const data = new FormData();//FormData constructor creates a new FormData object
        data.append("name", file.name);//key value pairs
        data.append("file", file);//actual binary file
        let response = await uploadFile(data);//call api
        // console.log("lll",response)
        setResult(response.path)
      }
    }
    getImage();
  }, [file])//change when value of file changes/ not componentDidMount but componentDidUpdate

  return (
    <div className="container">
      <img src={logo} alt="banner" />
      <div className="wrapper">
        <h1>File Upload & Share Services</h1>
        <h1>Share only 1 file for free!!!</h1>
        <p>Please upload your file and share the link to friends !</p>
        <button onClick={() => { onUploadClick() }}>Upload </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => { setFile(e.target.files[0]) }}//e.target.value /files are array
        >
        </input>
        <span>Copy or Click the link below to download :</span>  <a href={result} >{result}</a>
       <p style={{ marginTop: 85,color:'blue' }}>Copyright &copy; 2023 | @R@J | All Rights Reserved</p>
      </div>
    </div>
  );
}

export default App;
//fshare>npx create-react-app client
//server>npm init -y (default yes)
//server>npm i express
//client>npm i axios
//server>npm i --save-dev nodemon
//server>npm i cors : to resolve diff ports and servers
//server>npm i mongoose
//server>npm i multer


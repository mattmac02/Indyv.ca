// import React, { useState } from 'react';

// function App() {
//   const [file, setFile] = useState(null);
//   const [sections, setSections] = useState([]);

//   const onFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const uploadFile = async () => {
//     if (!file) {
//       console.error('No file selected.');
//       return;
//     }

//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       const response = await fetch('http://127.0.0.1:5000/upload', {
//         method: 'POST',
//         body: formData,
//       });

//       if (response.ok) {
//         const data = await response.json();
//         if (data.sections) {
//           setSections(Object.entries(data.sections));
//         }
//       } else {
//         console.error('Error uploading file:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <input type="file" onChange={onFileChange} />
//       <button onClick={uploadFile}>Upload</button>
//       <div>
//         {sections.map(([title, data], index) => (
//           <div key={index}>
//             <h2>{title}</h2>
//             <p>{data}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [text, setText] = useState('');
  
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) {
      console.error('No file selected.');
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Add this line to see the data received
        if (data.gpt3_response) {
          console.log(data.gpt3_response)
          setText(data.gpt3_response);
        }
      } else {
        console.error('Error uploading file:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  return (
    <div className="App">
      <input type="file" onChange={onFileChange} />
      <button onClick={uploadFile}>Upload</button>
      <div>
        <h2>Extracted Text</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;

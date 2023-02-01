import React, { useState, useEffect } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/users';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <table style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead style={{ backgroundColor: '#f2f2f2' }}>
        <tr>
          <th style={{ border: '1px solid black', padding: '8px' }}>Nome</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Telefone</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>E-mail</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Data de Nascimento</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Cidade de Nascimento</th>
          <th style={{ border: '1px solid black', padding: '8px' }}>Empresas</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.name}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.telefone}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.dataDeNascimento}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.cidadeDeNascimento}</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>{item.empresas}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;

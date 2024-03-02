const RegisterInfo = () => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    return (
      <div>
        <h2>Registration Info</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user ? user.name : 'No data'}</td>
              <td>{user ? user.email : 'No data'}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
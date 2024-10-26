// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Feature from './components/Feature';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Feature
            title="Create an account with the platform"
            image="signup.png"
            description="Sign up with an email and password to create an account with fileferry."
          />
          <Feature
            title="Login to your account"
            image="login.png"
            description="After successfull registration and login in with the credentials used above."
          />
          <Feature
            title="Create a file or a folder"
            image="create.png"
            description="You will then get access to the create file/folder rights. You can also customize other attributes of the creation."
          />
          <Feature
            title="View and manage your files and folders"
            image="file-dash.png"
            description="This is the dashboard where you can view all the files you have created. You can add more files/folders."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header.jsx';
import StudentList from './components/StudentList.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="app">
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

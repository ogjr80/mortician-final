const Footer = () => {
    return (
      <footer className="bg-blue-500 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          &copy; {new Date().getFullYear()} Morgue Management System. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
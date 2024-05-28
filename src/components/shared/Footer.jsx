import logo from '../../assets/logo.png'


const Footer = () => {
    return (
        <footer className="footer mt-8 p-10 bg-slate-900 text-white">
        <div>
        <img className="w-[100px]  h-[40px]" src={logo} alt="logo"/>
          <p>Sport Verse Industries Ltd.<br/>Providing reliable Sports Jersey since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Jerseys</span> 
          <a className="link link-hover">EPl Jersey</a> 
          <a className="link link-hover">Laliga Jersey</a> 
          <a className="link link-hover">IPL Jersey</a> 
          <a className="link link-hover">Testimonial</a>
        </div> 
        <div>
          <span className="footer-title">Jersey Verse</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">All Jersey</a> 
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Copyright © Jersey Verse - All right reserved</a>
        </div>
      </footer>
    );
};

export default Footer;
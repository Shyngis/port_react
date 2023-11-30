import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const navlink =[
  {
    url:'/',
    text:'Home'
  },
  {
    url:'/about',
    text:"About"
  },
  {
    url:"/services",
    text:"Services"
  },
  {
    url:"/portfolio",
    text:"Portfolio"
  }

]

export const home =[
  {
    text: "HELLO I'M",
    name: "Shyngys Khan",
    post: "Frontend developer",
    desc: "I'm open to new opportunities",
  }

]

export const about = [
  {
    desc:"I had studied at Eurasian national university ",
    desc1:"I want to work as a frontend developer",
    cover:"./images/man.png",
  }

]

export const services =[
{
    id: 1,
    icon: <HtmlIcon />,
    title: "Creative Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 2,
    icon: <CssIcon />,
    title: "Clean Code",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  },
  {
    id: 3,
    icon: <JavascriptIcon />,
    title: "Responsive Design",
    desc: "Lorem Ipsum simply text of the printing and type setting industry when an unknown printing simply",
  }
  
]

export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
]

export const social = [
  {
    icon: <WhatsAppIcon />,
    hr:"https://wa.link/a0ba65"
  },
  {
    icon: <TelegramIcon />,
    hr:"https://t.me/shyngysyerlanuly"
  },
  {
    icon: <EmailIcon />,
  },
  {
    icon: <InstagramIcon />,
    hr:"https://instagram.com/u.busy21?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
  },
  {
    icon: <GitHubIcon />,
    hr:"https://github.com/shyngis"
  },
  {
    icon: <LinkedInIcon />,
    hr:"https://www.linkedin.com/in/shyngys-burkitbay-361406267"
  },
]
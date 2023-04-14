import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GoogleIcon from '@mui/icons-material/Google';
import { PageContainer, PageWrap } from 'components/App.styled';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import TwitterIcon from '@mui/icons-material/Twitter';

export const Contact = () => {
  return (
    <PageWrap>
      <PageContainer>
        <h2 className="page-title">Contact</h2>
        <div className="title-divider"></div>
        <ul>
          <li className="list-item">
            <LocationOnIcon sx={{ color: '#ee6817', fontSize: 40 }} />
            <p>Kharkiv, Ukraine</p>
          </li>
          <li className="list-item">
            <CallIcon sx={{ color: '#ee6817', fontSize: 40 }} /> <br />
            <a href="tel:+380504030944"> +380 50 403 0944</a>
          </li>
          <li className="list-item">
            <EmailIcon sx={{ color: '#ee6817', fontSize: 40 }} /> <br />
            <a href="mailto:ikarkam76@gmail.com"> ikarkam76@gmail.com</a>
          </li>
          <li className="list-item">
            <TelegramIcon sx={{ color: '#ee6817', fontSize: 40 }} /> <br />
            <a href="https://t.me/Zhvetal" target="_blank" rel="noreferrer">
              t.me/Zhvetal
            </a>
          </li>
        </ul>
        <h3 className="page-subtitle">I`m also in social networks</h3>
        <div>
          <a
            href="https://github.com/ikarkam76"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <GitHubIcon
              sx={{
                fontSize: 30,
                color: '#171515',
                transitionProperty: 'transform',
              }}
              className="social-icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vitaliy-zhuravel/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <LinkedInIcon
              sx={{
                fontSize: 30,
                color: '#0072b1',
                transitionProperty: 'transform',
              }}
              className="social-icon"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UC385Me1_iiZm93CzvjAHNDg"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <YouTubeIcon
              sx={{
                fontSize: 30,
                color: '#FF0000',
                transitionProperty: 'transform',
              }}
              className="social-icon"
            />
          </a>
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <GoogleIcon
              sx={{
                fontSize: 30,
                color: '#df4a32',
                transitionProperty: 'transform',
              }}
              className="social-icon"
            />
          </a>
          {/* <a
          href="https://uk-ua.facebook.com/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <FacebookIcon sx={{ fontSize: 30, color: '#5a7eca', transitionProperty: 'transform' }} className='social-icon' />
        </a>
        <a
          href="https://twitter.com/?lang=uk"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <TwitterIcon sx={{ fontSize: 30, color: '#03acf1', transitionProperty: 'transform' }} className='social-icon' />
        </a> */}
        </div>
      </PageContainer>
    </PageWrap>
  );
};

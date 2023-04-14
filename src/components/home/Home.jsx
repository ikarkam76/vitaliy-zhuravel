import { HomeImg, HomeSubTitle, HomeTitle, HomeTitleContainer } from "./Home.styled";
import profile from '../../images/profile.jpg';
import { PageContainer } from "components/App.styled";


export const Home = () => {
    return (
      <PageContainer>
        <HomeImg src={profile} alt="profile foto" />
        <HomeTitleContainer>
          <HomeTitle>
            <span>Hello, I`m</span>
            <br />
            Vitaliy Zhuravel
          </HomeTitle>
          <HomeSubTitle>Frontehd / Backend developer</HomeSubTitle>
        </HomeTitleContainer>
      </PageContainer>
    );
};

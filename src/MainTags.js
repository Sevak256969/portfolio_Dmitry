import styled from "styled-components";

//Layout
export const LayoutDiv = styled.div`
  display: flex;
`;
export const AsideSection = styled.div`
  width: 30%;
  background: #202020;
  box-shadow: 5px 0px 15px rgba(5, 5, 5, 0.1);
  @media (max-width: 800px) {
    display: none;
  }
`;
export const MaineDiv = styled.div`
  width: 100%;
`;
//Aside
export const AsideDiv = styled.div`
  margin-bottom: 50px;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -50px 0 0 0;
`;
export const AsideImgONe = styled.img`
  width: 100%;
`;
export const AsideImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AsideImgTwo = styled.img`
  display: flex;
  position: relative;
  bottom: 56px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const AsideImgThree = styled.img`
  display: flex;
  position: relative;
  bottom: 69px;
`;
export const NameH1 = styled.h1`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: #ffffff;
`;
export const NameP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #dedede;
`;
export const NameUl = styled.ul`
  display: flex;
  gap: 15px;
`;
export const AsideTextDiv = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TextP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
export const TextBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px 0 0 0;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    align-items: center;
  }
`;
export const AOne = styled.a`
  padding: 10px 23px;
  background: #ed3024;
  box-shadow: 0px 7px 17px -10px rgba(242, 63, 63, 0.2);
  border-radius: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  border: none;
  text-decoration: none;
`;
export const ATwo = styled.a`
  padding: 10px 15px;
  background: #3137c9;
  box-shadow: 0px 7px 17px -10px rgba(32, 84, 219, 0.35);
  border-radius: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
//Header
export const Header1 = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background: #0d0d0d;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.25);
`;
export const NavAll = styled.nav`
  display: flex;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const Headerdiv = styled.header`
  display: flex;
  align-items: center;
`;
export const MenuDiv = styled.div`
  display: grid;
  gap: 8px;
  color: white;
`;
export const MenuMedia = styled.div`
  @media (max-width: 800px) {
    margin: 6px;
    align-self: flex-start;
  }
`;
export const NavUl = styled.ul`
  display: flex;
  text-transform: uppercase;
  gap: 23px;
  padding: 0 0 0 15px;
  @media (max-width: 800px) {
    display: none;
  }
`;
export const NavUlBar = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
export const NavLi = styled.ul`
  a {
    text-decoration: none;
    color: #ffffff;
  }
`;
export const MenuBtn = styled.button`
  border: none;
  background: none;
  color: white;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 13px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const InputHeader = styled.input`
  background: #202020;
  box-shadow: -7px 1px 10px rgba(0, 0, 0, 0.3);
  padding: 16px 30px;
  outline: none;
  color: white;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const InpSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    align-self: flex-start;
  }
`;
export const SearchBtn = styled.button`
  color: white;
  background: #202020;
  padding: 10px 20px;
  box-shadow: -7px 1px 10px rgba(0, 0, 0, 0.3);
  @media (max-width: 800px) {
  }
`;
//Pages
//Home
export const SectionMain = styled.section`
  width: 85%;
  margin: 50px auto;
`;
export const HomeindexDiv = styled.div`
  width: 90.7%;
  margin: auto;
`;
export const WidthDiv = styled.div`
  width: 89%;
  margin: 15px auto;
`;
//ImgSection
export const ImgSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DisplayDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SlideParent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 15px;
  @media (max-width: 800px) {
    display: flex;
  }
`;
export const SlideDiv = styled.div`
  @media (max-width: 1058px) {
    display: flex;
    justify-content: center;
  }
`;
export const ImgSectionP = styled.p`
  white-space: pre;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  display: flex;
  position: relative;
  top: -190px;
  left: 10px;
`;
export const ImgSectionP1 = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  text-transform: uppercase;
  color: #ffffff;
  position: relative;
  top: -78px;
  margin: 0 15px;
`;

export const SlideButton = styled.button`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    position: relative;
    top: 85px;
    left: 45px;
  }
`;
export const SlideButtonNext = styled.button`
  @media (max-width: 800px) {
    width: 30px;
    height: 30px;
    background: none;
    border: none;
    position: relative;
    top: 85px;
    right: 45px;
  }
`;
export const BtnNext = styled.div`
  @media (max-width: 800px) {
    display: flex;
    justify-content: end;
  }
`;
export const WriteDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: #121212;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.45);
  border-radius: 5px;
`;
export const WriteDivOne = styled.div`
  width: 91.7%;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
export const WriteInput = styled.input`
  width: 100%;
  outline: none;
  background: none;
  border: none;
`;
export const ImgDiv = styled.div`
  display: flex;
  gap: 15px;
`;

//Pagination
export const PagDiv = styled.div`
  display: flex;
  justify-content: center;
  button {
    color: white;
    background-color: black;
    border-radius: 3px;
  }
  nav {
    display: flex;
    justify-content: center;
  }
`;
export const TextDiv = styled.div`
  background: #202020;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
export const Img = styled.img`
  width: 100%;
`;
export const TextH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
export const TextPageP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #d2d2d2;
`;
export const TextPagePTwo = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
export const TextDivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const EndDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const LinkM = styled.div`
  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    color: #107eff;
  }
`;

//Pages
//AmoutMe
export const AboutWidth = styled.div`
  width: 91.7%;
  margin: 50px auto;
`;
export const AboutDiv = styled.div`
  display: flex;
  gap: 50px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const AboutP = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: white;
`;
export const AboutH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 21px;
  color: #ffffff;
`;
export const AboutA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #107eff;
`;

//Pages
//TextPage
export const TextPageSection = styled.section`
  width: 85%;
  margin: 50px auto;
  background: #202020;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
export const TextPageDiv = styled.div`
  width: 91.7%;
  margin: 19px auto;
  padding: 15px 0;
`;
export const TextpageWidth = styled.div`
  width: 91.7%;
  margin: auto;
`;
export const TextPageDivOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 91.7%;
  margin: auto;
`;
export const TextPageDivTwo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #828282;
`;
export const TextPageA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  opacity: 0.6;
`;

export const TextPageH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
`;
export const TextPageDivThree = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const TextPagePFour = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
export const TextPagePThree = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
export const ReadWidthDiv = styled.div`
  width: 91.7%;
  margin: auto;
`;
export const ReadDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ReadH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export const ReadA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #f3eba2;
`;
export const ReadP = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
export const ComMainDiv = styled.div`
  width: 91.7%;
  margin: auto;
  nav {
    display: flex;
    justify-content: center;
    margin: 15px;
  }
`;

export const ComH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export const ComInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.2);
`;
export const Solid = styled.div`
  border: 1px solid #3f3f3f;
`;
export const ComBtn = styled.button`
  background: #3137c9;
  box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  border: none;
  padding: 7px 15px;
  margin: 15px 0 30px 0;
`;
export const ComDivOne = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export const ComH2One = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
export const ComPOne = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #757575;
`;
export const ComDivTwo = styled.div`
  padding: 0 0 0 27px;
`;
export const ComPTwo = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
export const ComBtnOne = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #107eff;
  border: none;
  background: none;
`;
//Pages
//Works
export const WorksSection = styled.section`
  width: 85%;
  margin: 50px auto;
`;
export const IndexDiv = styled.div`
  width: 91.7%;
  margin: 19px auto;
  padding: 15px 0;
`;
export const WorksH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: #ffffff;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
export const ImgWidth = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const WorksDiv = styled.div`
  display: flex;
  background: #202020;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
  margin-top: 30px;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const WorksText = styled.div`
  width: 36%;
  margin: 13px auto;
`;
export const WorksH = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
export const WorksP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 27px;
  color: #d2d2d2;
`;
export const WorksDivBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }
`;
export const WorksButtonOne = styled.button`
  background: #ea8c1e;
  border-radius: 3px;
  border: none;
  color: white;
  padding: 5px;
`;
export const WorksA = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 150px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
export const WorksEndA = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 150px;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;
export const WorksATwo = styled.a`
  background: #3137c9;
  box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3);
  border-radius: 5px;
  border: none;
  padding: 10px;
  color: white;
  text-decoration: none;
`;
//Pages
//SearchResult
export const SearchSection = styled.section`
  width: 85%;
  margin: 50px auto;
`;
export const SearchWidthDiv = styled.div`
  width: 91.7%;
  margin: 19px auto;
  padding: 15px 0;
`;
export const SearchResultH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: #ffffff;
`;
export const SearchP = styled.p`
  color: #ffffff;
`;
export const TextEndDiv = styled.div`
  background: #202020;
  box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.35);
  border-radius: 5px;
`;
export const TextEndP1 = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #d2d2d2;
`;
export const TextEndDivOne = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;
export const TextEndP2 = styled.p`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #828282;
`;
export const TextA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #107eff;
  background: none;
  border: none;
`;
//Pages
//Profile
export const ProfileWidth = styled.div`
  width: 85.7%;
  margin: 50px auto;
`;
export const ProfileH2 = styled.h2`
  margin-bottom: 50px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: #ffffff;
`;
export const ProfilDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ProfilDivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 56.7%;
`;
export const ProfilForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ProfilFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProfilInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid #3f3f3f;
`;
export const ProfilButton = styled.button`
  color: white;
  background: #3137c9;
  box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3);
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
`;
export const ProfileImgDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ProfileA = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
  color: #107eff;
`;
//Pages
//Auth
export const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;
export const AuthH2 = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 21px;
  color: #ffffff;
`;
export const AuthDivInput = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AuthInput = styled.input`
  border: none;
  outline: none;
  background: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid #3f3f3f;
  margin-bottom: 32px;
`;
export const AuthButton = styled.button`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  background: #3137c9;
  box-shadow: 0px 4px 15px -7px rgba(48, 55, 201, 0.3);
  border-radius: 5px;
  padding: 7px 15px;
  border: none;
`;
export const AuthA = styled.a`
  margin-top: 25px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;
//Error404
export const Err404 = styled.div`
  grid-column: 2;
`;

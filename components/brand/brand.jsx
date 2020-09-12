import logo from "../../assets/logo-min.png";
import { BrandWrapper, CompanyName, Image} from './brand.styles';

const Brand = () => {
  return (
    <BrandWrapper>
      <Image src={logo} alt="Company Logo" />
      <CompanyName>Omnibus Interactive</CompanyName>
    </BrandWrapper>
  );
};

export default Brand;

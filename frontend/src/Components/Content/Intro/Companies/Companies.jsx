import React from "react";
import css from "./Companies.module.css";
import Company from "./Company/Company";
import Company1 from "../../../../Images/company_1.svg";
import Company2 from "../../../../Images/company_2.svg";
import Company3 from "../../../../Images/company_3.svg";
import Company4 from "../../../../Images/company_4.svg";
import Company5 from "../../../../Images/company_5.svg";
import Company6 from "../../../../Images/company_6.svg";
import Company7 from "../../../../Images/company_7.svg";
import Company8 from "../../../../Images/company_8.svg";

const Companies = () => {
  return (
    <div className={css.intro_companies}>
      <Company company={Company1} />
      <Company company={Company2} />
      <Company company={Company3} />
      <Company company={Company4} />
      <Company company={Company5} />
      <Company company={Company6} />
      <Company company={Company7} />
      <Company company={Company8} />
    </div>
  );
};

export default Companies;

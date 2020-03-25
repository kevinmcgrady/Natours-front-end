import React from "react";
import { Card } from "../atomic/molecules/card.component";
import { Page } from "../atomic/atoms/page.component";
import { CardContainer } from "../atomic/atoms/card-container.component";

const Homepage: React.FC<{}> = () => {
  return (
    <Page>
      <CardContainer>
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card />
        ))}
      </CardContainer>
    </Page>
  );
};

export default Homepage;

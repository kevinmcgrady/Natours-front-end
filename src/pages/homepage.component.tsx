import React from "react";
import { Card } from "../atomic/molecules/cards/card/card.component";
import { Page } from "../atomic/atoms/page/page.component";
import { CardContainer } from "../atomic/molecules/cards/card-container/card-container.component";

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

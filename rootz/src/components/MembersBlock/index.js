import React from "react";
import {IconArea} from "./styles";
export default function MembersBlock() {
  return (
      <IconArea>
          <div className="item-stack-top">
              <img src={require('../img/Сard.svg').default}
                   alt="card"/>
          </div>
          <div className="item-stack-bottom">
              <img src={require('../img/Parrot.svg').default} alt="Parrot"/>
          </div>
      </IconArea>
  );
}


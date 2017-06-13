import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length)
}

export default (props) => {
  return(
    <div>
      <Sparklines data={props.data} height={125} className="charts" >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div className="textCenter">
        {average(props.data)} {props.units}
      </div>
    </div>
  );
}

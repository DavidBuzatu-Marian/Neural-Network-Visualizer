import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { getPlot } from '../../actions/plot';

const Landing = ({ plot, getPlot }) => {
  useEffect(() => {
    getPlot();
  }, []);

  const [plotState, setPlotState] = useState({
    element: null,
  });

  const { element } = plotState;

  useEffect(() => {
    if (plot) {
      setPlotState({
        ...plotState,
        element: new DOMParser().parseFromString(plot, 'text/html'),
      });
    }
  }, [plot]);

  useEffect(() => {
    if (element) {
      document
        .getElementsByTagName('head')[0]
        .appendChild(element.body.childNodes[2]);
    }
  }, [element]);

  return (
    <Fragment>
      Hello
      <div
        dangerouslySetInnerHTML={{
          __html: element !== null && element.body.childNodes[0].innetHTML,
        }}
      ></div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  plot: state.plot.plot,
});

export default connect(mapStateToProps, { getPlot })(Landing);

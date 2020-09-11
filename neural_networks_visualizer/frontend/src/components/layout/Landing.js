import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getPlot } from '../../actions/plot';

const Landing = ({ plot, getPlot }) => {
  useEffect(() => {
    getPlot();
  }, []);

  useEffect(() => {
    if (plot) {
      let re = /<script>(.*?)<\/script>/g;
      let res = re.exec('<script>test</script>');
      console.log(res);
    }
  }, [plot]);
  return (
    <Fragment>
      Hello
      {plot !== null && <div className='test-plot'></div>}
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  plot: state.plot.plot,
});

export default connect(mapStateToProps, { getPlot })(Landing);

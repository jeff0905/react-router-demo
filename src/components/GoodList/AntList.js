import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';

const mapStateToProps = (state) => ({
    list: state.goods
})
const mapDispatchToProps = ({ dispatch }) => ({
  getData: () => {
    console.log('getData');
    return dispatch({type: 'FETCH_GOODS'}) 
  }
});

const AntList = (props) => {
  const { list = [] } = props;
  return (
    <div className="goodDetail">
      商品列表.
      <Grid data={list}
        columnNum={3}
        renderItem={dataItem => (
          <div style={{ padding: '12.5px' }}>
            <img src={dataItem.icon} style={{ width: '75px', height: '75px' }} alt="" />
            <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
              <span>{dataItem.name}</span>
            </div>
          </div>
        )}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AntList);

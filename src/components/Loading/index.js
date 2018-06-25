import React from 'react';

const Loading = (props) => {
  const { isLoading = false } = props;
  return (
    isLoading
    &&
    <div>
      加载中...
    </div>
  )
}
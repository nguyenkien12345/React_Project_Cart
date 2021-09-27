import PropTypes from "prop-types";
import React from 'react';
import { useSelector } from "react-redux";
import Message from '../../components/Message/Message';

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired,
};


function MessageContainer(props) {

  const message = useSelector((state) => state.message);

  return (
    <div>
      <Message message={message}/>
    </div>
  );
}

export default MessageContainer;